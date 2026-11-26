import { personalInfo, socialLinks } from "../../data/portfolioData";
import { chapters, siteMeta } from "../../data/site";
import Hairline from "../primitives/Hairline";
import TextLink from "../primitives/TextLink";
import ChapterRail from "./ChapterRail";

export default function PageShell({ children }) {
  return (
    <div className="min-h-svh bg-ink text-bone">
      <a className="skip-link" href="#work">
        Skip to work
      </a>

      <ChapterRail chapters={chapters} />

      <main id="main">
        <h1 className="sr-only">
          {personalInfo.name} — {siteMeta.role}
        </h1>
        {children}
      </main>

      <footer id="colophon" className="bg-ink">
        <div className="frame-container py-12">
          <Hairline />
          <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-display text-xl font-semibold">
                {personalInfo.name}
              </p>
              <p className="mt-1 text-sm text-ash">{siteMeta.role}</p>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-ash">
                Phase 1 — design foundation
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.12em]">
              <TextLink href={`mailto:${personalInfo.emails.primary}`}>
                Email
              </TextLink>
              <TextLink href={socialLinks.github}>GitHub</TextLink>
              <TextLink href={socialLinks.linkedin}>LinkedIn</TextLink>
              <TextLink href="#opening">Back to top</TextLink>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
