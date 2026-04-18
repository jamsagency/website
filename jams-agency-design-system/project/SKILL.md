---
name: jams-design
description: Use this skill to generate well-branded interfaces and assets for Jams Agency, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files (especially `colors_and_type.css`, `assets/logos/`, and the `ui_kits/` folder which contains pixel-faithful recreations of Jams' live product surfaces).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. Always `<link>` in `colors_and_type.css` first — it defines every color token, type class, radius, and shadow the brand uses. Use semantic classes like `.h1` / `.p-l` / `.eyebrow` instead of hand-rolled `font-size` declarations.

If working on production code, copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions (audience, surface, single page vs flow, mobile vs desktop, copy tone), and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Key things to remember when designing for Jams:

- **No emoji. No exclamation points.** Founder-to-founder tone.
- **Sentence case** on every heading, button, nav item. Exceptions: Jams, product names, proper nouns.
- **Violet gradient** (not flat) on primary CTAs: `#864ACC → #A85CFF → #864ACC` with inset `#CC9EFF` highlight and an **underline** on the button label.
- **Instrument Serif** for all display headings, **Neue Haas Grotesk Display Pro** for body/UI.
- **Phosphor Icons** (line, regular weight) for iconography. Never emoji, never unicode arrows.
- **No illustrations, no textures, no heavy gradients elsewhere.** Backgrounds are white, near-black, or one soft violet radial.
- **Corner radius 12px** is the default for buttons/cards. 32px for hero glossy cards. 999px for pills/chips.
- **Dual-layer shadow** on elevated surfaces: `0 2px 10px rgba(0,0,0,0.06)` outer + `inset 0 2px 2px rgba(254,254,254,1)` top highlight.
