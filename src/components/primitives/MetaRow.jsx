/**
 * Must be rendered inside a <dl>. Wraps one label/value pair in a div,
 * which is valid HTML5 content for a description list.
 */
export default function MetaRow({ label, children, className = "" }) {
  return (
    <div
      className={`grid grid-cols-[minmax(88px,0.35fr)_1fr] gap-4 border-b border-line py-3 ${className}`}
    >
      <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-ash">
        {label}
      </dt>
      <dd className="m-0 text-[15px] leading-snug text-bone">{children}</dd>
    </div>
  );
}
