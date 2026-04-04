# Portfolio - Patrick Template Design

Din portfolio har nu uppgraderats med en professionell design inspirerad av Patrick vCard-templatet!

## ✨ Nyimplementerade Funktioner

### 🎨 Design & Styling
- **Färgschema**: Gul/Orange primärfärg (#FFB400) med moderna gradienter
- **Ljust/Mörkt Tema**: Fullständig dark mode-support med smooth transitions
- **Responsiv Design**: Fungerar perfekt på alla enheter (desktop, tablet, mobil)
- **Moderna Animationer**: Fade-in, slide-up, scale, och hover-effekter

### 📱 Komponenter

#### Sidebar (Desktop & Mobile)
- **Desktop**: Vertikal sidebar med navigation och social media-länkar
- **Mobile**: Bottom navigation bar för enkel åtkomst
- **Auto-detection**: Automatisk highlighting av aktiv sektion vid scroll
- **Tooltips**: Hover-effekter med beskrivningar

#### Hero Section
- **Typing Animation**: Dynamisk text som skrivs ut bokstav för bokstav
- **Gradient Background**: Animated bakgrundselement
- **Profilbild**: Cirkulär design med gradient-border
- **CTA-knappar**: Call-to-action med hover-effekter

#### About Section
- **Info Cards**: Kontaktinformation med ikoner
- **Animated Progress Bars**: Färdigheter med smooth animation när synliga
- **IntersectionObserver**: Progressbars animeras när användaren scrollar till sektionen

#### Resume/CV Section
- **Timeline Design**: Vertikal tidslinje för erfarenhet och utbildning
- **Hover Cards**: Interaktiva kort med lift-effekt
- **Ikoner**: Kategoriserade med emojis och färg-coding

#### Portfolio Section
- **Filter System**: Filtrera projekt efter kategori
- **Hover Overlays**: Smooth overlay med projektdetaljer
- **Modal**: Klicka på projekt för fullständig vy med information
- **Image Optimization**: Next.js Image-optimering

#### Blog Section
- **Card Layout**: Moderna blogkort med bilder
- **Date Formatting**: Svenska datumformat
- **Read More**: Länkar till fullständiga artiklar

#### Contact Section
- **Validering**: Komplett form-validering med felmeddelanden
- **Live Feedback**: Realtidsvalidering när användaren skriver
- **Loading States**: Visuell feedback vid inlämning
- **Contact Info**: Snabbkontakt med ikoner och länkar

#### Footer
- **Multi-column**: Tre kolumner med info, länkar, och social media
- **Animated Links**: Hover-effekter på alla länkar
- **Copyright**: Automatiskt årtal

### 🎭 Animationer & Effekter

#### CSS Animationer
- `fadeIn`: Fade-in effekt för element
- `slideUp`: Slide från botten
- `slideInLeft`: Slide från vänster
- `slideInRight`: Slide från höger
- `scaleUp`: Scale-up effekt
- `shimmer`: Shimmer-effekt på progress bars
- `rotate`: Roterande animationer

#### Hover Effekter
- **Lift Effect**: Kort lyfts vid hover
- **Scale**: Knappar växer vid hover
- **Color Transitions**: Smooth färgövergångar
- **Transform**: Translate och scale kombinationer

### 🌓 Tema-System
- **Dark Mode**: Komplett mörkt tema
- **LocalStorage**: Sparar användarens val
- **System Detection**: Respekterar OS-preferenser
- **Toggle Button**: Fast knapp i övre högra hörnet
- **Smooth Transitions**: Alla färgändringar animeras

### 📐 Layout
- **Sticky Sidebar**: Sidebar följer med vid scroll (desktop)
- **Bottom Nav**: Mobil navigation i botten
- **Padding**: Rätt spacing för sidebar på alla devices
- **Z-index**: Korrekt lagring av element

### 🎯 Interaktivitet
- **Smooth Scroll**: Mjuk scroll mellan sektioner
- **Active States**: Visuell feedback på aktiva element
- **Form Validation**: Realtidsvalidering av formulär
- **Modal System**: Stängbar med ESC eller klick utanför
- **Loading States**: Visual feedback på asynkrona åtgärder

### 🚀 Performance
- **Next.js 16**: Senaste versionen med Turbopack
- **Image Optimization**: Automatisk bildoptimering
- **Code Splitting**: Automatisk chunking
- **CSS-in-JS**: Tailwind med custom utilities
- **Lazy Loading**: Images och komponenter laddas vid behov

## 🛠️ Teknisk Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **Styling**: Tailwind CSS + Custom CSS
- **CMS**: Sanity.io
- **TypeScript**: Fullständig type-safety
- **Fonts**: Poppins (Google Fonts)
- **Icons**: SVG Icons + Emojis

## 📂 Filstruktur

```
portfolio-nextjs/
├── app/
│   ├── globals.css          # Global styles & animations
│   ├── layout.tsx            # Root layout med theme
│   └── page.tsx              # Huvudsida
├── components/
│   ├── About.tsx             # Om mig-sektion
│   ├── Blog.tsx              # Blogg-sektion
│   ├── Contact.tsx           # Kontaktformulär
│   ├── Footer.tsx            # Footer
│   ├── Hero.tsx              # Hero-sektion
│   ├── Portfolio.tsx         # Portfolio-sektion
│   ├── PortfolioModal.tsx    # Modal för projekt
│   ├── Resume.tsx            # CV-sektion
│   ├── Sidebar.tsx           # Navigation sidebar
│   └── ThemeToggle.tsx       # Tema-växlare
├── lib/
│   └── sanity.ts             # Sanity-konfiguration
├── sanity/
│   └── schemaTypes/          # Sanity schemas
└── tailwind.config.ts        # Tailwind-konfiguration
```

## 🎨 Färgschema

### Ljust Tema
- **Primär**: #FFB400 (Gul)
- **Sekundär**: #666666 (Grå)
- **Bakgrund**: #FFFFFF (Vit)
- **Text**: #1E1E1E (Mörkgrå)
- **Kort**: #FAFAFA (Ljusgrå)

### Mörkt Tema
- **Primär**: #FFB400 (Gul)
- **Sekundär**: #999999 (Ljusgrå)
- **Bakgrund**: #1E1E1E (Mörkgrå)
- **Text**: #FFFFFF (Vit)
- **Kort**: #2B2B2B (Grå)

## 🚀 Kom Igång

1. **Starta utvecklingsserver**:
   ```bash
   cd portfolio-nextjs
   npm run dev
   ```

2. **Öppna i webbläsare**:
   ```
   http://localhost:3000
   ```

3. **Konfigurera Sanity** (om du vill använda CMS):
   - Redigera `.env.local`
   - Lägg till ditt projekt-ID och dataset

## ✅ Responsivitet

- **Desktop (lg+)**: Sidebar till vänster, full bredd på innehåll
- **Tablet (md)**: Sidebar dold, bottom navigation
- **Mobile (sm)**: Optimerad layout, touch-vänlig navigation

## 🎯 Browser-support

- Chrome/Edge (senaste)
- Firefox (senaste)
- Safari (senaste)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Anpassningar

### Ändra Färger
Redigera `app/globals.css`:
```css
:root {
  --primary: #ffb400;
  --primary-dark: #e6a200;
}
```

### Ändra Animationer
Redigera `tailwind.config.ts` för att lägga till fler animationer.

### Lägg till Sektioner
Skapa ny komponent i `components/` och importera i `app/page.tsx`.

## 🐛 Felsökning

Om något inte fungerar:
1. Kontrollera att alla npm-paket är installerade: `npm install`
2. Rensa Next.js cache: `rm -rf .next`
3. Starta om dev-servern

## 📧 Support

Vid frågor eller problem, kontakta utvecklaren!

---

**Skapad med ❤️ och modern webbteknik**
