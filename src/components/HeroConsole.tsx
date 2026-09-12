"use client";

import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { hero } from "@/content/site";
import { cn } from "@/lib/cn";

const STAGES = ["Idea", "Prompt", "AI", "Visual", "Video"] as const;
const STAGE_BARS = ["bg-rasta", "bg-sun", "bg-palm", "bg-sky", "bg-foam"] as const;
const STAGE_MS = 2900;
/** The video stage stays up for one full 8-second play. */
const VIDEO_STAGE_MS = 8300;

/** A small, quiet loop that walks through idea → prompt → AI → visual → video. Visitors can also step through it. */
export function HeroConsole() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.35 });
  const reduce = useReducedMotion();
  const [stage, setStage] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (reduce) {
      setAutoplay(false);
      setStage(3);
    }
  }, [reduce]);

  useEffect(() => {
    if (!autoplay || !inView) return;
    const delay = stage === 4 ? VIDEO_STAGE_MS : STAGE_MS;
    const timer = window.setTimeout(() => setStage((current) => (current + 1) % STAGES.length), delay);
    return () => window.clearTimeout(timer);
  }, [stage, autoplay, inView]);

  return (
    <div ref={ref} className="overflow-hidden rounded-2xl border border-tide bg-deep">
      <div className="flex items-center justify-between gap-4 border-b border-tide px-4 py-3 md:px-5">
        <span className="font-mono text-xs text-mist">captain-scene.prompt</span>
        <span className="text-xs text-mist" aria-live="polite">
          Step {stage + 1} of {STAGES.length}
        </span>
      </div>

      {/* The invisible spacer sizes the body to a 16:9 frame plus a caption row, so the Visual and Video frames are exact. */}
      <div className="relative p-5 sm:p-7">
        <div aria-hidden className="invisible">
          <div className="aspect-video w-full" />
          <div className="mt-3 h-9" />
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={STAGES[stage]}
            className="absolute inset-0 p-5 sm:p-7"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
          >
            {stage === 0 ? <IdeaView /> : null}
            {stage === 1 ? <PromptView /> : null}
            {stage === 2 ? <GenerateView /> : null}
            {stage === 3 ? <VisualView /> : null}
            {stage === 4 ? <VideoView /> : null}
          </motion.div>
        </AnimatePresence>
      </div>

      <ol className="grid grid-cols-5 border-t border-tide">
        {STAGES.map((label, index) => (
          <li key={label}>
            <button
              type="button"
              onClick={() => {
                setStage(index);
                setAutoplay(false);
              }}
              aria-current={index === stage ? "step" : undefined}
              className={cn(
                "focus-ring relative w-full px-1 py-3 text-center text-xs font-semibold transition-colors sm:text-sm",
                index === stage ? "text-foam" : "text-mist hover:text-foam",
              )}
            >
              <span
                aria-hidden
                className={cn(
                  "absolute inset-x-0 top-0 h-[3px] origin-left transition-transform duration-500",
                  index <= stage ? "scale-x-100" : "scale-x-0",
                  STAGE_BARS[index],
                )}
              />
              {label}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

function IdeaView() {
  return (
    <div className="flex h-full flex-col justify-between">
      <span className="text-sm text-mist">The idea</span>
      <p className="max-w-lg text-2xl font-bold leading-tight sm:text-4xl">{hero.consoleIdea}</p>
      <span className="text-sm text-mist">Character, music, and the ocean</span>
    </div>
  );
}

function PromptView() {
  return (
    <div className="flex h-full flex-col justify-center gap-3 font-mono text-[0.72rem] leading-relaxed sm:gap-4 sm:text-sm">
      {hero.consolePrompt.map((line, index) => (
        <motion.p
          key={line.tag}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.15 + index * 0.35 }}
        >
          <span className={line.tone}>[{line.tag}]</span> <span className="text-foam">{line.text}</span>
        </motion.p>
      ))}
    </div>
  );
}

function GenerateView() {
  return (
    <div className="flex h-full flex-col gap-3">
      <span className="text-sm text-mist">Generating 4 variations</span>
      <div className="grid flex-1 grid-cols-2 gap-2 sm:gap-3">
        {[1, 2, 3, 4].map((n) => (
          <div key={n} className="generating relative rounded-lg border border-tide">
            <span className="absolute bottom-2 left-2 font-mono text-[0.65rem] text-mist">v{n}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function VisualView() {
  const { consoleVisual: image, consoleSubject: subject } = hero;
  return (
    <div className="flex h-full flex-col">
      <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-tide bg-abyss">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image.src} alt={image.alt} className="absolute inset-0 h-full w-full object-cover" />
        {/* Rule-of-thirds overlay */}
        <div aria-hidden className="absolute inset-y-0 left-1/3 w-px bg-foam/35" />
        <div aria-hidden className="absolute inset-y-0 left-2/3 w-px bg-foam/35" />
        <div aria-hidden className="absolute inset-x-0 top-1/3 h-px bg-foam/35" />
        <div aria-hidden className="absolute inset-x-0 top-2/3 h-px bg-foam/35" />
        <motion.div
          aria-hidden
          className="absolute rounded-md border-2 border-dashed border-sun"
          style={{
            left: `${subject.x0 * 100}%`,
            top: `${subject.y0 * 100}%`,
            width: `${(subject.x1 - subject.x0) * 100}%`,
            height: `${(subject.y1 - subject.y0) * 100}%`,
          }}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        />
        <span
          className="absolute whitespace-nowrap rounded bg-abyss/85 px-1.5 py-0.5 font-mono text-[0.6rem] text-sun sm:text-xs"
          style={{ left: `${subject.x0 * 100}%`, top: `calc(${subject.y1 * 100}% + 6px)` }}
        >
          {subject.label}
        </span>
      </div>
      <p className="mt-3 text-xs text-mist sm:text-sm">Composition locked before motion</p>
    </div>
  );
}

function VideoView() {
  const video = hero.consoleVideo;
  const videoRef = useRef<HTMLVideoElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [muted, setMuted] = useState(true);
  const [paused, setPaused] = useState(Boolean(reduce));

  // Autoplay needs the element muted before play() is called.
  useEffect(() => {
    const element = videoRef.current;
    if (!element) return;
    element.muted = true;
    if (!reduce) element.play().catch(() => setPaused(true));
  }, [reduce]);

  // The timeline follows the real playback position.
  useEffect(() => {
    let frame = 0;
    const tick = () => {
      const element = videoRef.current;
      const bar = barRef.current;
      if (element && bar && element.duration) {
        bar.style.transform = `scaleX(${element.currentTime / element.duration})`;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const togglePlay = () => {
    const element = videoRef.current;
    if (!element) return;
    if (element.paused) {
      element.play().then(() => setPaused(false)).catch(() => setPaused(true));
    } else {
      element.pause();
      setPaused(true);
    }
  };

  const toggleSound = () => {
    const element = videoRef.current;
    if (!element) return;
    element.muted = !muted;
    setMuted(!muted);
    if (!element.muted && element.paused) togglePlay();
  };

  return (
    <div className="flex h-full flex-col">
      <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-tide bg-abyss">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={video.mp4}
          poster={video.poster}
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={video.title}
          onPlay={() => setPaused(false)}
          onPause={() => setPaused(true)}
        />
        <div className="absolute right-2 top-2 flex gap-1.5">
          <button
            type="button"
            onClick={togglePlay}
            className="focus-ring rounded-full bg-abyss/85 px-3 py-1 text-xs font-semibold text-foam hover:bg-abyss"
          >
            {paused ? "Play" : "Pause"}
          </button>
          <button
            type="button"
            onClick={toggleSound}
            aria-pressed={!muted}
            className="focus-ring rounded-full bg-abyss/85 px-3 py-1 text-xs font-semibold text-foam hover:bg-abyss"
          >
            {muted ? "Sound off" : "Sound on"}
          </button>
        </div>
      </div>
      <div className="mt-3">
        <div className="relative h-1.5 overflow-hidden rounded-full bg-tide">
          <div ref={barRef} className="absolute inset-0 origin-left bg-foam" style={{ transform: "scaleX(0)" }} />
        </div>
        <div className="mt-1.5 flex justify-between font-mono text-[0.6rem] text-mist sm:text-xs">
          <span>0s</span>
          <span>2s</span>
          <span>4s</span>
          <span>6s</span>
          <span>8s loop</span>
        </div>
      </div>
    </div>
  );
}
