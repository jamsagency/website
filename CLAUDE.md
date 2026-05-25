# CLAUDE.md — jams.agency Website

## Project overview

Marketing website for Jams (jams.agency) — a custom software and AI studio. Built with **Astro 4 + Tailwind CSS 3**, deployed on Vercel.

The master content reference is a private file in the owner's Dropbox (path known locally). It contains all copy, SEO metadata, sitemap, and per-page implementation notes. Ask the owner for the path if needed.

---

## Design system — read this first

The design system is in `jams-agency-design-system/`. Before writing any CSS or component:

1. Read `jams-agency-design-system/project/README.md` — full visual rules, content voice, layout conventions
2. Import `jams-agency-design-system/project/colors_and_type.css` globally — all CSS custom properties live here

### Fonts (self-hosted)
Source files: `jams-agency-design-system/project/fonts/`

- **Instrument Serif** — all display headings (hero, H1–H3, section titles, case study titles). Regular weight only.
- **Neue Haas Grotesk Display Pro** — body copy, nav, buttons, metadata, all UI text. Roman (400) and Medium (500/600).
- **Geist** — web app template only. Not used on the marketing site.

Load via `@font-face` only. Never use Google Fonts or a CDN for these typefaces.

### Colors
Violet primary + warm orange secondary + neutral chassis. Key values:
- Primary gradient (CTA button): `linear-gradient(180deg, #864ACC 0%, #A85CFF 51%, #864ACC 100%)`
- CTA inner highlight: `inset 2px 2px 4px 0 #CC9EFF`
- Body text: `#404040` (`--fg-muted`)
- Near-black hero/dark sections: `#0B0B0B` (`--neutral-950`)
- Default background: `#FFFFFF`

Dark sections use `.dark` class — not a site-wide toggle.

### Layout
- Desktop: 1440px wide, 100px side padding, 1240px content max-width
- Section vertical padding: 100px top and bottom
- Mobile: 390px viewport, 24px side padding
- Sticky nav: floating capsule, 40px tall, 48px from top, `backdrop-filter: blur(16px)`, `rgba(243,243,245,0.7)` fill on scroll

### Radii
4 / 8 / **12 (default)** / 16 / 24 / 32 / 999 (pill). Buttons and inputs: 12px. Hero/large cards: 32px. Pills/chips: 999px.

### Shadows
- Cards: `0 2px 10px 0 rgba(0,0,0,0.06)` outer + `inset 0 2px 2px 0 rgb(254,254,254)` inset highlight
- Primary CTA: `inset 2px 2px 4px 0 #CC9EFF`

### Animations
120–200ms, `cubic-bezier(0.22, 1, 0.36, 1)`. Hover fades, no bounce. Card scroll-reveal only.

### Icons
Phosphor Icons (line weight, regular, `currentColor`). Load via CDN: `https://unpkg.com/@phosphor-icons/web@2.1.1`. No emoji in UI. No unicode arrows.

### UI kit references
- `jams-agency-design-system/project/ui_kits/marketing_site/index.html` — desktop reference
- `jams-agency-design-system/project/ui_kits/marketing_site/mobile.html` — mobile reference
- `jams-agency-design-system/project/ui_kits/web_app/index.html` — web app template (client builds only)

---

## File structure

```
src/
├── components/
│   ├── SEOHead.astro          ← accepts title, description, ogImage, canonical, schema, noindex
│   ├── Nav.astro
│   ├── Footer.astro
│   ├── CaseStudyCard.astro
│   ├── BlogCard.astro
│   ├── CTASection.astro       ← reusable "book workshop" CTA block
│   └── TestimonialCard.astro
├── layouts/
│   ├── BaseLayout.astro       ← Nav + Footer + SEOHead + PostHog
│   ├── CaseStudyLayout.astro
│   ├── BlogLayout.astro
│   └── LandingPageLayout.astro
└── pages/
    ├── index.astro
    ├── work/
    │   ├── index.astro
    │   ├── the-fold.astro
    │   ├── dropcar.astro
    │   ├── emendu.astro
    │   ├── the-arena.astro
    │   ├── red-horse-mountain-ranch.astro
    │   ├── 93-percent-club.astro
    │   ├── qmius.astro
    │   └── fletech.astro
    ├── faqs.astro
    ├── blog/
    │   ├── index.astro
    │   └── [slug].astro
    ├── start.astro
    ├── hospitality.astro
    ├── bubble.astro
    ├── stripe.astro
    ├── cloudflare.astro
    ├── convex.astro
    ├── checkfront.astro
    ├── oms.astro
    └── blueprint.astro

public/
├── favicon.ico
├── favicon.svg
├── apple-touch-icon.png
├── og-default.jpg             ← 1200×630, dark background, Jams wordmark
├── robots.txt
└── llm.txt
```

---

## SEO requirements

### Every page
- `<meta charset="UTF-8">`
- `<meta name="viewport" content="width=device-width, initial-scale=1">`
- `<meta name="robots" content="index, follow">` on all pages
- Canonical URL
- Favicon set: `/favicon.ico`, `/favicon.svg`, `/apple-touch-icon.png`
- OG image fallback: `/og-default.jpg`

### Open Graph
```
og:type — website (article for blog posts)
og:site_name — Jams
og:title, og:description, og:image, og:url
twitter:card — summary_large_image
twitter:site — @jamsdotio
```

### Schema markup
- Sitewide: `Organization` + `WebSite` with `SearchAction`
- Case studies: `BreadcrumbList`
- Blog posts: `Article`
- Landing pages: `Service`

### Title tag formula
- Homepage: `Jams — Custom Software and AI for Operators and Founders`
- Case studies: `[Project Name] — [One-line result] | Jams`
- Blog posts: `[Post Title] | Jams`
- Landing pages: `[Vertical/Tool] Software Development | Jams`
- FAQs: `Frequently Asked Questions | Jams`

### Meta descriptions
150–160 characters. Specific outcome or value prop. No generic filler.

### Performance targets
- Lighthouse 90+ across Performance, Accessibility, Best Practices, SEO
- LCP under 2.5s, CLS under 0.1
- All images via Astro `<Image>` component with explicit width/height and descriptive alt text

---

## SEOHead component contract

```astro
---
interface Props {
  title: string;
  description: string;
  ogImage?: string;       // falls back to /og-default.jpg
  canonical?: string;     // defaults to current URL
  schema?: object;        // JSON-LD
  noindex?: boolean;      // default false
}
---
```

---

## Tailwind config

- Extend colors with Jams brand tokens from `colors_and_type.css`
- Dark mode: `class` strategy (`.dark` on sections, not site-wide)
- Typography plugin: yes
- Primary CTA: define as custom utility class:
  ```css
  .btn-primary {
    background: linear-gradient(180deg, #864ACC 0%, #A85CFF 51%, #864ACC 100%);
    box-shadow: inset 2px 2px 4px 0 #CC9EFF;
  }
  .btn-primary:hover {
    background: linear-gradient(180deg, #7C3AED 0%, #A85CFF 51%, #7C3AED 100%);
  }
  ```

---

## Analytics

PostHog snippet in `BaseLayout.astro` on every page. Track: page views, CTA clicks (workshop booking), form submissions.

---

## Astro config

```js
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jams.agency',
  integrations: [tailwind(), sitemap()],
});
```

All pages included in sitemap.

---

## Content voice

- Founder-to-founder. Direct, warm, concrete. No agency-speak.
- Sentence case everywhere (including headings and nav items).
- No emoji. No exclamation points.
- Contractions on: "we're", "it's", "that's".
- Numbers are specific and dollarized: $3,500, $5,000/month, 8 weeks.
- Copy status per page is tracked in the master reference file. Pages marked "COPY NEEDED" get placeholder structure only — do not invent copy.

---

## Build order

When implementing pages, follow this priority:
1. Boilerplate setup (Astro + Tailwind + dependencies + font loading + BaseLayout)
2. `SEOHead`, `Nav`, `Footer`, `CTASection` components
3. Homepage (`/`) — full copy available
4. FAQs (`/faqs`) — full copy available
5. Case studies with copy: The Fold, DropCar, Emendu, The Arena, Red Horse Mountain Ranch
6. Blog post template + Blog index template
7. `/start` page
8. `/hospitality` landing page
9. Remaining pages (stubs for "COPY NEEDED" pages)
10. `robots.txt`, `llm.txt`, sitemap config, OG image

---

## Key decisions

- Self-host all fonts via `@font-face` — no CDN
- `/start` is the canonical booking page — all CTAs site-wide link to it
- Blog posts live as `.astro` files (or content collections if blog grows) — TBD at boilerplate stage
- No dark mode toggle — `.dark` is a section-level class only
