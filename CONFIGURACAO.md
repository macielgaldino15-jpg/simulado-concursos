# Configuração do acesso pago (Kiwify + Supabase + Render)

O site agora só abre para quem comprou. Como funciona:

1. A pessoa compra na Kiwify.
2. A Kiwify avisa o servidor (webhook) e o e-mail da compra é liberado.
3. Na tela de login, em **Primeiro acesso**, a pessoa informa o e-mail e o CPF da compra (ou o número do pedido) e cria a senha.
4. Cada conta fica conectada em **um aparelho por vez**. Entrar em outro aparelho encerra a sessão anterior.
5. Reembolso ou chargeback bloqueiam o acesso automaticamente.

Os arquivos de questões e o `index.html` só são entregues para quem está logado.

---

## 1. Supabase (onde ficam os compradores)

1. Crie uma conta gratuita em <https://supabase.com> e um projeto novo (região: São Paulo).
2. Abra **SQL Editor > New query**, cole o conteúdo do arquivo `supabase.sql` deste repositório e clique em **Run**.
3. Em **Project Settings > API** (ou **API Keys**), copie:
   - a **Project URL** (ex.: `https://abcd1234.supabase.co`);
   - a chave **secreta** (`service_role` ou `sb_secret_...`). **Nunca** coloque essa chave no código nem a mande para ninguém.

## 2. Render (variáveis de ambiente)

No serviço do site, abra **Environment** e adicione:

| Variável | Valor |
|---|---|
| `SUPABASE_URL` | Project URL do Supabase |
| `SUPABASE_SERVICE_KEY` | chave secreta do Supabase |
| `KIWIFY_WEBHOOK_TOKEN` | token do webhook da Kiwify (passo 3) |
| `ADMIN_TOKEN` | uma senha longa só sua, para a página `/admin` |
| `KIWIFY_PRODUTO_ID` | *(opcional)* ID do produto, se você vender mais de um produto na Kiwify |

Comandos do serviço: **Build** `npm install` · **Start** `node server.js`.
Depois de salvar, o Render publica de novo. Nos logs deve aparecer `Armazenamento: Supabase`.

> Sem `SUPABASE_URL`, o servidor guarda os dados num arquivo local, que **o Render apaga a cada nova publicação**. Por isso o Supabase é obrigatório em produção.

## 3. Kiwify (aviso de compras)

1. No painel da Kiwify, vá em **Apps > Webhooks** e crie um webhook.
2. URL: `https://SEU-SITE.onrender.com/webhook/kiwify`
3. Eventos: **Compra aprovada**, **Compra reembolsada** e **Chargeback**.
4. Copie o **token** gerado e coloque em `KIWIFY_WEBHOOK_TOKEN` no Render.
5. Use **Testar webhook** e confira em `/admin` se o comprador de teste apareceu.

Na página do produto ou no e-mail pós-compra da Kiwify, coloque uma mensagem como:

> Acesse **https://SEU-SITE.onrender.com/entrar**, clique em **Primeiro acesso** e crie sua senha com o e-mail e o CPF usados na compra. A conta é pessoal: ao entrar em outro aparelho, a sessão anterior é encerrada.

## 4. Página de administração

Acesse `https://SEU-SITE.onrender.com/admin` e use o `ADMIN_TOKEN`. Nela você pode:

- ver compradores e o último login;
- liberar acesso manual (cortesia, teste, venda fora da Kiwify);
- bloquear e desbloquear contas;
- encerrar a sessão de alguém.

## Observações

- O plano gratuito do Render "dorme" após um tempo sem uso; o primeiro acesso depois disso demora alguns segundos.
- Para adicionar questões, continue editando os arquivos `questoes_*.js` normalmente.
- Para cadastrar um concurso novo, inclua o arquivo em `index.html` (`<script src="questoes_XXX.js">`) **e** o nome do arquivo na lista `PROTEGIDOS` do `server.js`.
