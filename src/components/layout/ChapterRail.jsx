import { useEffect, useRef, useState } from "react";
import { personalInfo } from "../../data/portfolioData";
import { siteMeta } from "../../data/site";
import { useChapter } from "../../hooks/useChapter";
import ActionLink from "../primitives/ActionLink";
import MenuSheet from "./MenuSheet";

export default function ChapterRail({ chapters = [] }) {
  const activeId = useChapter(chapters);
  const [docked, setDocked] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);

  const activeChapter =
    chapters.find((chapter) => chapter.id === activeId) ?? chapters[0] ?? null;

  useEffect(() => {
    const opening = document.getElementById("opening");
    if (!opening || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => setDocked(!entry.isIntersecting),
      { threshold: 0 },
    );

    observer.observe(opening);
    return () => observer.disconnect();
  }, []);

  const railPosition = docked
    ? "top-0 border-b border-line"
    : "top-0 border-b border-line lg:top-auto lg:bottom-0 lg:border-b-0 lg:border-t";

  return (
    <>
      <header
        className={`fixed inset-x-0 z-50 bg-ink ${railPosition}`}
        data-docked={docked ? "true" : "false"}
      >
        <div className="frame-container flex h-14 items-center justify-between gap-6">
          <a
            href="#opening"
            className="shrink-0 font-display text-sm font-semibold tracking-[0.18em] text-bone transition-colors hover:text-ember"
          >
            {siteMeta.monogram}
            <span className="sr-only">
              {" "}
              — {personalInfo.name}, back to opening
            </span>
          </a>

          <nav
            aria-label="Chapters"
            className={docked ? "hidden" : "hidden flex-1 justify-center lg:flex"}
          >
            <ol className="flex items-center gap-5">
              {chapters.map((chapter) => {
                const isActive = chapter.id === activeId;

                return (
                  <li key={chapter.id}>
                    <a
                      href={`#${chapter.id}`}
                      aria-current={isActive ? "true" : undefined}
                      className={`group relative inline-flex h-14 items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors ${
                        isActive ? "text-bone" : "text-ash hover:text-bone"
                      }`}
                    >
                      <span className={isActive ? "text-ember" : "text-ash"}>
                        {chapter.index}
                      </span>
                      <span>{chapter.label}</span>
                      <span
                        aria-hidden="true"
                        className={`absolute inset-x-0 bottom-0 h-px origin-left transition-transform duration-200 ease-frame ${
                          isActive
                            ? "scale-x-100 bg-ember"
                            : "scale-x-0 bg-bone group-hover:scale-x-100"
                        }`}
                      />
                    </a>
                  </li>
                );
              })}
            </ol>
          </nav>

          {activeChapter && (
            <p
              className={`${
                docked ? "hidden flex-1 text-center lg:block" : "hidden"
              } font-mono text-[11px] uppercase tracking-[0.12em] text-ash`}
            >
              <span className="text-ember">{activeChapter.index}</span>{" "}
              <span className="text-bone">{activeChapter.label}</span>
            </p>
          )}

          <div className="flex shrink-0 items-center gap-2">
            <ActionLink
              href={personalInfo.resumeUrl}
              download
              variant="ghost"
              size="sm"
              aria-label="Download CV (PDF)"
            >
              CV
              <span aria-hidden="true">↓</span>
            </ActionLink>

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-haspopup="dialog"
              aria-expanded={menuOpen}
              aria-controls="chapter-menu"
              className={`${
                docked ? "inline-flex" : "inline-flex lg:hidden"
              } h-11 items-center border border-line-strong px-4 font-mono text-[11px] uppercase tracking-[0.12em] text-bone transition-colors hover:border-bone hover:bg-panel`}
            >
              Menu
            </button>
          </div>
        </div>

        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-x-0 h-px bg-line ${
            docked ? "bottom-0" : "bottom-0 lg:bottom-auto lg:top-0"
          }`}
        >
          <span className="rail-progress-fill" />
        </div>
      </header>

      <MenuSheet
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        chapters={chapters}
        activeId={activeId}
      />
    </>
  );
}
