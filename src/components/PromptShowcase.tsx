"use client";

import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { promptParams, promptShowcase } from "@/content/site";
import type { ParamGroup, ReviewNote } from "@/content/types";
import { cn } from "@/lib/cn";
import { GROUP_STYLES } from "@/lib/motion";
import { Container } from "./ui/Container";
import { MediaSlot } from "./ui/MediaSlot";
import { SectionIntro } from "./ui/SectionIntro";

type Tab = "draft" | "refined";

const groupOf = (key: string): ParamGroup => promptParams.find((param) => param.key === key)?.group ?? "world";

export function PromptShowcase() {
  const demoRef = useRef<HTMLDivElement>(null);
  const inView = useInView(demoRef, { once: true, amount: 0.3 });
  const reduce = useReducedMotion();
  const [tab, setTab] = useState<Tab>("draft");
  const [typed, setTyped] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  const draftText = promptShowcase.draft.text;
  const activeParam = selected ?? hovered;
  const current = tab === "draft" ? promptShowcase.draft : promptShowcase.refined;

  // Typewriter for the draft prompt.
  useEffect(() => {
    if (tab !== "draft" || !inView) return;
    if (reduce) {
      setTyped(draftText.length);
      return;
    }
    setTyped(0);
    const timer = window.setInterval(() => {
      setTyped((count) => {
        if (count >= draftText.length) {
          window.clearInterval(timer);
          return count;
        }
        return count + 1;
      });
    }, 32);
    return () => window.clearInterval(timer);
  }, [tab, inView, reduce, draftText.length]);

  const typingDone = typed >= draftText.length;

  return (
    <section id="prompting" aria-labelledby="prompting-title" className="border-y border-tide bg-deep py-24 md:py-36">
      <Container>
        <SectionIntro id="prompting-title" title={<>The art of<br />prompting</>} lead={promptShowcase.lead} />

        {/* Workflow with an iteration loop over steps 3–6 */}
        <div className="mt-16">
          <div aria-hidden className="hidden gap-3 lg:grid lg:grid-cols-7">
            <div className="relative col-span-4 col-start-3 h-5 rounded-t-xl border-x-2 border-t-2 border-sun/70">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-deep px-3 text-sm font-semibold text-sun">Iterate</span>
            </div>
          </div>
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
            {promptShowcase.workflow.map((step, index) => {
              const inLoop = promptShowcase.loop.includes(index);
              return (
                <li
                  key={step}
                  className={cn(
                    "flex flex-col justify-between rounded-2xl border p-4 sm:min-h-[8.5rem]",
                    inLoop ? "border-sun/60 bg-abyss/40" : "border-tide",
                    index === promptShowcase.workflow.length - 1 && "bg-foam text-abyss",
                  )}
                >
                  <span className={cn("font-mono text-xs", index === promptShowcase.workflow.length - 1 ? "text-abyss/70" : "text-mist")}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-3 text-lg font-semibold leading-snug sm:mt-6">{step}</span>
                </li>
              );
            })}
          </ol>
          <p className="mt-4 text-sm text-mist">{promptShowcase.loopNote}</p>
        </div>

        {/* Interactive prompt → output demo */}
        <div ref={demoRef} className="mt-20 overflow-hidden rounded-3xl border border-tide bg-abyss">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-tide px-5 py-4 md:px-8">
            <div>
              <h3 className="text-2xl font-bold">Prompt → Output</h3>
              <p className="mt-1 text-sm text-mist">{promptShowcase.demoNote}</p>
            </div>
            <div role="tablist" aria-label="Prompt version" className="inline-flex rounded-full border border-tide p-1">
              {(["draft", "refined"] as const).map((value) => (
                <button
                  key={value}
                  type="button"
                  role="tab"
                  id={`tab-${value}`}
                  aria-selected={tab === value}
                  aria-controls="prompt-panel"
                  onClick={() => {
                    setTab(value);
                    setSelected(null);
                  }}
                  className={cn(
                    "focus-ring rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                    tab === value ? "bg-foam text-abyss" : "text-mist hover:text-foam",
                  )}
                >
                  {value === "draft" ? "Draft prompt" : "Refined prompt"}
                </button>
              ))}
            </div>
          </div>

          <div id="prompt-panel" role="tabpanel" aria-labelledby={`tab-${tab}`} className="grid lg:grid-cols-2">
            <div className="border-b border-tide p-5 md:p-8 lg:border-b-0 lg:border-r">
              <p className="text-sm text-mist">Prompt</p>

              {tab === "draft" ? (
                <>
                  <div className="mt-4 min-h-[10rem] rounded-2xl border border-tide bg-deep p-5 font-mono text-sm leading-relaxed md:text-base">
                    <span aria-hidden>{draftText.slice(0, typed)}</span>
                    <span className="sr-only">{draftText}</span>
                    <span aria-hidden className="caret ml-0.5 inline-block h-[1.1em] w-2 translate-y-[0.2em] bg-sun" />
                  </div>
                  <div className="mt-5">
                    <p className="text-sm text-mist">Left for the model to guess</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {promptParams
                        .filter((param) => !promptShowcase.draft.mentions.includes(param.key))
                        .map((param) => (
                        <li key={param.key} className="rounded-full border border-dashed border-tide px-3 py-1.5 text-sm text-mist line-through decoration-rasta/70">
                          {param.label}
                        </li>
                        ))}
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <div className="mt-4 max-h-[26rem] overflow-y-auto rounded-2xl border border-tide bg-deep p-5 font-mono text-[0.8rem] leading-[1.75] md:text-sm">
                    {promptShowcase.refined.segments.map((segment, index) => {
                      const styles = GROUP_STYLES[groupOf(segment.param)];
                      const isActive = activeParam === segment.param;
                      const dimmed = activeParam !== null && !isActive;
                      return (
                        <motion.span
                          key={segment.param}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.12 }}
                          onMouseEnter={() => setHovered(segment.param)}
                          onMouseLeave={() => setHovered(null)}
                          className={cn(
                            "rounded underline decoration-2 underline-offset-4 transition-[background-color,color] duration-200",
                            isActive ? styles.mark : styles.line,
                            dimmed ? "text-foam/40" : "text-foam",
                          )}
                        >
                          {segment.text}{" "}
                        </motion.span>
                      );
                    })}
                  </div>
                  <div className="mt-5" role="group" aria-label="Highlight a prompt parameter">
                    <p className="text-sm text-mist">Highlight what each part controls</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {promptParams.map((param) => {
                        const styles = GROUP_STYLES[param.group];
                        const isOn = activeParam === param.key;
                        return (
                          <button
                            key={param.key}
                            type="button"
                            aria-pressed={selected === param.key}
                            onClick={() => setSelected((value) => (value === param.key ? null : param.key))}
                            onMouseEnter={() => setHovered(param.key)}
                            onMouseLeave={() => setHovered(null)}
                            className={cn(
                              "focus-ring flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
                              isOn ? styles.chip : "border border-tide text-foam hover:border-foam",
                            )}
                          >
                            <span aria-hidden className={cn("h-2 w-2 rounded-full", isOn ? "bg-abyss" : styles.dot)} />
                            {param.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="p-5 md:p-8">
              <p className="text-sm text-mist">AI output</p>
              <div className="mt-4 aspect-video overflow-hidden rounded-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={tab}
                    className="h-full w-full"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <MediaSlot media={current.output} className="rounded-2xl" />
                  </motion.div>
                </AnimatePresence>
              </div>
              <h4 className="mt-7 text-sm text-mist">Output review</h4>
              <ul className="mt-3 space-y-3">
                {current.notes.map((note: ReviewNote) => (
                  <li key={note.text} className="flex gap-3 text-base leading-snug">
                    <span
                      aria-hidden
                      className={cn(
                        "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-xs font-bold text-abyss",
                        note.improved ? "bg-palm" : "bg-rasta",
                      )}
                    >
                      {note.improved ? "✓" : "!"}
                    </span>
                    <span>
                      <span className="sr-only">{note.improved ? "Improved: " : "Issue: "}</span>
                      {note.text}
                    </span>
                  </li>
                ))}
              </ul>
              {tab === "draft" ? (
                <button
                  type="button"
                  onClick={() => setTab("refined")}
                  className={cn("btn-primary mt-8 transition-opacity", typingDone ? "opacity-100" : "opacity-60")}
                >
                  Refine this prompt
                </button>
              ) : (
                <button type="button" onClick={() => setTab("draft")} className="btn-ghost mt-8">
                  Back to the draft
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="overflow-hidden rounded-3xl border border-tide lg:col-span-7">
            <MediaSlot media={promptShowcase.annotated.media} />
          </div>
          <div className="lg:col-span-5">
            <h3 className="text-3xl font-bold leading-tight md:text-4xl">{promptShowcase.annotated.title}</h3>
            <p className="mt-5 text-lg leading-relaxed text-mist">{promptShowcase.annotated.body}</p>
            <p className="mt-4 text-sm text-mist">{promptShowcase.annotated.note}</p>
          </div>
        </div>

        <p className="mt-20 max-w-4xl text-[clamp(1.9rem,4vw,3.4rem)] font-bold leading-[1.08] tracking-tight">
          {promptShowcase.closing}
        </p>
      </Container>
    </section>
  );
}
