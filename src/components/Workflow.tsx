"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { videoWorkflow } from "@/content/site";
import { cn } from "@/lib/cn";
import { Container } from "./ui/Container";
import { SectionIntro } from "./ui/SectionIntro";

export function Workflow() {
  const listRef = useRef<HTMLOListElement>(null);
  const inView = useInView(listRef, { once: true, amount: 0.25 });
  const promptSteps = ["Prompt", "Generate", "Refine"];

  return (
    <section id="process" aria-labelledby="process-title" className="border-t border-tide py-24 md:py-36">
      <Container>
        <SectionIntro id="process-title" title={<>How I build<br />AI videos</>} lead={videoWorkflow.lead} />

        <ol ref={listRef} className="relative mt-16 grid gap-10 md:mt-20 xl:grid-cols-7 xl:gap-5">
          {/* Vertical line (mobile–lg) */}
          <span aria-hidden className="absolute bottom-3 left-[1.2rem] top-3 w-px bg-tide xl:hidden" />
          <span
            aria-hidden
            className={cn(
              "tri-band-v absolute bottom-3 left-[1.1rem] top-3 w-[3px] origin-top transition-transform duration-[1800ms] ease-out xl:hidden",
              inView ? "scale-y-100" : "scale-y-0",
            )}
          />
          {/* Horizontal line (xl) */}
          <span aria-hidden className="absolute inset-x-0 top-[1.2rem] hidden h-px bg-tide xl:block" />
          <span
            aria-hidden
            className={cn(
              "tri-band absolute inset-x-0 top-[1.1rem] hidden h-[3px] origin-left transition-transform duration-[1800ms] ease-out xl:block",
              inView ? "scale-x-100" : "scale-x-0",
            )}
          />

          {videoWorkflow.steps.map((step, index) => {
            const isPromptStep = promptSteps.includes(step.title);
            return (
              <li
                key={step.title}
                className={cn(
                  "relative pl-16 transition-[opacity,transform] duration-700 xl:pl-0 xl:pt-16",
                  inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                )}
                style={{ transitionDelay: `${200 + index * 160}ms` }}
              >
                <span
                  className={cn(
                    "absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full border font-mono text-sm",
                    isPromptStep ? "border-sun bg-sun text-abyss" : "border-tide bg-abyss text-foam",
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="display text-4xl font-extrabold uppercase sm:text-5xl xl:text-[1.9rem]">{step.title}</h3>
                <p className="mt-3 max-w-md leading-relaxed text-mist">{step.body}</p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
