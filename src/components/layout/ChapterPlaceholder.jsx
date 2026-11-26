import Hairline from "../primitives/Hairline";
import MetaRow from "../primitives/MetaRow";

export default function ChapterPlaceholder({ chapter }) {
  return (
    <section
      id={chapter.id}
      aria-labelledby={`${chapter.id}-title`}
      className={`chapter ${
        chapter.id === "opening" ? "chapter--opening" : ""
      }`}
    >
      <div className="frame-container">
        <div className="frame-grid">
          <div className="col-span-4 md:col-span-8 lg:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ember">
              {chapter.index} / {chapter.label}
            </p>
            <h2
              id={`${chapter.id}-title`}
              className="display-wide mt-6 font-display text-display-l font-semibold uppercase text-bone"
            >
              {chapter.title}
            </h2>
            <p className="measure-lead mt-6 text-lead text-ash">
              {chapter.note}
            </p>
          </div>

          <div className="col-span-4 mt-12 md:col-span-8 lg:col-span-4 lg:col-start-9 lg:mt-0">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ash">
              Phase 1 shell
            </p>
            <dl className="mt-4">
              <MetaRow label="Chapter">
                {chapter.index} · {chapter.label}
              </MetaRow>
              <MetaRow label="Status">Foundation only</MetaRow>
              <MetaRow label="Content">Awaiting scene build</MetaRow>
            </dl>
          </div>
        </div>

        <Hairline className="mt-16" />
      </div>
    </section>
  );
}
