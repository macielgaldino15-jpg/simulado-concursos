-- Tabela de compradores do Simulados Concursos.
-- Cole este conteúdo no Supabase em: SQL Editor > New query > Run.

create table if not exists public.usuarios (
    email         text primary key,
    nome          text,
    cpf           text,
    pedido        text,
    status        text not null default 'ativo' check (status in ('ativo', 'bloqueado')),
    senha_hash    text,
    sessao_hash   text,
    sessao_em     timestamptz,
    criado_em     timestamptz not null default now(),
    atualizado_em timestamptz not null default now()
);

create index if not exists usuarios_sessao_hash_idx on public.usuarios (sessao_hash);

-- Segurança: ninguém acessa a tabela pela internet com a chave pública.
-- Só o servidor (com a chave secreta) lê e grava.
alter table public.usuarios enable row level security;


-- ============================================================
-- Feedback e depoimentos dos alunos (uma linha por aluno).
-- Cole este trecho no Supabase em: SQL Editor > New query > Run.
-- Pode rodar o arquivo inteiro de novo sem medo: nada é apagado.
-- ============================================================
create table if not exists public.depoimentos (
    email         text primary key references public.usuarios (email) on delete cascade,
    nota          smallint check (nota between 1 and 5),   -- vazio = fechou o card sem responder
    texto         text,
    nome          text,            -- só o primeiro nome
    cidade        text,
    concurso      text,
    autoriza      boolean not null default false,   -- o aluno marcou "Autorizo publicar no site"
    autorizado_em timestamptz,                      -- quando autorizou (registro para a LGPD)
    aprovado      boolean not null default false,   -- você aprovou na página /admin
    aprovado_em   timestamptz,
    criado_em     timestamptz not null default now(),
    atualizado_em timestamptz not null default now(),
    -- Trava no próprio banco: sem autorização do aluno, não tem como aprovar
    constraint depoimentos_aprovado_exige_autorizacao check (not aprovado or autoriza)
);

create index if not exists depoimentos_aprovado_idx on public.depoimentos (aprovado_em desc) where aprovado;

-- Segurança: igual à tabela de usuários, só o servidor (com a chave secreta) lê e grava.
alter table public.depoimentos enable row level security;
