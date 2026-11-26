export const actionBase =
  "inline-flex items-center justify-center gap-2 border font-mono text-[11px] uppercase tracking-[0.12em] transition-colors duration-150 ease-frame disabled:pointer-events-none disabled:opacity-50";

export const actionVariants = {
  primary: "border-bone bg-bone text-ink hover:border-white hover:bg-white",
  ghost:
    "border-line-strong bg-transparent text-bone hover:border-bone hover:bg-panel",
  quiet: "border-transparent bg-transparent text-ash hover:text-bone",
};

export const actionSizes = {
  md: "h-14 px-6",
  sm: "h-11 px-4",
};
