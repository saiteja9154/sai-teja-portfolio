export default function Hairline({ strong = false, className = "" }) {
  return (
    <hr
      className={`h-px w-full border-0 ${
        strong ? "bg-line-strong" : "bg-line"
      } ${className}`}
    />
  );
}
