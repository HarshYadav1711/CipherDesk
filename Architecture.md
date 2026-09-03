# Architecture.md — CipherDesk

**Document type:** Frontend Architecture Record  
**Project:** CipherDesk  
**Status:** Approved implementation baseline  
**Last reviewed:** 2026-09-04

CipherDesk is the approved **demo product identity** for this hiring frontend exercise. It is not the hiring startup’s company name.

---

## 1. Architectural objective

The architecture should prove good engineering judgment without turning a one-page hiring demo into an over-engineered product.

The project needs to be:

- easy to understand;
- easy to review;
- fast by default;
- content-driven;
- responsive;
- easy to extend into article routes or a CMS later;
- low-dependency;
- secure by default;
- free to build and run locally.

The architecture should not include infrastructure merely because it might be useful “someday.”

---

## 2. Version policy

The rule is **latest stable compatible**, not “newest package regardless of compatibility.”

As of **2026-09-03**, the baseline verified versions are:

| Technology | Approved baseline | Why |
| --- | --- | --- |
| Node.js | **24.20.0 LTS** | Production-oriented LTS release. We deliberately prefer LTS over Node 26 Current. |
| Next.js | **16.3.2** | Current stable Next.js release at review time; App Router and modern React support. |
| React | **19.2.8** | Current stable React release at review time. |
| React DOM | **19.2.8** | Must remain aligned with React. |
| TypeScript | **7.0.2** | Current stable TypeScript release at review time, subject to Next compatibility. |
| Tailwind CSS | **4.3.3** | Current stable Tailwind release at review time. |
| Lucide React | **1.39.0** | Current stable lightweight icon package. |
| Motion | **13.1.1** | Approved only when CSS cannot reasonably provide the desired interaction. |
| Geist | **1.7.2** | Official open-source Geist Sans/Mono package; zero runtime service dependency. |
| Prettier | **3.9.6** | Current stable formatter at review time. |
| ESLint | **latest stable compatible with Next 16.3.2** | Do not force a newer ESLint version through peer conflicts. |

### Important version rule

Before first install, the IDE may verify stable releases, but it may not silently change the architecture.

If a newer stable version exists:

1. check official release/package documentation;
2. check compatibility with the rest of the approved stack;
3. explain the upgrade in one short change note;
4. use the newer version only if it is stable and compatible.

Forbidden channels by default:

- `alpha`;
- `beta`;
- `canary`;
- `next` tags when they represent prerelease software;
- release candidates;
- experimental builds;
- EOL runtimes.

---

## 3. Why Node.js 24 LTS instead of Node.js 26 Current

Node 26 is newer, but newer is not automatically better for a hiring demo.

The Node.js project recommends production applications use supported LTS lines. Node 24 is the latest LTS line at this review date.

Benefits:

- longer support window;
- better ecosystem compatibility;
- fewer surprises from packages that have not yet caught up with a Current release;
- shows that “latest stable” is being interpreted with production judgment, not blindly.

This decision can be revisited when Node 26 becomes LTS.

---

## 4. Framework: Next.js App Router

### Decision

Use **Next.js 16.3.2 with the App Router**.

### Why

The job explicitly mentions:

- modern web architecture;
- dynamic routing;
- content-heavy pages;
- performance;
- clean component structure.

Next.js fits those needs while still being simple enough for this demo.

It gives us:

- file-based routing;
- Server Components;
- static rendering;
- metadata support;
- font and image optimization;
- easy future article routes;
- strong deployment options.

### Why not plain React + Vite

Vite would absolutely be capable of rendering this homepage.

We are not rejecting it because it is bad.

We prefer Next.js here because the job description specifically points toward an editorial/content product that may later need:

- article routes;
- topic routes;
- SEO metadata;
- server-rendered or static content;
- headless content integration.

Next.js gives us those paths without introducing a custom routing or rendering layer later.

### Why not a larger full-stack framework

The demo does not need:

- NestJS;
- Express;
- a separate API server;
- GraphQL;
- microservices.

Adding any of these would make the code harder to review without solving a current problem.

---

## 5. Language: TypeScript

### Decision

Use TypeScript throughout application code.

### Why

The content model is central to this project. TypeScript makes it possible to describe the shape of:

- articles;
- topics;
- learning tracks;
- navigation items.

This reduces accidental UI/content mismatch and makes later refactoring easier.

It also makes the code easier to reason about during an interview.

### Strictness

Use a strict TypeScript configuration compatible with the scaffold.

Do not use `any` simply to silence errors.

If a library forces an unsafe type boundary, isolate and explain it.

---

## 6. Styling: Tailwind CSS 4

### Decision

Use **Tailwind CSS 4.3.3** plus CSS custom properties for design tokens.

### Why

Tailwind works well for this specific demo because:

- responsive styling is explicit at the component level;
- it is fast to iterate without creating large CSS files;
- unused utility output is handled by the modern build pipeline;
- consistent design tokens can still be enforced;
- it is familiar and reviewable.

### What Tailwind is not allowed to become

It must not become permission to use arbitrary values everywhere.

Avoid a page full of unrelated values such as:

- `mt-[73px]`;
- `rounded-[19px]`;
- `text-[#ff6b9a]`;
- `max-w-[1187px]`.

One-off values are allowed only where the design system genuinely needs them and the reason is clear.

The palette, spacing, radii, typography, and container sizes in `Design.md` are authoritative.

---

## 7. Typography: Geist Sans + Geist Mono

### Decision

Use the official open-source **Geist** package.

### Why

Geist gives the project:

- a clean editorial/software feel;
- good readability;
- a strong sans + mono pairing;
- no paid font license;
- no runtime font API call;
- a suitable visual connection between technical metadata and editorial text.

### Usage

- Geist Sans: body, headings, navigation, cards.
- Geist Mono: categories, dates, read time, labels, small technical metadata.

Mono is an accent, not the body font.

Using monospace everywhere would turn the design into a cybersecurity cliché and reduce readability.

---

## 8. Icons: Lucide React

### Decision

Use Lucide React for the small number of functional icons required.

Likely uses:

- menu;
- close;
- arrow;
- search only if search is actually implemented later;
- external-link indicator if needed.

### Why

- open source;
- lightweight;
- SVG-based;
- tree-shakable;
- consistent style;
- avoids a custom icon asset pipeline for a tiny project.

### Rule

Do not use icons where plain text is clearer.

No decorative icon wall.

---

## 9. Motion

### Decision

CSS transitions are the default.

The `motion` package is **approved but optional**.

### Why not make Motion mandatory

The job prioritizes performance and minimal bloat. Most hover, fade, underline, and transform interactions can be done with CSS.

Use Motion only if we implement an interaction that materially benefits from:

- orchestrated entrance;
- spring behavior;
- layout transition;
- more complex reveal logic.

### Rules

If Motion is used:

- isolate it to client components;
- do not wrap the whole page in a client component;
- respect `prefers-reduced-motion`;
- do not animate every element;
- do not add scroll-jacking;
- do not use motion to hide weak layout.

---

## 10. UI component-library decision

### Decision

Do **not** use a full component library in the base implementation.

`shadcn/ui`, Aceternity, Magic UI, 21st.dev, Material UI, Chakra, Ant Design, and similar sources may be used as **references**, not as permission to assemble a template from borrowed components.

### Why

This is a small editorial page with:

- header;
- buttons;
- cards;
- links;
- sections;
- mobile menu.

Custom implementation is straightforward and better demonstrates frontend ability.

### Exception

If a genuinely complex accessible primitive is later needed, a component source can be proposed.

Adding it requires review under `rules.md`.

---

## 11. Data architecture

The page is content-driven even though no CMS exists yet.

### Approved content types

```ts
export type ArticleCategory =
  | "Web Security"
  | "AppSec"
  | "Identity"
  | "Cloud"
  | "Secure Coding"
  | "Threat Modelling";

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  publishedAt: string;
  readingTimeMinutes: number;
  featured?: boolean;
}

export interface LearningTrack {
  slug: string;
  order: number;
  title: string;
  description: string;
  level: "Foundation" | "Intermediate" | "Advanced";
}

export interface Topic {
  slug: string;
  name: ArticleCategory;
  description: string;
}
```

The exact type can evolve during implementation if required by the approved UI, but the IDE may not introduce a different content model without explaining why.

### Where content lives

Initial content:

```text
src/
  content/
    articles.ts
    topics.ts
    learning-tracks.ts
```

This makes the current demo:

- dependency-free at the content layer;
- deterministic;
- fast;
- easy to move to a CMS later.

### Why not JSON

TypeScript content files give us type checking directly without a parsing step.

### Why not Zod in phase 1

Zod is a good library, but the initial data is internal, local, and compile-time controlled.

Adding runtime validation before we ingest untrusted or external content would be unnecessary dependency weight.

If a CMS/API is added later, Zod can be proposed at that boundary.

### Why not a CMS now

A CMS would add:

- setup time;
- configuration;
- credentials;
- a remote dependency;
- possibly pricing/account concerns;
- no meaningful improvement to a one-page hiring demo.

The architecture leaves a clean content boundary so a CMS can be added later without rewriting visual components.

---

## 12. Data flow

The data flow should be boring in the best possible way.

```text
local typed content
        ↓
content selector/helper (only if needed)
        ↓
Server Component section
        ↓
presentational article/topic/track components
        ↓
rendered HTML
```

No global state is required.

### Why no Zustand/Redux/Context store

The homepage does not have shared mutable application state.

Adding a state manager would increase conceptual and JavaScript cost for no gain.

If the mobile menu needs state, local `useState` is sufficient.

---

## 13. Rendering strategy

### Default

Use Server Components.

### Client components allowed for

- mobile navigation toggle;
- any later interactive filter;
- Motion behavior that cannot remain server-rendered.

### Why

Most of the page is static editorial content.

Server-first rendering means:

- less client JavaScript;
- faster initial content;
- easier SEO;
- fewer hydration boundaries;
- better alignment with the job's performance emphasis.

### Rule

Never place `"use client"` at a high-level layout simply because one nested element needs interaction.

Move the interactive element into the smallest reasonable component.

---

## 14. Route plan

### Phase 1–3

Required:

```text
/
```

### Optional later phase

If approved:

```text
/articles/[slug]
/topics/[slug]
```

The architecture should not create dead links.

If article detail pages are not implemented yet, the homepage must not pretend that every article card leads to a working article.

---

## 15. Folder structure

Approved baseline:

```text
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── layout/
│   │   ├── site-header.tsx
│   │   └── site-footer.tsx
│   │
│   ├── home/
│   │   ├── hero.tsx
│   │   ├── featured-story.tsx
│   │   ├── latest-research.tsx
│   │   ├── topic-index.tsx
│   │   ├── learning-tracks.tsx
│   │   └── newsletter-cta.tsx
│   │
│   └── ui/
│       ├── section-heading.tsx
│       └── ...
│
├── content/
│   ├── articles.ts
│   ├── topics.ts
│   └── learning-tracks.ts
│
├── lib/
│   ├── constants.ts
│   └── utils.ts
│
└── types/
    └── content.ts
```

### Folder rules

- Do not create a folder for one tiny file unless it improves clarity.
- Do not create `hooks/` until a reusable hook exists.
- Do not create `services/` when there are no services.
- Do not create `store/` without app state.
- Do not create `api/` without an API.
- Do not add `providers.tsx` unless a real provider is needed.

The folder tree should reflect the system that exists, not a hypothetical enterprise app.

---

## 16. Component boundaries

A component is justified when it has at least one of these reasons:

- meaningful semantic section;
- repeated visual pattern;
- isolated interactivity;
- meaningful reuse;
- easier independent testing/review.

Avoid:

- 80-line `page.tsx` containing the entire site;
- the opposite extreme of a component for every `<div>`.

### Page responsibility

`app/page.tsx` should mainly compose sections.

It should not contain the full visual implementation of those sections.

---

## 17. Design-token architecture

Use CSS custom properties in `globals.css` for semantic tokens.

Example categories:

```css
:root {
  --color-ink: ...;
  --color-paper: ...;
  --color-accent: ...;
  --color-muted: ...;
  --color-border: ...;
  --color-dark-border: ...;
}
```

Use semantic token names, not names tied to one section like `--hero-cyan`.

This makes design changes coherent.

Exact approved values are in `Design.md`.

---

## 18. Image and illustration strategy

### Baseline

Do not depend on hero photography or stock cybersecurity art.

Visual character should come from:

- typography;
- grid;
- borders;
- spacing;
- editorial composition;
- restrained CSS/SVG technical motifs.

### Why

This:

- avoids licensing issues;
- improves performance;
- avoids cliché stock imagery;
- makes the design feel more bespoke.

### If an image is later approved

Use:

- appropriately licensed asset;
- local file when practical;
- `next/image`;
- correct intrinsic dimensions;
- modern formats;
- descriptive alt text if meaningful.

---

## 19. Security architecture

This is not a security product backend, but secure habits still matter.

Rules:

- no secrets;
- no `dangerouslySetInnerHTML` by default;
- no arbitrary external script tags;
- no trackers;
- no remote code;
- no dependencies with unclear maintenance status;
- no hidden external calls;
- no sensitive data storage;
- no fake forms posting user data somewhere.

If article HTML/Markdown from an external CMS is added later, sanitization must be designed at the content boundary before rendering.

---

## 20. Accessibility architecture

Accessibility is not a later “polish phase.”

Structure must start semantic.

Examples:

- `nav` for navigation;
- `article` for article cards where appropriate;
- headings in logical order;
- buttons for actions, links for navigation;
- icon-only buttons have labels;
- interactive elements use native semantics whenever possible.

CSS must provide:

- visible focus;
- contrast;
- reduced motion path;
- readable line length.

---

## 21. Performance architecture

Performance decisions:

- server-render editorial content;
- no global state;
- no heavy CMS SDK;
- no 3D/WebGL;
- no autoplay media;
- no third-party analytics;
- no large UI kit;
- no huge hero images;
- CSS animation before JS animation;
- tree-shakable icons;
- local/open-source font package.

The point is to **remove performance problems before they exist**.

---

## 22. Testing and review strategy

Required before final delivery:

```bash
npm run lint
npm run build
```

Also perform:

- desktop visual review;
- mobile visual review;
- keyboard navigation;
- reduced-motion check;
- Lighthouse run on production build/deployment;
- console check;
- link check;
- overflow check.

Automated end-to-end tooling is optional for this demo and must not be added unless it materially improves confidence.

---

## 23. Deployment architecture

Deployment must remain a separate concern from application code.

Rules:

- no deployment SDK in the app;
- no platform-specific runtime dependency unless required;
- no paid service;
- no service that requires a credit card just to run the demo;
- verify the provider's current free-tier terms at deployment time;
- do not commit platform secrets.

A standard Next.js-compatible host is preferred.

---

## 24. Dependencies that are explicitly not approved for the baseline

Do not add these unless a new requirement justifies them:

- Redux;
- Zustand;
- TanStack Query;
- Axios;
- Lodash;
- Moment;
- jQuery;
- Bootstrap;
- Material UI;
- Chakra UI;
- Ant Design;
- Three.js;
- GSAP;
- Framer/Motion if CSS already solves the interaction;
- Firebase;
- Supabase;
- Prisma;
- database clients;
- authentication providers;
- CMS SDKs;
- analytics SDKs;
- newsletter SDKs.

This is not a statement that these tools are bad. They simply do not solve a current problem in this project.

---

## 25. Architecture Decision Record summary

### ADR-001 — Next.js over Vite

**Decision:** Next.js App Router.  
**Reason:** better fit for content routes, metadata, server/static rendering, future CMS path.  
**Cost:** framework complexity is slightly higher than Vite.

### ADR-002 — Server Components by default

**Decision:** server-first.  
**Reason:** page is mostly static editorial content; reduces client JS.  
**Cost:** interactive components must be deliberately isolated.

### ADR-003 — Local typed content before CMS

**Decision:** TypeScript content files.  
**Reason:** zero service dependency and clear schema.  
**Cost:** editors cannot manage content through a dashboard yet, which is not needed for the demo.

### ADR-004 — Tailwind + semantic CSS variables

**Decision:** Tailwind for implementation, CSS variables for system tokens.  
**Reason:** speed plus design consistency.  
**Cost:** requires discipline to avoid arbitrary utility values.

### ADR-005 — No global state manager

**Decision:** local state only.  
**Reason:** no shared mutable state exists.  
**Cost:** none for current scope.

### ADR-006 — No full UI library

**Decision:** bespoke small component set.  
**Reason:** stronger demonstration of frontend skill and lower dependency weight.  
**Cost:** accessibility for any future complex widget must be implemented carefully or sourced from a trusted primitive.

### ADR-007 — LTS runtime over newest Current runtime

**Decision:** Node 24 LTS.  
**Reason:** production stability and ecosystem support.  
**Cost:** does not use the absolute newest Node major.

---

## 26. Architecture change protocol

Any change to one of the following requires explicit review before implementation:

- framework;
- routing model;
- state management;
- styling system;
- design-token strategy;
- content storage;
- CMS;
- backend;
- database;
- authentication;
- analytics;
- animation framework;
- component library;
- deployment provider when it changes application code;
- major folder restructuring;
- new third-party API.

The IDE must present:

1. the problem;
2. the proposed change;
3. why the current architecture is insufficient;
4. alternatives;
5. dependency/cost/security/performance impact.

Until approved, keep the existing architecture.
