"use client";

import { useEffect, useRef } from "react";

/** Keep keyboard focus inside an open overlay and return it to its opener. */
export function useModalFocus(open: boolean, close: () => void) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusable = () => Array.from(ref.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex="0"]',
    ) ?? []).filter(element => element.getClientRects().length > 0 && element.tabIndex >= 0);
    const timer = window.setTimeout(() => {
      (ref.current?.querySelector<HTMLElement>('[data-modal-initial-focus]') ?? focusable()[0])?.focus();
    }, 0);
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { event.preventDefault(); close(); }
      if (event.key !== "Tab") return;
      const elements = focusable();
      const first = elements[0];
      const last = elements[elements.length - 1];
      if (!first) { event.preventDefault(); return; }
      if (event.shiftKey && (document.activeElement === first || !ref.current?.contains(document.activeElement))) {
        event.preventDefault(); last.focus();
      } else if (!event.shiftKey && (document.activeElement === last || !ref.current?.contains(document.activeElement))) {
        event.preventDefault(); first.focus();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
      if (opener?.isConnected) opener.focus({ preventScroll: true });
    };
  }, [open, close]);
  return ref;
}
