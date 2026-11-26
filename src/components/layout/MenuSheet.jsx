import { personalInfo, socialLinks } from "../../data/portfolioData";
import { siteMeta } from "../../data/site";
import { useDialog } from "../../hooks/useDialog";
import Button from "../primitives/Button";
import Hairline from "../primitives/Hairline";

export default function MenuSheet({ open, onClose, chapters, activeId }) {
  const { dialogRef, firstFocusRef } = useDialog(open);

  return (
    <dialog
      ref={dialogRef}
      id="chapter-menu"
      className="menu-sheet"
      aria-labelledby="chapter-menu-title"
      onClose={onClose}
      onPointerDown={(event) => {
        if (event.target === dialogRef.current) onClose();
      }}
    >
      <div className="flex min-h-full flex-col px-gutter py-6">
        <div className="flex items-center justify-between gap-4">
          <p
            id="chapter-menu-title"
            className="font-mono text-[11px] uppercase tracking-[0.14em] text-ash"
          >
            Chapters
          </p>
          <Button type="button" variant="ghost" size="sm" onClick={onClose}>
            Close
          </Button>
        </div>

        <nav aria-label="Chapters" className="mt-12">
          <ol>
            {chapters.map((chapter, index) => {
              const isActive = chapter.id === activeId;

              return (
                <li key={chapter.id} className="border-b border-line">
                  <a
                    ref={index === 0 ? firstFocusRef : undefined}
                    href={`#${chapter.id}`}
                    onClick={onClose}
                    aria-current={isActive ? "true" : undefined}
                    className={`group flex min-h-14 items-baseline gap-4 py-4 transition-colors ${
                      isActive ? "text-bone" : "text-ash hover:text-bone"
                    }`}
                  >
                    <span
                      className={`font-mono text-[11px] tracking-[0.12em] ${
                        isActive ? "text-ember" : ""
                      }`}
                    >
                      {chapter.index}
                    </span>
                    <span className="display-wide font-display text-[28px] font-semibold uppercase leading-none tracking-[-0.02em]">
                      {chapter.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ol>
        </nav>

        <div className="mt-auto pt-12">
          <Hairline />
          <p className="mt-6 font-display text-xl font-semibold">
            {personalInfo.name}
          </p>
          <p className="mt-1 text-sm text-ash">{siteMeta.role}</p>

          <div className="mt-6 flex flex-col gap-2 font-mono text-[11px] uppercase tracking-[0.12em]">
            <a
              href={`mailto:${personalInfo.emails.primary}`}
              className="inline-flex min-h-11 items-center text-bone transition-colors hover:text-ember"
            >
              {personalInfo.emails.primary}
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center text-bone transition-colors hover:text-ember"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center text-bone transition-colors hover:text-ember"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <a
              href={personalInfo.resumeUrl}
              download
              className="inline-flex min-h-11 items-center text-bone transition-colors hover:text-ember"
            >
              Download CV <span aria-hidden="true">↓</span>
            </a>
            <a
              href="#opening"
              onClick={onClose}
              className="inline-flex min-h-11 items-center text-bone transition-colors hover:text-ember"
            >
              Back to top <span aria-hidden="true">↑</span>
            </a>
          </div>
        </div>
      </div>
    </dialog>
  );
}
