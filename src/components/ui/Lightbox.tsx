"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { Media } from "@/content/types";

type Props = {
  items: Media[];
  index: number;
  onIndex: (index: number) => void;
  onClose: () => void;
};

/** Full-screen image viewer with keyboard navigation. Rendered into <body> so it sits above any dialog. */
export function Lightbox({ items, index, onIndex, onClose }: Props) {
  const [mounted, setMounted] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const item = items[index];
  const hasMany = items.length > 1;

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [mounted]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      } else if (event.key === "ArrowRight" && hasMany) {
        onIndex((index + 1) % items.length);
      } else if (event.key === "ArrowLeft" && hasMany) {
        onIndex((index - 1 + items.length) % items.length);
      } else if (event.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>("button");
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, items.length, hasMany, onClose, onIndex]);

  if (!mounted || !item) return null;

  return createPortal(
    <motion.div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      className="fixed inset-0 z-[60] flex flex-col bg-abyss/95"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      // The viewer is portaled, but React events still bubble to the parent dialog; keep them here.
      onClick={(event) => event.stopPropagation()}
    >
      <div className="flex items-center justify-between gap-4 px-4 py-3 md:px-8">
        <p className="min-w-0 truncate text-sm text-mist" aria-live="polite">
          {hasMany ? `${index + 1} / ${items.length}, ` : ""}
          {item.label}
        </p>
        <button ref={closeRef} type="button" onClick={onClose} className="btn-ghost !px-4 !py-2 text-sm">
          Close
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-6 md:px-20" onClick={onClose}>
        <AnimatePresence mode="wait">
          <motion.img
            key={item.src ?? item.path}
            src={item.src}
            alt={item.alt}
            className="max-h-full max-w-full rounded-lg object-contain"
            style={item.background ? { backgroundColor: item.background } : undefined}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(event) => event.stopPropagation()}
          />
        </AnimatePresence>

        {hasMany ? (
          <>
            <button
              type="button"
              aria-label="Previous image"
              onClick={(event) => {
                event.stopPropagation();
                onIndex((index - 1 + items.length) % items.length);
              }}
              className="focus-ring absolute left-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-deep text-xl font-bold md:left-6"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={(event) => {
                event.stopPropagation();
                onIndex((index + 1) % items.length);
              }}
              className="focus-ring absolute right-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-deep text-xl font-bold md:right-6"
            >
              ›
            </button>
          </>
        ) : null}
      </div>
    </motion.div>,
    document.body,
  );
}
