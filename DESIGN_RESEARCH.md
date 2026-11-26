# DESIGN_RESEARCH.md

**Project:** Sai Teja Revuri — Full Stack Developer Portfolio
**Current site:** https://sai-teja-portfolio-developer.vercel.app/
**Repository:** `saiteja9154/sai-teja-portfolio` · branch `redesign/world-class-portfolio`
**Document type:** Design research and direction study. No code, assets, dependencies, or deployment settings were changed.
**Date:** 26 November 2026

---

## 0. Status and scope

This document replaces the rejected "Crimson Index" proposal. It contains:

1. What the references actually showed (with access limits stated honestly).
2. Three original directions, each analysed on the same eleven axes.
3. A visual comparison.
4. One recommended direction, with the hero, work section, type, motion, components and performance plan specified.
5. Open decisions that need your answers before implementation.

**Hard constraints respected:** React + Vite + Tailwind 4 architecture preserved, no new dependencies required, no existing content deleted, no invented achievements, no implementation started.

---

## 1. Reference research: what I actually inspected

### 1.1 Access log

I do not claim to have evaluated anything I could not load.

| Source | What I actually saw | Status |
|---|---|---|
| awwwards.com | Homepage, navigation taxonomy, and the full first page of the **Portfolio** collection (24 listed sites with tags) | ✅ Read |
| awwwards.com/sites/piven-ilya-web-motion → pivenilya.com | Full page content, hero mechanic, work list, service numbering, contact block | ✅ Read |
| awwwards.com/sites/daniel-neath-product-design-portfolio → danielneath.com | Full page content, case-study headline pattern, poster-first media, index footer | ✅ Read |
| framer.com | Marketing page: design-agent positioning, canvas editing, built-in hosting/CMS/analytics | ✅ Read |
| vibrant.design | Homepage, section taxonomy (hero, bento, features, pricing, CTA, footer…), moodboard concept | ✅ Read (index level) |
| 21st.dev | Landing, catalogue description, "12,000+ components", live preview + install model | ✅ Read |
| reactdrops.dev | Landing, component/effect catalogue, explicit anti-slop positioning | ✅ Read |
| ui.shadcn.com | Landing, component index, blocks, registry concept | ✅ Read |
| getdesign.md | Landing and the "DESIGN.md" premise: colour, type, spacing and reasoning as an agent-readable contract | ✅ Read |
| open-design.ai/showcase | Navigation and chrome only; the showcase grid did not render as content | ⚠️ **Not evaluated** |
| sitepeel.dev | Landing, AI slop checker, and the **2026 report on 126 YC home pages** with per-tell statistics | ✅ Read |
| libraries.dev | Landing, effect catalogue (thinking orbs, border beam, liquid metal, gooey), install model | ✅ Read |
| motion.dev | Landing, API positioning, "layout, scroll, gestures, 3D, hardware acceleration" | ✅ Read |
| animejs.com | Landing, v4 feature set: keyframes, per-property parameters, easing editor | ✅ Read |
| fontpair.co | Landing and the pairing-browser premise (3,000+ pairings, Fontshare + Google) | ✅ Read (index level; individual pairing pages not evaluated) |
| github.com/heydamir/unslop | Full README: audit → direction → nine passes; explicit slop inventory | ✅ Read |
| github.com/peteryang/no-ai-slop | **404 — repository does not exist at that spelling** | ❌ Unavailable |
| github.com/petergyang/no-ai-slop | The repository that exists (one letter different). Full README with the 20+ writing patterns | ✅ Read (substitute) |
| github.com/narrowin/awesome-generative-ui | Full README: constrained vs unconstrained generation, registries, streaming, protocols | ✅ Read |
| github.com/CopilotKit/OpenIntelligentUI | Full README: agent-chosen UI, A2UI vs Open Generative UI, sandboxed HTML/CSS/JS, 3D/map/tool demos | ✅ Read |

**Limits to be explicit about:** awwwards and vibrant.design are JavaScript-heavy galleries. I read their taxonomies and listings, not every embedded site. I evaluated exactly two award-listed portfolios in depth. Fontpair was read at index level only, so the pairings below are my own proposals validated against its premise, not selections copied from it.

### 1.2 What award-level portfolios actually do

From the awwwards portfolio index and the two sites I read in full:

**The tag vocabulary is the brief.** Awwwards classifies portfolio sites under *Unusual Navigation, Horizontal Layout, Storytelling, Scrolling, Transitions, Microinteractions, Typography, WebGL, Video, Sound-Audio, Single Page, Big Background Images*. The reward structure favours a **memorable interaction model**, not a prettier grid. A site that scrolls normally with nice cards is competing in a category where the winners have a mechanic.

**Piven Ilya (web & motion designer)** — the hero is a full-bleed video with one instruction: *"Scroll to watch portfolio."* The work list is a vertical index where each row is a project name plus a still, and the stills do the talking. His services are numbered 01–04 with role-based headings, not feature names. Contact offers a *voice or video reply*, which is a real product decision, not decoration. There is also a portrait-orientation interstitial: *"Turn your phone upright."*

What transfers: **one instruction, one action, no menu of equal-weight buttons**; work presented as an index of artefacts; contact that feels like a person.

What does not transfer: a 60-second full-bleed video hero is a 30 MB decision and a contrast liability. His site can afford it because motion design *is* the product. Sai Teja's product is backend systems, so the cinematic layer has to be lighter and more precise.

**Daniel Neath (product designer)** — every case-study headline is an **outcome, not a noun**: "A 3-hour training setup became one bulk assignment", "Connecting an AI tool went from 19 steps to one screen", "A design system that helped win a contract renewal". Each has a poster image, a one-line result, and a role label. There is a "Skip intro" link at the top. The footer is an index.

What transfers: **headline = before → after**, and the number is in the headline rather than buried in a bullet. For Sai Teja this is the single highest-leverage content change: *"Restocking decisions that took an afternoon now run as one agent pass"* beats "AI-powered pharmacy procurement system".

What does not transfer: the quiet, low-contrast, white editorial shell. It is tasteful but it is the aesthetic most often imitated by AI builders, and it under-delivers on your first-screen requirement.

### 1.3 The tooling signals

| Source | Signal | Consequence for this project |
|---|---|---|
| **Framer** | The market leader now sells "describe it, the agent builds it" on an editable canvas | Generic agent-built layouts are now the baseline. Differentiation must come from art direction, not from having sections at all |
| **21st.dev** | 12,000+ copy-paste React components by many authors | Any component you can install, a recruiter has seen. Use libraries for primitives, never for identity |
| **shadcn/ui** | "The foundation for your design system" — accessible primitives, owned code | Correct model for the form, dialog and menu: own the code, keep the a11y, restyle completely |
| **reactdrops.dev** | Sells effects, and leads with "Every page looks like AI slop" | Effects are commoditised. The scarce thing is a point of view |
| **libraries.dev** | Thinking orbs, border beams, liquid metal, gooey, image generation | These are the exact ingredients of the look you asked me to avoid. Explicitly out of scope |
| **getdesign.md / sitepeel DESIGN.md** | A design is a written contract: colour, type, spacing, reasoning | I will ship the direction as tokens and rules, not as a mood |
| **vibrant.design** | Inspiration is organised by *section type* (hero, bento, pricing…) | Section-level copying produces section-level sameness. Compose from a narrative instead |
| **motion.dev** | Motion (ex-Framer Motion) covers layout, scroll, gestures, 3D with a small API | Already installed. No GSAP, no anime.js, no Three.js needed |
| **anime.js v4** | Excellent for timeline choreography, but a second runtime | Rejected: two animation systems is the current site's problem, not its solution |
| **fontpair.co** | Pairing is a browsable decision with 3,000+ options | Typography must be chosen as a *voice*, then tested, not browsed |

### 1.4 The anti-slop evidence (the most useful finding)

Sitepeel ran its checker on **126 Y Combinator 2026 home pages** (published 28 Oct 2026). Median score: **9/100**. 23% scored 35+. The tells, with shares:

| Tell | Sites | Share |
|---|---:|---:|
| One default font everywhere (Inter, Geist…) | 41 | 33% |
| Frosted glass cards | 28 | 22% |
| This year's trendy font (DM Sans, Satoshi…) | 27 | 21% |
| A tiny label above every heading | 23 | 18% |
| One headline word in another colour or italics | 18 | 14% |
| The template hero (pill badge, centred headline, two buttons) | 17 | 13% |
| Glowing blobs behind the content | 16 | 13% |
| Stock Tailwind grays | 16 | 13% |
| No picture of the product | 15 | 12% |
| Grids of icon, title and one line | 15 | 12% |

And the weighting, which is the actionable part:

| Kind | Share of all points |
|---|---:|
| **Effects** (glows, glass, gradients, soft corners) | **35.7%** |
| **Type** (default/trendy fonts, accent words, tiny labels) | **25.4%** |
| Layout (template hero, icon card grids, centred sections) | 14.1% |
| Copy (filler, em dashes, round-number brags) | 9.4% |
| Pictures (no product picture, stock photos) | 8.4% |
| Colour (stock Tailwind grays and purples) | 7.1% |

**Read that against the current site.** It ships frosted glass cards, glowing blobs, tiny uppercase labels above every heading, one headline word highlighted, a template hero (badge, headline, three buttons), stock Tailwind grays, icon-title-one-line grids, no product screenshots, and one font everywhere. By this rubric the current build is close to a full house of tells.

`unslop` (Damir Sokolovsky) names the same inventory and adds a process worth borrowing: **audit → direction → passes in a fixed order (spacing, colour, icons, copy, type, layout, details, visuals, motion)**. Its rule that a direction must come "from your product" is the reason the recommendation below is built from Sai Teja's actual work rather than from a moodboard.

`no-ai-slop` (Peter Yang) is about writing, and it matters here because portfolio copy is where developers sound most generated. Its patterns to ban: binary contrasts ("It's not X. It's Y."), throat-clearing openers, faux-insight setups ("What nobody tells you"), colon reveals, dramatic fragments, importance puffery ("a testament to"), weasel attribution, synonym cycling, fake-profound endings. The current hero subtitle and About bio are close to several of these.

### 1.5 Generative UI: what to take, what to leave

`awesome-generative-ui` documents the split between **constrained** generation (agents select from an allow-list of components) and **unconstrained** (agents emit raw HTML/CSS/JS in a sandbox). `OpenIntelligentUI` demonstrates the strong version: an agent chooses between text, a native component, or a purpose-built interactive tool, with sandboxed UI and streaming.

For a portfolio, the honest takeaway is not "add an AI chat". It is:

- **Constrained composition is a design principle.** A small set of components used with discipline reads as a system. Fifty bespoke sections read as a template.
- **Let the content choose the format.** A project with screenshots gets a visual scene; a project with only a repo gets a spec sheet. Do not force both into the same card.
- **Interactive artefacts are stronger than interactive chrome.** A working SQL schema explorer or an agent-trace viewer is memorable; a fake terminal is not.

Rejected: a chatbot on a portfolio. It adds latency, cost, failure modes and a support burden, and it answers a question nobody asked.

### 1.6 Ten rules this research produces

1. **One mechanic, not ten effects.** Pick a single interaction idea and let it organise the site.
2. **Effects are the most expensive kind of sameness.** No glass, no glow blobs, no gradient text, no soft-corner soup.
3. **Type carries the identity.** One display voice, one text voice, one mono used only for real data.
4. **Show the product.** Real screenshots or a spec sheet. Never a fabricated dashboard.
5. **Headlines are outcomes.** Before → after, with the number in the headline.
6. **No tiny label above every heading.** If a label exists, it must carry information (chapter, timecode, status), not decoration.
7. **One primary action per screen.** Three equal buttons is a decision the visitor has to make for you.
8. **Motion is a narrative, not a texture.** Three moments, one easing, everything else still.
9. **Performance is part of the art direction.** A 30 MB hero is a design failure, not a technical one.
10. **Accessibility is the floor, not the polish.** Contrast, focus, labels and reduced motion are designed in from the first sketch.

---

## 2. What we have to work with

The direction has to be built from real material. This is the actual inventory.

| Asset | Reality | Design consequence |
|---|---|---|
| **Pharma Nexus V2** | Python, FastAPI, React, SQLite, Pydantic, agent orchestration. 5 unused 1920×912 screenshots already in `public/` | The strongest visual asset in the project. This is the hero product |
| **HireFlow** | React, FastAPI, PostgreSQL, role-based auth. No screenshots | Spec-sheet treatment, or a captured screenshot if you can provide one |
| **Clinic Patient Record System** | React, Flask, 500+ records, 10+ endpoints, 25% faster tasks. No public repo | Spec sheet only. Do not fake UI |
| **SQL Sense AI** | Python, SQL, live demo at `sql-learning-assistant-ai.vercel.app` | The only project a visitor can *use*. It deserves a real "try it" affordance |
| **60 s hero reel** | 29.6 MB, 1920×1080, H.264 + AAC, moov at end | Must be recut. Source material is an asset, the current encode is not |
| **Avatar** | 819×1024 AI-style illustration | Cannot carry a cinematic hero as a "photo". Either a real portrait or no portrait |
| **Internships** | EduSkills 8-week, Google/AICTE 10-week virtual | Label them honestly as virtual programmes |
| **Certifications** | AWS CCP, EduSkills Data Analytics, Google Data Analytics | Real, credible, no verify links yet |
| **Education** | B.Tech CS & AI, 2024–2027, 7.5 CGPA; Diploma Mechanical 80% | Currently absent from the UI. Must appear |
| **Positioning** | "Full Stack / Backend / MERN" in the title, Python/FastAPI in the summary | Needs one sentence, chosen once |

**The positioning decision that unlocks everything:** *Python backend engineer who ships the interface too.* Not "MERN", not "Full Stack | Backend | MERN" as three claims. One claim, evidenced by FastAPI services, SQL schema work, agent orchestration, and React interfaces. Every direction below is built on that sentence.

---

## 3. Direction A — FIRST FRAME

> *A portfolio that opens like a film and closes like a spec sheet.*

### The idea

The site is a **title sequence**. The first screen is composed like the opening frame of a film: a letterboxed image, a title, a credit block, a timecode. Then the letterbox opens and the same visual grammar carries into the work, where each project is a **scene** with a slate and a shot list. Nothing is decorated to look cinematic; the structure *is* cinematic.

This is not "dark hero with a video". The video is demoted to a click-to-play object. The cinematic feeling comes from **framing, type and one dissolve**.

**First three seconds:** a near-black screen with a 2.39:1 aperture. Inside it, a real Pharma Nexus screen, colour-graded, grain over it. The name arrives as a hard cut, not a fade: wide, tight-tracked capitals, one line. Under it, a credit block in mono: `ROLE / STACK / BASED / STATUS`. A thin timecode in the corner counts up. No spinner, no logo animation, no preloader.

### 3.1 Hero composition

```
┌──────────────────────────────────────────────────────────────────────┐
│  ST·R                                             REEL 00:12  ● LIVE │
│ ════════════════════════════════════════════════════════════════════ │  ← 2.39:1 aperture
│                                                                      │
│      ┌──────────────────────────────────────────┐                    │
│      │                                          │   PHARMA NEXUS     │
│      │        REAL PROJECT STILL                │   procurement      │
│      │        graded, grain, vignette           │   agent            │
│      │                                          │                    │
│      └──────────────────────────────────────────┘                    │
│                                                                      │
│  SAI TEJA REVURI                                                     │
│  ────────────────────────────────────────────────────────────────    │
│  ROLE    Full-stack engineer, backend bias                           │
│  STACK   Python · FastAPI · React · SQL                              │
│  BASED   Kakinada, IN                                                │
│  STATUS  Open to roles                                    ● available │
│                                                                      │
│  [ Watch the reel ]        See the work →                            │
│ ════════════════════════════════════════════════════════════════════ │
│  00:00 ──●──────────────────────────────────── 01 WORK 02 ABOUT …   │
└──────────────────────────────────────────────────────────────────────┘
```

**Layers, bottom to top:** ink field → still image (Ken Burns 1.00→1.03 over 24 s, disabled on reduced motion) → static vignette → 4% grain tile → type. Text never sits directly on an uncontrolled image: the credit block sits on a solid ink panel with a hairline above it.

**The aperture** is two ink bars (top and bottom) at `aria-hidden`. On scroll past 60vh they retract to 0 over 700 ms. That single gesture is the site "opening up", and it is the transition from cinema to documentation.

**Primary action:** `Watch the reel` (solid bone on ink). Secondary: `See the work` (text link with an underline draw). The CV is in the header and the footer, not competing in the hero. One primary action per screen.

### 3.2 Typography

| Role | Face | Treatment |
|---|---|---|
| Display | **Archivo** variable, width 125, weight 700 | Name at `clamp(2.6rem, 7.2vw, 7rem)`, tracking `-0.03em`, line-height 0.92, uppercase |
| Text | **Archivo** variable, width 100, weight 400/500 | 17–19 px, line-height 1.6, max 62ch |
| Data | **IBM Plex Mono** 400/500 | 11–12 px, uppercase, tracking 0.12em, used only for timecodes, credits, spec rows, status |

Archivo's width axis is the identity: the display is *wide* while the text is normal, which reads as a title card rather than a landing page. Plex Mono is used only where a real value exists (a timecode, an endpoint count, a stack). It never appears as a decorative eyebrow.

### 3.3 Colour

| Token | Hex | Use | Contrast |
|---|---|---|---|
| **Ink** | `#08090A` | Field | — |
| **Bone** | `#EDE7DC` | Primary text | **16.19:1** on Ink |
| **Ember** | `#FF3B2F` | Accent: status dot, active chapter, focus ring, one CTA | **5.62:1** on Ink |
| **Ash** | `#9A958C` | Secondary text | **6.69:1** on Ink |
| **Dim** | `#6E6A63` | Decorative rules and disabled only | 3.71:1 — **never small text** |

Ember on bone is **2.88:1** and is therefore banned as text on light. On light panels, links use ink with an ember underline.

### 3.4 Background treatment

Three static layers, no animated gradients:

1. **Ink field** `#08090A`, not pure black — pure black clips on OLED and looks like an unloaded page.
2. **Vignette** — one radial-gradient, `rgba(0,0,0,0.55)` at the edges, static.
3. **Grain** — a 128×128 tiled PNG at 4% opacity, `background-repeat: repeat`, 3 KB. Not an SVG turbulence filter, which is expensive on mobile.

The only moving background is a 60-second **projection drift**: a very large radial highlight translated by ≤ 2% with `transform` only. It is disabled on reduced motion and on screens under 768 px.

### 3.5 Visual storytelling

Structure as a film, not as a résumé:

| Chapter | Slate | Function |
|---|---|---|
| 00 | OPENING | Who, what, proof of craft |
| 01 | THE CUT | Three scenes + one index row |
| 02 | THE OPERATOR | Bio + request trace + toolkit |
| 03 | THE RECORD | Internships, education, certifications |
| 04 | THE CALL | Contact |
| — | COLOPHON | Links, local time, credits |

The word "scene" is used consistently in the UI (`SCENE 01`, `SHOT LIST`, `RUNTIME`). Consistency is what makes a metaphor feel authored rather than themed.

### 3.6 Navigation

A **chapter rail** along the bottom on desktop: `00 OPENING · 01 WORK · 02 ABOUT · 03 RECORD · 04 CONTACT`, with a 1 px progress line and the active chapter in ember. It is a real `<nav>` with links and `aria-current`. It replaces both the current navbar and the fixed social rail.

On scroll past the hero, the rail docks to the top as a 48 px bar: monogram left, current chapter centre, `CV` + menu right. On mobile it becomes a 2 px progress line under a compact top bar, with a full-height menu sheet (large type, email, socials, CV).

No hidden hamburger-only navigation. No invisible focusable links.

### 3.7 Scroll experience

- **Aperture retract** (60vh → 100vh), 700 ms, once.
- **Scene transitions:** each project scene enters with a 400 ms cross-dissolve and a 1.02→1.00 scale. No pinning, no scroll-jacking, no horizontal hijack.
- **Chapter rail** updates from an IntersectionObserver, not from scroll math per frame.
- Native scrolling throughout. Anchor links get `scroll-margin-top: 64px`.

### 3.8 Project showcase

**The Cut** — one scene per project, full-width, alternating alignment:

```
SCENE 01 / 04                                     2025 · FULL-STACK
─────────────────────────────────────────────────────────────────────
PHARMA NEXUS V2
Restocking decisions that took an afternoon now run as one agent pass.

┌───────────────────────────────────────────────────────────────────┐
│                                                                   │
│                    REAL SCREENSHOT, 16:10                         │
│                    browser chrome, AVIF, lazy                     │
│                                                                   │
└───────────────────────────────────────────────────────────────────┘

SHOT LIST
ROLE     Full-stack · API design · agent orchestration
STACK    Python · FastAPI · React · SQLite · Pydantic
STATUS   Repository                                        [ GitHub ]
RESULT   Inventory-driven restocking, vendor evaluation, constraint
         validation and purchase-order decisions in one flow.

                                            Read the scene →
```

- Three featured scenes: Pharma Nexus (screenshots), HireFlow (screenshot or spec sheet), SQL Sense (live demo embed link).
- One compact **index row** for Clinic, with a spec sheet instead of a fabricated UI.
- Outcome headlines follow Daniel Neath's pattern, using only facts already in `portfolioData.js`.
- Expanding a scene is inline (`<details>`-style disclosure), not a modal. Routes can come later without redesigning the component.

### 3.9 Animation language

| Moment | Motion | Duration |
|---|---|---|
| Title cut-in | clip-path reveal from 100% to 0% inset, no fade | 420 ms |
| Aperture retract | bar height → 0 | 700 ms |
| Scene dissolve | opacity 0→1 + scale 1.02→1.00 | 400 ms |
| Chapter rail | width/colour of the progress line | 200 ms |
| Reel open | frame expands to viewport, poster swaps to video | 500 ms |

One easing: `cubic-bezier(0.16, 1, 0.3, 1)`. Transform and opacity only. No bounce, no spring overshoot, no infinite pulse except the single availability dot, which stops under reduced motion.

### 3.10 Responsive behaviour

| Breakpoint | Behaviour |
|---|---|
| ≥1280 | Aperture 2.39:1, 12-column grid, chapter rail at the bottom, credits in two columns |
| 1024–1279 | Aperture 16:9, rail docked top, credits stacked |
| 768–1023 | No aperture; 4:3 still; hero text above image; rail becomes progress line |
| <768 | Portrait 4:5 crop of the still; name 40–48 px; one primary CTA + one text link; credits as three rows; no drift, no grain animation |
| Landscape ≤ 500 px height | Hero uses `min-h-[100svh]` with flow, never `overflow: hidden` |

### 3.11 Accessibility

- The aperture is decorative and `aria-hidden`; it never contains text.
- Contrast is measured against the **worst frame** of the still, not the average. If a still cannot hold 7:1, the credit panel becomes fully opaque.
- Video: real `<button>` with `aria-pressed`, a mute toggle, and captions if there is speech.
- Reduced motion removes the Ken Burns, drift, dissolve and aperture retract, and leaves every element visible.
- Focus: 2 px ember ring with 2 px offset on ink; 2 px ink ring on bone.
- Chapter rail is keyboard-navigable in DOM order, with a skip link to `#work`.

### 3.12 Performance implications

| Item | Budget |
|---|---|
| Hero still | AVIF 1600×900, q50, **≤ 90 KB**, preloaded, `fetchpriority="high"` |
| Grain tile | ≤ 4 KB |
| Fonts | 2 files (Archivo variable, Plex Mono 400/500 subset), self-hosted, display file preloaded |
| Video | `preload="none"`, poster AVIF, click-to-play, **≤ 2.5 MB** |
| JS | No new dependencies; Motion is already installed; below-fold sections lazy |
| LCP | The still, target **< 2.0 s** on 4G |
| CLS | 0 — every image has `width`/`height`, fonts use a metric-matched fallback |

No WebGL, no canvas, no scroll library. This is the cheapest of the three directions to make feel expensive.

### 3.13 What could go wrong

- **Cinema can become cosplay.** If the letterbox, timecode and grain are applied to a normal page, it reads as a theme. The metaphor has to reach the copy and the structure (chapters, scenes, shot lists) or it collapses.
- **Dark sites hide craft on cheap phones.** Test at 300 nits. Keep body text at 17 px minimum and never below 6.7:1.
- **The still has to be excellent.** The whole hero depends on one graded screenshot. If the Pharma Nexus UI is thin on screen, the direction weakens.

---

## 4. Direction B — MONOGRAPH

> *A printed monograph, set for the screen.*

### The idea

The site is a **large-format book**: a title page, a contents, plates, captions, folio numbers, marginal notes, a colophon. It is light, quiet and exact. The extraordinary impression comes from **typographic confidence and restraint**, not from motion.

This is the direction closest to the rejected "Crimson Index", and I am including it honestly as the strongest *calm* alternative rather than pretending it is unrelated.

**First three seconds:** warm paper, a 12-column grid, the name set in a high-contrast serif at 11vw across two lines, a duotone plate bleeding off the right edge, and a single hairline rule with the folio `1` and the year. Nothing moves. A "Skip intro" link sits top-right, because the intro is a title page rather than a loader.

### 4.1 Hero composition

```
┌──────────────────────────────────────────────────────────────────────┐
│  SAI TEJA REVURI                                    CONTENTS   SKIP  │
│                                                                      │
│  FULL-STACK                                                          │
│  ENGINEER,                                                           │
│  BACKEND BIAS.                          ┌───────────────────────────┐│
│                                         │                           ││
│  ───────────────────────────────────    │   DUOTONE PLATE           ││
│  Python · FastAPI · React · SQL         │   (portrait or product)   ││
│                                         │   bleeds off right edge   ││
│  Kakinada, India                        │                           ││
│  Available for roles                    └───────────────────────────┘│
│                                                                      │
│  Selected work →                                   1 · 2026          │
└──────────────────────────────────────────────────────────────────────┘
```

### 4.2 Typography

**Newsreader** variable (display, optical size 6–72, weights 300–500) for the title and chapter openers. **Public Sans** 400/500 for text. **Newsreader italic** for captions and pull quotes. No mono.

Display at `clamp(3rem, 10vw, 9rem)`, line-height 0.9, tracking `-0.02em`, sentence case rather than uppercase. Body at 18 px, 1.65, 66ch measure.

### 4.3 Colour

| Token | Hex | Use | Contrast |
|---|---|---|---|
| Paper | `#F4F0E8` | Field | — |
| Ink | `#14110F` | Text | **16.54:1** |
| Slate | `#5B564F` | Captions, metadata | **6.40:1** |
| Oxblood | `#7A1F1B` | Rules, folios, links | **9.06:1** |

Four colours, no gradient, no shadow, no blur. Oxblood is the only chromatic event.

### 4.4 Background treatment

Paper with a 2% fibre texture (one tiled PNG), a very subtle warm-to-cool gradient across the page at 3% opacity, and nothing else. No glow, no glass, no blob.

### 4.5 Visual storytelling

Chapters with folios: `I. Plates`, `II. Notes`, `III. Record`, `IV. Colophon`. Projects are **plates**: a full-bleed image, a caption in italic, and a spec table below. About is a **note** set in two columns with marginalia. The CV is a **tear-out**.

### 4.6 Navigation

A running header: monogram left, current chapter centre, `Contents` right. The contents page is a real page (a full-screen overlay on mobile) listing chapters with folios. No sticky bottom bar. Progress is shown by the folio number, not a progress bar.

### 4.7 Scroll experience

Vertical, native, with occasional **spread moments**: a plate that occupies the full viewport, then a text spread. Images mask-reveal upward over 600 ms. A sticky folio in the outer margin tracks the chapter. No horizontal scroll, no pinning.

### 4.8 Project showcase

Plates with captions:

```
PLATE 02
──────────────────────────────────────────────────────────
[ FULL-BLEED SCREENSHOT, 3:2, duotone-neutral grade ]

Fig. 2 — Pharma Nexus V2. Inventory-driven restocking and
vendor negotiation, running as a single agent pass.

ROLE      Full-stack, API design
STACK     Python · FastAPI · React · SQLite
STATUS    Repository
```

### 4.9 Animation language

Mask reveals, 600 ms, 80 ms stagger, once. Image scale 1.03→1.00. Link underlines that draw. No parallax. One easing.

### 4.10 Responsive behaviour

Single column below 900 px, display drops to 44–56 px, plates go full-bleed edge to edge, captions move below the image, contents becomes a sheet. The grid collapses to 6 columns at 768 and 4 at 480.

### 4.11 Accessibility

Excellent by construction: 16.5:1 body text, no text over imagery, no motion dependency, semantic headings, real captions. The only risks are very large display type at 320 px (needs a hard clamp) and italic captions at small sizes.

### 4.12 Performance implications

The cheapest direction. No video in the hero, 3–4 images, 2 fonts, no animation runtime beyond a reveal observer. LCP can be under 1.2 s. The risk is not speed, it is **differentiation**.

### 4.13 What could go wrong

- It is the direction most likely to be read as "tasteful template".
- It under-delivers on your explicit first-screen requirement. A static title page is confident but not astonishing.
- It is conceptually adjacent to the direction you already rejected.

---

## 5. Direction C — RUNTIME

> *The portfolio is a running system you can inspect.*

### The idea

The first screen is a **live request trace**. A request leaves a client node, hits an API, validates, queries a database, calls an agent, and returns. The nodes are labelled with Sai Teja's real stack. The name sits inside the system, not above it. Scrolling zooms from the whole system into one service, then into the work that service shipped.

This is the only direction that makes **backend work visible**, which is genuinely rare in developer portfolios and true to the positioning.

**First three seconds:** a dark field with a faint coordinate grid. A single ember dot leaves the left edge and travels along a path, lighting nodes as it passes: `CLIENT → FASTAPI → PYDANTIC → SQLITE → AGENT → 200 OK · 42 ms`. The name resolves in the centre as the trace completes. A counter in the corner shows a real-looking latency figure — and it is real, computed from the animation timing, not a fake metric presented as a benchmark.

### 5.1 Hero composition

```
┌──────────────────────────────────────────────────────────────────────┐
│  SAI TEJA REVURI                          SYSTEM / 01      ● RUNNING │
│                                                                      │
│        ┌────────┐      ┌─────────┐      ┌────────┐      ┌─────────┐  │
│        │ CLIENT │─────▶│ FASTAPI │─────▶│ SQLITE │─────▶│  AGENT  │  │
│        └────────┘      └─────────┘      └────────┘      └─────────┘  │
│             │               │                │               │       │
│             └───────────────┴────────────────┴───────────────┘       │
│                         200 OK · 42 ms                               │
│                                                                      │
│  I build the API, the schema, and the interface that uses them.      │
│                                                                      │
│  [ Inspect the work ]                          Trace a request ↓     │
└──────────────────────────────────────────────────────────────────────┘
```

### 5.2 Typography

**Familjen Grotesk** 500/700 for display and UI (characterful, not Inter, not Geist). **Azeret Mono** 400/500 for node labels, endpoints and values. Display at `clamp(2.4rem, 6vw, 5.5rem)`, tracking `-0.02em`.

### 5.3 Colour

| Token | Hex | Use | Contrast |
|---|---|---|---|
| Void | `#0A0B0D` | Field | — |
| Chalk | `#E9E9E4` | Text | **16.16:1** |
| Cool | `#8A9199` | Grid, secondary | **6.18:1** |
| Signal | `#FF5C00` | The trace, active node, one CTA | **6.36:1** |

Signal is safety orange, not the site's current red. It reads as instrumentation rather than branding, which separates C from A visually.

### 5.4 Background treatment

A 1 px coordinate grid at 6% opacity, a static radial darkening at the edges, and a faint scanline at 3%. No glow, no glass. The grid is a CSS repeating-linear-gradient, not an image.

### 5.5 Visual storytelling

The site is an **inspection**: `SYSTEM → SERVICES → DEPLOYMENTS → RECORD → CONTACT`. Each project is a deployment with a topology, an endpoint count, and a status. The About section is a service card. The record is a changelog.

### 5.6 Navigation

A **node map** on desktop: five labelled nodes in a vertical column on the left, connected by a line that fills as you scroll. On mobile, a segmented top bar. A `Jump to` field (not a fake shell) opens a list of sections and projects, keyboard-first, `⌘K`.

### 5.7 Scroll experience

Scroll drives **zoom**: the whole system, then one service, then its deployments. Implemented as scale + opacity on SVG groups, not a camera library. One pinned section maximum. Reduced motion replaces zoom with a stacked list.

### 5.8 Project showcase

Each project is a **deployment panel**:

```
DEPLOYMENT 01                                    STATUS ● LIVE
PHARMA NEXUS V2
─────────────────────────────────────────────────────────────
TOPOLOGY   client → fastapi → pydantic → sqlite → agent
ENDPOINTS  12                       RECORDS  ~1.2k SKUs
SURFACE    React 19 · Tailwind
─────────────────────────────────────────────────────────────
[ live trace animation of one restocking decision ]
[ screenshot ]                         [ repo ]  [ read ]
```

### 5.9 Animation language

Path drawing (`stroke-dashoffset`), node illumination (opacity + scale 1→1.15→1), value counters, and a 2 px cursor-follow highlight on fine pointers. One easing, 200–600 ms. Everything pauses when off-screen.

### 5.10 Responsive behaviour

The node graph becomes a vertical stack of labelled rows below 900 px. The trace runs top-to-bottom instead of left-to-right. The cursor highlight is removed on touch. The pinned zoom is removed below 1024 px.

### 5.11 Accessibility

The hard part. Every animated node needs a static text equivalent; the SVG must be `role="img"` with a descriptive label or fully `aria-hidden` with a parallel DOM list. Colour-only state (ember node = active) is banned; each state gets a label. Reduced motion shows the completed trace, not a frozen frame. Keyboard users get the `Jump to` list, which is the real navigation.

### 5.12 Performance implications

The most expensive to do well. SVG path animation is cheap; continuous node animation and blur are not. Budget: one SVG scene, no canvas, no WebGL, `content-visibility: auto` on lower sections, and a hard rule that nothing animates off-screen. On mid-range Android this direction needs the most testing and the most fallbacks.

### 5.13 What could go wrong

- It can read as a **dev-tool demo** rather than a portfolio. The work must dominate, not the diagram.
- The system diagram invites scrutiny: if the topology is decorative and inaccurate, technical reviewers will notice.
- Accessibility debt accumulates fast. Every state needs a text equivalent.
- It is the highest-risk direction to execute in the time available, and the one most likely to be abandoned half-finished.

---

## 6. Visual comparison

| Criterion | A · FIRST FRAME | B · MONOGRAPH | C · RUNTIME |
|---|---|---|---|
| **First-screen impact** | High — dark, framed, title-card composition | Medium — beautiful but static | High — motion and novelty |
| **Originality** | High — credit/aperture/chapter system is uncommon | Medium — editorial is well-trodden, and close to the rejected direction | High — backend made visible is rare |
| **Fit with Sai Teja** | Strong — engineering presented with craft | Strong — but reads designer-first | Strongest on identity, weakest on proof of UI craft |
| **Shows the product** | Yes, immediately | Yes, as plates | Yes, as topology + screenshots |
| **Performance risk** | Low | Very low | High |
| **Accessibility risk** | Low | Very low | High |
| **Mobile risk** | Medium (letterbox → portrait crop) | Low | High (graph → list) |
| **Build effort** | Medium | Low | High |
| **Dependency needs** | None (Motion already installed) | None | None, but more custom SVG |
| **Failure mode** | Cinema cosplay | Tasteful sameness | Dev-tool gimmick |
| **Ceiling** | Very high | High | Very high, if executed perfectly |

---

## 7. Recommended direction: FIRST FRAME

**Recommendation: Direction A, with one device borrowed from C.**

### Why A wins

1. **It answers your actual brief.** You asked for an extraordinary first screen. A is the only direction where the first screen is a *composed image* — framing, type, light, and a single cut — rather than a layout with a big heading.
2. **It is built from assets you already own.** The Pharma Nexus screenshots and the reel become the opening frame. No stock photography, no invented UI, no 3D artist required.
3. **It differentiates on structure, not decoration.** The letterbox, the credit block, the chapter rail and the scene slates are a system. None of them appear in the current slop inventory, and none of them can be installed from a component library.
4. **It keeps the red.** Your brand recognition survives as Ember, used as an instrument light rather than as wallpaper. That is continuity without the fatigue and the contrast failures.
5. **It is the safest high-ceiling option.** No WebGL, no scroll hijacking, no second animation runtime. The spectacle is type, framing and one dissolve, which is exactly the kind of spectacle that still works on a mid-range Android.
6. **It scales into case studies.** A scene is already a case-study template. Adding routes later costs nothing structurally.

### Why not B

B is the most tasteful option and the least distinctive. It is also the closest to the direction you rejected, and it deliberately trades away first-screen impact. It is the right answer for a writer or an art director, not for a backend engineer competing for attention.

### Why not C

C has the highest conceptual ceiling and the highest chance of shipping as an unfinished gimmick. It makes accessibility and mobile performance genuinely hard, and it risks the diagram outshining the work. Rather than build the whole site around it, I would take **one** device from C — a single request-trace moment in the About section — where it earns its place as proof of engineering, not as the frame for everything.

### The hybrid rule

A owns the shell, the navigation, the work and the motion. C contributes exactly one component: a **trace strip** in About, 240 px tall, showing one real flow (`client → FastAPI → Pydantic → SQLite → agent → response`) with static labels, a single 2.4 s run on first view, and a text-equivalent list beneath it. If it cannot be made accessible and 60 fps, it is cut without debate.

---

## 8. Hero concept — the opening frame

### 8.1 Layer stack (desktop)

| z | Layer | Notes |
|---|---|---|
| 0 | Ink field `#08090A` | Never pure black |
| 1 | Still image, 2.39:1 | AVIF, graded warm, `object-fit: cover` |
| 2 | Vignette | Static radial gradient |
| 3 | Grain | 4% tiled PNG |
| 4 | Credit panel | Solid ink, hairline top, no blur |
| 5 | Type + actions | Bone, 16.19:1 |
| 6 | Aperture bars | `aria-hidden`, retract on scroll |
| 7 | Chapter rail | Fixed bottom, real nav |

### 8.2 Copy (first draft, all claims verifiable)

```
SAI TEJA REVURI

ROLE     Full-stack engineer, backend bias
STACK    Python · FastAPI · React · SQL
BASED    Kakinada, IN
STATUS   Open to roles

I build the API, the schema, and the interface that uses them.

[ Watch the reel ]        See the work →
```

No "passionate". No "crafting digital experiences". No "seamless solutions". The sentence is a claim about scope, and the work proves it.

### 8.3 States

| State | Behaviour |
|---|---|
| **Loading** | The still is preloaded; type renders immediately with a metric-matched fallback. No preloader, no skeleton, no logo animation |
| **Idle** | 24 s Ken Burns (desktop only), drift at 60 s, timecode counts |
| **Reel open** | Frame expands to 92vw × 52vw, poster swaps to video, controls appear, page scroll locks, `Esc` closes and returns focus |
| **Scrolled** | Aperture retracts, rail docks to top, still parallaxes 0 (no parallax — the image stays, the type leaves) |
| **Reduced motion** | No Ken Burns, no drift, no aperture animation, no dissolve; everything visible |
| **Offline / slow** | Still loads; video button shows "Reel unavailable" rather than a dead control |

### 8.4 Mobile

The aperture becomes a 4:5 portrait crop. The credit block collapses to three rows (`ROLE`, `STACK`, `STATUS`). The name is 40–48 px. One solid CTA, one text link. The chapter rail becomes a 2 px progress line. `min-h-[100svh]` with normal flow, never `h-screen` + `overflow-hidden`.

---

## 9. Project showcase concept — The Cut

### 9.1 Structure

Three **scenes** and one **index row**:

| # | Project | Treatment | Why |
|---|---|---|---|
| 01 | Pharma Nexus V2 | Full scene, 2–3 real screenshots, shot list, outcome headline | Strongest asset, most complex system |
| 02 | HireFlow | Full scene, screenshot if available, otherwise spec sheet | Role-based auth is a real engineering story |
| 03 | SQL Sense AI | Full scene with a live-demo link, spec sheet | The only project a visitor can use |
| 04 | Clinic Patient Record System | Compact index row, spec sheet only | No repo, no screenshots; do not fabricate |

### 9.2 Scene anatomy

1. **Slate** — `SCENE 01 / 04`, year, category.
2. **Outcome headline** — one sentence, before → after, number included only if verified.
3. **Media** — real screenshot in a hairline frame, 16:10, AVIF + WebP, `srcset` at 800/1400/1920, lazy.
4. **Shot list** — `ROLE`, `STACK`, `STATUS`, `RESULT` as a definition list, mono labels, 6.69:1 minimum.
5. **Actions** — `Read the scene` (disclosure) and `Repository` (real URL only).

### 9.3 Interaction

The disclosure expands inline with a 400 ms height/opacity transition, revealing the longer write-up and additional screenshots. No modal, no carousel, no hover-only information. On mobile, the scene is a vertical stack; media is 4:3; the shot list becomes a two-column table.

### 9.4 What replaces the card grid

A **cut list**: a compact table of all projects at the end of the section, one row each (`01 · Pharma Nexus · Full-stack · 2025 →`). It gives scanning visitors a fast path and gives the page a rhythm change after three large scenes. It is a list, not a grid.

---

## 10. Typography recommendations

### 10.1 The system

| Role | Face | Weights | Why |
|---|---|---|---|
| Display | **Archivo** (variable, wdth 100–125) | 600–700 | Wide, industrial, screen-native. The width axis is the identity. Not Inter, not Geist, not a trendy serif |
| Text | **Archivo** (wdth 100) | 400/500 | One family, two widths — coherent and cheap to load |
| Data | **IBM Plex Mono** | 400/500 | Only for timecodes, credits, spec values. Not decorative labels |

Two families, three files maximum. Both are open-source and self-hostable.

### 10.2 Scale

| Token | Size | Use |
|---|---|---|
| `display-xl` | `clamp(2.6rem, 7.2vw, 7rem)` | Hero name |
| `display-l` | `clamp(2.2rem, 4.6vw, 4rem)` | Scene titles |
| `display-m` | `clamp(1.75rem, 3vw, 2.5rem)` | Chapter openers |
| `body-l` | 19 px / 1.6 | Lead paragraphs |
| `body` | 17 px / 1.65 | Default |
| `body-s` | 15 px / 1.6 | Captions |
| `data` | 11–12 px mono, 0.12em tracking | Spec rows, timecode |

Rules: display tracking `-0.03em`, body measure 62–66ch, no text below 14 px, no uppercase body copy, no letter-spaced paragraphs.

### 10.3 Loading

Self-hosted WOFF2, Latin subset, `font-display: swap`, `size-adjust` fallback to keep CLS at 0, display file preloaded. Remove the current seven-weight Inter request and the unloaded Caveat reference.

### 10.4 What we stop using

Impact, Arial Black, generic serif italics, Caveat, seven Inter weights, and 9–10 px footer type.

---

## 11. Animation strategy

### 11.1 Principles

1. **Motion is a narrative with a beginning, a middle and an end.** The aperture opens once. The scenes dissolve once. Nothing loops except one status dot.
2. **One easing:** `cubic-bezier(0.16, 1, 0.3, 1)`.
3. **Transform and opacity only.** No animated `height`, `top`, `filter` or `box-shadow`.
4. **Nothing animates off-screen.** IntersectionObserver, not scroll listeners.
5. **Reduced motion is a first-class mode**, not a fallback.

### 11.2 The four moments

| # | Moment | Where | Duration | Reduced motion |
|---|---|---|---|---|
| 1 | Title cut-in (clip-path) | Hero | 420 ms | Instant |
| 2 | Aperture retract | Hero → Work | 700 ms | Bars hidden |
| 3 | Scene dissolve + 1.02 scale | Each project | 400 ms | Instant |
| 4 | Trace strip run | About | 2.4 s, once | Static completed diagram |

Everything else: 150–200 ms hover and focus transitions, underline draws, arrow slides of 2–4 px, image scale to 1.02 on hover (fine pointers only).

### 11.3 Explicitly removed

Preloader, AOS, `animate-ping`, `animate-pulse`, lanyard bounce, torn-paper wipes, parallax on the contact heading, `mix-blend-difference` social rail, and the per-frame `getBoundingClientRect` loop in Services.

### 11.4 Implementation notes

Motion is already a dependency. Use `LazyMotion` + `domAnimation` to keep the initial bundle small, and `useReducedMotion` to switch behaviour. Scroll-linked values use `useScroll` + `useTransform`, never manual `scrollY` reads in a render path. No GSAP, no anime.js, no Locomotive.

---

## 12. Component recommendations

### 12.1 Mapping from the current tree

| Current | Action | New component |
|---|---|---|
| `Preloader.jsx` | **Delete** | — (hero still preloaded instead) |
| `Navbar.jsx` | Replace | `ChapterRail.jsx` + `MenuSheet.jsx` |
| `Hero.jsx` | Rebuild | `OpeningFrame.jsx`, `CreditBlock.jsx`, `ReelPlayer.jsx` |
| `About.jsx` | Rebuild | `Bio.jsx`, `TraceStrip.jsx`, `Toolkit.jsx` |
| `TechnicalSkills.jsx` | Replace | `Toolkit.jsx` (matrix, no percentages) |
| `Services.jsx` | **Remove** | `MethodStrip.jsx` (four steps, static) |
| `Projects.jsx` | Rebuild | `CutList.jsx`, `Scene.jsx`, `ShotList.jsx` |
| `Internships.jsx` | Merge | `Record.jsx` (experience + education) |
| `Certificates.jsx` | Merge | `Record.jsx` (credentials ledger) |
| `SoftSkills.jsx` | **Remove** | Fold traits into `Bio.jsx` |
| `Contact.jsx` | Rebuild | `Contact.jsx` (honest form) |
| `Footer.jsx` | Rebuild | `Colophon.jsx` |
| `App.css` | **Delete** | Unused template styles |

### 12.2 Primitives

`SceneSlate`, `SpecRow`, `Hairline`, `ChapterLabel`, `MediaFrame`, `Disclosure`, `StatusDot`, `FocusRing`. Eight primitives cover the whole site. A small system is what makes a site look authored.

### 12.3 Rules

- **Buttons:** solid bone on ink (primary), hairline outline (secondary), text link (tertiary). 48 px minimum height. One primary per screen.
- **Links:** underline on hover with a 2 px offset; ember underline on light panels, never ember text on bone.
- **Cards:** none. Scenes and lists instead. No glass, no gradient borders, no coloured shadows, no `rounded-3xl`.
- **Form:** visible labels above inputs, 1 px bottom rule, inline field errors, `aria-live="polite"` status, honeypot, required consent with a real privacy note, and a truthful success state.
- **Icons:** a single hand-rolled SVG set at 1.5 px stroke. No icon library install.
- **Images:** every one has `width`, `height`, `alt`, and `loading="lazy"` below the fold.

### 12.4 Dependencies

**Zero new packages.** Remove `aos`. Keep `framer-motion` (lazy-loaded), `@emailjs/browser` only if configured, and the existing Tailwind 4 setup. Everything above is achievable with what is already installed.

---

## 13. Performance strategy

### 13.1 Budgets

| Metric | Target |
|---|---|
| LCP (4G, mid-range Android) | **< 2.0 s** |
| CLS | **< 0.03** |
| INP | **< 200 ms** |
| Initial JS (gzip) | **< 180 KB** (from ~126 KB transferred today, with less work in the first paint) |
| Initial transfer, hero only | **< 350 KB** |
| Total page weight, first visit | **< 1.2 MB** excluding the on-demand reel |
| Lighthouse | 95+ across all four categories |

### 13.2 Asset pipeline

**Hero still:** AVIF q50 at 1600×900 (≤ 90 KB), WebP fallback, `<link rel="preload" as="image" fetchpriority="high">`. This is the LCP element and the only thing allowed to be preloaded.

**Project screenshots:** AVIF + WebP, 800/1400/1920 `srcset`, 16:10 crop, lazy, explicit dimensions. Three scenes × 2 images = ~600 KB maximum on first scroll.

**Grain:** one 128×128 PNG tile, ≤ 4 KB, repeated. Not SVG turbulence.

**Video:** recut to a 12 s silent loop.
```
ffmpeg -i source.mp4 -t 12 -an -vf "scale=1280:-2,fps=30" \
  -c:v libx264 -profile:v high -crf 26 -preset slow -movflags +faststart reel.mp4
ffmpeg -i source.mp4 -t 12 -an -vf "scale=1280:-2,fps=30" \
  -c:v libvpx-vp9 -crf 34 -b:v 0 -row-mt 1 reel.webm
```
Target ≤ 2.5 MB combined, `preload="none"`, poster AVIF, click-to-play, `playsinline`, `muted` for the loop.

**Fonts:** two WOFF2 files, Latin subset, self-hosted, `Cache-Control: immutable`. Remove the Google Fonts render-blocking request.

### 13.3 Rendering strategy

- Below-fold sections lazy-loaded with `React.lazy` + `Suspense` behind an IntersectionObserver.
- `content-visibility: auto` on `#record` and `#contact` with `contain-intrinsic-size` to avoid scrollbar jumps.
- Images decoded async; the hero still decoded eagerly.
- No layout reads in animation frames. All scroll effects use Motion values or IntersectionObserver.
- Remove `backdrop-blur` entirely; the design does not need it.

### 13.4 Delivery

- Hashed assets served `public, max-age=31536000, immutable` (needs a `vercel.json`; not applied without approval).
- Baseline security headers (CSP, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`).
- `robots.txt`, `sitemap.xml`, canonical, OG image (1200×630), Twitter card, JSON-LD `Person` + `WebSite`.
- Favicon replaced with an `ST` monogram; the current file contains a "Y" from a template.

### 13.5 Measurement

Lighthouse CI on the preview, plus a manual pass at 320/375/768/1024/1440/1920 and on a throttled 4G profile. Budget assertions committed so regressions fail loudly.

---

## 14. Accessibility strategy

Designed in, not audited in.

| Area | Decision |
|---|---|
| Structure | One `<h1>`, `<header>`, `<main>`, `<footer>`, `<nav aria-label>`, sections with `aria-labelledby` |
| Skip link | First focusable element, visible on focus |
| Contrast | Body text ≥ 6.6:1; no text over uncontrolled imagery; no ember text on bone |
| Focus | 2 px ring, 2 px offset, ember on ink and ink on bone, never removed |
| Keyboard | Reel player is a real button; disclosure is a real button with `aria-expanded`; menu traps focus, closes on `Esc`, locks scroll |
| Motion | `prefers-reduced-motion` removes all four moments and leaves content visible |
| Video | No autoplay with sound; mute toggle; captions and transcript if there is speech |
| Forms | Visible labels, `aria-describedby` errors, `aria-live` status, honeypot, required consent |
| Touch | 44 px minimum targets; no hover-only information |
| Type | 14 px floor, 17 px body, 66ch measure |

---

## 15. Responsive behaviour matrix

| Width | Hero | Work | Nav | Notes |
|---|---|---|---|---|
| 320–479 | 4:5 still, name 40 px, stacked CTAs | Single column, 4:3 media | Progress line + sheet | Test at 320 with 200% zoom |
| 480–767 | 4:5 still, name 48 px | Single column | Progress line + sheet | — |
| 768–1023 | 16:9 still, text above image | Two-column shot list | Top bar + sheet | Nav switches here, not at 768 |
| 1024–1279 | 16:9, credits in two columns | Alternating scenes | Docked top rail | — |
| 1280–1599 | 2.39:1 aperture, full credit block | Full scenes | Bottom chapter rail | Primary design target |
| ≥1600 | Aperture capped at 1600 px, ink field extends | Max 1360 px content | Bottom rail | No 4K blow-up |

---

## 16. Risks and mitigations

| Risk | Mitigation |
|---|---|
| The still is not strong enough to carry the hero | Grade it, crop to the most legible region, and fall back to a typographic-only opening frame |
| Dark UI hides craft on cheap screens | Test at 300 nits; 17 px body; 6.6:1 minimum; no thin weights below 400 |
| Letterbox wastes mobile height | Switch to 4:5 crop below 768 px; no fixed viewport height |
| Video recut loses the story | Cut to 12 s of the strongest motion; keep the full 60 s available as a link if you want it |
| Cinematic language becomes decoration | Enforce the metaphor in copy and structure (chapters, scenes, shot lists), not only in styling |
| Portrait ambiguity | Either a real photo, or no portrait. The illustration is not presented as a photograph |
| Scope creep into case-study routes | Inline scenes first; routes later without redesign |

---

## 17. Decisions needed before implementation

1. **Approve FIRST FRAME** as the direction, or choose B or C.
2. **Reel:** may I recut the 60 s video to a 12 s silent loop? Does it contain speech that needs captions?
3. **Portrait:** is `sai-avatar.jpg` a real photo of you? If not, do we use a real photo, no portrait, or the illustration clearly labelled as art?
4. **Screenshots:** may I use the five Pharma Nexus images? Do you have captures of HireFlow, Clinic or SQL Sense?
5. **Facts to confirm:** CGPA 7.5 vs 7.9; the 500+/200+/25%/35% figures; real repo URLs for Clinic and SQL Sense; certificate verification URLs; the correct Instagram handle; whether to show the diploma.
6. **Copy voice:** first person ("I build…") or third person ("Sai builds…")?
7. **Scope:** inline scenes on one page (recommended) or separate case-study routes?
8. **Preview:** may I push `redesign/world-class-portfolio` so Vercel creates a preview, without touching deployment settings?

---

## 18. Summary

**Recommended: A · FIRST FRAME** — a cinematic opening frame built from real work, with a credit-block system, a chapter rail, and scenes instead of cards. One device borrowed from C (a single request trace in About) proves the engineering without putting the whole site at risk.

The current site's problem is not a lack of ambition. It is that the ambition is spread across three visual languages, eight effect types and eleven sections. FIRST FRAME concentrates it: one metaphor, one mechanic, four motion moments, two typefaces, one accent, and real screenshots doing the persuading.

*No files were changed. No packages were installed. No deployment settings were touched. Implementation waits for approval.*
