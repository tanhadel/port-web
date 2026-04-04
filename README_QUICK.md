# Portfolio Next.js med Sanity.io

Modern portfolio-webbplats byggd med Next.js 14+, TypeScript, Tailwind CSS och Sanity.io.

## 🚀 Kom igång

### 1. Installera dependencies
```bash
npm install
```

### 2. Konfigurera Sanity

Skapa `.env.local` i projektets rot:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=din_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

### 3. Skapa Sanity projekt

```bash
npx sanity init --env=.env.local
```

### 4. Starta utvecklingsservern

```bash
# Starta Next.js (port 3000)
npm run dev

# Starta Sanity Studio (port 3333)
npx sanity dev
```

## 📝 Lägg till innehåll

Öppna [http://localhost:3333](http://localhost:3333) för att lägga till:
- Profilinformation
- Portfolio-projekt
- Blogginlägg
- CV (erfarenhet & utbildning)
- Kompetenser

## 🎨 Funktioner

- ✅ Responsiv design
- ✅ Smooth scroll navigation
- ✅ Moderna animationer
- ✅ Bildhantering med Sanity
- ✅ Blog med rich text
- ✅ Portfolio-filter
- ✅ Kontaktformulär

## 📂 Projektstruktur

```
portfolio-nextjs/
├── app/              # Next.js App Router
├── components/       # React komponenter
├── lib/              # Sanity client & utilities
├── sanity/           # Sanity schemas
└── sanity.config.ts  # Sanity konfiguration
```

## 🚀 Deployment

### Vercel
```bash
vercel
```

### Sanity Studio
```bash
npx sanity deploy
```

Se [README_FULL.md](./README_FULL.md) för fullständig dokumentation.
