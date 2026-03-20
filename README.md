# zxy-template-web

Boilerplate Next.js para ventures de ZXY Ventures.

## Stack
- **Next.js 14** (App Router) + TypeScript
- **Supabase** (auth + DB)
- **Stripe** (pagos)
- **Tailwind CSS**
- **Vercel** para deploy

## Arrancar proyecto nuevo

```bash
# 1. Clonar template
git clone https://github.com/zxy-ventures/zxy-template-web zxy-[venture]-web
cd zxy-[venture]-web

# 2. Instalar dependencias
npm install

# 3. Variables de entorno
cp .env.example .env.local
# Llenar con valores reales

# 4. Dev
npm run dev
```

## Estructura

```
src/
├── app/              # App Router — páginas y layouts
│   └── api/          # API Routes (checkout, webhooks)
├── components/
│   └── ui/           # Componentes base reutilizables
├── lib/
│   ├── supabase.ts   # Cliente Supabase
│   ├── stripe.ts     # Cliente Stripe
│   └── utils.ts      # Helpers (cn, etc.)
└── styles/
    └── globals.css   # Tailwind imports
```

## Deploy

Conectar repo a Vercel — deploys automáticos en cada push a `main`.
Agregar env vars en Vercel Dashboard.
