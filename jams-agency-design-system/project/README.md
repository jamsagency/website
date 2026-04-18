# Jams Agency — Design System

> Jams is a creative agency that helps businesses boost revenue through cohesive product design and development. We build websites, web apps, mobile apps and enterprise AI through our business-first approach.

This folder is the brand's single source of truth for anyone (human or agent) designing new interfaces, decks, or marketing surfaces for Jams. It contains foundations (color, type, spacing, shadows), assets (logos, fonts), guidelines (content + visual fundamentals), and UI kits (pixel-faithful recreations of the live product surfaces).

---

## Index

| File / folder | What's in it |
|---|---|
| `README.md` | This file — brand overview, content + visual rules, iconography |
| `colors_and_type.css` | CSS custom properties + semantic type classes. Import first. |
| `SKILL.md` | Invocation instructions for using this as an Agent Skill |
| `fonts/` | Real font files — Neue Haas Grotesk Display Pro + Instrument Serif |
| `assets/logos/` | Jams wordmark + isotype, black & white variants |
| `preview/` | HTML cards that populate the **Design System** tab |
| `ui_kits/marketing_site/` | Marketing website UI kit (desktop + mobile) |
| `ui_kits/web_app/` | Jams web-app template kit (dashboard chrome, table, chart) |

## Sources

The system was reconstructed from the **jams.fig** file the user attached (16 pages, 240 frames — `/Style-Guide`, `/UI-Design`, `/Components`, `/Template-Web-App`, `/Template-Mobile-App` are the interesting ones) plus these font files:

- `uploads/InstrumentSerif-Regular.ttf`
- `uploads/NeueHaasDisplayMediu.ttf` (Medium)
- `uploads/NeueHaasDisplayRoman.ttf` (Roman / Regular)
- `uploads/jams-logo-black.svg`, `jams-logo-white.svg`, `jams-logo-iso-black.svg`, `jams-logo-iso-white.svg`

No codebase was attached. Everything below is derived from the Figma pseudocode, cross-checked by reading concrete component frames (Button, Header, Home-Desktop) rather than screenshots.

---

## Who Jams is

Jams is a **creative agency for non-technical founders**. Industry experts who know their business inside-out but don't have the software or technical knowledge to solve growth challenges — that's the sweet spot. The agency covers **product strategy, UX design, and development** (including low-code with Bubble/Webflow and enterprise AI). Projects start at 6-8 weeks; apps start at ~$12k, websites at ~$5k. Featured case studies on the homepage are **The Fold**, **Emendu**, **DropCar**, and **The Arena**.

The brand position: we speak the founder's language — no technical jargon — and we put business outcomes (revenue, actionable roadmaps) before technology.

---

## Content fundamentals

**Voice is founder-to-founder.** We / you, never "the client" or "our team of experts." Direct, conversational, confident; skip the agency-speak.

**Sentence case everywhere.** Display headings, nav items, button labels, section titles — all sentence case. Exceptions: proper product names (The Fold, Emendu, DropCar, Bubble, Webflow, AWS) and the brand name **Jams**, which is always capitalized.

**Contractions are on.** "We're", "it's", "that's rarely due to…" — the FAQs run almost entirely on contractions. Matches the founder-to-founder register.

**Punctuation.** Curly apostrophes (`'`) in all copy — "FAQ's", "founder's", "we're". One space after a period. No Oxford comma preference visible either way.

**Headlines use serif display + compact phrasing.**
- "Hey there," — the hero
- "What is Jams?"
- "How It Works"
- "FAQ's"
- "Let's talk about your business" (primary CTA)
- "View project" (secondary CTA)
- "All Work" (chip / filter)

**Body copy is warm, plain, concrete.** Examples from the live site:
- "Jams is a creative agency that helps businesses boost revenue through cohesive product design and development."
- "We speak the founder's language, no technical jargon. We're great at helping you dissect your visionary ideas and figure out an actionable roadmap."
- "Apps start at $12,000, and websites start at $5,000."
- "Book a meeting so we can discuss your business challenges, do some ideation together and figure out if we're a good fit, no strings attached."

**No emoji. No marketing exclamation points.** The site is grown-up — no `🚀`, no `✨`, no `!`-studded copy. Enthusiasm comes from the typography and the gradient, not the punctuation.

**Numbers are concrete and dollarized.** $12,000, $5,000, 6-8 weeks, 16 weeks, 100m in funding, since 2012, 24/7. Specifics > vague claims.

**Questions are left in.** FAQ headlines are written as real questions ("Why Jams and not the other 100 million agencies?") and the answers are written as if spoken out loud.

**Tone cheat-sheet**

| ✅ Say it like this | ❌ Not like this |
|---|---|
| "We build websites, web apps, mobile apps and enterprise AI." | "We leverage cutting-edge AI solutions to deliver best-in-class digital experiences." |
| "How much do you charge?" | "Our transparent pricing model" |
| "Book a meeting, no strings attached." | "Schedule a consultation with our experts today!" |
| "Let's talk about your business." | "Get started!" |

---

## Visual foundations

**Two type families carry the brand.** Instrument Serif handles every display/heading moment (hero, section titles, question text, card titles). Neue Haas Grotesk Display Pro carries body, buttons, nav, and metadata. A third — Geist — shows up in the template web-app for dense UI chrome (sidebars, data tables, dashboards). Never mix serif at body size; never mix grotesk in a headline.

**Colors.** The palette is a **violet primary + warm orange secondary + Tailwind-neutral chassis**, with semantic blue/red/green for status. The violet you see on buttons is not flat `#8B5CF6` — it is a subtle vertical gradient `#864ACC → #A85CFF → #864ACC` with an inset `#CC9EFF` highlight at the top. That gradient is the brand's signature. Backgrounds are overwhelmingly white or near-black (`#0B0B0B`); the big dark section ("Hey there,") is used once per page as a visual reset. Neutrals do most of the work — `#404040` is the body-text color.

**Backgrounds.** Three treatments, in order of use:
1. **Flat white** (`#FFFFFF`) — default page background.
2. **Flat near-black** (`#0B0B0B`) — dark hero/contact section, testimonial blocks.
3. **Soft radial glow** — used once on the FAQ section: `radial-gradient(rgba(251,251,251,0.3) 35%, rgba(204,158,255,0.3) 49%, rgba(235,236,238,0.3) 71%)`. A breath of violet through the page, never a hard gradient, never banded.

No hand-drawn illustrations. No photography with heavy color grading. No repeating patterns, no textures, no noise overlays. Imagery is **real product screenshots** of case-study work, shot on cool neutral backgrounds, angled slightly and overlapped — not decorative filler.

**Animation.** Quiet. 120-200ms on most transitions with `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out). Hover states fade rather than pop. No bounce, no spring, no scroll-jack. The only piece of life is a subtle scroll-reveal on case-study cards.

**Hover states.**
- Primary button: gradient **intensifies** — top stop moves from `#864ACC` → `#7C3AED`.
- Ghost/secondary button: background fades in from transparent → `rgba(234,234,234,0.75)`.
- Link: underline always present, text color shifts from `#252526` → `#0B0B0B`.
- Card: shadow lifts from `shadow-card` → `shadow-lg`, no scale.

**Press states.** Scale to `0.98`, shadow collapses, ~80ms. No color invert.

**Borders.** Universal hairline is `0.5px solid rgba(227,227,229,0.5)` (or `1px #E3E3E5` for higher-contrast needs). No colored borders on components by default — borders are neutral, content does the talking.

**Shadow system.** Two families.
- **Tailwind-matched utility** — `shadow-xs` through `shadow-2xl` for general elevation (modals, menus, popovers).
- **Branded dual-layer** — `0 2px 10px 0 rgba(0,0,0,0.06)` on the outside, `inset 0 2px 2px 0 rgb(254,254,254)` on the inside. This is the "soft pill" look used on every chip, ghost button, header capsule. The inset highlight is critical — without it the pill reads flat.
- Primary CTA has its own: `inset 2px 2px 4px 0 #CC9EFF` (a violet highlight on the gradient).

**Capsule vs gradient.** Jams uses **capsule** (high-radius / pill) treatment for small interactive elements — chips, nav items, filter tags. Primary actions use the **gradient** violet. Cards and large surfaces use 12-32px rounded rectangles. Never stroke a primary button.

**Layout rules.**
- Desktop grid is 1440px wide with 100px side padding. Content max-width 1240px.
- Section vertical padding is 100px top and bottom.
- Sticky header: floating capsule, horizontally centered, 40px tall at 48px from top, with `backdrop-filter: blur(16px)` and `rgba(243,243,245,0.7)` fill once you scroll.
- Mobile is 390px viewport; side padding drops to 24px; nav lives at the bottom.

**Corner radii.** 4 / 8 / **12 (default)** / 16 / 24 / 32 / 999 (pill). Hero and large glossy cards get 32. Standard buttons and inputs get 12. Icon-only chips get 12. Pills get 999.

**Transparency + blur.** Used sparingly and only on sticky chrome — the floating nav uses a `rgba(243,243,245,0.7)` fill with `blur(16px)` once the page scrolls. Never used on primary content, never layered as a decorative effect.

**Imagery vibe.** Cool, slightly cropped, slightly tilted. Product screenshots on neutral backgrounds. When a case study is dark (DropCar), the card goes full-bleed near-black. Photography (rare) is cool-toned and architectural — no warm portraits, no stock smiles.

**Cards.** Radius 16-32px, fill `#FFFFFF` on light pages / `#171717` on dark, hairline border `0.5px rgba(227,227,229,0.5)`, dual-layer shadow (outer + inset-top). Case-study cards are taller than wide and carry the project name + one-liner below a full-bleed product image.

---

## Iconography

**No custom icon font. No stylistic mascot icons.** Jams relies on a **single consistent line-icon set** — the Phosphor Icons library is the direct match for what's used in-Figma (names like `GlobeHemisphereEast`, `IconSearch`, `IconChevronDown`, `IconClock2` map 1:1). Style: **regular weight, line (not duotone / filled), rounded joins**, 16-24px, inherits `currentColor`.

Where to source: **[Phosphor Icons](https://phosphoricons.com/)** — load via CDN: `https://unpkg.com/@phosphor-icons/web@2.1.1` and use `<i class="ph ph-clock"></i>`. If Phosphor is unavailable, **Lucide** (`https://unpkg.com/lucide@latest`) is the closest fallback with matching stroke weight. Both keep line weight consistent at 1.5-2px.

**No emoji** in the UI. The brand explicitly avoids them.

**No unicode pictograms** either (no `→`, no `↗` in isolation) — use a proper SVG arrow icon instead. The one reasonable exception is a plain `—` em-dash inside body copy, and the `'` curly apostrophe in all possessives.

**Logos and brand marks** live in `assets/logos/`:
- `jams-logo-black.svg` / `jams-logo-white.svg` — full wordmark
- `jams-logo-iso-black.svg` / `jams-logo-iso-white.svg` — isotype / favicon mark

Use the wordmark in the top-left of the marketing site at ~112×40 (SVG; scales). Use the isotype for favicons, social avatars, and any space narrower than 80px.

No illustrations, no mascots, no hand-drawn assets are defined in the source — don't invent them. If you need a decorative mark, use the violet gradient or the isotype at scale.

---

## Products represented

Two surfaces live in this system:

1. **Marketing website** (`ui_kits/marketing_site/`) — the jams.agency homepage. Desktop 1440px + mobile 390px. Sections: floating nav, hero, case-study grid, "How it works" step, dark quote section, FAQ accordion, footer. Primary CTA "Let's talk about your business" in the gradient violet, secondary "View project" ghost.

2. **Web-app template** (`ui_kits/web_app/`) — the `Template-Web-App` page in Figma is a dashboard chrome (sidebar, top bar, data table, charts, card grid) built on Geist + the Tailwind neutral/violet palette. Jams uses this as the boilerplate for client web apps, so it's worth keeping faithful.

A `Template-Mobile-App` exists in Figma but isn't reproduced as a kit yet — flagged below.

---

## Caveats

- **Geist Mono** isn't in the uploads and isn't an exact match in Figma (Courier appears as a Bubble placeholder). We load Geist + Geist Mono from Google Fonts as the nearest match — **ask the user to confirm** or supply a licensed mono.
- **Neue Haas Grotesk Display Pro** upload includes Roman (400) and Medium (500). The live design references Bold weight on a few CTAs — we map bold → Medium until the user ships the additional weight.
- A **codebase** was never attached; every value here is reconstructed from the Figma pseudocode. Small numeric values (letter-spacing, shadow offsets) can drift by a pixel.
- **Template-Mobile-App** is referenced in Figma but not rebuilt as a kit. Flagging for a second pass if needed.
