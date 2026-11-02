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
