export default function TextLink({
  href,
  external,
  className = "",
  children,
  ...props
}) {
  const isExternal =
    typeof external === "boolean"
      ? external
      : typeof href === "string" && /^https?:\/\//.test(href);

  const externalProps = isExternal
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a
      href={href}
      className={`relative inline-block text-bone after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-200 after:ease-frame hover:text-ember hover:after:scale-x-100 ${className}`}
      {...externalProps}
      {...props}
    >
      {children}
      {isExternal && (
        <>
          <span aria-hidden="true"> ↗</span>
          <span className="sr-only"> (opens in a new tab)</span>
        </>
      )}
    </a>
  );
}
