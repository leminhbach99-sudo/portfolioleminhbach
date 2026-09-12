"use client";

import { useState } from "react";
import type { Media } from "@/content/types";
import { cn } from "@/lib/cn";

type Props = {
  media: Media;
  className?: string;
  /** Small slots only show the label, not the file path. */
  compact?: boolean;
  fit?: "cover" | "contain";
};

/**
 * Shows the real image when `media.src` is set, and a clearly labeled placeholder otherwise.
 * If the file is missing or fails to load, it falls back to the placeholder instead of a broken image.
 */
export function MediaSlot({ media, className, compact = false, fit }: Props) {
  const [failed, setFailed] = useState(false);
  const objectFit = fit ?? media.fit ?? "cover";

  if (media.src && !failed) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={media.src}
        alt={media.alt}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
        style={media.background ? { backgroundColor: media.background } : undefined}
        className={cn(
          "h-full w-full",
          objectFit === "cover" ? "object-cover" : "object-contain",
          objectFit === "contain" && media.background ? "p-[5%]" : undefined,
          className,
        )}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={`${media.alt} (placeholder)`}
      className={cn(
        "placeholder-hatch relative flex h-full w-full flex-col justify-end overflow-hidden border border-dashed border-tide bg-deep",
        compact ? "items-center justify-center p-2 text-center" : "p-4 md:p-5",
        className,
      )}
    >
      <span className={cn("font-semibold text-foam", compact ? "text-xs" : "text-sm")}>{media.label}</span>
      {!compact ? <span className="mt-1 break-all font-mono text-xs text-mist">{media.path}</span> : null}
    </div>
  );
}
