"use client";

import { useReducedMotion } from "framer-motion";
import { useState } from "react";
import type { VideoMedia } from "@/content/types";
import { cn } from "@/lib/cn";

/** Set NEXT_PUBLIC_OPEN_VIDEOS_EXTERNALLY=1 to link to YouTube instead of embedding (used for sandboxed previews). */
const OPEN_EXTERNALLY = process.env.NEXT_PUBLIC_OPEN_VIDEOS_EXTERNALLY === "1";

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className}>
      <path d="M8 5.5v13l11-6.5z" fill="currentColor" />
    </svg>
  );
}

/**
 * Supports a YouTube embed (loads only after the visitor presses play),
 * an MP4 preview with poster, or a labeled placeholder.
 */
export function VideoSlot({ video, className }: { video: VideoMedia; className?: string }) {
  const [playing, setPlaying] = useState(false);
  const reduce = useReducedMotion();

  if (video.youtubeId) {
    const watchUrl = `https://www.youtube.com/watch?v=${video.youtubeId}`;
    if (playing && !OPEN_EXTERNALLY) {
      return (
        <iframe
          className={cn("h-full w-full", className)}
          src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    }
    const poster = video.poster ?? (OPEN_EXTERNALLY ? undefined : `https://i.ytimg.com/vi/${video.youtubeId}/maxresdefault.jpg`);
    const inner = (
      <>
        {poster ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={poster}
            alt=""
            onError={(event) => {
              const fallback = `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`;
              if (event.currentTarget.src !== fallback) event.currentTarget.src = fallback;
            }}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <span aria-hidden className="placeholder-hatch absolute inset-0 bg-deep" />
        )}
        {poster ? (
          // With a poster, keep the artwork clear: a compact play control sits low in the frame.
          <span className="absolute bottom-3 left-1/2 grid h-14 w-14 -translate-x-1/2 place-items-center rounded-full bg-sun text-abyss shadow-lg ring-4 ring-abyss/40 transition-transform duration-300 group-hover:scale-110 md:bottom-5 md:h-16 md:w-16">
            <PlayIcon className="h-7 w-7 translate-x-0.5" />
          </span>
        ) : (
          <span className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-sun text-abyss transition-transform duration-300 group-hover:scale-110 md:h-24 md:w-24">
              <PlayIcon className="h-9 w-9 translate-x-0.5" />
            </span>
            <span className="text-lg font-semibold text-foam">{video.title}</span>
          </span>
        )}
      </>
    );
    const shared = cn("focus-ring group relative block h-full w-full overflow-hidden bg-deep", className);
    return OPEN_EXTERNALLY ? (
      <a href={watchUrl} target="_blank" rel="noreferrer" className={shared} aria-label={`Watch on YouTube: ${video.title}`}>
        {inner}
      </a>
    ) : (
      <button type="button" onClick={() => setPlaying(true)} className={shared} aria-label={`Play video: ${video.title}`}>
        {inner}
      </button>
    );
  }

  if (video.mp4) {
    return (
      <video
        className={cn("h-full w-full object-cover", className)}
        src={video.mp4}
        poster={video.poster}
        autoPlay={!reduce}
        muted
        loop
        playsInline
        controls={Boolean(reduce)}
        aria-label={video.title}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={`${video.title} video (placeholder)`}
      className={cn(
        "placeholder-hatch relative flex h-full w-full flex-col items-center justify-center gap-5 border border-dashed border-tide bg-deep p-6 text-center",
        className,
      )}
    >
      <span className="grid h-16 w-16 place-items-center rounded-full border border-tide text-mist md:h-20 md:w-20">
        <PlayIcon className="h-8 w-8 translate-x-0.5" />
      </span>
      <span>
        <span className="block text-base font-semibold text-foam md:text-lg">{video.label}</span>
        <span className="mt-1 block font-mono text-xs text-mist">{video.path}</span>
      </span>
    </div>
  );
}
