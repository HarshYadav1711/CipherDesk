# Design.md — CipherDesk Design System

**Project:** CipherDesk  
**Design direction:** Cybersecurity Research Desk  
**Status:** Approved visual baseline  
**Last reviewed:** 2026-09-04

CipherDesk is the approved **demo product identity** for this hiring frontend exercise. It is not the hiring startup’s company name.

### Locked color identity

| Role | Value | Token |
| --- | --- | --- |
| Primary dark | `#1C1C28` | `--ink` |
| Primary cyan accent | `#1EC1CB` | `--accent` |
| Primary light text | `#F4F4F1` | `--text-on-dark` / `--paper` |

Do not introduce acid-green, neon-green, or competing accent hues.

---

## 1. Design objective

The page must solve the feedback that previous live projects looked “too basic” without overcorrecting into an effects-heavy template.

The visual system should feel like:

- a modern independent technical publication;
- a security research desk;
- a product made by engineers with strong editorial taste;
- a site where serious technical writing would feel credible.

The core design idea is:

> **Editorial clarity with technical precision.**

The page should look authored through typography, grid, proportion, and restrained detail.

It should not depend on expensive artwork or heavy animation to feel finished.

---

## 2. Why this direction

Cybersecurity sites often fall into one of two extremes:

1. generic enterprise SaaS;
2. “hacker” visual clichés.

Neither is ideal for this assignment.

A research/editorial direction is better because the hiring manager explicitly asked for:

- articles;
- posts;
- blogging-homepage behavior;
- educational material.

This direction therefore comes from the product requirement, not from decoration.

---

# 3. Visual personality

Use these words as a design filter:

- precise;
- editorial;
- restrained;
- technical;
- confident;
- modern;
- slightly experimental;
- readable;
- purposeful.

Avoid:

- flashy;
- gamer-like;
- cyberpunk;
- playful startup gradients;
- glass-heavy;
- corporate stock-photo;
- overly luxurious;
- cartoon security imagery.

---

# 4. Light/dark composition strategy

The page should not be a flat black cybersecurity site. Its primary visual identity is now built around a **deep blue-violet charcoal (`#1C1C28`) paired with a restrained cyan (`#1EC1CB`)**.

The dark surface gives the site a more distinctive technical character than plain black, while the warm-paper sections preserve the editorial pacing that makes the page feel like a serious publication rather than a dashboard.

Use **midnight and warm-paper surfaces** in this rhythm:

```text
Header                    midnight (#1C1C28)
Hero + Featured Story     midnight (#1C1C28)
Latest Research           warm paper
Topic Index               warm paper / midnight boundary treatment
Learning Tracks           midnight / raised midnight
Final CTA                  midnight with restrained cyan emphasis
Footer                    midnight
```

This combination is intentional:

- `#1C1C28` gives the dark UI a subtle blue-violet depth instead of generic black;
- `#1EC1CB` feels technical and modern without falling into the usual neon-green hacker aesthetic;
- warm-paper sections prevent the page from becoming visually monotonous;
- cyan remains memorable because it is used selectively rather than across every component.

---

# 5. Color system

## Core tokens

```css
:root {
  --ink: #1C1C28;
  --ink-raised: #242433;
  --ink-soft: #2B2B3C;

  --paper: #F4F4F1;
  --paper-raised: #FAFAF7;

  --text-on-dark: #F4F4F1;
  --text-on-light: #17171F;

  --muted-on-dark: #AAAAB7;
  --muted-on-light: #666674;

  --border-dark: #343446;
  --border-dark-strong: #45455A;
  --border-light: #D8D8D1;

  --accent: #1EC1CB;
  --accent-hover: #27D2DC;
  --accent-soft: rgba(30, 193, 203, 0.12);
  --accent-ink: #12121A;
}
```

## Why these colors

### `--ink: #1C1C28`

This is the primary website color.

It is dark enough to create strong contrast and a serious technical mood, but the blue-violet undertone gives it more identity than pure black or a generic neutral charcoal. It also provides a strong foundation for white typography, thin borders, and sparse technical graphics.

### Raised dark surfaces

`#242433` and `#2B2B3C` create hierarchy without relying on large shadows or glassmorphism.

Use them for selected panels, mobile navigation, the featured story surface, or other places where one dark layer needs to separate from another. They must not be used to turn every block into a card.

### `--paper: #F4F4F1`

Warm off-white rather than pure white.

It retains the editorial/print quality of the earlier direction and gives long content-heavy sections a comfortable reading surface. The slightly warm tone also prevents the cyan/dark palette from feeling sterile.

### `--accent: #1EC1CB`

This cyan/teal is the primary accent.

It was chosen because it feels modern, technical, precise, and security-adjacent without resorting to the familiar neon-green hacker look. Against `#1C1C28` it has strong visual contrast, so a small amount is enough to establish identity.

Good uses:

- category and research labels;
- active navigation indicators;
- small arrows and directional affordances;
- primary CTA background;
- focus rings;
- thin technical diagram lines;
- selected metadata;
- subtle border or hover emphasis.

Bad uses:

- every heading;
- long paragraphs;
- large full-width backgrounds;
- all card borders;
- oversized cyan glows;
- gradients that make cyan dominate the page;
- multiple competing cyan shades added without a documented reason.

### Contrast rule for cyan controls

When `#1EC1CB` is used as a button or solid interactive surface, use the approved dark `--accent-ink` text rather than white text. The cyan is intentionally bright, so dark foreground text creates the clearer control treatment.

### Accent discipline

The cyan should usually occupy much less visual area than the background and text colors. If a screenshot looks predominantly cyan, the accent has been overused.

---

# 6. Typography

## Font family

### Primary

**Geist Sans**

Use for:

- hero heading;
- section headings;
- body;
- navigation;
- cards;
- buttons.

### Secondary

**Geist Mono**

Use for:

- categories;
- dates;
- reading time;
- index numbers;
- small labels;
- technical metadata.

Do not use Geist Mono for long body paragraphs.

---

# 7. Type scale

Use responsive CSS/clamp where appropriate.

Suggested scale:

```text
Display / Hero:
mobile: 44–54 px
desktop: 72–92 px
line-height: 0.95–1.02
tracking: slightly tight

H2:
mobile: 34–40 px
desktop: 48–60 px
line-height: 1.0–1.08

H3 / article title large:
24–34 px

Card title:
18–24 px

Body large:
18–20 px

Body:
16–18 px

Metadata:
12–13 px mono
```

## Why

The hero needs enough scale to immediately feel designed, but it should not become a 120 px headline that creates unused space.

The content itself must remain the focus.

---

# 8. Text measure

Long text must not span the whole page.

Recommended:

- normal body: ~60–72 characters per line;
- hero supporting copy: approximately 40–55 characters per line;
- article excerpt: 45–65 characters per line.

Wide containers do not mean wide paragraphs.

---

# 9. Layout grid

## Main container

Use a maximum content width around:

```text
1280 px
```

With responsive side padding:

```text
mobile: 16–20 px
tablet: 24–32 px
desktop: 40 px
```

Do not exceed the max width simply because a large monitor is available.

## Desktop grid

Think in a **12-column editorial grid**.

The implementation does not need a literal grid overlay.

Use the mental model for composition:

- hero copy: 6–7 columns;
- featured story: 4–5 columns;
- intentional gap between them.

## Why

This creates asymmetry and editorial tension while still aligning the page.

---

# 10. Vertical rhythm

Avoid both extremes:

- cramped startup dashboard;
- luxury-site blank space.

Recommended section vertical padding:

```text
mobile: 64–80 px
tablet: 80–104 px
desktop: 96–128 px
```

Hero can be slightly larger but must not use `min-height: 100vh`.

Use spacing to group information, not to fill the screen.

---

# 11. Radius system

The page should not be a sea of pills.

Approved scale:

```text
small controls: 6 px
standard cards: 10–12 px
large feature panel: 14 px maximum
pill: 999 px only for genuine tags/status chips
```

Most editorial blocks can also use square or very slightly rounded corners.

## Why

Moderate radii feel modern while preserving the sharper research/publication personality.

---

# 12. Border and shadow philosophy

Prefer:

- 1 px borders;
- changes in surface;
- typography;
- spacing.

Use shadow rarely.

Do not make every card float.

A card can look interactive through:

- border shift;
- subtle surface shift;
- arrow movement;
- title underline;
- tiny transform.

---

# 13. Header design

## Desktop

Height approximately 64–72 px.

Structure:

```text
[ SITE MARK ]    Research   Topics   Learning   About        [ Browse research → ]
```

Use a bottom border or subtle surface separation.

The site mark should be typographic **CipherDesk** text. Do not generate a fake logo or imply CipherDesk is the hiring startup’s legal company name.

## Mobile

Use:

- site mark;
- one menu button;
- compact full-width navigation panel when opened.

The menu must be keyboard accessible.

## Why

The publication should feel established through structure, not logo complexity.

---

# 14. Hero composition

Do not use the normal centered SaaS template.

Desktop concept:

```text
┌──────────────────────────────────────────────────────────┐
│ RESEARCH / APPLICATION SECURITY                          │
│                                                          │
│ Understand the systems          ┌──────────────────────┐ │
│ attackers depend on.            │ FEATURED             │ │
│                                 │                      │ │
│ Practical research,             │ Inside the Browser   │ │
│ engineering notes and           │ Security Model       │ │
│ security deep dives.            │                      │ │
│                                 │ category · read time │ │
│ Explore research →              └──────────────────────┘ │
└──────────────────────────────────────────────────────────┘
```

The exact copy can be refined, but the composition is authoritative.

## Background detail

Allowed:

- sparse CSS grid line;
- tiny coordinates;
- one technical line motif;
- extremely subtle SVG.

Not allowed:

- full-page matrix rain;
- particle system;
- huge glowing object;
- fake terminal pane competing with the content.

---

# 15. Featured story design

The feature panel should feel like the cover story of a publication.

Possible visual tools:

- strong title;
- category in mono;
- one number/issue marker;
- thin border;
- asymmetric inner layout;
- small arrow;
- very restrained abstract line graphic.

No stock image required.

If an image is later added, it must be editorially useful and licensed.

---

# 16. Latest Research section

Background: warm paper.

This section should prove the site is a publication.

Recommended hierarchy:

```text
Latest Research                         View all (only if real)

[ Large lead story ]
----------------------------------------------
[ Article ] [ Article ]
[ Article ] [ Article ]
```

Or:

```text
lead article: 6–7 columns
side list:    5–6 columns
```

## Article card contents

- category;
- title;
- short excerpt on larger cards;
- date/read time;
- small directional affordance if link is real.

## Hover

Use one or two of:

- border darkens;
- title underline grows;
- arrow moves 2–4 px;
- surface shifts slightly.

No 3D tilt.

---

# 17. Topic Index

This should feel more like an editorial index than a grid of SaaS feature cards.

Example:

```text
01  Web Security          Browser boundaries, CSP, CORS...      →
02  AppSec                Secure application architecture...     →
03  Identity              Sessions, OAuth, authorization...      →
04  Cloud                 Cloud attack surfaces and controls...  →
```

This format is distinctive, information-dense, and avoids card fatigue.

On mobile, each row becomes a clean stacked item.

---

# 18. Learning Tracks

This section exists to reflect the educational-platform requirement.

Dark background.

Concept:

```text
LEARNING PATH

01 Fundamentals
   ↓
02 Browser Security
   ↓
03 Authentication
   ↓
04 API Security
   ↓
05 Secure Architecture
```

Desktop can use a horizontal or staggered progression if it remains readable.

Mobile should use a vertical progression.

Do not make it look like fake user progress.

It is a curriculum map, not a dashboard.

---

# 19. Newsletter / CTA

Avoid the standard giant gradient box.

Preferred tone:

```text
Security research worth opening.

New technical breakdowns and practical engineering notes,
without the noise.
```

If there is no real integration:

- use a “Read the latest research” CTA instead; or
- visually show the email field only if the user explicitly approves a non-submitting prototype.

Do not fake a successful subscription.

---

# 20. Footer

Dark.

Keep dense and useful.

Possible structure:

```text
Site mark / short statement

Research
Topics
Learning
About

Small legal/copyright line if appropriate
```

Avoid fake social links.

A small line such as:

> Built for people who want to understand why.

is acceptable as brand-neutral microcopy if approved.

---

# 21. Buttons

## Primary button

- accent background;
- dark text;
- moderate radius;
- compact;
- clear arrow if useful.

Do not make buttons enormous.

## Secondary action

Prefer text link + arrow.

Editorial sites often feel better with links than with multiple boxed buttons.

---

# 22. Tags and metadata

Use mono, uppercase or small caps carefully.

Example:

```text
WEB SECURITY · 12 MIN READ
```

Tags should not become rounded pills everywhere.

A plain text label with letter spacing is often better.

---

# 23. Illustration system

The project does not need a full illustration library.

If decorative technical graphics are used:

- draw them with local SVG/CSS;
- use thin lines;
- reuse design tokens;
- keep opacity low;
- make them abstract enough not to imply fake data.

Examples:

- node graph;
- boundary diagram;
- browser-origin boxes;
- coordinate marks.

Do not use fake live-network telemetry.

---

# 24. Motion system

## Principle

Motion should confirm interaction, not perform for the user.

### Micro-interactions

Duration:

```text
120–200 ms
```

Use for:

- hover;
- underline;
- arrow shift;
- border/surface transition.

### Section entrance

Only if used:

```text
250–500 ms
```

Use small opacity/translate changes.

No large travel distance.

### Reduced motion

When `prefers-reduced-motion: reduce` is active:

- remove nonessential movement;
- preserve visibility;
- preserve state changes without animation.

---

# 25. Responsive behavior

## Mobile

Key principles:

- preserve hierarchy;
- reduce display size gracefully;
- stack hero before featured story;
- remove nonessential decorative graphics;
- keep metadata readable;
- use full-width article rows where needed;
- use vertical learning path;
- maintain 16–20 px side padding.

Do not simply shrink the desktop grid.

## Tablet

Use a hybrid composition.

Avoid awkward two-column cards if the width produces cramped titles.

## Desktop

Use more asymmetry and white-space control.

Desktop should feel richer through grid arrangement, not through adding more decoration.

---

# 26. Focus and interaction states

Every interactive element must have:

- normal;
- hover where pointer exists;
- keyboard focus;
- active/pressed where relevant;
- disabled only if a real disabled state exists.

Focus ring suggestion:

- 2 px visible outline using accent or strong contrasting token;
- offset enough to avoid blending into the element.

Never remove outline without replacement.

---

# 27. Empty-space rule

Whitespace is intentional breathing room.

It must not become unused real estate.

A section should earn its height through:

- hierarchy;
- content;
- composition;
- reading comfort.

Avoid:

- full-screen sections with two lines;
- 200 px gaps between unrelated blocks;
- oversized top/bottom padding because “premium websites have space.”

---

# 28. Copy style

Tone:

- technically literate;
- concise;
- specific;
- calm;
- not corporate;
- not slang-heavy;
- not fear-mongering.

Prefer:

> Practical research on browser boundaries, identity, APIs and secure architecture.

Avoid:

> Stay one step ahead of tomorrow's cyber threats with cutting-edge insights.

---

# 29. “Human-designed” visual checklist

Before finalizing a section, ask:

- Is there a reason for this layout?
- Is the hierarchy clear without animation?
- Did we reuse the design system?
- Is any element here only because a template usually has it?
- Are there too many cards?
- Are there too many pills?
- Are all corners rounded for no reason?
- Is the cyan accent still selective and special?
- Does the typography do enough of the visual work?
- Does the mobile version feel authored?

If not, simplify.

---

# 30. Reference principles

Study modern cybersecurity/editorial/product sites for principles, not copying.

Useful things to observe:

- content density;
- typographic scale;
- technical metadata;
- navigation;
- restrained motion;
- editorial card hierarchy;
- responsive transformation.

Do not combine five recognizable reference designs into a collage.

The final page must have one coherent system.

---

# 31. Design decisions and their reasoning

## Decision: alternating ink and paper surfaces

**Reason:** prevents the all-black “hacker site” cliché and creates editorial pacing.

## Decision: deep blue-violet charcoal + one restrained cyan accent

**Reason:** `#1C1C28` gives the dark interface a distinctive, premium technical foundation, while `#1EC1CB` adds a modern security-oriented signal without falling into the stereotypical neon-green hacker aesthetic. The cyan is intentionally sparse so it remains meaningful.

## Decision: Geist Sans + Mono

**Reason:** clean modern readability plus technical metadata character.

## Decision: borders over heavy shadows

**Reason:** research/editorial interfaces benefit from precision and flat information hierarchy.

## Decision: low radius

**Reason:** reduces generic SaaS softness and makes the page feel more technical.

## Decision: asymmetric hero

**Reason:** shows stronger composition than a standard centered landing-page template.

## Decision: topic index instead of feature-card grid

**Reason:** reduces card fatigue and feels more like a publication.

## Decision: no stock cyber image

**Reason:** avoids cliché and improves performance/licensing simplicity.

## Decision: limited motion

**Reason:** the job values Core Web Vitals and architecture. Motion should not create avoidable client weight.

## Decision: no fake dashboard

**Reason:** the product is editorial content, and the demo should represent the real brief.

---

# 32. Design change protocol

The IDE may not independently change the design system.

A proposal to change any of these requires review:

- core palette;
- font family;
- major type scale;
- grid/container width;
- section order;
- light/dark rhythm;
- radius system;
- major hero composition;
- topic-index format;
- learning-track concept.

A proper proposal must say:

1. what problem was observed;
2. where it occurs;
3. why the current design cannot solve it responsively;
4. what change is proposed;
5. what other sections the change affects.

No “I changed it because it looked nicer.”
