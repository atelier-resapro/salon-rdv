-- Rendez-vous des clients du salon.
create table public.rendez_vous (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references auth.users (id) on delete cascade,
  debut timestamptz not null,
  fin timestamptz not null,
  statut text not null default 'confirme'
);

alter table public.rendez_vous enable row level security;

create policy "Chaque client voit ses rendez-vous"
  on public.rendez_vous for select
  using (auth.uid() = client_id);

create policy "Chaque client crée ses rendez-vous"
  on public.rendez_vous for insert
  with check (auth.uid() = client_id);
