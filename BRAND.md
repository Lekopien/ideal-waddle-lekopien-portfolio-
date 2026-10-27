# Lekopien brand

Design board: https://claude.ai/artifact/LQ92P9FH9KEFi76DvKREwC (Pixel Grid logo, colour system, usage map)

## Logo files (`public/brand/`)

| File | Use on |
|---|---|
| `lekopien-logo.svg` | Mark + LEKOPIEN wordmark, for dark backgrounds (nav, footer, social cards) |
| `lekopien-mark.svg` | Mark only, dark backgrounds |
| `lekopien-mark-mono.svg` | Mark only in `#0d1515`, for light backgrounds (PDFs, invoices) |
| `../favicon.svg` | Browser tab icon |

The wordmark is set in Space Grotesk 500, letter-spacing 0.18em. Convert `lekopien-logo.svg` text to outlines in a vector editor before using it outside the web.

## Colours

Tokens live in `public/brand/colors.css` (CSS variables, `--lk-*`) and `src/styles/brand.js` (for styled-components).

| Where | Colour |
|---|---|
| Page and hero background | `#0d1515` |
| Nav bar, cards, modals | `#151d1e`, border cyan at 15% |
| Card hover, active tab | `#192122`, border cyan at 40% |
| Primary button | `#00f0ff`, text `#0d1515`, glow; hover `#dbfcff` |
| Links, active nav item | `#00f0ff`, hover `#dbfcff` |
| Eyebrow labels, tags | `#ddb7ff`, JetBrains Mono caps |
| Headings and body | `#dce4e5`; captions `#b9cacb` |
| Stats strip, inputs, code | `#080f10`; numbers cyan; focus ring cyan |
| Success / error | `#10b981` / `#ffb4ab` |
| Footer | `#0b0f10` |

## Rules

- One glowing cyan button per view.
- Purple labels things; it is never a button or link.
- Text on cyan is always `#0d1515`.
- 4px corners everywhere.
- Fonts: Inter for text, JetBrains Mono for labels, buttons and numbers.
