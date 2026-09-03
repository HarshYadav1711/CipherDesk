# PRD.md — CipherDesk

**Document type:** Product Requirements Document  
**Project:** CipherDesk  
**Purpose:** Hiring demo for an early-stage cybersecurity startup  
**Status:** Approved baseline for implementation  
**Last reviewed:** 2026-09-04

CipherDesk is the approved **demo product identity** for this hiring frontend exercise. It is not the hiring startup’s company name.

---

## 1. Why this project exists

The hiring manager asked for a **single landing page related to cybersecurity articles and posts, similar to a blogging website homepage**.

This demo is not meant to prove that we can make the loudest landing page. It is meant to prove that we can take a loose product request and turn it into a polished, maintainable, fast, responsive web experience with clear technical reasoning.

The job post makes the evaluation criteria unusually clear. The developer is expected to understand:

- modern web architecture;
- component separation;
- clean data flow;
- responsive UI;
- performance and Core Web Vitals;
- content schemas and dynamic routing;
- secure coding basics;
- architectural trade-offs;
- how AI-generated code works under the hood rather than relying on prompts blindly.

The demo therefore has two jobs at the same time:

1. look refined enough to answer the concern that the applicant's earlier projects were “too basic” visually;
2. quietly demonstrate engineering judgment, restraint, architecture, performance, and maintainability.

---

## 2. Product statement

Build a modern cybersecurity editorial homepage that feels like a real technical publication or research desk.

The visual tone should be:

> serious, technical, editorial, modern, precise, and human-designed.

It should **not** look like:

- a generic SaaS template;
- a neon “hacker” page;
- an AI-generated collage of gradients, glass cards, glowing orbs, terminals, and 3D globes;
- a copied version of an existing security company's website;
- a full product platform disguised as a one-page assignment.

---

## 3. Primary user

The primary visitor is someone interested in technical cybersecurity content, for example:

- a software engineer;
- a security learner;
- an application-security engineer;
- a technical founder;
- a developer interested in practical security concepts.

The visitor should be able to understand within a few seconds:

- what the publication is about;
- what kind of content it publishes;
- what the featured story is;
- where to find recent material;
- what subjects or learning tracks are available.

---

## 4. Secondary user: the hiring manager

This demo must make the hiring manager able to infer the following without us saying it directly:

- the developer can create a non-basic UI;
- the developer can translate requirements into structure;
- the developer understands content-driven interfaces;
- the developer avoids unnecessary dependencies;
- the developer understands responsive design;
- the developer thinks about performance early;
- the code is organized in a way that can grow later;
- architectural choices were intentional;
- AI was used as an accelerator, not as a substitute for technical judgment.

---

## 5. Scope

### 5.1 Required scope

The first approved version is a **single responsive homepage** with these sections:

1. global header;
2. editorial hero;
3. featured article;
4. latest research/articles;
5. topic index;
6. educational learning tracks;
7. restrained subscription/newsletter CTA;
8. footer.

### 5.2 Optional scope

Only after the homepage is complete and approved:

- `/articles/[slug]` article route;
- `/topics/[slug]` topic route;
- working article filters;
- headless CMS integration;
- real newsletter integration;
- analytics;
- search;
- authentication;
- database;
- admin dashboard.

These are **not part of the initial implementation**.

The IDE/agent must not add them by itself.

---

## 6. Non-goals

The following are deliberately outside the MVP:

- user accounts;
- login/register;
- payments;
- comments;
- real-time functionality;
- backend services;
- database;
- third-party CMS;
- AI chatbot;
- live vulnerability feeds;
- security scanning SaaS integration;
- paid APIs;
- analytics SDKs;
- cookie banners unless a real tracking requirement is added;
- elaborate WebGL/Three.js scenes;
- videos or autoplay media;
- a large component library;
- a fully functional publication backend.

The project is a UI and frontend-architecture demo, not an attempt to build the startup's complete product before being hired.

---

## 7. Required information architecture

### Header

Required:

- typographic CipherDesk site mark (text only; do not invent a logo);
- Research;
- Topics;
- Learning;
- About;
- one restrained CTA or anchor to content;
- mobile menu at narrow widths.

The approved demo product name is **CipherDesk**. Use a clearly isolated constant such as `SITE_NAME = "CipherDesk"`.

Do **not** invent or imply the hiring startup’s real company name. CipherDesk is demo/product identity only.

### Hero

The hero should introduce the publication through editorial messaging rather than a conventional SaaS sales headline.

It should contain:

- eyebrow/meta line;
- strong editorial heading;
- concise supporting copy;
- one primary action;
- one featured story area.

The hero must not occupy a full viewport simply for visual drama.

### Latest research/articles

The homepage must visibly behave like a content publication.

Use a clear editorial hierarchy such as:

- one larger lead story;
- a grid/list of recent articles;
- visible categories;
- reading time;
- publication date where appropriate.

Article content is sample editorial content, not claimed current security news.

### Topic index

Approved baseline topics:

- Web Security;
- AppSec;
- Identity;
- Cloud;
- Secure Coding;
- Threat Modelling.

These can be changed later, but the IDE must not invent or add more categories without review.

### Learning tracks

This section exists because the job description mentions educational/curriculum tracks.

Approved initial example progression:

1. Fundamentals;
2. Browser Security;
3. Authentication;
4. API Security;
5. Secure Architecture.

The section should visually communicate progression without pretending that a real course platform already exists.

### Newsletter CTA

This is a design-only CTA in the MVP unless a real provider is later approved.

Do not silently connect a third-party email service.

If there is no backend integration, the form must either:

- be presented as a clearly non-submitting design element; or
- be replaced by a CTA that does not imply actual data collection.

### Footer

Keep it compact.

No fabricated office address, investor list, certifications, customers, social metrics, or company facts.

---

## 8. Content rules

All demo copy must be:

- plausible;
- concise;
- technically sensible;
- not copied from reference sites;
- not presented as a factual claim about the startup unless the startup supplied it;
- not fake social proof.

Forbidden content includes:

- fake customer logos;
- fake CVE discoveries;
- fake “10,000+ readers” metrics;
- fake testimonials;
- fabricated security certifications;
- invented funding information;
- made-up founding dates;
- fake research claims;
- copied article headlines from competitors.

We can create educational sample titles such as:

- “Inside the Browser Security Model”
- “Why CORS Is Not an Access-Control System”
- “JWT Rotation Without Footguns”
- “Threat Modelling a Modern API”
- “Understanding OAuth Trust Boundaries”
- “How Content Security Policy Breaks an XSS Chain”

These are demo editorial titles, not claims of published real-world research.

---

## 9. Visual acceptance criteria

The finished page must:

- feel intentionally designed;
- have a strong typographic hierarchy;
- avoid excessive empty space;
- remain readable at mobile, tablet, laptop, and desktop sizes;
- use one restrained accent color rather than a rainbow palette;
- use consistent spacing and radii;
- use borders and typography more than heavy shadows;
- not rely on stock cybersecurity artwork;
- not require a decorative 3D scene to look complete;
- remain visually coherent if motion is disabled;
- have clear hover, focus, and active states where interaction exists.

A screenshot at 1440 px should look like a coherent product, not a collection of unrelated sections.

A screenshot at approximately 390 px should look intentionally redesigned for mobile rather than squeezed from desktop.

---

## 10. Technical acceptance criteria

The initial implementation must:

- use the approved stack in `Architecture.md`;
- be TypeScript-based;
- use Next.js App Router;
- default to Server Components;
- use client components only where genuine browser interactivity is required;
- keep content separate from presentation;
- have no unnecessary global state library;
- have no database or backend dependency;
- have no paid API;
- have no API requiring a card to start;
- have no deprecated/EOL dependency;
- have no beta/canary/RC package unless explicitly approved;
- pass linting;
- pass the production build;
- contain no unexplained console errors;
- contain no dead navigation that pretends to work;
- respect `prefers-reduced-motion`;
- have keyboard-visible focus styles;
- use semantic elements and sensible heading order.

---

## 11. Performance targets

The project is deliberately designed to make strong performance easier, not to “optimize later.”

Target on a representative production deployment:

- Lighthouse Performance: **90+**
- Lighthouse Accessibility: **95+**
- Lighthouse Best Practices: **95+**
- Lighthouse SEO: **90+**

These are targets, not guarantees. Actual scores depend on the deployment environment and measurement run.

Implementation principles:

- no autoplay video;
- no huge hero image;
- no WebGL;
- no unnecessary third-party JavaScript;
- no analytics in the demo;
- no client-side state framework;
- no animation library usage where CSS is enough;
- no large unoptimized assets;
- server-render static content whenever possible.

---

## 12. Responsive acceptance criteria

Minimum review widths:

- 1440 px;
- 1280 px;
- 1024 px;
- 768 px;
- 390 px;
- 360 px.

Also test one narrow case near 320 px if practical.

The page must have:

- no horizontal overflow;
- no clipped text;
- no inaccessible menu;
- no overlapping cards;
- no tiny tap targets;
- no huge dead zones caused by desktop spacing rules;
- no unreadably long text lines.

---

## 13. Accessibility requirements

Required:

- semantic `header`, `nav`, `main`, `section`, `article`, and `footer` where appropriate;
- exactly one page-level `h1`;
- logical heading hierarchy;
- accessible names on icon buttons;
- visible keyboard focus;
- sufficient text contrast;
- no information communicated by color alone;
- motion reduced when the user prefers reduced motion;
- meaningful links and button labels;
- decorative SVGs hidden from assistive technology where appropriate.

---

## 14. Security requirements for the demo

Even though the project is primarily a frontend demo, the code should reflect security-aware habits.

Required:

- no use of `dangerouslySetInnerHTML` unless a future requirement makes it necessary and sanitization is approved;
- no secrets in the repository;
- no hard-coded API tokens;
- no third-party trackers by default;
- no untrusted remote scripts;
- no dependency added merely for visual convenience;
- external links use safe behavior where required;
- no fake security badges;
- no client-side storage of anything sensitive because no sensitive feature exists.

---

## 15. Success definition

The demo succeeds when the hiring manager can open the deployed URL and reasonably think:

> “This person understood the brief, can design beyond basic CRUD UI, and made the page like an engineer who thinks about architecture rather than a prompt operator.”

The demo should be memorable because of its **clarity, composition, typography, content structure, and restraint**, not because it has the most effects.

---

## 16. Authoritative-document order

If implementation instructions ever conflict, use this order:

1. `rules.md`
2. `PRD.md`
3. `Architecture.md`
4. `Design.md`
5. `phases.md`

If two authoritative documents genuinely conflict, the IDE must **stop and ask for review**. It must not pick whichever interpretation it prefers.
