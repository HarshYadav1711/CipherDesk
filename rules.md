# rules.md — Non-Negotiable IDE / AI Development Rules

**Project:** CipherDesk  
**Purpose:** Prevent scope drift, arbitrary AI decisions, dependency creep, and accidental redesign  
**Status:** Highest-authority project document  
**Last reviewed:** 2026-09-04

CipherDesk is the approved **demo product identity** for this hiring frontend exercise. It is not the hiring startup’s company name.

---

# 1. This file is authoritative

These rules apply to Cursor, Claude Code, Codex, Copilot, any other coding agent, and any human-assisted automated refactor.

Before making changes, the agent must read:

1. `rules.md`
2. `PRD.md`
3. `Architecture.md`
4. `Design.md`
5. `phases.md`

If any of these are missing, unreadable, or contradictory, **stop and report the problem**.

Do not guess.

---

# 2. Context-lock requirement

At the beginning of a fresh agent session, the agent must establish a project-context lock before editing.

The agent should internally confirm:

- current phase;
- current approved scope;
- approved stack;
- design direction;
- files allowed to change;
- unresolved decisions;
- acceptance criteria.

The agent must not reinterpret the project as:

- a SaaS landing page;
- a cyberpunk/hacker theme;
- a dashboard;
- a full blog CMS;
- a security scanner;
- an AI product;
- a portfolio site.

It is a **cybersecurity editorial/research homepage demo**.

---

# 3. No arbitrary decisions

The IDE/agent must not make consequential product, design, or architecture decisions merely because they “look better” or are common in generated projects.

If a requirement is not covered by the documentation and the decision would affect:

- scope;
- route structure;
- dependencies;
- architecture;
- design tokens;
- typography;
- colors;
- major layout;
- content model;
- third-party services;
- data collection;
- security;
- deployment behavior;

the agent must stop and ask for review.

Do not silently choose.

---

# 4. Change classification

## GREEN — may proceed without separate approval

Only when already authorized by the current phase:

- implementing an already-specified component;
- fixing a TypeScript error without changing behavior;
- fixing lint errors;
- correcting responsive overflow;
- applying an existing token consistently;
- improving semantics/accessibility without changing product behavior;
- refactoring repeated local code without changing architecture;
- fixing a clear bug.

## YELLOW — implement only if the phase explicitly allows it, then report it

Examples:

- small spacing correction within the documented system;
- minor copy cleanup that does not introduce facts;
- moving a helper to a more appropriate existing folder;
- extracting a genuinely repeated UI primitive;
- reducing an animation for performance.

Report the change in the phase summary.

## RED — must receive explicit review before implementation

Examples:

- adding a package;
- removing a package;
- changing framework;
- adding a CMS;
- adding database/auth/backend;
- changing brand name;
- changing the color system;
- changing fonts;
- introducing a component library;
- introducing GSAP/Three.js/WebGL;
- adding analytics;
- adding newsletter providers;
- adding search;
- adding article routes outside the approved optional phase;
- restructuring most folders;
- replacing Tailwind;
- switching deployment platform in a way that changes code;
- adding any API;
- adding external fonts/scripts;
- introducing a new major homepage section;
- rewriting approved copy direction;
- adding tracking/cookies;
- adding a contact form that sends data;
- enabling data collection.

---

# 5. Dependency policy

Dependencies are liabilities until they solve a real problem.

Before adding a dependency, the agent must verify:

1. the problem cannot be reasonably solved with the existing stack;
2. the project actually needs the feature;
3. the package is actively maintained;
4. the package is stable;
5. the package is compatible with the approved runtime/framework;
6. the package is not deprecated or EOL;
7. the license is suitable;
8. it does not require a paid account;
9. it does not require a credit card to begin using the required feature;
10. it does not add hidden telemetry or remote execution.

Then it must request approval if the package was not already approved in `Architecture.md`.

---

# 6. Stable-version rule

Use the **latest stable compatible version**.

Do not use:

- alpha;
- beta;
- canary;
- nightly;
- experimental;
- release candidate;
- abandoned package;
- EOL runtime;
- deprecated API.

A newer major version that breaks compatibility is **not** automatically preferred over the stable compatible version.

Do not upgrade packages during unrelated UI work.

---

# 7. No paid or card-gated tools

Do not add or depend on any service that:

- charges for the required demo functionality;
- requires a credit card for initial setup;
- requires paid API credits;
- requires a paid plugin;
- creates a billing account as part of setup.

If a service has a free tier but the required flow asks for a payment method, reject it for this project unless the user explicitly changes this rule.

This includes APIs, design-generation tools, analytics, CMS providers, email providers, asset services, deployment tools, and AI services.

Local development must work without paid infrastructure.

---

# 8. No hidden external services

The agent must not silently connect:

- analytics;
- telemetry;
- tracking pixels;
- hosted forms;
- newsletter APIs;
- CMS;
- authentication;
- remote databases;
- remote feature flags;
- error-reporting SaaS;
- advertising;
- chat widgets.

A static-looking form must not secretly transmit data.

---

# 9. No scope creep

The hiring manager asked for a landing-page demo.

Do not turn it into:

- a full publication;
- an admin panel;
- a CMS;
- a vulnerability database;
- a login system;
- an AI assistant;
- a community platform;
- a course LMS;
- a complex backend.

Optional architecture can be planned, but unapproved features must not be built.

---

# 10. No unrelated file changes

When working on a phase:

- touch only files required for that phase;
- do not rewrite unrelated code;
- do not rename folders casually;
- do not reformat the entire project unless explicitly requested;
- do not change package scripts without need;
- do not delete comments/documentation that still describe current behavior;
- do not change configuration because “this is cleaner” unless needed.

Every modified file must have a reason tied to the active task.

---

# 11. Design lock

`Design.md` is the design source of truth.

The agent must not independently change:

- palette;
- fonts;
- radius scale;
- container width;
- major spacing rhythm;
- editorial direction;
- section order;
- header behavior;
- motion philosophy;
- card treatment;
- light/dark section strategy.

Small responsive adjustments are allowed when needed to preserve the design intent.

Major visual experiments require review before implementation.

---

# 12. Anti-generic-UI rule

Do not “improve” the design by adding common AI/template tropes.

Forbidden unless explicitly approved:

- giant blurred gradient orbs;
- excessive glassmorphism;
- neon glow around every card;
- generic mesh gradients;
- 3D floating spheres;
- random terminal windows;
- Matrix-style code rain;
- fake command prompts;
- giant shield/lock stock art;
- cyberpunk background grids covering every section;
- excessive pills;
- cards inside cards inside cards;
- every section having a badge + huge heading + centered paragraph;
- every element animating on scroll;
- excessive rounded corners;
- enormous whitespace used only to make the page “premium”;
- made-up dashboard screenshots;
- fake security metrics.

The design should be editorial and technical, not theatrical.

---

# 13. Reference-site rule

Reference websites may be studied for:

- information hierarchy;
- spacing;
- typography;
- navigation patterns;
- motion principles;
- content organization.

Do not:

- copy their layout one-for-one;
- copy distinctive text;
- copy illustrations;
- copy proprietary icons;
- copy exact color systems;
- copy branded patterns.

If the result is recognizably a clone of one reference, redesign it.

---

# 14. Component-source rule

Sites such as shadcn/ui, 21st.dev, Aceternity, Magic UI, Mobbin, Recent, Lapa Ninja, and similar resources are references or implementation aids.

Do not paste a component into the project without:

- understanding its code;
- checking its license/source;
- removing unnecessary dependencies;
- adapting it to project tokens;
- verifying accessibility;
- verifying performance;
- ensuring it does not dominate the visual identity.

The project should not look like a component showcase.

---

# 15. AI-generated code comprehension rule

Every generated code change must be understandable.

The agent must prefer:

- clear names;
- small functions;
- explicit data flow;
- standard platform APIs;
- readable component boundaries.

Avoid cleverness that makes interview explanation harder.

If a generated implementation cannot be clearly explained in simple terms, simplify it.

---

# 16. No fake facts

Never invent startup facts.

Do not create:

- customer names;
- partnerships;
- funding numbers;
- reader counts;
- security certifications;
- employee counts;
- founding year;
- office locations;
- awards;
- testimonials;
- incident statistics;
- product claims.

Sample article titles are allowed as fictional editorial content, but they must not be described as real published research unless that becomes true.

---

# 17. No fake functionality

Do not create UI that appears operational when it is not.

Examples:

- search button that goes nowhere;
- “Subscribe” form that pretends success but stores nothing;
- article links leading to 404;
- filter controls that do not filter;
- login button without login;
- progress indicators with fake user progress.

For a visual-only element, either make its limitation clear in the implementation or choose a non-interactive presentation.

---

# 18. Content quality rule

Avoid filler such as:

- “Empowering the future of cybersecurity.”
- “Stay ahead of evolving threats.”
- “Secure tomorrow, today.”
- “Revolutionizing security through innovation.”

Use concrete editorial language.

Shorter and more specific is preferred.

---

# 19. Performance rule

Never add visual polish at the cost of obvious performance problems.

Default choices:

- Server Components;
- semantic HTML;
- CSS transitions;
- optimized SVG;
- restrained assets;
- no heavy script for decoration.

Before adding a JS animation:

1. ask whether CSS can do it;
2. ask whether the animation improves understanding or quality;
3. verify reduced-motion behavior.

---

# 20. Client-component rule

Do not add `"use client"` to:

- `app/page.tsx`;
- root layout;
- entire homepage section trees;

unless browser state is genuinely required at that level.

Keep client boundaries small.

---

# 21. State-management rule

Do not install or introduce:

- Redux;
- Zustand;
- MobX;
- Jotai;
- TanStack Query;

for the baseline.

Use local state for local interaction.

If later requirements create real shared state, propose the simplest solution first.

---

# 22. API/data rule

No network API is required for the baseline.

Do not add Axios.

Use local typed content.

If a network boundary is later approved, prefer native `fetch` unless another requirement justifies a library.

---

# 23. Security rule

Do not:

- commit secrets;
- use hard-coded tokens;
- add `dangerouslySetInnerHTML` casually;
- add remote scripts;
- bypass TypeScript errors;
- suppress security warnings just to pass a build;
- use `eval`;
- use untrusted HTML;
- store sensitive information in localStorage.

If a security trade-off appears, report it rather than hiding it.

---

# 24. Accessibility rule

Do not sacrifice accessibility for styling.

Required:

- semantic elements;
- keyboard access;
- focus styles;
- labels on icon buttons;
- accessible contrast;
- heading order;
- reduced motion.

Do not create a custom clickable `<div>` when a button/link exists.

---

# 25. Responsive rule

Do not “fix” mobile by:

- hiding important content unnecessarily;
- shrinking text below readable sizes;
- allowing horizontal scroll;
- stacking every element without reviewing hierarchy.

Mobile must feel composed.

Test at the widths listed in `PRD.md`.

---

# 26. Documentation-change rule

The agent may not rewrite these authority documents on its own.

If implementation reveals a better decision:

1. describe the issue;
2. propose the documentation change;
3. wait for approval;
4. update the relevant document;
5. then implement.

Code must not silently drift away from documentation.

---

# 27. Phase gate rule

Follow `phases.md`.

Do not automatically continue to the next phase after completing one.

At each phase end, report:

- what was built;
- files changed;
- dependencies changed;
- lint/build status;
- responsive status;
- deviations;
- unresolved decisions.

Then wait for review if the workflow is being run interactively.

---

# 28. Error-handling rule

If a command fails:

- read the error;
- identify root cause;
- make the smallest relevant fix;
- do not upgrade half the project;
- do not delete lockfiles;
- do not disable lint/types;
- do not replace the architecture unless necessary.

Never use “nuclear” fixes for local errors.

---

# 29. Package-lock rule

Use one package manager and one lockfile.

Baseline: **npm** with the Node 24 LTS toolchain unless the user explicitly chooses another.

Do not create:

- `package-lock.json` and `pnpm-lock.yaml`;
- `yarn.lock` and `package-lock.json`;
- multiple competing lockfiles.

Do not delete the lockfile to make an install “work” without understanding why.

---

# 30. Quality gates before claiming completion

The agent must not say a phase is complete unless the relevant checks pass.

Final required checks:

```bash
npm run lint
npm run build
```

Also inspect:

- browser console;
- mobile width;
- desktop width;
- keyboard focus;
- reduced motion;
- broken links;
- horizontal overflow.

If a check cannot be run, say so clearly.

---

# 31. Definition of “professional”

For this project, professional does **not** mean “more effects.”

Professional means:

- intentional hierarchy;
- consistent visual system;
- accurate content;
- predictable interaction;
- readable code;
- coherent architecture;
- fast load;
- responsive behavior;
- no fake claims;
- no unexplained dependency bloat.

---

# 32. Agent stop conditions

Stop and ask for review when:

- requirements conflict;
- a new package seems necessary;
- the approved layout cannot satisfy a requirement;
- a design token needs to change globally;
- a third-party service is required;
- a paid/card-gated tool appears unavoidable;
- a requested stable version is incompatible;
- implementation would require fake functionality;
- a security concern cannot be resolved within scope;
- the next change would exceed the current phase.

When uncertain, do not improvise a new product direction.
