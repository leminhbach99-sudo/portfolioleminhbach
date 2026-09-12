"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { experiments } from "@/content/site";
import type { ExperimentCard, ExperimentVersion } from "@/content/types";
import { cn } from "@/lib/cn";
import { GROUP_STYLES } from "@/lib/motion";
import { Container } from "./ui/Container";
import { MediaSlot } from "./ui/MediaSlot";
import { SectionIntro } from "./ui/SectionIntro";

const LETTERS = ["A", "B", "C"] as const;

export function Experimentation() {
  return (
    <section id="experiments" aria-labelledby="experiments-title" className="border-y border-tide bg-deep py-24 md:py-36">
      <Container>
        <SectionIntro
          id="experiments-title"
          title={<>Experiment.<br />Iterate.<br />Improve.</>}
          lead={
            <>
              {experiments.lead}
              <span className="mt-4 block text-sm">{experiments.note}</span>
            </>
          }
        />
        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {experiments.cards.map((card) => (
            <Card key={card.key} card={card} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function Card({ card }: { card: ExperimentCard }) {
  const [active, setActive] = useState(0);
  const version = card.versions[active];

  return (
    <article aria-labelledby={`exp-${card.key}`} className="flex flex-col rounded-3xl border border-tide bg-abyss p-6 md:p-8">
      <h3 id={`exp-${card.key}`} className="display text-6xl font-extrabold uppercase">
        {card.title}
      </h3>
      <p className="mt-3 text-mist">{card.question}</p>

      <div role="tablist" aria-label={`${card.title} versions`} className="mt-6 grid grid-cols-3 rounded-full border border-tide p-1">
        {LETTERS.map((letter, index) => (
          <button
            key={letter}
            type="button"
            role="tab"
            aria-selected={index === active}
            aria-controls={`exp-${card.key}-panel`}
            onClick={() => setActive(index)}
            className={cn(
              "focus-ring rounded-full py-2 text-sm font-semibold transition-colors",
              index === active ? "bg-foam text-abyss" : "text-mist hover:text-foam",
            )}
          >
            Version {letter}
          </button>
        ))}
      </div>

      <div id={`exp-${card.key}-panel`} role="tabpanel" className="mt-6 flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <Visual kind={card.key} version={version} letter={LETTERS[active]} />
            <p className="mt-6 text-xl font-bold leading-snug">{version.title}</p>
            <p className="mt-2 leading-relaxed text-mist">{version.body}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </article>
  );
}

function Visual({ kind, version, letter }: { kind: ExperimentCard["key"]; version: ExperimentVersion; letter: string }) {
  if (kind === "hook") {
    return (
      <div className="relative flex aspect-video flex-col justify-between rounded-2xl border border-tide bg-deep p-4">
        <span className="font-mono text-xs text-mist">0:00, first frame</span>
        <p className="text-lg font-bold leading-snug md:text-xl">“{version.hook}”</p>
        <div className="h-1 overflow-hidden rounded-full bg-tide">
          <div className="h-full w-1/4 bg-sun" />
        </div>
      </div>
    );
  }

  if (kind === "style" && version.media) {
    return (
      <div className="aspect-video overflow-hidden rounded-2xl">
        <MediaSlot media={version.media} compact />
      </div>
    );
  }

  const blocks = version.blocks ?? ["base"];
  return (
    <div className="flex aspect-video flex-col justify-between rounded-2xl border border-tide bg-deep p-4">
      <span className="font-mono text-xs text-mist">prompt-{letter.toLowerCase()}.txt</span>
      <div>
        <div className="flex h-4 gap-1" aria-hidden>
          {blocks.map((block, index) => (
            <span key={`${block}-${index}`} className={cn("flex-1 rounded-sm", GROUP_STYLES[block].dot)} />
          ))}
          {Array.from({ length: 9 - blocks.length }).map((_, index) => (
            <span key={`empty-${index}`} className="flex-1 rounded-sm border border-dashed border-tide" />
          ))}
        </div>
        <p className="mt-3 text-sm text-mist">
          {blocks.length} instruction {blocks.length === 1 ? "block" : "blocks"}
        </p>
      </div>
      <ul className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-mist">
        <li className="flex items-center gap-1.5"><span aria-hidden className="h-2 w-2 rounded-full bg-sun" />Character</li>
        <li className="flex items-center gap-1.5"><span aria-hidden className="h-2 w-2 rounded-full bg-palm" />Action</li>
        <li className="flex items-center gap-1.5"><span aria-hidden className="h-2 w-2 rounded-full bg-sky" />Camera</li>
        <li className="flex items-center gap-1.5"><span aria-hidden className="h-2 w-2 rounded-full bg-rasta" />World</li>
      </ul>
    </div>
  );
}
