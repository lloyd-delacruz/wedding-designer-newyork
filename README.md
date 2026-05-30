# New York Atelier — Luxury Wedding Designer

A bespoke, editorial website for a New York luxury wedding designer. Built to recreate
the supplied reference design (`assets/wedding-designer.png`) at production quality —
calm, cinematic, quiet-luxury.

## Stack

- **Next.js 14** (App Router) · **React 18** · **TypeScript**
- **Tailwind CSS** (custom luxury design tokens)
- **Framer Motion** (scroll reveals, hero parallax, page transitions)
- **Lenis** (buttery-smooth scrolling, disabled under `prefers-reduced-motion`)

## Run

```bash
npm install
npm run dev      # http://localhost:3000 (or next free port)
npm run build    # production build
npm start        # serve the production build
```

## Pages

`/` Home · `/about` · `/bridal` · `/services` · `/press` · `/journal` · `/contact`
plus `/privacy` and `/terms`.

## Design system

- **Type:** Cormorant Garamond (display serif) + Jost (humanist sans), via `next/font`.
- **Palette:** warm ivory / champagne / muted gold / charcoal — defined in
  `tailwind.config.ts` and `src/app/globals.css`.
- **Components:** `src/components` (Nav, Footer, Wordmark, Reveal, SmoothScroll,
  PageHero, ContactForm) and `src/components/home/*` for the homepage sections.

## Imagery

Photography in `public/images/` was extracted from the client-supplied reference
renders in `assets/` (`Hero.png`, `Bridal-photos.png`). To re-crop, the crop
coordinates are simple `PIL.Image.crop` calls — see project history.

## Quality

- Production build: all routes prerender as static, types valid, lint clean.
- Zero console errors/warnings.
- One `<h1>` per page, semantic landmarks, skip-to-content link, visible focus states,
  WCAG AA contrast.
- JSON-LD (`LocalBusiness`, `WebSite`, plus per-page schemas), Open Graph / Twitter
  metadata, `sitemap.xml`, `robots.txt`, branded favicon.

## Screenshots

`node screenshot.mjs <url> <label> <width> [full|fold]` saves to `./temporary screenshots/`.
