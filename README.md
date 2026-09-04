# CipherDesk

CipherDesk is a cybersecurity editorial/research frontend centered around technical articles, topic discovery and structured security learning tracks.

It is a hiring-demo product identity for a research-desk homepage — not a claim that a live publication or LMS already exists.

## Product Direction

The product idea is a **Cybersecurity Research Desk**: a modern independent technical publication rather than a SaaS marketing page or a neon “hacker” landing page.

The page should answer, quickly:

- what kind of writing lives here;
- what the featured piece is;
- what subjects are covered;
- how a learning progression is structured.

Design and architecture both push toward editorial clarity: typography, grid, and typed content over decoration.

## Architecture

**Next.js App Router** — Fits an editorial site that is mostly static content today and may grow into article/topic routes later. File-based routing and server-first rendering match the product shape without a custom server.

**TypeScript** — Content models, props and route params stay explicit. Sample articles are checked at compile time instead of drifting as free-form JSON.

**Server Components by default** — Almost all of the UI is static editorial content. Keeping it on the server reduces client JavaScript. The only client island today is mobile navigation open/close state.

**Local typed content** — Articles, topics and learning tracks live in TypeScript modules under `src/content/`. No network fetch, no runtime schema parsing tax for internal demo data.

**No CMS currently** — A CMS would add accounts, credentials and remote dependency for no gain on a small deterministic demo. The content boundary is deliberately thin so a CMS can replace the source later.

**No global state manager** — There is no shared mutable application state. Local `useState` for the mobile menu is enough.

**Small dependency set** — Next, React, Tailwind, Geist, Lucide, ESLint and Prettier. No CMS SDK, form backend, analytics package, animation library or state store. Fewer packages means less review surface and fewer supply-chain surprises.

## Content Flow

```text
typed local content (src/content)
        ↓
server-rendered sections / pages
        ↓
presentational components
```

Homepage sections and `/articles/[slug]` both resolve from the same `Article` model. Visual components do not know whether the data eventually comes from a file or a CMS — only that it matches the type. Swapping the content source should not require a visual rewrite.

## Design Decisions

- **CipherDesk** is the demo product name used in the UI. It is not presented as the hiring startup’s legal company name.
- **`#1C1C28`** is the primary dark surface — a blue-violet charcoal with more depth than flat black, without sliding into cyberpunk.
- **`#1EC1CB`** is a restrained cyan accent for labels, focus, primary controls and sparse connectors. It is not used as a page-wide theme color.
- **Geist Sans + Geist Mono** pair readable editorial type with technical metadata (categories, dates, index numbers).
- **Editorial layouts** (asymmetric hero, research lead + list, topic index rows, curriculum path) replace a grid of repetitive SaaS feature cards.
- **Limited animation** — short hover/focus transitions only; CSS, no animation library. `prefers-reduced-motion` disables nonessential motion.
- **No stereotypical hacker imagery** — no matrix rain, neon green, fake terminals or stock cyber collage.

Authoritative design detail lives in `Design.md`.

## Performance

Architectural choices that keep the page light by default:

- server-rendered content, minimal client JS;
- no CMS/runtime content fetch on the critical path;
- no heavy animation or illustration libraries;
- static generation for known article slugs via `generateStaticParams`;
- fonts via the local Geist package rather than a third-party runtime font service.

This README does not claim specific Core Web Vitals scores; those need measurement in a real environment.

## Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `section`, `article`, `footer`) and heading hierarchy.
- Keyboard-operable mobile menu (Escape to close, focus moved into the panel when opened).
- Visible `:focus-visible` rings using the accent token.
- `prefers-reduced-motion` respected in global CSS.
- Responsive composition that restacks hero, research, topics and learning tracks instead of only shrinking the desktop grid.

## Security Considerations

- No secrets or API keys in the repo for this demo.
- No analytics or marketing trackers.
- No `dangerouslySetInnerHTML` / Markdown HTML pipeline — article bodies are typed blocks rendered as text.
- No newsletter or other hidden data collection; the closing CTA links to research on the page.
- Minimal third-party dependencies; no auth, payments or email SDKs.

## Local Development

Requires **Node.js 24 LTS** (`engines` in `package.json`).

```bash
npm install
npm run dev
```

Other scripts:

```bash
npm run lint
npm run build
npm start
npm run format
```

## Project Structure

```text
src/
├── app/                 # App Router pages (home, articles/[slug], not-found)
├── components/
│   ├── article/         # Article template
│   ├── home/            # Homepage sections
│   ├── layout/          # Header, footer, mobile nav
│   └── ui/              # Shared primitives
├── content/             # Typed articles, topics, learning tracks
├── lib/                 # Constants and small helpers
└── types/               # Shared content types
```

Planning docs at the repo root: `PRD.md`, `Architecture.md`, `Design.md`, `phases.md`, `rules.md`.

## Possible Extensions

Realistic next steps — not implemented here:

- CMS adapter behind the existing content types;
- `/topics/[slug]` topic routes;
- search over local (or CMS) content;
- further article surfaces (index page, richer body blocks) as needed.

Do not assume those exist until they ship.
