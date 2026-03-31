# Media Braza — Novo Site

Site institucional da **Media Braza / We Braza Group** construído com Next.js 14, Supabase (Postgres) e GSAP.

---

## Stack

| Camada | Tecnologia |
|--------|------------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Animações | GSAP + ScrollTrigger |
| Database | Supabase (Postgres) |
| ORM | Drizzle ORM |
| Email | Nodemailer / Resend |
| Hosting | Vercel (região `lhr1` — London) |

---

## Setup — Passo a Passo

### 1. Instalar dependências
```bash
npm install
```

### 2. Configurar variáveis de ambiente
```bash
cp .env.example .env.local
```

Preencher com os valores do teu projecto Supabase:
- Entrar em [supabase.com](https://supabase.com) → o teu projecto
- **Settings → Database → Connection string → Transaction pooler** → copiar para `DATABASE_URL`
- **Settings → API** → copiar `URL` e as duas keys

### 3. Aplicar schema na base de dados
```bash
npm run db:push
```
Isto cria automaticamente todas as tabelas no Supabase.

### 4. Seed inicial (dados de exemplo)
```bash
npx tsx lib/seed.ts
```

### 5. Correr em desenvolvimento
```bash
npm run dev
```
Abrir [http://localhost:3000](http://localhost:3000)

---

## Deploy no Vercel

### 1. Push para GitHub
```bash
git init && git add . && git commit -m "init: novo site media braza"
git remote add origin https://github.com/SEU_USERNAME/webraza-site.git
git push -u origin main
```

### 2. Importar no Vercel
1. [vercel.com/new](https://vercel.com/new) → Import Git Repository
2. Seleccionar o repositório
3. **Environment Variables** → copiar tudo do `.env.example` com os valores reais
4. Deploy!

> Cada push para `main` faz deploy automático.

---

## Fontes necessárias

Colocar na pasta `public/fonts/`:
- `BebasNeue-Regular.ttf` — [Google Fonts](https://fonts.google.com/specimen/Bebas+Neue) (gratuito)
- `GeistMono-Regular.woff2` — [vercel.com/font](https://vercel.com/font/geist-mono) (gratuito)

---

## Estrutura de páginas

| Rota | Página |
|------|--------|
| `/` | Homepage completa |
| `/sobre` | Sobre a agência + equipa |
| `/servicos` | 6 serviços em detalhe |
| `/cases` | Portfólio de clientes |
| `/insights` | Blog / artigos |
| `/falar-com-a-equipe` | Página de contacto |

---

## API Routes

| Endpoint | Método | Descrição |
|----------|--------|-----------|
| `/api/contact` | POST | Recebe e guarda leads no Supabase |
| `/api/cases` | GET | Lista cases da base de dados |
| `/api/insights` | GET | Lista artigos publicados |

---

## Tabelas (Supabase)

Criadas automaticamente com `npm run db:push`:

| Tabela | O que guarda |
|--------|-------------|
| `contacts` | Leads do formulário de contacto |
| `cases` | Portfólio de clientes |
| `team` | Membros da equipa |
| `services` | Serviços oferecidos |
| `insights` | Artigos do blog |
| `testimonials` | Testemunhos de clientes |
| `newsletter` | Subscritores |

---

## Personalização de conteúdo

| Componente | O que editar |
|-----------|-------------|
| `components/sections/Services.tsx` | `servicesData` — nome, copy e stats |
| `components/sections/Cases.tsx` | `casesData` — cases e métricas |
| `components/sections/Team.tsx` | `teamData` — equipa |
| `components/sections/Testimonials.tsx` | `testimonialsData` — depoimentos |
| `components/layout/Footer.tsx` | Email, telefone, redes sociais |

---

Produzido por **We Braza Group** com Claude — Março 2026
