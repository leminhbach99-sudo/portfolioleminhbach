"use client";

import { scriptwriting } from "@/content/site";
import type { ScriptCredit } from "@/content/types";
import { cn } from "@/lib/cn";
import { Container } from "./ui/Container";
import { SectionIntro } from "./ui/SectionIntro";

const LINE_STYLES: Record<string, string> = {
  slug: "font-bold uppercase text-sun",
  action: "mt-3 text-foam/90",
  character: "mt-4 pl-[22%] font-bold uppercase",
  paren: "pl-[18%] text-mist",
  dialogue: "pl-[12%] pr-[10%] text-foam",
};

export function Scriptwriting() {
  return (
    <section id="writing" aria-labelledby="writing-title" className="border-t border-tide py-24 md:py-36">
      <Container>
        <SectionIntro id="writing-title" title={<>From script<br />to screen</>} lead={scriptwriting.lead} />

        <div className="mt-16 grid gap-4 lg:grid-cols-2">
          {scriptwriting.credits.map((credit) => (
            <Credit key={credit.title} credit={credit} />
          ))}
        </div>

        <p className="mt-14 max-w-4xl text-[clamp(1.6rem,3.4vw,2.9rem)] font-bold leading-[1.12] tracking-tight">
          {scriptwriting.closing}
        </p>
      </Container>
    </section>
  );
}

function Credit({ credit }: { credit: ScriptCredit }) {
  return (
    <article className="flex flex-col rounded-3xl border border-tide p-7 md:p-8">
      <p className="text-sm font-semibold text-sun">{credit.kind}</p>
      <h3 className="mt-3 text-3xl font-bold leading-tight" lang="vi">
        {credit.title}
      </h3>
      {credit.titleEn ? <p className="mt-1 text-lg text-mist">{credit.titleEn}</p> : null}
      <p className="mt-4 text-sm text-mist">{credit.meta}</p>
      <p className="mt-4 leading-relaxed text-foam/90">{credit.body}</p>

      {credit.clip ? (
        <figure className="mt-7">
          <video
            className="aspect-video w-full rounded-2xl border border-tide bg-abyss object-cover"
            src={credit.clip.mp4}
            poster={credit.clip.poster}
            controls
            playsInline
            preload="none"
            aria-label={credit.clip.title}
          />
          <figcaption className="mt-3 text-sm leading-relaxed text-mist">{credit.clip.note}</figcaption>
        </figure>
      ) : null}

      {credit.excerpt ? (
        <figure className="mt-7">
          <figcaption className="text-sm text-mist">{credit.excerpt.heading}</figcaption>
          <div className="mt-3 rounded-2xl border border-tide bg-deep p-5 font-mono text-[0.72rem] leading-relaxed md:text-[0.8rem]" lang="vi">
            {credit.excerpt.lines.map((line, index) => (
              <p key={`${line.type}-${index}`} className={cn(LINE_STYLES[line.type])}>
                {line.text}
              </p>
            ))}
          </div>
        </figure>
      ) : null}
    </article>
  );
}
