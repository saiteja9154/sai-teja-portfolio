# IMPLEMENTATION_SPEC.md

**Project:** Sai Teja Revuri — Full Stack Developer Portfolio
**Direction:** FIRST FRAME — a cinematic creative developer portfolio
**Source of truth for design intent:** `DESIGN_RESEARCH.md` (project root)
**Source of truth for facts:** `src/data/portfolioData.js`
**Source of truth for unresolved facts:** `CONTENT_VERIFICATION.md`
**Status:** Specification only. No React component has been edited, no dependency installed, no asset deleted, no deployment setting changed.

---

## 0. How to read this document

Every section from §2 to §11 uses the same seven subheadings so the spec can be implemented and reviewed section by section:

`Visual layout` · `Content sources` · `Components` · `Interactions` · `Desktop` · `Mobile` · `Accessibility`

§12–§17 cover cross-cutting systems: mobile rules, motion, accessibility, performance, component contracts, and assets.

### 0.1 Non-negotiables

1. **React 19 + Vite 8 + Tailwind 4 stay.** No Next.js, no router unless §8 of `CONTENT_VERIFICATION.md` says otherwise.
2. **No new npm packages.** Motion (`framer-motion` 12.40) is already installed and is sufficient. Native `<dialog>`, IntersectionObserver, CSS `clip-path` and `stroke-dashoffset` cover everything else.
3. **No fabricated content.** Every number, role, date and link must trace to `portfolioData.js` or to a confirmed answer in `CONTENT_VERIFICATION.md`.
4. **No fake UI.** Projects without screenshots get a spec sheet, never a mocked dashboard.
5. **No AOS.** One animation runtime only.
6. **No preloader.** The hero still is the loading state.
7. **Remove nothing without approval.** Deprecated files are listed in §17.6, not deleted.

### 0.2 What is being replaced

| Current | Fate |
|---|---|
| `Preloader.jsx` | Removed from the render tree |
| `Navbar.jsx` | Replaced by `ChapterRail` + `MenuSheet` |
| `Hero.jsx` | Replaced by `OpeningFrame` + `CreditBlock` + `ReelPlayer` |
| `About.jsx` | Replaced by `Bio` + `TraceStrip` + `Toolkit` |
| `TechnicalSkills.jsx` | Replaced by `Toolkit` (no percentage bars) |
| `Services.jsx` | Replaced by `MethodStrip` (static, no scroll path) |
| `Projects.jsx` | Replaced by `CutList` + `Scene` |
| `Internships.jsx` + `Certificates.jsx` | Merged into `Record` |
| `SoftSkills.jsx` | Removed; traits folded into `Bio` |
| `Contact.jsx` | Rebuilt |
| `Footer.jsx` | Replaced by `Colophon` |
| `App.css` | Unused; removal pending approval |

---

## 1. Page architecture

### 1.1 Chapter map

Single page, six chapters plus a colophon. Section `id` values are the anchor targets and must exist exactly as written.

| # | Chapter | `id` | Component | Height (desktop) | Purpose |
|---|---|---|---|---|---|
| 00 | OPENING | `opening` | `OpeningFrame` | `100svh` | Who, what, proof of craft |
| 01 | THE CUT | `work` | `CutList` | ~3.6 viewports | Three scenes + index row |
| 02 | THE OPERATOR | `operator` | `Bio` + `TraceStrip` + `Toolkit` | ~2.2 viewports | How he works, what he knows |
| 03 | THE RECORD | `record` | `Record` | ~1.3 viewports | Experience, education, credentials |
| 04 | THE CALL | `contact` | `Contact` | ~1 viewport | Contact |
| — | COLOPHON | `colophon` | `Colophon` | auto | Links, credits, local time |

**Total target page height: 5,000–6,000 px at 1440 px wide** (current: 10,763 px).

### 1.2 Document skeleton

```html
<a class="skip-link" href="#work">Skip to work</a>
<header class="site-header">…</header>      <!-- ChapterRail docked state -->
<main id="main">
  <section id="opening" aria-labelledby="opening-title">…</section>
  <section id="work" aria-labelledby="work-title">…</section>
  <section id="operator" aria-labelledby="operator-title">…</section>
  <section id="record" aria-labelledby="record-title">…</section>
  <section id="contact" aria-labelledby="contact-title">…</section>
</main>
<footer id="colophon">…</footer>
```

Rules: exactly **one `<h1>`** (the name in the hero). Every section heading is `<h2>`. Sub-items are `<h3>`. No heading level skips.

### 1.3 Grid and spacing

| Token | Value | Notes |
|---|---|---|
| `--container` | `1360px` | Max content width |
| `--gutter` | `clamp(20px, 4vw, 64px)` | Outer margin |
| `--col-gap` | `24px` | Column gap |
| Columns | 12 (≥1024), 8 (768–1023), 4 (<768) | CSS Grid |
| `--section-y` | `clamp(96px, 12vh, 160px)` | Vertical rhythm |
| `--rule` | `1px solid rgb(237 231 220 / 0.14)` | Hairline |
| `--radius` | `0` | No rounded cards. Only the focus ring and status dot are round |

### 1.4 Z-index scale

| Layer | z |
|---|---|
| Grain overlay | 1 |
| Aperture bars | 40 |
| Docked header | 50 |
| Menu sheet / reel dialog | 100 (`<dialog>` top layer) |
| Skip link | 110 |

### 1.5 Target file tree

```
src/
  App.jsx                        (rewire only)
  main.jsx                       (unchanged)
  index.css                      (tokens + base + utilities)
  data/
    portfolioData.js             (unchanged; facts)
    site.js                      (NEW: chapter map, hero copy, nav labels)
  hooks/
    useChapter.js                (NEW: IntersectionObserver → active chapter)
    useDialog.js                 (NEW: open/close + focus return helper)
  components/
    layout/
      ChapterRail.jsx
      MenuSheet.jsx
      Colophon.jsx
    opening/
      OpeningFrame.jsx
      CreditBlock.jsx
      ReelPlayer.jsx
    work/
      CutList.jsx
      Scene.jsx
      SceneSlate.jsx
      ShotList.jsx
      MediaFrame.jsx
    operator/
      Bio.jsx
      TraceStrip.jsx
      Toolkit.jsx
      MethodStrip.jsx
    record/
      Record.jsx
    contact/
      Contact.jsx
    primitives/
      Hairline.jsx
      SpecRow.jsx
      Disclosure.jsx
      StatusDot.jsx
public/
  fonts/                          (NEW: 3 woff2 files)
  media/                          (NEW: AVIF/WebP derivatives)
```

---

## 2. Hero composition and layer structure

### 2.1 Visual layout

A letterboxed still at the top, a typographic block beneath it, and a fixed chapter rail at the bottom. The still is the product, not a stock scene.

```
┌──────────────────────────────────────────────────────────────────────┐
│ ST·R                                      REEL 00:12     ● AVAILABLE │  top strip, 56px
├──────────────────────────────────────────────────────────────────────┤
│▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀│  aperture top bar, 32px
│                                                                    │
│              PHARMA NEXUS — INVENTORY  (real screenshot)           │  height: min(52svh, 100vw/2.39)
│              graded, 1px hairline, grain 3%                        │
│                                                                    │
│▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄│  aperture bottom bar, 32px
│                                                                    │
│  SAI TEJA REVURI                                                   │
│  ──────────────────────────────────────────────────────────────    │
│  ROLE      Full-stack engineer, backend bias                       │
│  STACK     Python · FastAPI · React · SQL                          │
│  BASED     Kakinada, IN                                            │
│  STATUS    Open to roles                                ● available │
│                                                                    │
│  I build the API, the schema, and the interface that uses them.    │
│                                                                    │
│  [ Watch the reel ]            See the work →                      │
├──────────────────────────────────────────────────────────────────────┤
│  00 OPENING ──●──────────────── 01 WORK  02 ABOUT  03 RECORD  04 …│  chapter rail, 56px
└──────────────────────────────────────────────────────────────────────┘
```

### 2.2 Layer stack

| z | Layer | Implementation | Notes |
|---|---|---|---|
| 0 | Ink field | `background: var(--color-ink)` | `#08090A`, never `#000` |
| 1 | Still | `<img>` with `fetchpriority="high"`, AVIF + WebP `<picture>` | `object-fit: cover`, `object-position: 50% 40%` |
| 2 | Vignette | `::after` radial-gradient | Static, `pointer-events:none` |
| 3 | Grain | `::before` 128×128 PNG tile, `opacity: .04` | 3–4 KB, `repeat` |
| 4 | Aperture bars | Two absolutely positioned ink rectangles | `aria-hidden`, 32 px, retract on scroll |
| 5 | Content | Grid, `position: relative` | Never overlaps the image except the frame caption |
| 6 | Chapter rail | `position: fixed; bottom: 0` | Becomes a top dock after the hero |

### 2.3 Geometry

| Property | ≥1280 | 768–1279 | <768 |
|---|---|---|---|
| Still height | `min(52svh, calc(100vw / 2.39))` | `min(46svh, calc(100vw / 1.78))` | `min(52svh, 78vw)` |
| Still width | `100%`, content capped at 1600 px centred | 100% | 100% |
| Aperture bars | 32 px | 24 px | 0 (no bars) |
| Name size | `clamp(2.6rem, 7.2vw, 7rem)` | `clamp(2.2rem, 6vw, 4.2rem)` | `clamp(2.4rem, 11vw, 3.2rem)` |
| Hero min-height | `100svh` | `100svh` | `100svh` |
| Bottom padding | 56 px rail + 40 px | 56 px + 32 px | 56 px + 24 px |

The hero uses `min-height`, never fixed height with `overflow: hidden`. Content may flow past the fold on short screens.

### 2.4 Copy

| Element | Copy | Source |
|---|---|---|
| Name | `SAI TEJA REVURI` | `personalInfo.name` |
| Role | `Full-stack engineer, backend bias` | Derived from `personalInfo.title` + `summary`; **requires approval** |
| Stack | `Python · FastAPI · React · SQL` | `technicalSkills`, `aboutContent.techStack` |
| Based | `Kakinada, IN` | `personalInfo.location` |
| Status | `Open to roles` | Confirmed by user in `CONTENT_VERIFICATION.md` |
| Positioning line | `I build the API, the schema, and the interface that uses them.` | New copy, no facts added |
| Primary CTA | `Watch the reel` | — |
| Secondary CTA | `See the work →` | — |

Banned copy patterns: "passionate", "crafting digital experiences", "seamless", "in today's fast-paced world", "not just X, but Y", "a testament to".

### 2.5 Components

- `OpeningFrame` — layout, aperture, scroll trigger.
- `CreditBlock` — four-row definition list.
- `ReelPlayer` — trigger button + native `<dialog>` + `<video>`.
- `StatusDot` — ember dot + text label.
- `Hairline` — the rule above the credit block.

### 2.6 Interactions

| Trigger | Response |
|---|---|
| Page load | Still and text render immediately. Title cut-in after `document.fonts.ready` (max 400 ms cap) |
| Scroll > 60vh | Aperture bars animate height → 0 over 700 ms, once |
| Click `Watch the reel` | `<dialog>.showModal()`, video plays muted, page scroll locked |
| `Esc` / close | Dialog closes, focus returns to the trigger |
| Click `See the work` | Smooth scroll to `#work`, honouring reduced motion |
| Hover primary CTA | Background bone → `#FFF`, 160 ms; no scale |

### 2.7 Desktop

Two-zone composition: full-bleed still, then a 12-column block. Name spans columns 1–7. Credit block spans 1–8 in four columns. Actions sit under the credits, left-aligned. A small mono frame caption sits bottom-right of the still: `FIG. 00 — INVENTORY / PHARMA NEXUS`.

### 2.8 Mobile

Still becomes a 4:5 crop of the same screenshot (separate `<source media="(max-width:767px)">`). Name below the image. Credit block collapses to three rows: `ROLE`, `STACK`, `STATUS` (location moves into the status line as `Kakinada, IN · Open to roles`). CTAs stack full width, primary first. No aperture, no grain animation, no Ken Burns.

### 2.9 Accessibility

- Aperture bars are `aria-hidden` and contain no text.
- The still has a meaningful `alt`: `"Inventory dashboard from Pharma Nexus, showing stock levels and reorder thresholds"`.
- Text sits on the ink field, never on the image, so contrast is fixed at 16.19:1.
- Reel is a real `<button>` with `aria-haspopup="dialog"`; the dialog has an accessible name.
- Video has `playsinline`, `muted`, and a visible mute toggle with `aria-pressed`.
- If the video contains speech, captions and a transcript are required before launch.
- Reduced motion: no cut-in (content visible), no aperture retract, no Ken Burns, no drift.

---

## 3. Typography and font loading plan

### 3.1 Families

| Role | Family | Axes / weights | Files |
|---|---|---|---|
| Display | **Archivo** | variable `wdth 100–125`, `wght 600–800` | 1 WOFF2 (latin subset) |
| Text | **Archivo** | same file, `wdth 100`, `wght 400/500` | reuses the same file |
| Data | **IBM Plex Mono** | 400, 500 | 2 WOFF2 |

Three files total. No Google Fonts request. No Inter. No Caveat. No Impact.

### 3.2 `@font-face` plan

```css
@font-face {
  font-family: "Archivo";
  src: url("/fonts/archivo-var-latin.woff2") format("woff2-variations");
  font-weight: 100 900;
  font-stretch: 62% 125%;
  font-display: swap;
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+2000-206F, U+2122, U+2212;
}
@font-face {
  font-family: "Plex Mono";
  src: url("/fonts/plex-mono-400-latin.woff2") format("woff2");
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: "Plex Mono";
  src: url("/fonts/plex-mono-500-latin.woff2") format("woff2");
  font-weight: 500;
  font-display: swap;
}
```

Preload **only** the Archivo file:

```html
<link rel="preload" href="/fonts/archivo-var-latin.woff2" as="font" type="font/woff2" crossorigin>
```

### 3.3 Scale

| Token | Value | Line-height | Tracking | Use |
|---|---|---|---|---|
| `--text-display-xl` | `clamp(2.6rem, 7.2vw, 7rem)` | 0.92 | `-0.03em` | Hero name |
| `--text-display-l` | `clamp(2rem, 4.6vw, 4rem)` | 0.96 | `-0.025em` | Scene titles |
| `--text-display-m` | `clamp(1.6rem, 2.6vw, 2.25rem)` | 1.05 | `-0.02em` | Chapter openers |
| `--text-lead` | `19px` | 1.6 | `-0.01em` | Hero sentence, section leads |
| `--text-body` | `17px` | 1.65 | 0 | Default |
| `--text-small` | `15px` | 1.55 | 0 | Captions |
| `--text-data` | `11–12px` | 1.2 | `0.12em` | Mono spec rows, timecode |
| `--text-micro` | `13px` | 1.4 | `0.08em` | Footer legal, colophon |

Absolute floor: **14 px** for any text. Footer must not drop below 13 px.

### 3.4 Usage rules

- Display type is uppercase, tight, wide (`font-stretch: 125%`).
- Body type is sentence case, `font-stretch: 100%`.
- Mono is used **only** for real values: timecode, spec labels, coordinates, status, dates. Never as a decorative eyebrow above a heading.
- Maximum measure: 66ch body, 46ch lead.
- No italics except mono for a filename or a single technical term.
- No text-shadow, no gradient text, no outlined text.

### 3.5 Fallback and CLS

- Fallback stack: `"Archivo", "Helvetica Neue", Arial, sans-serif`.
- Hero title is revealed only after `document.fonts.ready` resolves, with a 400 ms timeout so a slow font never blocks the hero.
- All sections below the fold use `font-display: swap` and reserve height, so CLS stays at 0.
- Verify with a Lighthouse run at 4G throttle and a manual "block fonts" test.

### 3.6 Content sources

No content. This section defines the type system only.

---

## 4. Color tokens

### 4.1 Tokens

Declared in `src/index.css` under Tailwind 4 `@theme`:

```css
@theme {
  --color-ink:    #08090A;
  --color-panel:  #101113;
  --color-bone:   #EDE7DC;
  --color-ember:  #FF3B2F;
  --color-ash:    #9A958C;
  --color-dim:    #6E6A63;

  --color-line:   rgb(237 231 220 / 0.14);
  --color-line-strong: rgb(237 231 220 / 0.28);

  --ease-frame: cubic-bezier(0.16, 1, 0.3, 1);
}
```

### 4.2 Contrast matrix (measured)

| Pair | Ratio | Allowed |
|---|---:|---|
| Bone on Ink | **16.19:1** | Body, headings, everything |
| Ember on Ink | **5.62:1** | Text ≥ 18 px, icons, focus ring, rules |
| Ash on Ink | **6.69:1** | Secondary body text |
| Dim on Ink | **3.71:1** | **Decorative only** — rules, disabled, never text |
| Ink on Ember | **5.62:1** | Text on an ember button |
| Ember on Bone | **2.88:1** | **Banned** |
| Bone on Panel | ~15.4:1 | Body |
| Ash on Panel | ~6.4:1 | Secondary |

### 4.3 Usage ratio

Target: **70% ink, 22% bone text, 5% imagery, 3% ember.** Ember is an instrument light, not a surface. There is no full-bleed ember section anywhere.

### 4.4 Forbidden

- Ember text on bone.
- White text on ember.
- Any gradient.
- Any `backdrop-blur`.
- Coloured shadows or glows.
- `text-transparent` with a stroke.
- Ember used as a background for body copy.

---

## 5. Navigation and chapter rail

### 5.1 Visual layout

**State A — in hero (desktop):** fixed bottom rail, 56 px, ink at 92% with a top hairline. Left: `00 OPENING`. Centre: five chapter links with numbers. Right: `CV ↓`. A 1 px progress line runs above the links, filled in ember to the scroll position.

**State B — docked (desktop, after hero):** fixed top bar, 56 px, ink with a bottom hairline. Left: `ST·R` monogram. Centre: current chapter name in mono. Right: `CV ↓` and a `Menu` button that opens the full chapter sheet.

**State C — mobile:** 56 px top bar with monogram, `CV ↓`, and a 44 px menu button. A 2 px ember progress line sits directly under the bar.

### 5.2 Content sources

Chapter labels live in `src/data/site.js`:

```js
export const chapters = [
  { id: "opening",  index: "00", label: "Opening"  },
  { id: "work",     index: "01", label: "Work"     },
  { id: "operator", index: "02", label: "About"    },
  { id: "record",   index: "03", label: "Record"   },
  { id: "contact",  index: "04", label: "Contact"  },
];
```

CV link: `personalInfo.resumeUrl`.

### 5.3 Components

`ChapterRail`, `MenuSheet`, `StatusDot` (availability, reused), `Hairline`.

### 5.4 Interactions

| Trigger | Response |
|---|---|
| Scroll | Active chapter updates via IntersectionObserver (`rootMargin: -45% 0px -45% 0px`) |
| Click a chapter | Smooth scroll; `scroll-margin-top: 72px` prevents the header covering the heading |
| Menu button | Opens `<dialog>` sheet, focus moves to the first link, scroll locked |
| `Esc` | Closes sheet, focus returns to the menu button |
| Backdrop click | Closes sheet |
| Resize across 1024 px | Rail switches between bottom and top states without remount |

### 5.5 Desktop

Rail is bottom-anchored through the hero and work sections, then docks to the top from `#operator` onward. Transition: `translateY` 200 ms. No layout shift. Chapter links are 44 px tall hit areas with 24 px gaps.

### 5.6 Mobile

Bottom rail is removed. Top bar only. The menu sheet is full-height, ink, with the name at 32 px, five chapter links at 28 px with 56 px rows, then email, GitHub, LinkedIn, and CV. Bottom of sheet: local time and `Back to top`.

### 5.7 Accessibility

- `<nav aria-label="Chapters">` with an `<ol>`.
- Active link: `aria-current="true"` (not `page`), plus a visible ember rule.
- Progress line is `aria-hidden`.
- Menu button: `aria-expanded`, `aria-controls`, accessible name `Open menu` / `Close menu`.
- `<dialog>` provides focus trapping and `Esc` natively; do not reimplement.
- Skip link is the first focusable element and scrolls to `#work`.
- Touch targets ≥ 44×44 px.

---

## 6. Project showcase and cinematic image frames

### 6.1 Visual layout

Three full scenes, alternating alignment, then a compact cut list.

```
SCENE 01 / 04                                         2025 · FULL-STACK
────────────────────────────────────────────────────────────────────────
PHARMA NEXUS V2
Restocking decisions that took an afternoon now run as one agent pass.

┌──────────────────────────────────────────┐   SHOT LIST
│                                          │   ROLE    Full-stack, API design
│        REAL SCREENSHOT                   │   STACK   Python · FastAPI · React
│        16:10, hairline frame,            │   STATUS  Repository
│        corner crop marks                 │   RESULT  Inventory-driven restocking…
│                                          │
│  FIG. 01 — INVENTORY                     │   [ GitHub ↗ ]
└──────────────────────────────────────────┘   [ Read the scene ↓ ]
```

### 6.2 Cinematic frame specification

| Property | Value |
|---|---|
| Aspect | 16:10 desktop, 4:3 mobile |
| Border | `1px solid var(--color-line-strong)` |
| Corner marks | 4 L-shaped 12 px rules, 1 px, `--color-line-strong`, inset 12 px |
| Caption | Mono 11 px, `FIG. 01 — INVENTORY`, `--color-ash`, 12 px below the frame |
| Grain | Shared grain tile at 3% inside the frame, `pointer-events:none` |
| Grade | **Baked into the exported asset** — no CSS `filter` |
| Hover | `transform: scale(1.02)` on the image inside a clipped frame, 400 ms, fine pointers only |
| No browser chrome | No fake window dots, no URL bar |

### 6.3 Content sources

| Scene | Source | Fields used |
|---|---|---|
| 01 Pharma Nexus V2 | `projects[0]` | `title`, `description`, `techTags`, `links.github` |
| 02 HireFlow | `projects[2]` | `title`, `description`, `techTags`, `links.github` |
| 03 SQL Sense AI | `projects[3]` | `title`, `description`, `techTags`, `links.demo` |
| 04 Clinic (index row) | `projects[1]` | `title`, `description`, `techTags` |

Outcome headlines must be rewritten from the existing descriptions. Proposed, pending approval:

1. *"Restocking decisions that took an afternoon now run as one agent pass."*
2. *"A job portal with role-based flows for both sides of the hiring table."*
3. *"A schema parser that explains a query step by step."*
4. *"Patient records for 500+ people, without the paperwork."*

Numbers appear only if confirmed in `CONTENT_VERIFICATION.md`.

### 6.4 Components

`CutList`, `Scene`, `SceneSlate`, `ShotList`, `MediaFrame`, `Disclosure`, `SpecRow`, `Hairline`.

### 6.5 Interactions

| Trigger | Response |
|---|---|
| Scene enters viewport | Cross-dissolve 0→1 and scale 1.02→1.00, 400 ms, once |
| Hover scene image | Scale 1.02, 400 ms (fine pointers only) |
| `Read the scene` | Inline disclosure expands, `aria-expanded` toggles, 400 ms height/opacity |
| `GitHub` | Opens the real repo URL in a new tab with `rel="noopener noreferrer"` |
| `Live demo` | Only rendered if a real demo URL exists |
| Cut-list row hover | Row background `--color-panel`, arrow translates 4 px |

### 6.6 Desktop

12-column grid. Odd scenes: media columns 1–8, shot list 9–12, shot list `position: sticky; top: 88px`. Even scenes mirrored. Scene title spans 1–8. Vertical gap between scenes: `clamp(96px, 14vh, 180px)`.

### 6.7 Mobile

Single column: slate → title → headline → media (4:3) → shot list (two-column definition table) → actions → disclosure. No sticky. No hover scaling. Images full-bleed to the gutter.

### 6.8 Accessibility

- Each scene is a `<article>` with `aria-labelledby` pointing at its `<h3>`.
- Images have descriptive alt text naming the screen, not "project screenshot".
- Shot list is a `<dl>` with `<dt>`/`<dd>`.
- Disclosure button contains the visible text and `aria-expanded`; content is not `display:none` when closed if it contains links that should be discoverable — use `hidden` on the panel so screen readers skip it.
- Links have discernible names (`Pharma Nexus on GitHub`, not `GitHub`).
- Status is never colour-only: `● Repository` includes the word.

---

## 7. About section and request-trace visualisation

### 7.1 Visual layout

```
02 / THE OPERATOR
────────────────────────────────────────────────────────────────────────
Left (cols 1–6)                          Right (cols 7–12)
BIO                                      ┌──────────────────────────┐
Heading: "Backend first."                │  TRACE STRIP (240px)     │
Two short paragraphs, 58ch               │  client → react → fastapi│
                                         │  → pydantic → sqlite →   │
Traits line (mono, 2 rows)               │  agent → 200 OK          │
                                         └──────────────────────────┘
                                         TOOLKIT (4 groups)
                                         METHOD (4 steps, horizontal)
```

### 7.2 Copy and content sources

| Element | Source |
|---|---|
| Bio paragraph 1 | `personalInfo.summary`, rewritten to ≤ 60 words, first person |
| Bio paragraph 2 | `aboutContent.bio` (strip the inline HTML), rewritten |
| Traits | `softSkillsList` names only: Problem solving · System architecture · Collaboration · Code quality |
| Toolkit | `technicalSkills.categories`, merged from 5 into 4 groups |
| Method | `skillsContent.cards` (4 items, reworded as process steps) |
| Trace nodes | `projects[0].techTags` and `description` |

**Toolkit merge:**

| Group | Items |
|---|---|
| Languages | Python, JavaScript, SQL |
| Backend | FastAPI, Flask, Node.js, Express, REST API design |
| Frontend | React, Tailwind CSS, shadcn/ui |
| Data & tools | PostgreSQL, MySQL, SQLite, AWS, Git, Postman, VS Code |

No percentage bars. No self-assigned levels. Proficiency is implied by the work.

### 7.3 Trace strip specification

| Property | Value |
|---|---|
| Container | `figure`, max-width 640 px, height 240 px |
| SVG viewBox | `0 0 640 240` |
| Nodes | `CLIENT`, `REACT`, `FASTAPI`, `PYDANTIC`, `SQLITE`, `AGENT`, `200 OK` |
| Path | Horizontal with 12 px rounded elbows, 1.5 px stroke, `--color-line-strong` |
| Active path | `--color-ember`, `stroke-dasharray` + `stroke-dashoffset` |
| Timing | 2,400 ms once, triggered at 40% visibility |
| Node labels | Mono 10 px, `--color-ash`, 6 px below each node |
| Status line | Below the diagram: `200 OK · trace complete` in mono 11 px |
| Text equivalent | `<ol>` beneath the figure, one item per node, describing its role |

Node descriptions (must be technically true):

1. `CLIENT` — React interface.
2. `REACT` — component state and fetch calls.
3. `FASTAPI` — request validation and routing.
4. `PYDANTIC` — schema validation of request and response.
5. `SQLITE` — inventory and purchase-order records.
6. `AGENT` — negotiation and restocking decision logic.
7. `200 OK` — validated response returned to the interface.

If any of these is inaccurate, the trace must be corrected or removed.

### 7.4 Components

`Bio`, `TraceStrip`, `Toolkit`, `MethodStrip`, `Hairline`.

### 7.5 Interactions

| Trigger | Response |
|---|---|
| Trace enters 40% viewport | Path draws once, nodes illuminate in sequence |
| Hover a node | Label brightens to bone; no tooltip |
| `MethodStrip` | Static; four columns, no scroll path |
| Toolkit group hover | No interaction; text only |

### 7.6 Desktop

Bio left, trace and toolkit right. Method strip full width below, 4 columns with 1 px separators. Section padding `--section-y`.

### 7.7 Mobile

Order: bio → method → trace → toolkit. Trace becomes vertical: 7 rows, 44 px each, path drawn top to bottom. SVG scales to `width: 100%; height: auto`. The text list is always visible on mobile (the diagram is the enhancement, not the information).

### 7.8 Accessibility

- `<figure>` + `<figcaption>` naming the flow.
- SVG `aria-hidden="true"`; the `<ol>` carries the meaning.
- No colour-only state; each node label is text.
- Reduced motion: completed diagram, no draw, no illumination.
- If the animation cannot hold 60 fps on a mid-range device, ship the static diagram.

---

## 8. Experience and education

### 8.1 Visual layout

Two columns on desktop, stacked on mobile. A single vertical hairline with year markers.

```
03 / THE RECORD
──────────────────────────────────────────────────────────────────────
EXPERIENCE                                EDUCATION
2025  EduSkills Academy                   2024–2027  B.Tech CS & AI
      Software & Data Development                     Kakinada Institute of
      Virtual Intern · 8 weeks                        Engineering and Technology
      · Python + SQL modules                          CGPA 7.5
      · Dashboards and data cleaning
                                          2021–2024  Diploma, Mechanical
2025  Google for Developers & AICTE                  Aditya Polytechnic College
      AI/ML Developer Virtual Intern · 10 weeks      80%
      · Python algorithms, ML workflows
      · Git/GitHub collaboration
```

### 8.2 Content sources

| Field | Source |
|---|---|
| Internships | `internshipsList[0]`, `internshipsList[1]` — `organization`, `role`, `duration`, `skills`, `tech` |
| Degree | `education.degree`, `education.institution`, `education.cgpa`, `education.graduation` |
| Diploma | `education.twelfth` (currently one string; split into institution, years, percentage) |

Label the internships **"Virtual internship"** — they are EduSkills/AICTE programmes, not employment. Do not use "Work Experience".

### 8.3 Components

`Record`, `SpecRow`, `Hairline`.

### 8.4 Interactions

None beyond hover on the certification rows. This section is deliberately still.

### 8.5 Desktop

Two 6-column halves with a 1 px divider. Each entry: year in mono at 12 px, role in 20 px display, organisation in 17 px, two bullets maximum, tech tags as plain mono text (not pills).

### 8.6 Mobile

Single column: Experience then Education. Years become inline labels above each entry. Bullets truncate to one line each if space is tight; never hide content behind a disclosure here.

### 8.7 Accessibility

- `<section aria-labelledby>` with `<h2>Education and experience</h2>`.
- Each entry is an `<article>` or `<li>` with a heading.
- Dates are `<time datetime="2024">2024</time>` where a year is known.
- No abbreviation without expansion: `CGPA` is expanded in the visible text as "CGPA 7.5 / 10".
- Diploma details remain one paragraph if not split.

---

## 9. Certifications

### 9.1 Visual layout

A ledger, not cards. Three rows, full width, with a hairline between each.

```
CREDENTIALS
──────────────────────────────────────────────────────────────────────
01   AWS Certified Cloud Practitioner            Amazon Web Services    [Verify ↗]
02   Data Analytics with Python & Power BI       EduSkills Academy      [Verify ↗]
03   Google Data Analytics Professional Cert.    Coursera / Google      [Verify ↗]
```

### 9.2 Content sources

`certificates.featured[0..2]` — `name`, `issuer`. Year and credential URL are **unknown** and must come from `CONTENT_VERIFICATION.md`.

### 9.3 Components

`Record` (credentials block), `SpecRow`.

### 9.4 Interactions

- Whole row is not a link; only `Verify ↗` is, and it renders only when a real URL exists.
- Hover: row background `--color-panel`, 160 ms.
- If no verification URL exists, the row shows `Issued` with no link. Do not link to GitHub.

### 9.5 Desktop

Four columns: index (48 px), name (fluid), issuer (240 px), action (120 px, right-aligned).

### 9.6 Mobile

Two lines per row: name, then `issuer · Verify`. Index moves to a small mono prefix.

### 9.7 Accessibility

- A `<ul>` of `<li>`, not a table, because there are no column headers in the visual design.
- `Verify` links include the certificate name in their accessible name.
- No emoji. The current ☁️/📊/📈 icons are removed.

---

## 10. Contact section

### 10.1 Visual layout

```
04 / THE CALL
──────────────────────────────────────────────────────────────────────
Left (cols 1–5)                            Right (cols 6–12)
"Let's build something                     NAME
 that holds up."                           EMAIL
                                           MESSAGE
steja9759@gmail.com                        ☐ I agree to be contacted about this enquiry
                                           [ Send message ]
Kakinada, IN · IST
● Open to roles                            Status region (aria-live)
GitHub · LinkedIn                          Prefer email? Open mail client ↗
```

### 10.2 Content sources

| Field | Source |
|---|---|
| Email | `personalInfo.emails.primary` |
| Location | `personalInfo.location` |
| Socials | `socialLinks.github`, `socialLinks.linkedin` |
| Availability | Confirmed in `CONTENT_VERIFICATION.md` |
| Form endpoint | `emailjsConfig` from `VITE_EMAILJS_*` env vars |

### 10.3 Components

`Contact`, `StatusDot`, `Hairline`.

### 10.4 Interactions and honesty rules

1. If `serviceId`, `templateId` or `publicKey` still equals the placeholder, the form renders **disabled** with the message: *"Email sending isn't configured yet. Use the email link instead."* and a prominent mailto button.
2. Submit validates name (≥ 2), email (regex), message (≥ 20 chars), consent (required).
3. Errors are inline, tied with `aria-describedby`, and focus moves to the first invalid field.
4. Success is shown only after EmailJS resolves without error. Never show success after a mailto fallback.
5. A hidden honeypot field (`company`) rejects bots silently.
6. Rate-limit on the client: one submit per 30 seconds, button disabled while sending.
7. The mailto fallback is always visible as a secondary link, not a surprise popup.

### 10.5 Desktop

5/7 split. Left column is sticky within the section. Form fields are 56 px tall, 1 px bottom rule, no boxes, no rounded corners. Submit is a solid bone button, 56 px.

### 10.6 Mobile

Stacked: heading → email → form. Inputs use `font-size: 16px` to prevent iOS zoom. Submit is full width. The mailto link sits directly under the submit button.

### 10.7 Accessibility

- Visible `<label>` for every field. Placeholders are examples, never labels.
- `aria-live="polite"` status region, `role="status"`.
- `aria-invalid` and `aria-describedby` on error.
- Consent checkbox is required and has a real label with a privacy sentence.
- No CAPTCHA (accessibility and privacy cost); honeypot only.
- Autocomplete attributes: `name`, `email`.
- Success message is not the only feedback: the button state changes and focus moves to the status region.

---

## 11. Footer (Colophon)

### 11.1 Visual layout

```
──────────────────────────────────────────────────────────────────────
ST·R                         INDEX            ELSEWHERE        COLOPHON
Sai Teja Revuri              00 Opening       GitHub           Set in Archivo
Full-stack engineer          01 Work          LinkedIn         and IBM Plex Mono
                            02 About                          Built with React
steja9759@gmail.com          03 Record        IST 21:42        and Vite
                            04 Contact                        © 2026
                                                    Back to top ↑
```

### 11.2 Content sources

`personalInfo.name`, `personalInfo.emails.primary`, `socialLinks`, `footerContent.copyright`.

Local time is computed in the browser with `Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit" })` and labelled `IST`. It must not be hard-coded.

### 11.3 Components

`Colophon`, `Hairline`.

### 11.4 Interactions

- `Back to top` scrolls to `#opening`, respecting reduced motion, and returns focus to the skip link target.
- Local time updates every 60 seconds, `aria-hidden` so it is not announced repeatedly.

### 11.5 Desktop

Four columns, 13 px minimum text, generous vertical padding (`64px`), no `min-height: 50vh`, no 18vw wordmark.

### 11.6 Mobile

Two columns, then one. `Back to top` becomes a full-width row. Local time moves under the email.

### 11.7 Accessibility

- `<footer>` landmark.
- Link text is descriptive; no "click here".
- The colophon typeface note is real information, not decoration.
- Contrast ≥ 6.6:1 for all footer text.

---

## 12. Mobile-specific layouts

### 12.1 Breakpoints

| Name | Range | Columns | Nav |
|---|---|---|---|
| `sm` | 0–479 | 4 | Top bar + progress line |
| `md` | 480–767 | 4 | Top bar + progress line |
| `lg` | 768–1023 | 8 | Top bar + menu sheet |
| `xl` | 1024–1279 | 12 | Docked top rail |
| `2xl` | ≥1280 | 12 | Bottom rail → docked |

### 12.2 Per-section mobile rules

| Section | Rule |
|---|---|
| Hero | 4:5 still, 3 credit rows, stacked CTAs, `min-h-[100svh]`, no overflow clipping |
| Work | Single column, 4:3 media, shot list as `<dl>` grid, disclosure below actions |
| About | Bio → method → trace (vertical) → toolkit |
| Record | Experience then education, single column |
| Contact | Heading → email → form, 16 px inputs |
| Footer | 2 columns → 1, back-to-top full width |

### 12.3 Landscape phones

`@media (max-height: 500px) and (orientation: landscape)`: hero still drops to 40svh, name to 32 px, CTAs inline. Never clip.

### 12.4 Touch

- Minimum target 44×44 px.
- No hover-only information.
- No scroll hijacking, no horizontal swipe sections.
- `touch-action: manipulation` on buttons to remove the 300 ms delay.

### 12.5 Safe areas

`padding-bottom: max(24px, env(safe-area-inset-bottom))` on the mobile bar and footer.

---

## 13. Animation timeline

### 13.1 Global rules

| Rule | Value |
|---|---|
| Easing | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Animated properties | `transform`, `opacity`, `clip-path`, `stroke-dashoffset`, `background-color`, `color` |
| Never animated | `width`, `height`, `top`, `left`, `filter`, `box-shadow` (except the disclosure, which animates `grid-template-rows`) |
| Reduced motion | All durations → 0.01 ms, all elements visible, no parallax, no draw |
| Scroll listeners | None. `IntersectionObserver` + Motion values only |

### 13.2 Timeline

| # | Time / trigger | Element | Property | Duration | Reduced motion |
|---|---|---|---|---|---|
| 1 | `fonts.ready` or 400 ms | Hero name | `clip-path: inset(0 100% 0 0)` → `inset(0)` | 420 ms | Visible immediately |
| 2 | `fonts.ready` + 80 ms | Credit rows | opacity 0→1, `translateY(8px)`→0, 60 ms stagger | 320 ms | Visible |
| 3 | Scroll 60vh | Aperture bars | height 32→0 | 700 ms | Bars removed |
| 4 | Scroll > hero | Chapter rail | `translateY` bottom→top dock | 200 ms | Instant |
| 5 | Scene 40% visible | Scene media | opacity 0→1, scale 1.02→1.00 | 400 ms | Visible |
| 6 | Scene 40% visible | Slate + title | opacity 0→1, `translateY(12px)`→0 | 400 ms, 60 ms stagger | Visible |
| 7 | Trace 40% visible | SVG path | `stroke-dashoffset` → 0 | 2,400 ms | Completed path |
| 8 | Trace 40% visible | Nodes | opacity 0.3→1, scale 1→1.15→1, 180 ms stagger | 2,400 ms total | All at 1 |
| 9 | Hover (fine pointer) | Media | scale 1→1.02 | 400 ms | No hover transform |
| 10 | Hover | Links | underline `scaleX` 0→1 | 200 ms | Instant underline |
| 11 | Hover | Cut-list arrow | `translateX(0)`→4px | 160 ms | No transform |
| 12 | Dialog open | Reel | opacity 0→1, scale 0.98→1 | 300 ms | Instant |

### 13.3 Removed

Preloader (2.2 s + 1.2 s exit), AOS, `animate-ping`, `animate-pulse`, lanyard `drop-bounce`, torn-paper wipes, contact-heading parallax, `mix-blend-difference` social rail, Services `getBoundingClientRect` loop.

### 13.4 Implementation

- `LazyMotion` + `domAnimation` from Motion to keep the initial bundle small.
- `useReducedMotion()` drives a single `motionEnabled` flag passed through context.
- `useScroll` + `useTransform` for the aperture; no `window.scrollY` reads.
- One shared `Reveal` wrapper with `viewport={{ once: true, amount: 0.4 }}`.

---

## 14. Accessibility requirements

Target: **WCAG 2.2 AA**, verified with axe + manual keyboard pass.

### 14.1 Structure

- One `<h1>`, ordered headings, no skips.
- Landmarks: `<header>`, `<main>`, `<nav aria-label="Chapters">`, `<footer>`.
- Every `<section>` has `aria-labelledby` pointing at its heading.
- Skip link first in DOM.

### 14.2 Contrast

| Requirement | Rule |
|---|---|
| Body text | ≥ 4.5:1 (achieved 6.6:1+) |
| Large text | ≥ 3:1 (achieved 5.6:1+) |
| Non-text UI | ≥ 3:1 for borders that carry meaning |
| Focus indicator | 2 px, ≥ 3:1 against both adjacent colours |
| Disabled | May be lower, but must remain readable |

### 14.3 Keyboard

- Every interactive element reachable in DOM order.
- Visible focus at all times; never `outline: none` without a replacement.
- `<dialog>` handles focus trap and `Esc`.
- No keyboard trap in custom widgets.
- Disclosure buttons toggle with `Enter`/`Space`.

### 14.4 Forms

Labels, `aria-describedby`, `aria-invalid`, `role="status"`, required consent, no CAPTCHA.

### 14.5 Media

- Alt text describes the screen, not the file.
- Video: no autoplay with sound; controls; captions + transcript if speech exists.
- Decorative SVG/grain/vignette: `aria-hidden="true"`.

### 14.6 Motion

`prefers-reduced-motion: reduce` removes all four signature moments and leaves every element in its final state. No `scroll-behavior: smooth` under reduced motion.

### 14.7 Testing checklist

1. Tab through the whole page — focus never disappears.
2. Screen reader pass on VoiceOver + NVDA: headings, landmarks, form errors, dialog.
3. Zoom to 200% at 1280 px — no clipping, no horizontal scroll.
4. Reflow at 320 px — no horizontal scroll.
5. axe DevTools: zero critical/serious.
6. Lighthouse Accessibility ≥ 95.

---

## 15. Performance budgets

### 15.1 Targets

| Metric | Budget |
|---|---|
| LCP (4G, mid-range Android) | **< 2.0 s** |
| CLS | **< 0.03** |
| INP | **< 200 ms** |
| TBT | **< 200 ms** |
| Initial JS (gzip) | **< 180 KB** |
| Initial CSS (gzip) | **< 20 KB** |
| Hero transfer (HTML+CSS+JS+font+still) | **< 350 KB** |
| Full first visit excluding reel | **< 1.2 MB** |
| Lighthouse Performance | **≥ 95** |

### 15.2 Asset budgets

| Asset | Budget |
|---|---|
| Hero still AVIF | ≤ 90 KB (1600×900) |
| Hero still mobile AVIF | ≤ 45 KB (800×1000) |
| Scene image AVIF | ≤ 120 KB each (1600×1000) |
| Grain tile | ≤ 4 KB |
| Archivo WOFF2 | ≤ 60 KB |
| Plex Mono × 2 | ≤ 50 KB total |
| Reel MP4 + WebM | ≤ 2.5 MB total, on demand only |
| Poster AVIF | ≤ 60 KB |

### 15.3 Loading strategy

1. `<link rel="preload">` the hero still (`imagesrcset` + `imagesizes`) and the Archivo font.
2. No third-party requests. Remove Google Fonts.
3. Below-fold sections lazy via `React.lazy` + `Suspense`, triggered by IntersectionObserver.
4. `content-visibility: auto` on `#record`, `#contact`, `#colophon` with `contain-intrinsic-size`.
5. Video `preload="none"`, loaded only when the dialog opens.
6. All images: explicit `width`/`height`, `decoding="async"`, `loading="lazy"` below the fold.

### 15.4 Runtime

- No `backdrop-blur` anywhere.
- No per-frame layout reads.
- One IntersectionObserver instance shared via a hook.
- Motion values only for scroll-linked transforms.

### 15.5 Delivery (requires approval, not applied)

- `Cache-Control: public, max-age=31536000, immutable` for `/assets/*` and `/fonts/*`.
- Baseline security headers.
- `robots.txt`, `sitemap.xml`, canonical, OG image, JSON-LD `Person`.
- `ST` monogram favicon.

### 15.6 Verification

```bash
npm run build
npx vite preview
# Lighthouse (Chrome DevTools, mobile preset, 4G throttle)
# axe DevTools
# Manual: 320 / 375 / 768 / 1024 / 1440 / 1920
```

Record LCP element, CLS sources and INP interactions in the PR description.

---

## 16. Component architecture

### 16.1 Tree

```
App
├── SkipLink
├── ChapterRail
│   └── MenuSheet (dialog)
├── main
│   ├── OpeningFrame
│   │   ├── Aperture (aria-hidden)
│   │   ├── CreditBlock
│   │   │   └── StatusDot
│   │   ├── ReelPlayer (dialog)
│   │   └── MediaFrame
│   ├── CutList
│   │   └── Scene ×3
│   │       ├── SceneSlate
│   │       ├── MediaFrame
│   │       ├── ShotList
│   │       │   └── SpecRow
│   │       └── Disclosure
│   │   └── ProjectIndexRow ×1
│   ├── Bio
│   │   ├── TraceStrip
│   │   ├── Toolkit
│   │   └── MethodStrip
│   ├── Record
│   │   ├── ExperienceEntry ×2
│   │   ├── EducationEntry ×2
│   │   └── CredentialRow ×3
│   └── Contact
│       └── StatusDot
└── Colophon
```

### 16.2 Contracts

| Component | Props | Notes |
|---|---|---|
| `OpeningFrame` | `name, role, stack[], location, status, positioning, resumeUrl, onOpenReel` | Owns the aperture scroll logic |
| `CreditBlock` | `rows: {label, value}[]` | Renders `<dl>` |
| `ReelPlayer` | `src, poster, captions?, duration` | Native `<dialog>` |
| `ChapterRail` | `chapters[], activeId` | Renders nav + progress |
| `MenuSheet` | `open, onClose, chapters[], socials` | `<dialog>` |
| `Scene` | `index, total, project, media, variant: "left"\|"right"` | Owns reveal |
| `ShotList` | `role, stack[], status, result, links` | `<dl>` |
| `MediaFrame` | `src, srcSet, alt, caption, ratio` | Corner marks + grain |
| `Disclosure` | `label, children` | `aria-expanded`, grid-rows animation |
| `TraceStrip` | `nodes: {id,label,description}[]` | SVG + `<ol>` |
| `Toolkit` | `groups: {title, items}[]` | No bars |
| `Record` | `internships, education, certificates` | Three sub-blocks |
| `Contact` | `email, location, socials, configured` | `configured` drives honesty state |
| `Colophon` | `chapters, socials, email, timezone` | Local time |

### 16.3 Shared hooks

| Hook | Responsibility |
|---|---|
| `useChapter(ids)` | One IntersectionObserver → active id |
| `useReveal()` | Shared reveal props + reduced-motion flag |
| `useDialog()` | Open/close, focus return, scroll lock |
| `useLocalTime(tz)` | IST clock, 60 s interval, cleaned up |

### 16.4 Styling rules

- Tailwind utilities + `@theme` tokens. No CSS-in-JS.
- Component-local CSS only for the grain, aperture and trace path.
- No `rounded-*` above `rounded-none`, except the status dot (`rounded-full`).
- No arbitrary colour values in components; tokens only.

---

## 17. Asset requirements

### 17.1 Existing assets (verified on disk)

| Asset | Path | Size | Dimensions | Status |
|---|---|---|---|---|
| Hero reel | `src/assets/hero/portfolio-hero.mp4` | 30,333 KB | 1920×1080, ~60 s | **Too heavy**; needs recut |
| Avatar | `src/assets/about/sai-avatar.jpg` | 292 KB | 819×1024 | Authenticity unconfirmed |
| Unused portrait | `src/assets/about/image.png` | 1,464 KB | 900×1600 | Different person; do not use |
| React logo | `src/assets/about/react.png` | 295 KB | 2300×2000 | Unused |
| Node logo | `src/assets/about/node.png` | 74 KB | 421×421 | Unused |
| MongoDB logo | `src/assets/about/mongodb.png` | 82 KB | 2000×600 | Unused |
| Pharma inventory | `public/assets/projects/pharma-nexus/inventory.png` | 213 KB | 1920×912 | ✅ Primary hero candidate |
| Pharma agent | `.../agent-control.png` | 197 KB | 1920×912 | ✅ Scene 01 secondary |
| Pharma vendors | `.../vendors.png` | 217 KB | 1920×912 | ✅ Available |
| Pharma negotiation | `.../negotiation.png` | 215 KB | 1920×912 | ✅ Available |
| Pharma orders | `.../purchase-orders.png` | 233 KB | 1920×912 | ✅ Available |
| Resume | `public/Sai_Teja_Revuri_Resume.pdf` | 59 KB | — | ✅ Keep |
| Favicon | `public/favicon.svg` | 0.5 KB | — | ❌ Contains "Y"; replace |
| Icon sprite | `public/icons.svg` | 4.9 KB | — | Unused template file |

### 17.2 Required derivations (from existing assets)

| Output | Source | Transform | Budget |
|---|---|---|---|
| `hero-still-1600.avif` | `inventory.png` | Crop to 16:9, warm grade, export AVIF q50 | ≤ 90 KB |
| `hero-still-800.avif` | same | 4:5 crop for mobile | ≤ 45 KB |
| `scene-01-inventory.avif` | `inventory.png` | 16:10 crop | ≤ 120 KB |
| `scene-01-agent.avif` | `agent-control.png` | 16:10 crop | ≤ 120 KB |
| `scene-01-negotiation.avif` | `negotiation.png` | 16:10 crop | ≤ 120 KB |
| `reel-poster.avif` | video frame at 00:03 | 16:9 | ≤ 60 KB |
| `reel-12s.mp4` | `portfolio-hero.mp4` | Trim, mute, 1280×720, faststart | ≤ 2.0 MB |
| `reel-12s.webm` | same | VP9 | ≤ 1.5 MB |
| `avatar-480.avif` | `sai-avatar.jpg` | Only if approved | ≤ 40 KB |

Export commands (run only after approval):

```bash
ffmpeg -i portfolio-hero.mp4 -t 12 -an -vf "scale=1280:-2,fps=30" \
  -c:v libx264 -crf 26 -preset slow -movflags +faststart reel-12s.mp4
ffmpeg -i portfolio-hero.mp4 -t 12 -an -vf "scale=1280:-2,fps=30" \
  -c:v libvpx-vp9 -crf 34 -b:v 0 -row-mt 1 reel-12s.webm
```

### 17.3 Missing assets (cannot be derived)

| Asset | Why it matters | Fallback if not supplied |
|---|---|---|
| HireFlow screenshot | Scene 02 is currently text-only | Typographic spec sheet, no fake UI |
| Clinic screenshot | Index row has no visual | Spec sheet only |
| SQL Sense screenshot | Live demo deserves a still | Spec sheet + live link |
| Real portrait | Determines whether a portrait appears at all | No portrait; the work is the hero |
| Certificate verification URLs | "Verify" links cannot be invented | Rows show issuer only, no link |
| OG image (1200×630) | Social sharing | Create from hero still + type |
| `ST` monogram favicon | Current file is a template "Y" | Create a simple SVG |
| Archivo + Plex Mono WOFF2 | Typography identity | Cannot ship the direction without them |

### 17.4 Font acquisition (no npm dependency)

Download the WOFF2 files into `public/fonts/` from Google Fonts (Archivo variable, IBM Plex Mono 400/500), subset to Latin, and declare `@font-face` manually. This is a file operation, not a package install.

### 17.5 Asset naming

```
public/media/
  hero-still-1600.avif
  hero-still-800.avif
  scene-01-inventory.avif
  scene-01-agent.avif
  scene-01-negotiation.avif
  reel-poster.avif
  reel-12s.mp4
  reel-12s.webm
public/fonts/
  archivo-var-latin.woff2
  plex-mono-400-latin.woff2
  plex-mono-500-latin.woff2
```

### 17.6 Deprecated assets (do not delete without approval)

| File | Reason |
|---|---|
| `src/assets/about/image.png` | Different person, 1.4 MB, unused |
| `src/assets/about/react.png` | Unused, 295 KB |
| `src/assets/about/node.png` | Unused |
| `src/assets/about/mongodb.png` | Unused |
| `public/icons.svg` | Vite template sprite |
| `src/App.css` | Unused template styles |
| `src/assets/hero/portfolio-hero.mp4` | Superseded by the 12 s cut; keep the original as a source file until launch |

---

## Appendix A — Build order

| Phase | Work | Exit criteria |
|---|---|---|
| 1 | Tokens, fonts, base CSS, `site.js` | Type and colour render correctly; CLS 0 |
| 2 | `OpeningFrame`, `CreditBlock`, `ReelPlayer` | Hero LCP < 2.0 s; dialog keyboard-safe |
| 3 | `ChapterRail`, `MenuSheet`, skip link | Full keyboard navigation; active state correct |
| 4 | `CutList`, `Scene`, `MediaFrame`, `ShotList` | Three scenes + index row; real images |
| 5 | `Bio`, `TraceStrip`, `Toolkit`, `MethodStrip` | Trace accessible + 60 fps, or static |
| 6 | `Record`, `Contact`, `Colophon` | Honest form states; local time |
| 7 | Motion pass, reduced-motion pass, perf pass | Lighthouse 95+; axe clean |
| 8 | Meta, OG, sitemap, favicon | Social preview correct |
| 9 | Preview review | Approved before merge |

## Appendix B — Definition of done

- [ ] One `<h1>`, landmarks, skip link, labelled sections.
- [ ] No ember text on bone; no text on imagery.
- [ ] All four signature moments respect reduced motion.
- [ ] LCP < 2.0 s, CLS < 0.03, INP < 200 ms on a throttled profile.
- [ ] Lighthouse 95+ on all four categories.
- [ ] axe: zero critical/serious.
- [ ] 320 px to 1920 px with no horizontal scroll and no clipping.
- [ ] No fake links, no false success states, no placeholder EmailJS IDs in production.
- [ ] Every fact traceable to `portfolioData.js` or a confirmed answer in `CONTENT_VERIFICATION.md`.

---

*Specification only. No component edited, no dependency installed, no asset deleted, no deployment setting changed, nothing pushed or deployed.*
