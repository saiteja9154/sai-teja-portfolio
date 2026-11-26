import { actionBase, actionSizes, actionVariants } from "./actionStyles";

export default function ActionLink({
  href,
  variant = "primary",
  size = "md",
  external,
  className = "",
  children,
  ...props
}) {
  const isExternal =
    typeof external === "boolean"
      ? external
      : typeof href === "string" && /^https?:\/\//.test(href);

  const styles = [
    actionBase,
    actionVariants[variant] ?? actionVariants.primary,
    actionSizes[size] ?? actionSizes.md,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const externalProps = isExternal
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a href={href} className={styles} {...externalProps} {...props}>
      {children}
      {isExternal && (
        <>
          <span aria-hidden="true">↗</span>
          <span className="sr-only"> (opens in a new tab)</span>
        </>
      )}
    </a>
  );
}
