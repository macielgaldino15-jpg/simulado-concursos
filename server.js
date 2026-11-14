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
const MAX_DEPOIMENTOS_SITE = 30; // quantos depoimentos aprovados a página de apresentação mostra

// Páginas e arquivos que só quem está logado pode baixar
const PROTEGIDOS = new Set(['index.html', 'questoesDB.js', 'questoes_PRF.js', 'questoes_PRF_ADM.js', 'questoes_PC.js', 'questoes_PM.js', 'questoes_PETROBRAS.js']);
const PUBLICOS = {
  '/entrar': 'publico/entrar.html', '/admin': 'publico/admin.html', '/bem-vindo': 'publico/bem-vindo.html',
  '/termos': 'publico/termos.html', '/privacidade': 'publico/privacidade.html', '/rodape.js': 'publico/rodape.js',
  '/conheca': 'publico/inicio.html', '/gratis': 'publico/gratis.html',
};

// ======================= ARMAZENAMENTO =======================
// Tabela "usuarios": email, nome, cpf, pedido, status ('ativo' | 'bloqueado'),
// senha_hash, sessao_hash, sessao_em, criado_em, atualizado_em
// Tabela "depoimentos" (uma linha por aluno, chave: email): nota, texto, nome, cidade, concurso,
// autoriza, autorizado_em, aprovado, aprovado_em, criado_em, atualizado_em
// (linha com nota nula = o aluno fechou o card sem responder; serve só para não perguntar de novo)
const armazenamento = SUPABASE_URL && SUPABASE_KEY ? criarSupabase() : criarArquivoLocal();

function criarSupabase() {
  const base = `${SUPABASE_URL}/rest/v1/usuarios`;
  const baseDep = `${SUPABASE_URL}/rest/v1/depoimentos`;
  const baseInd = `${SUPABASE_URL}/rest/v1/indicacoes`;
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
    depoimentos: {
      async buscar(email) { return (await req(`${baseDep}?email=eq.${encodeURIComponent(email)}&select=*`))[0] || null; },
      async salvar(d) {
        const linhas = await req(baseDep, { method: 'POST', headers: { Prefer: 'resolution=merge-duplicates,return=representation' }, body: JSON.stringify({ ...d, atualizado_em: new Date().toISOString() }) });
        return linhas[0];
      },
      async atualizar(email, campos) {
        const linhas = await req(`${baseDep}?email=eq.${encodeURIComponent(email)}`, { method: 'PATCH', headers: { Prefer: 'return=representation' }, body: JSON.stringify({ ...campos, atualizado_em: new Date().toISOString() }) });
        return linhas[0] || null;
      },
      async listar() { return req(`${baseDep}?nota=not.is.null&select=*&order=criado_em.desc&limit=1000`); },
      async aprovados() { return req(`${baseDep}?aprovado=is.true&autoriza=is.true&select=nome,cidade,concurso,texto,criado_em&order=aprovado_em.desc&limit=${MAX_DEPOIMENTOS_SITE}`); },
    },
    indicacoes: {
      async registrar(ref, tipo, ip_hash) {
        await req(baseInd, { method: 'POST', headers: { Prefer: 'resolution=ignore-duplicates,return=minimal' }, body: JSON.stringify({ ref, tipo, ip_hash }) });
      },
      async listar(ref) { return req(`${baseInd}?ref=eq.${encodeURIComponent(ref)}&select=tipo,ip_hash&limit=200`); },
    },
  };
}

function criarArquivoLocal() {
  const arq = path.join(RAIZ, '.dados-locais.json');
  const ler = () => { try { return JSON.parse(fs.readFileSync(arq, 'utf8')); } catch { return {}; } };
  const gravar = d => fs.writeFileSync(arq, JSON.stringify(d, null, 2));
  // Depoimentos ficam em outro arquivo local (também fora do Git), para não misturar com os usuários
  const arqDep = path.join(RAIZ, '.depoimentos-locais.json');
  const lerDep = () => { try { return JSON.parse(fs.readFileSync(arqDep, 'utf8')); } catch { return {}; } };
  const gravarDep = d => fs.writeFileSync(arqDep, JSON.stringify(d, null, 2));
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
    depoimentos: {
      async buscar(email) { return lerDep()[email] || null; },
      async salvar(d) {
        const t = lerDep(); const agora = new Date().toISOString();
        t[d.email] = { criado_em: agora, autoriza: false, aprovado: false, ...(t[d.email] || {}), ...d, atualizado_em: agora };
        gravarDep(t); return t[d.email];
      },
      async atualizar(email, campos) {
        const t = lerDep(); if (!t[email]) return null;
        t[email] = { ...t[email], ...campos, atualizado_em: new Date().toISOString() }; gravarDep(t); return t[email];
      },
      async listar() {
        return Object.values(lerDep()).filter(d => d.nota != null).sort((a, b) => String(b.criado_em).localeCompare(String(a.criado_em)));
      },
      async aprovados() {
        return Object.values(lerDep()).filter(d => d.aprovado && d.autoriza)
          .sort((a, b) => String(b.aprovado_em).localeCompare(String(a.aprovado_em))).slice(0, MAX_DEPOIMENTOS_SITE)
          .map(({ nome, cidade, concurso, texto, criado_em }) => ({ nome, cidade, concurso, texto, criado_em }));
      },
    },
    indicacoes: {
      async registrar(ref, tipo, ip_hash) {
        const arqInd = path.join(RAIZ, '.indicacoes-locais.json');
        let l = []; try { l = JSON.parse(fs.readFileSync(arqInd, 'utf8')); } catch {}
        if (!l.some(x => x.ref === ref && x.tipo === tipo && x.ip_hash === ip_hash)) { l.push({ ref, tipo, ip_hash, criado_em: new Date().toISOString() }); fs.writeFileSync(arqInd, JSON.stringify(l, null, 2)); }
      },
      async listar(ref) {
        try { return JSON.parse(fs.readFileSync(path.join(RAIZ, '.indicacoes-locais.json'), 'utf8')).filter(x => x.ref === ref); } catch { return []; }
      },
    },
  };
}

// ======================= SEGURANÇA =======================
const normEmail = e => String(e || '').trim().toLowerCase();
const soDigitos = s => String(s || '').replace(/\D/g, '');
const sha256 = s => crypto.createHash('sha256').update(s).digest('hex');
const novoToken = () => crypto.randomBytes(32).toString('base64url');
const hashIp = ip => sha256('indicacao:' + ip).slice(0, 32); // guarda só um resumo do IP, nunca o IP

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

// ======================= FEEDBACK E DEPOIMENTOS =======================
// Limpa um texto digitado pelo aluno: sem caracteres de controle, espaços repetidos e com tamanho máximo
function limpar(valor, max) {
  return String(valor ?? '').replace(/[\u0000-\u001f\u007f]+/g, ' ').replace(/\s+/g, ' ').trim().slice(0, max);
}
// Só o primeiro nome vai para o site (LGPD): "maria clara souza" vira "Maria"
function primeiroNome(valor) {
  const p = limpar(valor, 80).split(' ')[0].slice(0, 30);
  return p ? p[0].toLocaleUpperCase('pt-BR') + p.slice(1) : '';
}
// Data e hora em que o aluno enviou a opinião, no horário do Acre (aparecem no card da página de apresentação)
function dataHora(iso) {
  const d = new Date(iso);
  if (!iso || isNaN(d)) return {};
  const fuso = { timeZone: 'America/Rio_Branco' };
  return {
    data: d.toLocaleDateString('pt-BR', { ...fuso, day: '2-digit', month: '2-digit', year: 'numeric' }),
    hora: d.toLocaleTimeString('pt-BR', { ...fuso, hour: '2-digit', minute: '2-digit', hour12: false }),
  };
}
// Lista pública (aprovados) fica 1 minuto em memória para não consultar o banco a cada visita
let cacheAprovados = { em: 0, lista: [] };
async function depoimentosAprovados() {
  if (Date.now() - cacheAprovados.em < 60000) return cacheAprovados.lista;
  try {
    const lista = (await armazenamento.depoimentos.aprovados())
      .map(d => ({ nome: d.nome || '', cidade: d.cidade || '', concurso: d.concurso || '', texto: d.texto || '', ...dataHora(d.criado_em) }))
      .filter(d => d.nome && d.texto);
    cacheAprovados = { em: Date.now(), lista };
  } catch (erro) {
    // Ex.: tabela ainda não criada no Supabase — a página de apresentação segue funcionando sem a seção
    console.error('[depoimentos]', erro.message);
    cacheAprovados = { em: Date.now(), lista: [] };
  }
  return cacheAprovados.lista;
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

  // ---------- Simulado grátis: indicação de amigos ----------
  // Cada visitante tem um código. Quando um amigo abre o link com esse código, em outra conexão (IP diferente
  // do dono do link), conta uma indicação. Cada indicação libera mais 10 questões grátis (no máximo 2).
  if (rota === '/api/gratis/visita' && metodo === 'POST') {
    const ip = ipDe(req), chave = 'gratisvis:' + ip;
    if (excedeu(chave, 30)) return json(res, 429, { erro: 'Muitas tentativas.' });
    registrarFalha(chave);
    const { ref } = await lerJson(req);
    if (!/^[a-z0-9]{10}$/.test(String(ref || ''))) return json(res, 400, { erro: 'Código inválido.' });
    try { await armazenamento.indicacoes.registrar(ref, 'visita', hashIp(ip)); return json(res, 200, { ok: true }); }
    catch (e) { console.error('indicacao/visita', e.message); return json(res, 503, { erro: 'Indisponível agora.' }); }
  }
  if (rota === '/api/gratis/indicacoes' && metodo === 'GET') {
    const ref = String(url.searchParams.get('ref') || '');
    if (!/^[a-z0-9]{10}$/.test(ref)) return json(res, 400, { erro: 'Código inválido.' });
    try {
      await armazenamento.indicacoes.registrar(ref, 'dono', hashIp(ipDe(req)));
      const linhas = await armazenamento.indicacoes.listar(ref);
      const donos = new Set(linhas.filter(l => l.tipo === 'dono').map(l => l.ip_hash));
      const amigos = new Set(linhas.filter(l => l.tipo === 'visita' && !donos.has(l.ip_hash)).map(l => l.ip_hash)).size;
      return json(res, 200, { amigos, liberadas: Math.min(2, amigos) });
    } catch (e) { console.error('indicacao/listar', e.message); return json(res, 503, { erro: 'Indisponível agora.' }); }
  }

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

  // ---------- Depoimentos aprovados (público: só primeiro nome, cidade, concurso, texto e data/hora do envio) ----------
  if (metodo === 'GET' && rota === '/api/depoimentos') return json(res, 200, { depoimentos: await depoimentosAprovados() });

  // ---------- Feedback do aluno (uma vez por conta) ----------
  if (rota === '/api/feedback' || rota === '/api/feedback/dispensar') {
    const u = await usuarioDaSessao(req);
    if (!u) return json(res, 401, { erro: 'Sessão encerrada' });
    let atual;
    try { atual = await armazenamento.depoimentos.buscar(u.email); }
    catch (erro) {
      // Tabela ainda não criada: não mostra o card nem quebra a tela de resultado
      console.error('[feedback]', erro.message);
      return metodo === 'GET' ? json(res, 200, { pendente: false }) : json(res, 503, { erro: 'Não foi possível salvar agora. Tente mais tarde.' });
    }
    // Pendente = nunca respondeu nem fechou o card
    if (metodo === 'GET' && rota === '/api/feedback') return json(res, 200, { pendente: !atual, nome: primeiroNome(u.nome) });
    if (metodo === 'POST' && rota === '/api/feedback/dispensar') {
      if (!atual) await armazenamento.depoimentos.salvar({ email: u.email });
      return json(res, 200, { ok: true });
    }
    if (metodo === 'POST' && rota === '/api/feedback') {
      if (atual && atual.nota != null) return json(res, 409, { erro: 'Você já enviou sua opinião. Obrigado!' });
      const c = await lerJson(req);
      const nota = Number(c.nota);
      if (!Number.isInteger(nota) || nota < 1 || nota > 5) return json(res, 400, { erro: 'Escolha uma nota de 1 a 5.' });
      const texto = limpar(c.texto, 400), nome = primeiroNome(c.nome), cidade = limpar(c.cidade, 60), concurso = limpar(c.concurso, 120);
      const autoriza = c.autoriza === true;
      if (autoriza && (!texto || !nome || !cidade)) return json(res, 400, { erro: 'Para autorizar a publicação, preencha o comentário, o primeiro nome e a cidade.' });
      const agora = new Date().toISOString();
      await armazenamento.depoimentos.salvar({ email: u.email, nota, texto, nome, cidade, concurso, autoriza, autorizado_em: autoriza ? agora : null, aprovado: false, aprovado_em: null });
      return json(res, 200, { ok: true });
    }
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
    if (metodo === 'GET' && rota === '/api/admin/depoimentos') return json(res, 200, { depoimentos: await armazenamento.depoimentos.listar() });
    if (metodo === 'POST' && rota === '/api/admin/depoimentos/aprovar') {
      const { email, aprovado } = await lerJson(req);
      const d = await armazenamento.depoimentos.buscar(normEmail(email));
      if (!d || d.nota == null) return json(res, 404, { erro: 'Resposta não encontrada.' });
      // LGPD: só vai para o site quem marcou a autorização (e escreveu algo para publicar)
      if (aprovado === true && !d.autoriza) return json(res, 400, { erro: 'Este aluno não autorizou a publicação.' });
      if (aprovado === true && (!d.texto || !d.nome)) return json(res, 400, { erro: 'Resposta sem comentário ou sem nome não pode ser publicada.' });
      await armazenamento.depoimentos.atualizar(d.email, { aprovado: aprovado === true, aprovado_em: aprovado === true ? new Date().toISOString() : null });
      cacheAprovados.em = 0;
      return json(res, 200, { ok: true });
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
