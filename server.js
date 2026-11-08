// Servidor do Simulados Concursos
// - Só quem comprou (e está logado) acessa o simulado e os arquivos de questões.
// - Cada conta tem UMA sessão ativa: entrar em outro aparelho encerra a sessão anterior.
// - A Kiwify avisa as compras pelo webhook; reembolso ou chargeback bloqueiam o acesso.
// Usa apenas módulos nativos do Node (versão 18 ou mais nova). Não precisa de "npm install".
//
// Variáveis de ambiente (configure no Render, em Environment):
//   SUPABASE_URL           URL do projeto Supabase (ex.: https://xxxx.supabase.co)
//   SUPABASE_SERVICE_KEY   chave secreta (service_role ou sb_secret_...) — nunca coloque no código
//   KIWIFY_WEBHOOK_TOKEN   token do webhook criado na Kiwify
//   KIWIFY_PRODUTO_ID      (opcional) só libera compras deste produto
//   ADMIN_TOKEN            senha da página /admin (use uma frase longa)
// Sem SUPABASE_URL, os dados ficam no arquivo .dados-locais.json (apenas para testes no computador).

const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const PORT = process.env.PORT || 3000;
const RAIZ = __dirname;
const SUPABASE_URL = (process.env.SUPABASE_URL || '').replace(/\/+$/, '');
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY || '';
const KIWIFY_TOKEN = process.env.KIWIFY_WEBHOOK_TOKEN || '';
const KIWIFY_PRODUTO = process.env.KIWIFY_PRODUTO_ID || '';
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || '';
const COOKIE_SEGURO = process.env.COOKIE_SECURE ? process.env.COOKIE_SECURE === '1' : !!process.env.RENDER;
const SESSAO_DIAS = 30;

// Páginas e arquivos que só quem está logado pode baixar
const PROTEGIDOS = new Set(['index.html', 'questoesDB.js', 'questoes_PRF.js', 'questoes_PRF_ADM.js', 'questoes_PC.js', 'questoes_PM.js', 'questoes_PETROBRAS.js']);
const PUBLICOS = {
  '/entrar': 'publico/entrar.html', '/admin': 'publico/admin.html', '/bem-vindo': 'publico/bem-vindo.html',
  '/termos': 'publico/termos.html', '/privacidade': 'publico/privacidade.html', '/rodape.js': 'publico/rodape.js',
  '/conheca': 'publico/inicio.html',
};

// ======================= ARMAZENAMENTO =======================
// Tabela "usuarios": email, nome, cpf, pedido, status ('ativo' | 'bloqueado'),
// senha_hash, sessao_hash, sessao_em, criado_em, atualizado_em
const armazenamento = SUPABASE_URL && SUPABASE_KEY ? criarSupabase() : criarArquivoLocal();

function criarSupabase() {
  const base = `${SUPABASE_URL}/rest/v1/usuarios`;
  const cab = { apikey: SUPABASE_KEY, 'Content-Type': 'application/json' };
  if (SUPABASE_KEY.startsWith('eyJ')) cab.Authorization = `Bearer ${SUPABASE_KEY}`; // chaves antigas (JWT)
  async function req(url, opcoes = {}) {
    const r = await fetch(url, { ...opcoes, headers: { ...cab, ...(opcoes.headers || {}) } });
    const texto = await r.text();
    if (!r.ok) throw new Error(`Supabase ${r.status}: ${texto.slice(0, 300)}`);
    return texto ? JSON.parse(texto) : null;
  }
  return {
    nome: 'Supabase',
    async buscar(email) { return (await req(`${base}?email=eq.${encodeURIComponent(email)}&select=*`))[0] || null; },
    async buscarPorSessao(h) { return (await req(`${base}?sessao_hash=eq.${encodeURIComponent(h)}&select=*`))[0] || null; },
    async salvar(u) {
      const agora = new Date().toISOString();
      const linhas = await req(base, { method: 'POST', headers: { Prefer: 'resolution=merge-duplicates,return=representation' }, body: JSON.stringify({ ...u, atualizado_em: agora }) });
      return linhas[0];
    },
    async atualizar(email, campos) {
      const linhas = await req(`${base}?email=eq.${encodeURIComponent(email)}`, { method: 'PATCH', headers: { Prefer: 'return=representation' }, body: JSON.stringify({ ...campos, atualizado_em: new Date().toISOString() }) });
      return linhas[0] || null;
    },
    async listar() { return req(`${base}?select=email,nome,status,pedido,criado_em,sessao_em&order=criado_em.desc&limit=1000`); },
  };
}

function criarArquivoLocal() {
  const arq = path.join(RAIZ, '.dados-locais.json');
  const ler = () => { try { return JSON.parse(fs.readFileSync(arq, 'utf8')); } catch { return {}; } };
  const gravar = d => fs.writeFileSync(arq, JSON.stringify(d, null, 2));
  return {
    nome: 'arquivo local (.dados-locais.json) — use somente para testes',
    async buscar(email) { return ler()[email] || null; },
    async buscarPorSessao(h) { return Object.values(ler()).find(u => u.sessao_hash === h) || null; },
    async salvar(u) {
      const d = ler(); const agora = new Date().toISOString();
      d[u.email] = { criado_em: agora, ...(d[u.email] || {}), ...u, atualizado_em: agora };
      gravar(d); return d[u.email];
    },
    async atualizar(email, campos) {
      const d = ler(); if (!d[email]) return null;
      d[email] = { ...d[email], ...campos, atualizado_em: new Date().toISOString() }; gravar(d); return d[email];
    },
    async listar() {
      return Object.values(ler()).sort((a, b) => String(b.criado_em).localeCompare(String(a.criado_em)))
        .map(({ email, nome, status, pedido, criado_em, sessao_em }) => ({ email, nome, status, pedido, criado_em, sessao_em }));
    },
  };
}

// ======================= SEGURANÇA =======================
const normEmail = e => String(e || '').trim().toLowerCase();
const soDigitos = s => String(s || '').replace(/\D/g, '');
const sha256 = s => crypto.createHash('sha256').update(s).digest('hex');
const novoToken = () => crypto.randomBytes(32).toString('base64url');

function iguais(a, b) {
  const x = Buffer.from(String(a)), y = Buffer.from(String(b));
  return x.length === y.length && crypto.timingSafeEqual(x, y);
}
function hashSenha(senha) {
  const sal = crypto.randomBytes(16).toString('hex');
  return `scrypt$${sal}$${crypto.scryptSync(senha, sal, 64).toString('hex')}`;
}
function confereSenha(senha, guardado) {
  if (!guardado || !guardado.startsWith('scrypt$')) return false;
  const [, sal, hash] = guardado.split('$');
  return iguais(crypto.scryptSync(String(senha), sal, 64).toString('hex'), hash);
}

// Limite de tentativas ERRADAS (por IP) para login, primeiro acesso e admin
const tentativas = new Map();
const JANELA = 15 * 60 * 1000;
function recentes(chave) { const agora = Date.now(); const l = (tentativas.get(chave) || []).filter(t => agora - t < JANELA); tentativas.set(chave, l); return l; }
function excedeu(chave, max = 10) { return recentes(chave).length >= max; }
function registrarFalha(chave) { recentes(chave).push(Date.now()); }
setInterval(() => { for (const k of [...tentativas.keys()]) if (!recentes(k).length) tentativas.delete(k); }, 10 * 60 * 1000).unref();

// ======================= HTTP: AUXILIARES =======================
function ipDe(req) { return String(req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').split(',')[0].trim(); }
function lerCookies(req) {
  const c = {};
  String(req.headers.cookie || '').split(';').forEach(p => { const i = p.indexOf('='); if (i > 0) c[p.slice(0, i).trim()] = decodeURIComponent(p.slice(i + 1).trim()); });
  return c;
}
function cookieSessao(valor, maxAge) {
  return `sessao=${valor}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${maxAge}${COOKIE_SEGURO ? '; Secure' : ''}`;
}
// Marca de "já é aluno" (1 ano): quem já entrou neste navegador vai direto para o login em vez da página de vendas
const UM_ANO = 365 * 24 * 60 * 60;
function cookieAluno() {
  return `aluno=1; Path=/; HttpOnly; SameSite=Lax; Max-Age=${UM_ANO}${COOKIE_SEGURO ? '; Secure' : ''}`;
}
function lerCorpo(req, limite = 1e6) {
  return new Promise((ok, falha) => {
    const partes = []; let tam = 0;
    req.on('data', p => { tam += p.length; if (tam > limite) { falha(new Error('corpo grande demais')); req.destroy(); } else partes.push(p); });
    req.on('end', () => ok(Buffer.concat(partes)));
    req.on('error', falha);
  });
}
async function lerJson(req) { try { return JSON.parse((await lerCorpo(req)).toString('utf8') || '{}'); } catch { return {}; } }
function json(res, status, dados, extras = {}) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', ...extras });
  res.end(JSON.stringify(dados));
}
function redirecionar(res, para) { res.writeHead(302, { Location: para, 'Cache-Control': 'no-store' }); res.end(); }
const TIPOS = { '.html': 'text/html; charset=utf-8', '.js': 'application/javascript; charset=utf-8' };
function enviarArquivo(res, relativo, privado) {
  const caminho = path.join(RAIZ, relativo);
  fs.readFile(caminho, (erro, dados) => {
    if (erro) return json(res, 404, { erro: 'Arquivo não encontrado' });
    res.writeHead(200, { 'Content-Type': TIPOS[path.extname(caminho)] || 'application/octet-stream', 'Cache-Control': privado ? 'private, no-store' : 'no-cache' });
    res.end(dados);
  });
}

async function usuarioDaSessao(req) {
  const token = lerCookies(req).sessao;
  if (!token) return null;
  const u = await armazenamento.buscarPorSessao(sha256(token));
  return u && u.status === 'ativo' ? u : null;
}
async function iniciarSessao(res, u, extras = {}) {
  const token = novoToken();
  // Grava o novo hash por cima do antigo: o aparelho anterior perde o acesso na hora
  await armazenamento.atualizar(u.email, { ...extras, sessao_hash: sha256(token), sessao_em: new Date().toISOString() });
  return cookieSessao(token, SESSAO_DIAS * 86400);
}
function adminAutorizado(req) {
  if (!ADMIN_TOKEN) return false;
  return iguais(sha256(String(req.headers['x-admin-token'] || '')), sha256(ADMIN_TOKEN));
}

// ======================= ROTAS =======================
async function rotear(req, res) {
  const url = new URL(req.url, 'http://local');
  const rota = decodeURIComponent(url.pathname);
  const metodo = req.method;

  // ---------- Páginas públicas ----------
  if (metodo === 'GET' && PUBLICOS[rota]) {
    if (rota === '/entrar' && await usuarioDaSessao(req)) return redirecionar(res, '/');
    return enviarArquivo(res, PUBLICOS[rota], false);
  }
  if (metodo === 'GET' && rota === '/saude') return json(res, 200, { ok: true });

  // ---------- Link curto da bio do Instagram ----------
  // Aluno (logado ou que já entrou neste navegador) vai para o simulado/login; visitante vai para a página de vendas, marcado como vindo da bio
  if (metodo === 'GET' && (rota === '/bio' || rota === '/bio/')) {
    if (lerCookies(req).aluno === '1' || await usuarioDaSessao(req)) return redirecionar(res, '/');
    return redirecionar(res, '/conheca?utm_source=instagram&utm_medium=bio&utm_campaign=bio');
  }

  // ---------- Simulado e bancos de questões (somente logado) ----------
  if (metodo === 'GET' && (rota === '/' || PROTEGIDOS.has(rota.slice(1)))) {
    const arquivo = rota === '/' ? 'index.html' : rota.slice(1);
    const u = await usuarioDaSessao(req);
    if (!u) {
      if (arquivo === 'index.html') {
        // Aluno que já entrou neste navegador vai direto para o login; visitante novo vê a página de apresentação
        if (lerCookies(req).aluno === '1') return redirecionar(res, '/entrar');
        return enviarArquivo(res, 'publico/inicio.html', true);
      }
      return json(res, 401, { erro: 'Faça login para acessar.' });
    }
    return enviarArquivo(res, arquivo, true);
  }

  // ---------- Login ----------
  if (metodo === 'POST' && rota === '/api/entrar') {
    const chave = 'login:' + ipDe(req);
    if (excedeu(chave)) return json(res, 429, { erro: 'Muitas tentativas erradas. Aguarde 15 minutos e tente de novo.' });
    const { email, senha } = await lerJson(req);
    const u = await armazenamento.buscar(normEmail(email));
    if (!u || !confereSenha(senha, u.senha_hash)) {
      registrarFalha(chave);
      if (u && u.status === 'ativo' && !u.senha_hash) return json(res, 401, { erro: 'Você ainda não criou sua senha. Use a opção "Primeiro acesso".' });
      return json(res, 401, { erro: 'E-mail ou senha incorretos.' });
    }
    if (u.status !== 'ativo') return json(res, 403, { erro: 'Seu acesso está bloqueado. Fale com o suporte.' });
    const cookie = await iniciarSessao(res, u);
    return json(res, 200, { ok: true }, { 'Set-Cookie': [cookie, cookieAluno()] });
  }

  // ---------- Primeiro acesso / esqueci a senha ----------
  if (metodo === 'POST' && rota === '/api/primeiro-acesso') {
    const chave = 'primeiro:' + ipDe(req);
    if (excedeu(chave)) return json(res, 429, { erro: 'Muitas tentativas erradas. Aguarde 15 minutos e tente de novo.' });
    const { email, verificacao, senha } = await lerJson(req);
    const u = await armazenamento.buscar(normEmail(email));
    const v = String(verificacao || '').trim();
    const confere = u && ((u.cpf && soDigitos(v) && iguais(soDigitos(v), soDigitos(u.cpf))) || (u.pedido && v && iguais(v.toLowerCase(), String(u.pedido).toLowerCase())));
    if (!confere) registrarFalha(chave);
    if (!confere) return json(res, 401, { erro: 'Não encontramos uma compra com esse e-mail e CPF (ou número do pedido). Confira os dados ou use o e-mail da compra.' });
    if (u.status !== 'ativo') return json(res, 403, { erro: 'Seu acesso está bloqueado. Fale com o suporte.' });
    if (String(senha || '').length < 8) return json(res, 400, { erro: 'A senha precisa ter pelo menos 8 caracteres.' });
    const cookie = await iniciarSessao(res, u, { senha_hash: hashSenha(String(senha)) });
    return json(res, 200, { ok: true }, { 'Set-Cookie': [cookie, cookieAluno()] });
  }

  // ---------- Sessão e saída ----------
  if (metodo === 'GET' && rota === '/api/sessao') {
    const u = await usuarioDaSessao(req);
    if (!u) return json(res, 401, { erro: 'Sessão encerrada' });
    return json(res, 200, { ok: true, nome: u.nome || '', email: u.email });
  }
  if (metodo === 'POST' && rota === '/api/sair') {
    const u = await usuarioDaSessao(req);
    if (u) await armazenamento.atualizar(u.email, { sessao_hash: null });
    return json(res, 200, { ok: true }, { 'Set-Cookie': cookieSessao('', 0) });
  }

  // ---------- Webhook da Kiwify ----------
  if (metodo === 'POST' && rota === '/webhook/kiwify') {
    if (!KIWIFY_TOKEN) return json(res, 503, { erro: 'KIWIFY_WEBHOOK_TOKEN não configurado' });
    const bruto = await lerCorpo(req);
    const esperado = crypto.createHmac('sha1', KIWIFY_TOKEN).update(bruto).digest('hex');
    if (!iguais(url.searchParams.get('signature') || '', esperado)) return json(res, 401, { erro: 'Assinatura inválida' });
    let dados; try { dados = JSON.parse(bruto.toString('utf8')); } catch { return json(res, 400, { erro: 'JSON inválido' }); }
    const cliente = dados.Customer || dados.customer || {};
    const produto = dados.Product || dados.product || {};
    const email = normEmail(cliente.email);
    const evento = dados.webhook_event_type || (dados.order_status === 'paid' ? 'order_approved' : dados.order_status);
    console.log(`[kiwify] evento=${evento} pedido=${dados.order_id} email=${email ? email.replace(/(.{2}).*@/, '$1***@') : '-'}`);
    if (KIWIFY_PRODUTO && String(produto.product_id || produto.id || '') !== KIWIFY_PRODUTO) return json(res, 200, { ok: true, ignorado: 'outro produto' });
    if (!email) return json(res, 200, { ok: true, ignorado: 'sem e-mail' });

    if (evento === 'order_approved') {
      const atual = await armazenamento.buscar(email);
      await armazenamento.salvar({
        email,
        nome: cliente.full_name || cliente.name || atual?.nome || '',
        cpf: soDigitos(cliente.CPF || cliente.cpf || cliente.document || cliente.cnpj) || atual?.cpf || null,
        pedido: String(dados.order_id || atual?.pedido || ''),
        status: 'ativo',
        ...(atual ? {} : { senha_hash: null, sessao_hash: null }),
      });
    } else if (['order_refunded', 'chargeback', 'refunded'].includes(evento)) {
      if (await armazenamento.buscar(email)) await armazenamento.atualizar(email, { status: 'bloqueado', sessao_hash: null });
    }
    return json(res, 200, { ok: true });
  }

  // ---------- Administração ----------
  if (rota.startsWith('/api/admin/')) {
    if (excedeu('admin:' + ipDe(req), 20)) return json(res, 429, { erro: 'Muitas tentativas erradas. Aguarde 15 minutos.' });
    if (!adminAutorizado(req)) {
      registrarFalha('admin:' + ipDe(req));
      return json(res, ADMIN_TOKEN ? 401 : 503, { erro: ADMIN_TOKEN ? 'Senha de administrador incorreta.' : 'ADMIN_TOKEN não configurado no servidor.' });
    }
    if (metodo === 'GET' && rota === '/api/admin/usuarios') return json(res, 200, { armazenamento: armazenamento.nome, usuarios: await armazenamento.listar() });
    if (metodo === 'POST' && rota === '/api/admin/usuarios') {
      const { email, nome, cpf } = await lerJson(req);
      const e = normEmail(email);
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e)) return json(res, 400, { erro: 'E-mail inválido.' });
      if (!soDigitos(cpf)) return json(res, 400, { erro: 'Informe o CPF (ou um código numérico) para o primeiro acesso.' });
      const atual = await armazenamento.buscar(e);
      await armazenamento.salvar({ email: e, nome: nome || atual?.nome || '', cpf: soDigitos(cpf), pedido: atual?.pedido || 'manual', status: 'ativo', ...(atual ? {} : { senha_hash: null, sessao_hash: null }) });
      return json(res, 200, { ok: true });
    }
    if (metodo === 'POST' && rota === '/api/admin/status') {
      const { email, status } = await lerJson(req);
      if (!['ativo', 'bloqueado'].includes(status)) return json(res, 400, { erro: 'Status inválido.' });
      const u = await armazenamento.atualizar(normEmail(email), { status, ...(status === 'bloqueado' ? { sessao_hash: null } : {}) });
      return u ? json(res, 200, { ok: true }) : json(res, 404, { erro: 'Usuário não encontrado.' });
    }
    if (metodo === 'POST' && rota === '/api/admin/derrubar-sessao') {
      const { email } = await lerJson(req);
      const u = await armazenamento.atualizar(normEmail(email), { sessao_hash: null });
      return u ? json(res, 200, { ok: true }) : json(res, 404, { erro: 'Usuário não encontrado.' });
    }
  }

  // Qualquer outra coisa (server.js, package.json etc.) não é servida
  return json(res, 404, { erro: 'Página não encontrada' });
}

const servidor = http.createServer(async (req, res) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Referrer-Policy', 'same-origin');
  try { await rotear(req, res); }
  catch (erro) {
    console.error('[erro]', erro);
    if (!res.headersSent) json(res, 500, { erro: 'Erro interno. Tente novamente em instantes.' });
  }
});

servidor.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT} 🚀`);
  console.log(`Armazenamento: ${armazenamento.nome}`);
  if (!KIWIFY_TOKEN) console.log('Aviso: KIWIFY_WEBHOOK_TOKEN não configurado — compras não serão registradas.');
  if (!ADMIN_TOKEN) console.log('Aviso: ADMIN_TOKEN não configurado — página /admin desativada.');
});
