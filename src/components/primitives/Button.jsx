import { actionBase, actionSizes, actionVariants } from "./actionStyles";

export default function Button({
  variant = "primary",
  size = "md",
  type = "button",
  className = "",
  children,
  ...props
}) {
  const styles = [
    actionBase,
    actionVariants[variant] ?? actionVariants.primary,
    actionSizes[size] ?? actionSizes.md,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={styles} {...props}>
      {children}
    </button>
  );
}
