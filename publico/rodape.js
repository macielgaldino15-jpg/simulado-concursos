// ============================================================
// DADOS DA EMPRESA — edite aqui e o site inteiro é atualizado
// (rodapé de todas as páginas, Termos de Uso e Política de Privacidade)
// ============================================================
var EMPRESA = {
    nome: 'MG Tecnologia Educacional',
    produto: 'Simulados Concursos',
    responsavel: 'Maciel Galdino de Sousa',
    cidade: 'Rio Branco/AC',
    email: '',        // ex.: 'suporte@mgtecnologia.com.br' — enquanto vazio, o contato é pela Kiwify
    cnpj: '',         // ex.: '12.345.678/0001-90' — aparece no rodapé quando preenchido
    instagram: '',    // ex.: 'simuladosconcursos' (sem @)
    linkCompra: 'https://pay.kiwify.com.br/7PTgs9c',   // link do checkout da Kiwify (ex.: 'https://pay.kiwify.com.br/XXXXXXX') — usado nos botões da página de apresentação
    whatsapp: '5568992147097',     // só números, com DDD e 55 na frente (ex.: '5568999999999') — botão "Fale comigo" e pedido de opinião
    // Depoimentos REAIS de alunos, com autorização. A seção só aparece quando houver pelo menos um.
    // Exemplo: { nome: 'Karoline', cidade: 'Rio Branco/AC', concurso: 'PRF', texto: 'O que a pessoa escreveu, do jeito que ela escreveu.' },
    // "cidade" e "concurso" são opcionais. Só inclua o que a pessoa autorizou mostrar.
    // "data" e "hora" são as REAIS da mensagem que a pessoa mandou (aparecem no card, que tem formato de conversa).
    depoimentos: [
        // Autorizados pelo WhatsApp em 09/11/2026 (primeiro nome e cidade)
        { nome: 'Suely', cidade: 'Rio Branco/AC', texto: 'Gostei muito e com certeza vou querer muitos.', data: '09/11/2026', hora: '21:09' },
        { nome: 'Jose', cidade: 'Rio Branco/AC', texto: 'Muito bom. Gostei mesmo da plataforma de simulados', data: '09/11/2026', hora: '21:31' },
    ],
};

(function () {
    function contatoHTML(curto) {
        if (EMPRESA.email) return '<a href="mailto:' + EMPRESA.email + '" class="underline hover:text-slate-700 dark:hover:text-slate-200">' + EMPRESA.email + '</a>';
        if (EMPRESA.whatsapp) {
            var n = String(EMPRESA.whatsapp).replace(/\D/g, ''), loc = n.replace(/^55/, '');
            var vis = loc.length === 11 ? '(' + loc.slice(0, 2) + ') ' + loc.slice(2, 7) + '-' + loc.slice(7) : loc;
            return '<a href="https://wa.me/' + n + '" target="_blank" rel="noopener" class="underline hover:text-slate-700 dark:hover:text-slate-200">WhatsApp ' + vis + '</a>';
        }
        if (EMPRESA.instagram) return '<a href="https://instagram.com/' + EMPRESA.instagram + '" target="_blank" rel="noopener" class="underline hover:text-slate-700 dark:hover:text-slate-200">@' + EMPRESA.instagram + '</a>';
        return curto ? 'pela Kiwify, no e-mail de confirmação da compra' : 'pelo canal de suporte da Kiwify, disponível no e-mail de confirmação da compra';
    }

    function montarRodape() {
        var el = document.getElementById('rodape');
        if (el) {
            var ano = new Date().getFullYear();
            el.className = 'w-full mt-auto px-4 py-6 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500 dark:text-slate-400';
            el.innerHTML =
                '<p class="font-semibold text-slate-600 dark:text-slate-300">© ' + ano + ' ' + EMPRESA.nome + '. Todos os direitos reservados.</p>' +
                (EMPRESA.cnpj ? '<p class="mt-1">CNPJ ' + EMPRESA.cnpj + '</p>' : '') +
                '<p class="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1">' +
                    '<a href="/termos" class="underline hover:text-slate-700 dark:hover:text-slate-200">Termos de Uso</a>' +
                    '<a href="/privacidade" class="underline hover:text-slate-700 dark:hover:text-slate-200">Política de Privacidade</a>' +
                    '<span>Suporte: ' + contatoHTML(true) + '</span>' +
                '</p>' +
                '<p class="mt-2 opacity-80">As questões são de treino, elaboradas no estilo das bancas, e não são cópias de provas oficiais.</p>';
        }
        // Preenche os campos das páginas de Termos e Privacidade
        var campos = document.querySelectorAll('[data-empresa]');
        for (var i = 0; i < campos.length; i++) {
            var chave = campos[i].getAttribute('data-empresa');
            if (chave === 'contato') campos[i].innerHTML = contatoHTML(false);
            else if (EMPRESA[chave]) campos[i].textContent = EMPRESA[chave];
        }
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', montarRodape);
    else montarRodape();
})();
