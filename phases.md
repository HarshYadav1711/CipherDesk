# phases.md — Controlled Implementation Plan

**Project:** CipherDesk  
**Purpose:** Build in reviewable stages without allowing the IDE to drift from the approved product/design/architecture  
**Status:** Approved implementation sequence  
**Last reviewed:** 2026-09-04

CipherDesk is the approved **demo product identity** for this hiring frontend exercise. It is not the hiring startup’s company name.

---

## 0. Phase workflow

Every phase follows this cycle:

```text
READ CONTEXT
    ↓
PLAN ONLY THE CURRENT PHASE
    ↓
IMPLEMENT
    ↓
RUN CHECKS
    ↓
REVIEW SCREENSHOT / OUTPUT
    ↓
REPORT CHANGES
    ↓
STOP
```

Do not automatically continue into the next phase.

At the beginning of every phase, re-check:

- `rules.md`;
- `PRD.md`;
- `Architecture.md`;
- `Design.md`;
- this file.

---

# Phase 0 — Repository and context lock

## Goal

Prepare the implementation environment without designing or inventing product behavior.

## Tasks

- confirm Node.js 24 LTS;
- verify stable compatible package versions;
- create Next.js + TypeScript + App Router project if it does not exist;
- enable Tailwind;
- set up ESLint;
- add Prettier if desired by the user;
- install only the dependencies already approved in `Architecture.md`;
- create the documented directory structure only as needed;
- place the five authority documents in the repository root or `/docs` consistently.

## Do not do yet

- no hero;
- no article cards;
- no animations;
- no invented logo;
- no extra pages;
- no CMS;
- no APIs.

## Exit criteria

- development server starts;
- production build works;
- lint runs;
- one package manager/lockfile;
- no prerelease dependencies.

## Suggested commit

`chore: establish stable Next.js frontend foundation`

---

# Phase 1 — Design-system foundation

## Goal

Implement the visual primitives before composing the homepage.

## Tasks

- add Geist Sans and Geist Mono;
- implement approved semantic color variables;
- configure typography;
- configure page container;
- configure border/radius system;
- configure focus styles;
- create reusable section heading pattern only if needed;
- create button/link primitives only where repetition justifies them;
- implement reduced-motion baseline.

## Output

A minimal internal style-preview route is **not required**.

Prefer testing primitives on the actual homepage shell.

## Do not do

- do not redesign colors;
- do not add gradients;
- do not add component libraries;
- do not add decorative motion;
- do not create an elaborate design-system site.

## Exit criteria

- tokens match `Design.md`;
- typography renders correctly;
- focus style is visible;
- no arbitrary palette values scattered through components;
- build/lint pass.

## Suggested commit

`style: establish editorial security design system`

---

# Phase 2 — Header + hero + featured story

## Goal

Create the first viewport and prove that the page no longer looks “basic.”

## Tasks

### Header

Implement:

- CipherDesk typographic site mark;
- approved navigation labels;
- restrained CTA;
- mobile menu if required.

### Hero

Implement:

- eyebrow/meta line;
- primary editorial heading;
- supporting copy;
- primary action;
- technical background motif using CSS/SVG only if it improves the composition.

### Featured story

Implement:

- category;
- title;
- excerpt;
- metadata;
- restrained interactive state if it is a real link/action.

## Design intent

The first screen should feel like a **cybersecurity research publication**, not a SaaS dashboard.

Use asymmetry and editorial grid composition rather than one centered headline plus two gradient buttons.

## Do not do

- no 100vh hero;
- no stock hacker image;
- no 3D globe;
- no fake terminal;
- no giant neon glow;
- no copied competitor layout;
- no animation on every line of text.

## Review widths

- 1440;
- 1024;
- 390.

## Exit criteria

- hierarchy is immediately clear;
- first screen has no obvious dead space;
- mobile composition is deliberate;
- navigation works;
- no horizontal overflow;
- lint/build pass.

## Suggested commit

`feat: build editorial hero and featured research experience`

---

# Phase 3 — Core homepage content

## Goal

Complete the one-page assignment.

## Tasks

Implement in this order:

1. Latest Research;
2. Topic Index;
3. Learning Tracks;
4. Newsletter/CTA;
5. Footer.

### Latest Research

Render from typed article data.

Do not duplicate six hand-written JSX cards.

### Topic Index

Render approved topic taxonomy.

### Learning Tracks

Render the approved educational progression.

### Newsletter/CTA

Do not integrate a third-party service.

If the form cannot submit, avoid fake success behavior.

### Footer

Keep factual content neutral.

## Do not do

- no article detail pages yet;
- no search;
- no filtering unless specifically approved;
- no analytics;
- no CMS;
- no backend.

## Exit criteria

- full homepage is present;
- content is data-driven;
- no fake startup facts;
- section rhythm matches `Design.md`;
- mobile and desktop both look intentional;
- lint/build pass.

## Suggested commit

`feat: complete content-driven cybersecurity homepage`

---

# Phase 4 — Optional content-route proof

**This phase requires explicit approval before implementation.**

## Goal

Demonstrate that the homepage architecture can scale into real editorial routing without building a full CMS.

## Option A — recommended if time is available

Add:

```text
/articles/[slug]
```

Render the existing local content through one clean article template.

## Option B

Skip the route and keep the assignment strictly one page.

Both are acceptable.

The homepage quality is more important than extra surface area.

## If approved, tasks

- create dynamic route;
- resolve article from typed content;
- implement not-found behavior;
- add metadata;
- make homepage article links real.

## Do not do

- no Markdown engine unless needed;
- no CMS;
- no database;
- no comments;
- no author accounts.

## Exit criteria

- no dead article links;
- route is statically renderable where possible;
- build succeeds for all content entries.

## Suggested commit

`feat: add lightweight article routing from typed content`

---

# Phase 5 — Responsive, accessibility, and interaction polish

## Goal

Turn the implementation from “good desktop screenshot” into a genuinely polished frontend.

## Review widths

- 1440;
- 1280;
- 1024;
- 768;
- 390;
- 360;
- optionally ~320.

## Responsive review

Check:

- header;
- hero line lengths;
- card stacking;
- section spacing;
- topic layout;
- learning tracks;
- footer;
- tap targets;
- overflow.

## Accessibility review

Check:

- heading order;
- semantic landmarks;
- icon labels;
- keyboard navigation;
- focus order;
- focus visibility;
- color contrast;
- reduced motion.

## Interaction review

Keep interactions restrained:

- link underline/arrow movement;
- border/surface change;
- tiny image/graphic movement if any;
- menu transition.

Do not add motion merely because the page feels “too static.”

## Exit criteria

- no horizontal scrolling;
- keyboard navigation works;
- reduced-motion experience is clean;
- important content is not hidden on mobile;
- lint/build pass.

## Suggested commit

`fix: harden responsive and accessible interaction states`

---

# Phase 6 — Performance and security review

## Goal

Demonstrate the exact engineering discipline highlighted in the job post.

## Performance tasks

Audit:

- client-component count;
- JS sent to client;
- image sizes;
- font loading;
- unnecessary dependencies;
- unused packages;
- layout shift;
- animation cost;
- console errors.

Run Lighthouse on a production build/deployment.

## Security tasks

Review:

- secrets;
- external scripts;
- external links;
- unsafe HTML;
- dependency health;
- form behavior;
- third-party calls;
- headers where deployment permits.

## Dependency review

Every dependency should answer:

> “What current problem does this solve?”

If the answer is weak, propose removal.

## Exit criteria

- build/lint pass;
- no secrets;
- no unexpected network calls;
- no obvious dead code;
- Lighthouse results recorded;
- performance targets reasonably approached.

## Suggested commit

`perf: audit client weight security and core web vitals`

---

# Phase 7 — Final visual critique and refinement

## Goal

Remove anything that still looks template-like, amateurish, or over-generated.

## Screenshot review

Capture:

- 1440 desktop;
- 1024;
- 390 mobile.

Review for:

- hierarchy;
- balance;
- rhythm;
- alignment;
- density;
- typography;
- repetition;
- over-decoration;
- inconsistency;
- generic UI tropes.

## Critique protocol

The AI may **critique first**, but should not automatically rewrite the design.

For each suggested change, categorize:

- definitely improves;
- subjective;
- conflicts with `Design.md`.

Implement only approved/clearly compliant improvements.

## Exit criteria

- no obviously generic “AI landing page” sections;
- consistent system;
- page feels authored;
- mobile looks intentional;
- no last-minute architecture changes.

## Suggested commit

`style: refine editorial hierarchy and final visual details`

---

# Phase 8 — Deployment and handoff

## Goal

Ship a reviewable link without altering the architecture.

## Tasks

- verify host has a usable free/no-card path at that time;
- production build;
- deploy;
- inspect live URL on mobile and desktop;
- verify metadata;
- verify no environment secrets are exposed;
- confirm links;
- record final stack and architecture decisions in README.

## README section

Add a concise **Architecture decisions** section covering:

- why Next.js;
- why server-first;
- why local typed content;
- why no CMS;
- why limited motion;
- why the dependency set is intentionally small;
- how the site could grow into real article routes/CMS.

## Do not do

- no analytics “because production”;
- no paid monitoring;
- no extra deployment SDK unless actually required.

## Exit criteria

- live URL loads correctly;
- build is reproducible;
- README explains reasoning;
- repository remains clean.

## Suggested commit

`docs: document architecture decisions and deployment handoff`

---

# Final completion checklist

Do not call the project finished until all applicable boxes are true.

## Product

- [ ] It is clearly a cybersecurity editorial homepage.
- [ ] The content hierarchy is understandable immediately.
- [ ] Learning/curriculum intent is represented.
- [ ] No fake startup claims exist.
- [ ] Scope still matches the assignment.

## Design

- [ ] Typography is consistent.
- [ ] Color use matches `Design.md`.
- [ ] Accent cyan is restrained and consistent with `Design.md`.
- [ ] No excessive glow/glass/gradient tropes.
- [ ] No stock cyber-hacker imagery.
- [ ] Desktop and mobile both feel composed.
- [ ] No excessive unused whitespace.

## Engineering

- [ ] `npm run lint` passes.
- [ ] `npm run build` passes.
- [ ] No avoidable `"use client"` boundaries.
- [ ] No unnecessary state library.
- [ ] Content is typed and separated from presentation.
- [ ] No dead links pretending to work.
- [ ] No console errors.
- [ ] No unnecessary dependencies.

## Accessibility

- [ ] Keyboard navigation works.
- [ ] Focus styles are visible.
- [ ] One `h1`.
- [ ] Heading hierarchy is valid.
- [ ] Icon buttons have labels.
- [ ] Reduced motion is respected.
- [ ] Contrast is acceptable.

## Security

- [ ] No secrets.
- [ ] No unapproved external scripts.
- [ ] No unsafe HTML rendering.
- [ ] No hidden form submission.
- [ ] No unexpected tracking.

## Delivery

- [ ] Production URL tested.
- [ ] README contains architecture reasoning.
- [ ] Authority docs remain aligned with code.
- [ ] Any deviation is documented rather than hidden.
