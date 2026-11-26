# CONTENT_VERIFICATION.md

**Project:** Sai Teja Revuri — Full Stack Developer Portfolio
**Purpose:** A single list of facts that must be confirmed before the FIRST FRAME redesign is implemented.
**Rule:** Nothing below is invented. Where the repository is silent or inconsistent, this document says so and leaves the answer blank.
**Prepared:** 26 November 2026

---

## 0. How to use this document

1. Read each table. The **Current value** column is what exists in the repository today, quoted exactly.
2. Mark the **Confirm** column: `✅ correct`, `✏️ change` (write the replacement), or `🗑️ remove`.
3. Anything left blank will be **omitted from the new site**, not guessed.
4. The items in §1 block implementation. The rest can be resolved during the build.

Every value below traces to `src/data/portfolioData.js` unless another file is named.

---

## 1. Blocking items (needed before the hero and work sections are built)

| # | Item | Why it blocks | Answer |
|---|---|---|---|
| B1 | Positioning sentence: is "Full-stack engineer, backend bias" accurate? | It is the `<h1>` support line and the organising idea of the whole site | |
| B2 | Availability: should the hero say "Open to roles"? | It appears in the hero, the contact section and the footer | |
| B3 | Portrait: is `sai-avatar.jpg` a real photograph of you? | Decides whether a portrait exists at all | |
| B4 | Pharma Nexus screenshots: may the five existing images be used publicly? | They are the hero image and Scene 01 | |
| B5 | Reel: may the 60 s video be recut to 12 s and muted? | It is the only video asset | |
| B6 | CGPA: 7.5 or 7.9? | Appears in education and the footer | |
| B7 | Clinic and SQL Sense repository URLs | Two links currently point at your profile, not a repo | |
| B8 | Inline case studies or separate routes? | Changes the page architecture and routing | |

---

## 2. Identity and positioning

| Field | Current value | Source | Confirm |
|---|---|---|---|
| Name | `Sai Teja Revuri` | `personalInfo.name` | |
| Title | `Full Stack Developer \| Backend Developer \| MERN Stack Developer` | `personalInfo.title` | |
| Location | `Kakinada, India` | `personalInfo.location` | |
| Phone | `+91 9154122026` | `personalInfo.phone` | |
| Primary email | `steja9759@gmail.com` | `personalInfo.emails.primary` | |
| Secondary email | `steja9759@gmail.com` (same as primary) | `personalInfo.emails.secondary` | |
| Resume | `/Sai_Teja_Revuri_Resume.pdf` | `personalInfo.resumeUrl` | |

**Notes and questions**

- The title makes three claims ("Full Stack", "Backend", "MERN") while the summary leads with Python/FastAPI/Flask. MongoDB appears in the title and in `index.html` keywords, but **not** in `technicalSkills`. Which is true?
- The phone number is committed to a public repository but is **not displayed anywhere** in the UI. Keep it in the data file, or remove it?
- Is the resume PDF current? It could not be parsed for this audit, so its contents have not been cross-checked against the site.

---

## 3. Education

| Field | Current value | Source | Confirm |
|---|---|---|---|
| Degree | `Bachelor of Technology in Computer Science and Artificial Intelligence` | `education.degree` | |
| Institution | `Kakinada Institute of Engineering and Technology` | `education.institution` | |
| CGPA | `7.5 CGPA` | `education.cgpa` | |
| Years | `2024 – 2027` | `education.graduation` | |
| Diploma | `Diploma in Mechanical Engineering – Aditya Polytechnic College (2021 – 2024) – 80%` | `education.twelfth` | |

**Known conflict**

- `README.md` states **CGPA 7.9**.
- `portfolioData.js` states **7.5**.
- `footerContent.credential` states **CGPA 7.5**.

One of these is wrong. Confirm the correct figure before anything ships.

**Also confirm**

- Is the B.Tech expected graduation **2027**, and is it currently in progress?
- Should the diploma appear on the site, or only the B.Tech?
- Is "80%" the diploma percentage or a grade point? The string is ambiguous.

---

## 4. Projects and links

Last HTTP check: **26 November 2026**.

| Project | Repository URL (current) | Reachable | Live demo (current) | Reachable | Confirm |
|---|---|---|---|---|---|
| Pharma Nexus V2 | `https://github.com/saiteja9154/Pharma-Nexus` | ✅ 200 | none | — | |
| Clinic Patient Record System | `https://github.com/saiteja9154` ← **profile, not a repo** | ✅ 200 but wrong target | none | — | |
| HireFlow Job Portal | `https://github.com/saiteja9154/Hireflow-Job-Portal` | ✅ 200 | none | — | |
| SQL Sense AI | `https://github.com/saiteja9154` ← **profile, not a repo** | ✅ 200 but wrong target | `https://sql-learning-assistant-ai.vercel.app/` | ✅ 200 | |

**Questions**

- Do public repositories exist for **Clinic** and **SQL Sense**? If not, should those projects link to nothing, or be presented without a repo link?
- Is there a live demo for **Pharma Nexus** or **HireFlow**? If not, the scene shows "Repository only".
- Does the SQL Sense demo still work end-to-end, or is it a static shell? It will be labelled "Live demo" only if it works.

---

## 5. Project statistics (all currently unverified)

These figures appear in `projects[].description`. They will be **removed** unless confirmed, because invented metrics are the fastest way to lose a technical interviewer's trust.

| Claim | Project | Source | Confirm / correct |
|---|---|---|---|
| `500+ patient records` | Clinic | `projects[1].description` | |
| `10+ RESTful API endpoints` | Clinic | `projects[1].description` | |
| `reducing task completion time by 25%` | Clinic | `projects[1].description` | |
| `200+ active listings` | HireFlow | `projects[2].description` | |
| `improving recruiter workflow efficiency by an estimated 35%` | HireFlow | `projects[2].description` | |
| `10+ schema types` | SQL Sense | `projects[3].description` | |

**How was each measured?** If there is no measurement, the honest version is a capability statement ("supports patient registration, history and prescriptions") rather than a percentage.

---

## 6. Internships

| Field | Current value | Source | Confirm |
|---|---|---|---|
| Organisation 1 | `EduSkills Academy` | `internshipsList[0]` | |
| Role 1 | `Software & Data Development Virtual Intern` | `internshipsList[0]` | |
| Duration 1 | `8-Week Program` | `internshipsList[0]` | |
| Organisation 2 | `Google for Developers & AICTE EduSkills` | `internshipsList[1]` | |
| Role 2 | `AI/ML Developer Virtual Intern` | `internshipsList[1]` | |
| Duration 2 | `10-Week Program` | `internshipsList[1]` | |

**Questions**

- What are the **start and end months/years**? The site currently shows only durations. A year makes the record credible.
- Are these **virtual internship programmes** (EduSkills/AICTE), not employment? The new site labels them "Virtual internship" to stay accurate.
- Are the two bullet points per internship accurate and still the best description?
- Is there a certificate or completion letter for either programme? If yes, it could be the verification link.

---

## 7. Certifications

| # | Name | Issuer | Credential URL | Year | Confirm |
|---|---|---|---|---|---|
| 1 | `AWS Certified Cloud Practitioner` | `Amazon Web Services (AWS)` | **missing** | **missing** | |
| 2 | `Data Analytics with Python & Power BI` | `EduSkills Academy` | **missing** | **missing** | |
| 3 | `Google Data Analytics Professional Certificate` | `Coursera / Google` | **missing** | **missing** | |

**Current behaviour to fix:** "View All Certificates" points to `https://github.com/saiteja9154` (`certificates.viewAllUrl`). That is not a certificate page and will be removed.

**Questions**

- Do you have verification URLs (Credly, Coursera, AWS)?
- Is the AWS certification **active** or expired? AWS CCP is valid for three years.
- Are there additional certificates that should appear, or only these three?

---

## 8. Social and contact links

| Link | Current value | Status | Confirm |
|---|---|---|---|
| GitHub | `https://github.com/saiteja9154` | ✅ 200 | |
| LinkedIn | `https://linkedin.com/in/sai-teja-revuri-97b63732a` | ⚠️ 403 to automated requests (LinkedIn blocks bots) — open it manually to confirm | |
| Instagram | `https://github.com/saiteja9154` ← **not Instagram** | ❌ wrong target | |
| Portfolio repo | `https://github.com/saiteja9154/sai-teja-portfolio.git` | ✅ 200 | |

**Questions**

- Is there a real Instagram account? If not, the link is removed (the current site shows it in four places).
- Is the LinkedIn slug correct? It returns 403 to scripts, so it needs a manual click.
- Should X/Twitter appear? None exists in the data today.

---

## 9. Media

### 9.1 Portrait

| Question | Answer |
|---|---|
| Is `src/assets/about/sai-avatar.jpg` a photograph of you? | |
| If not, was it AI-generated or illustrated? | |
| Is `src/assets/about/image.png` (900×1600, 1.4 MB, unused) a different person? | |
| Should the site show a real photo, no portrait, or the illustration labelled as art? | |

If the answer is "illustration", the new site will not present it as a photograph. The cinematic direction works without a portrait: the work is the hero.

### 9.2 Video

| Question | Answer |
|---|---|
| Does `portfolio-hero.mp4` contain **speech**? | |
| Does it contain **music only**? | |
| Is there any text on screen that must be readable? | |
| May it be trimmed to a 12 s silent loop? | |
| Should the full 60 s version remain available anywhere? | |

Technical facts: 1920×1080, ~60.3 s, H.264 + AAC audio track, 30,333 KB, `moov` atom at the end of the file (not faststart). If there is speech, captions and a transcript are required for WCAG 1.2.2.

---

## 10. Structural decisions

| # | Decision | Options | Recommendation | Your answer |
|---|---|---|---|---|
| S1 | Case studies | A) Inline scenes on one page · B) Separate routes per project | **A** for launch; routes later without redesign | |
| S2 | Copy voice | A) First person ("I build…") · B) Third person ("Sai builds…") | **A** — warmer and shorter | |
| S3 | Contact form | A) Configure EmailJS properly · B) mailto-first, no form · C) Another service | **A** with a visible mailto fallback | |
| S4 | Phone number | A) Remove from public data · B) Display it | **A** | |
| S5 | Diploma | A) Show alongside B.Tech · B) B.Tech only | **A** if the 80% is confirmed | |
| S6 | Blog / writing | A) None · B) Add if real posts exist | **A** — do not add an empty section | |

---

## 11. Known inconsistencies in the repository

These are recorded so they are not silently carried into the redesign.

| # | Inconsistency | Location |
|---|---|---|
| 1 | CGPA 7.9 vs 7.5 | `README.md` vs `portfolioData.js` |
| 2 | README project table says SQLite/MySQL/JWT; data says Flask/PostgreSQL | `README.md` vs `projects[]` |
| 3 | README "View Live Demo" links to the GitHub repo, not the live site | `README.md` |
| 4 | Instagram points to GitHub (4 places) | `socialLinks.instagram`, `Hero.jsx`, `Contact.jsx`, `Footer.jsx` |
| 5 | "View All Certificates" points to the GitHub profile | `certificates.viewAllUrl` |
| 6 | Clinic and SQL Sense GitHub links point to the profile | `projects[1].links.github`, `projects[3].links.github` |
| 7 | EmailJS IDs are still `YOUR_EMAILJS_*` placeholders in production | `emailjsConfig` |
| 8 | Consent checkbox is not required and has no `name`, so consent is never sent | `Contact.jsx` |
| 9 | `education`, `personalInfo.phone`, `personalInfo.summary`, `personalInfo.title` are defined but never rendered | `portfolioData.js` |
| 10 | Favicon contains the letter "Y" (template leftover) | `public/favicon.svg` |
| 11 | Resume link uses both `download` and `target="_blank"` | Navbar / Hero / Footer |
| 12 | README claims bundle splitting and animated skill gauges that do not exist | `README.md` |

---

## 12. What happens if an item is left unanswered

| Unanswered item | Behaviour in the build |
|---|---|
| CGPA | Education block shows degree and institution, **no CGPA** |
| Project statistics | Percentages and counts are removed; capability statements remain |
| Clinic / SQL Sense repo | No repository link is rendered |
| Certificate URLs | No "Verify" link is rendered |
| Instagram | Link removed |
| Portrait | No portrait; the hero uses the product still |
| Video speech status | Video ships muted with no audio track; no captions needed |
| Internship dates | Duration only (`8 weeks`), no year |
| Case-study structure | Inline scenes |

---

## 13. Sign-off

| Question | Answer |
|---|---|
| Reviewed by | |
| Date | |
| Blocking items resolved (B1–B8)? | |
| Approved to begin implementation? | |

---

*This document contains no invented facts. Every "current value" is quoted from the repository. Blank fields are intentionally blank.*
