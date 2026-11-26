import { useEffect, useRef } from "react";

/**
 * Drives a native <dialog> from controlled React state.
 * Native showModal() supplies the focus trap and Escape handling.
 * Returns refs for the dialog and the element that should receive focus.
 */
export function useDialog(open) {
  const dialogRef = useRef(null);
  const firstFocusRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
      firstFocusRef.current?.focus();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return { dialogRef, firstFocusRef };
}
