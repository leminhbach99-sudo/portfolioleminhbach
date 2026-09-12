"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Media, Project } from "@/content/types";
import { cn } from "@/lib/cn";
import { EASE } from "@/lib/motion";
import { ACCENT_TEXT } from "./ProjectCard";
import { Lightbox } from "./ui/Lightbox";
import { MediaSlot } from "./ui/MediaSlot";
import { VideoSlot } from "./ui/VideoSlot";

const ACCENT_BORDER: Record<Project["accent"], string> = {
  reggae: "border-sun",
  coffee: "border-coffee-crema",
  neutral: "border-mist",
};

const STAGE_COLS: Record<number, string> = {
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
  6: "lg:grid-cols-3",
};

type Props = { project: Project; onClose: () => void };

export function ProjectCaseStudy({ project, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = `${project.slug}-case-title`;
  const [viewer, setViewer] = useState<{ items: Media[]; index: number } | null>(null);
  const viewerOpen = useRef(false);
  viewerOpen.current = viewer !== null;

  const openViewer = useCallback((items: Media[], index = 0) => setViewer({ items, index }), []);
  const closeViewer = useCallback(() => setViewer(null), []);
  const setViewerIndex = useCallback((index: number) => setViewer((current) => (current ? { ...current, index } : current)), []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      // While the image viewer is open, it handles the keyboard.
      if (viewerOpen.current) return;
      if (event.key === "Escape") onClose();
      if (event.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])',
        );
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
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const stages = project.stages ?? [];

  return (
    <motion.div
      className="fixed inset-0 z-50 flex justify-center bg-abyss/85 px-0 pt-3 md:px-6 md:pt-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative h-full w-full max-w-6xl overflow-y-auto overscroll-contain rounded-t-3xl border border-b-0 border-tide bg-abyss"
        initial={{ y: 48, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 48, opacity: 0 }}
        transition={{ duration: 0.45, ease: EASE }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-tide bg-abyss/95 px-5 py-3 md:px-10">
          <p className="truncate text-sm text-mist">
            Project {project.number}: {project.title}
          </p>
          <button ref={closeRef} type="button" onClick={onClose} className="btn-ghost !px-4 !py-2 text-sm">
            Close
          </button>
        </div>

        <div className="px-5 pb-24 pt-10 md:px-10 md:pt-14">
          {/* Header */}
          <p className={cn("text-base font-semibold", ACCENT_TEXT[project.accent])}>
            {project.category}, {project.year}
          </p>
          <h2 id={titleId} className="display mt-4 text-[clamp(3.5rem,10vw,8.5rem)] font-extrabold uppercase">
            {project.title}
          </h2>
          {project.framing ? (
            <p className={cn("mt-8 max-w-3xl border-l-4 pl-5 text-xl font-semibold leading-snug", ACCENT_BORDER[project.accent])}>
              {project.framing}
            </p>
          ) : null}

          <div className="mt-10 aspect-[16/9] overflow-hidden rounded-3xl">
            <MediaSlot media={project.cover} />
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-12">
            <div className="space-y-6 text-lg leading-relaxed text-foam/90 lg:col-span-7">
              {project.description.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
            <dl className="grid gap-8 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
              <div>
                <dt className="text-sm text-mist">My role</dt>
                <dd className="mt-3">
                  <ul className="flex flex-wrap gap-2">
                    {project.role.map((role) => (
                      <li key={role} className="rounded-full border border-tide px-3 py-1 text-sm">
                        {role}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-mist">Tools</dt>
                <dd className="mt-3 text-lg font-semibold">{project.tools.join(", ")}</dd>
              </div>
            </dl>
          </div>

          {/* Stages */}
          {stages.length > 0 ? (
            <section className="mt-20" aria-labelledby={`${project.slug}-stages`}>
              <h3 id={`${project.slug}-stages`} className="text-3xl font-bold">
                {project.stagesTitle ?? "Process"}
              </h3>
              <ol className={cn("mt-8 grid gap-6 sm:grid-cols-2", STAGE_COLS[stages.length] ?? "lg:grid-cols-3")}>
                {stages.map((stage, index) => (
                  <li key={stage.label}>
                    {stage.gallery ? (
                      <div className="grid aspect-[4/3] grid-cols-2 grid-rows-3 gap-1 overflow-hidden rounded-2xl">
                        {stage.gallery.map((item, itemIndex) => (
                          <button
                            key={item.path}
                            type="button"
                            onClick={() => openViewer(stage.gallery ?? [], itemIndex)}
                            aria-label={`View ${item.label}`}
                            className="focus-ring group relative overflow-hidden"
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={item.src}
                              alt={item.alt}
                              loading="lazy"
                              decoding="async"
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </button>
                        ))}
                      </div>
                    ) : stage.media.src ? (
                      <button
                        type="button"
                        onClick={() => openViewer([stage.media])}
                        aria-label={`View ${stage.media.label}`}
                        className="focus-ring group block aspect-[4/3] w-full overflow-hidden rounded-2xl"
                      >
                        <MediaSlot media={stage.media} className="transition-transform duration-500 group-hover:scale-[1.03]" />
                      </button>
                    ) : (
                      <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                        <MediaSlot media={stage.media} compact={stages.length >= 5} />
                      </div>
                    )}
                    <p className="mt-4 flex items-baseline gap-3">
                      <span className="font-mono text-xs text-mist">{String(index + 1).padStart(2, "0")}</span>
                      <span className="text-lg font-bold">{stage.label}</span>
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-mist">{stage.note}</p>
                  </li>
                ))}
              </ol>
            </section>
          ) : null}

          {/* Characters */}
          {project.characters ? (
            <section className="mt-20" aria-labelledby={`${project.slug}-characters`}>
              <h3 id={`${project.slug}-characters`} className="text-3xl font-bold">
                The seven baristas
              </h3>
              <p className="mt-3 max-w-2xl text-mist">Each character carries the personality and color palette of one menu category.</p>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {project.characters.map((character) => (
                  <li key={character.name} className="flex flex-col rounded-2xl border border-tide p-5">
                    {character.image ? (
                      <div className="mb-4 grid aspect-square place-items-center overflow-hidden rounded-xl bg-coffee-milk p-4">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={character.image}
                          alt={`${character.name}, the ${character.menu.toLowerCase()} barista`}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-contain"
                        />
                      </div>
                    ) : null}
                    <div className="flex h-10 overflow-hidden rounded-lg" aria-hidden>
                      {character.palette.map((hex) => (
                        <span key={hex} className="flex-1" style={{ backgroundColor: hex }} title={hex} />
                      ))}
                    </div>
                    <p className="mt-5 text-2xl font-bold">{character.name}</p>
                    <p className="text-sm font-semibold text-coffee-crema">{character.menu}</p>
                    <p className="mt-3 text-sm leading-relaxed text-mist">{character.trait}</p>
                    <p className="mt-auto pt-4 font-mono text-[0.7rem] text-mist">{character.palette.join(" ")}</p>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {/* Workflow & highlights */}
          <section className="mt-20 grid gap-12 lg:grid-cols-12" aria-labelledby={`${project.slug}-workflow`}>
            <div className="lg:col-span-5">
              <h3 id={`${project.slug}-workflow`} className="text-3xl font-bold">
                Workflow
              </h3>
              <ol className="relative mt-8 space-y-4 border-l border-tide pl-6">
                {project.workflow.map((step, index) => (
                  <li key={step} className="relative">
                    <span
                      aria-hidden
                      className={cn(
                        "absolute -left-[1.85rem] top-1.5 h-3 w-3 rounded-full border-2 border-abyss",
                        index === project.workflow.length - 1 ? "bg-sun" : "bg-tide",
                      )}
                    />
                    <span className="text-lg">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            {project.highlights ? (
              <div className="lg:col-span-7">
                <h3 className="text-3xl font-bold">Highlights</h3>
                <ul className="mt-8 divide-y divide-tide border-y border-tide">
                  {project.highlights.map((item) => (
                    <li key={item} className="py-4 text-lg leading-snug">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </section>

          {/* Fanpage */}
          {project.fanpage ? (
            <section className="mt-20" aria-labelledby={`${project.slug}-fanpage`}>
              <h3 id={`${project.slug}-fanpage`} className="text-3xl font-bold">
                On the fanpage
              </h3>
              <p className="mt-3 max-w-2xl text-mist">{project.fanpage.intro}</p>

              <h4 className="mt-10 text-xl font-bold">Drink posts</h4>
              <ul className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3">
                {project.fanpage.posts.map((post, index) => (
                  <li key={post.path} className={post.orientation === "portrait" ? "row-span-2" : "aspect-[3/2]"}>
                    <button
                      type="button"
                      onClick={() => openViewer(project.fanpage?.posts ?? [], index)}
                      aria-label={`View post: ${post.label}`}
                      className="focus-ring group block h-full w-full overflow-hidden rounded-xl"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.src}
                        alt={post.alt}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </button>
                  </li>
                ))}
              </ul>

              <h4 className="mt-16 text-xl font-bold" lang="vi">
                {project.fanpage.comicsTitle}
              </h4>
              <p className="mt-2 max-w-2xl text-mist">{project.fanpage.comicsIntro}</p>
              <ol className="mt-8 space-y-14">
                {project.fanpage.comics.map((comic, index) => (
                  <li key={comic.title}>
                    <p className="flex flex-wrap items-baseline gap-x-3">
                      <span className="font-mono text-xs text-mist">Chap {index + 1}</span>
                      <span className="text-2xl font-bold" lang="vi">
                        {comic.title}
                      </span>
                    </p>
                    <p className="mt-2 max-w-3xl leading-relaxed text-mist">
                      <span className="font-semibold text-foam">{comic.titleEn}.</span> {comic.summary}
                    </p>

                    {/* Desktop: the full page */}
                    <button
                      type="button"
                      onClick={() => openViewer([comic.page])}
                      aria-label={`View comic: ${comic.title}`}
                      className="focus-ring mt-6 hidden w-full overflow-hidden rounded-2xl bg-white md:block"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={comic.page.src} alt={comic.page.alt} loading="lazy" decoding="async" className="h-auto w-full" />
                    </button>

                    {/* Phones: swipe panel by panel */}
                    <ul className="-mx-5 mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-3 md:hidden" aria-label={`${comic.title}, panels`}>
                      {comic.panels.map((panel, panelIndex) => (
                        <li key={panel.path} className="w-[86%] shrink-0 snap-center">
                          <button
                            type="button"
                            onClick={() => openViewer(comic.panels, panelIndex)}
                            aria-label={`View ${panel.label}`}
                            className="focus-ring block w-full overflow-hidden rounded-xl bg-white"
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={panel.src} alt={panel.alt} loading="lazy" decoding="async" className="h-auto w-full" />
                          </button>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-1 text-xs text-mist md:hidden">Swipe to read panel by panel.</p>
                  </li>
                ))}
              </ol>
            </section>
          ) : null}

          {/* Video */}
          {project.video ? (
            <section className="mt-20" aria-labelledby={`${project.slug}-video`}>
              <h3 id={`${project.slug}-video`} className="text-3xl font-bold">
                {project.video.label}
              </h3>
              {project.videoNote ? (
                <p className="mt-5 max-w-3xl rounded-2xl border border-sun/50 bg-sun/10 px-5 py-4 leading-relaxed">
                  <strong className="font-bold text-sun">Viewing in Vietnam?</strong>{" "}
                  {project.videoNote.replace("Viewing in Vietnam? ", "")}
                </p>
              ) : null}
              <div className="mt-6 aspect-video overflow-hidden rounded-3xl border border-tide">
                <VideoSlot video={project.video} />
              </div>
            </section>
          ) : null}

          {/* AI short story */}
          {project.story ? (
            <section className="mt-20" aria-labelledby={`${project.slug}-story`}>
              <h3 id={`${project.slug}-story`} className="text-3xl font-bold">
                AI short story: {project.story.title}
              </h3>
              <p className="mt-3 max-w-3xl leading-relaxed text-mist">{project.story.summary}</p>
              <p className="mt-2 max-w-3xl text-sm text-mist">{project.story.note}</p>

              {/* Desktop: three pages side by side */}
              <ol className="mt-8 hidden gap-4 md:grid md:grid-cols-3">
                {project.story.pages.map((page, index) => (
                  <li key={page.path}>
                    <button
                      type="button"
                      onClick={() => openViewer(project.story?.pages ?? [], index)}
                      aria-label={`Read ${page.label}`}
                      className="focus-ring group block w-full overflow-hidden rounded-2xl"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={page.src}
                        alt={page.alt}
                        loading="lazy"
                        decoding="async"
                        className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </button>
                    <p className="mt-2 font-mono text-xs text-mist">{page.label}</p>
                  </li>
                ))}
              </ol>

              {/* Phones: swipe page by page */}
              <ul className="-mx-5 mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-3 md:hidden" aria-label={`${project.story.title}, pages`}>
                {project.story.pages.map((page, index) => (
                  <li key={page.path} className="w-[86%] shrink-0 snap-center">
                    <button
                      type="button"
                      onClick={() => openViewer(project.story?.pages ?? [], index)}
                      aria-label={`Read ${page.label}`}
                      className="focus-ring block w-full overflow-hidden rounded-2xl"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={page.src} alt={page.alt} loading="lazy" decoding="async" className="w-full" />
                    </button>
                    <p className="mt-2 font-mono text-xs text-mist">{page.label}</p>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {/* Results */}
          {project.results ? (
            <section className="mt-20" aria-labelledby={`${project.slug}-results`}>
              <h3 id={`${project.slug}-results`} className="text-3xl font-bold">
                {project.results.heading}
              </h3>
              <dl className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-tide bg-tide sm:grid-cols-2 xl:grid-cols-4">
                {project.results.items.map((item) => (
                  <div key={item.label} className="bg-abyss p-6">
                    <dt className="sr-only">{item.label}</dt>
                    <dd>
                      <span className={cn("display block text-5xl font-extrabold xl:text-[2.75rem]", ACCENT_TEXT[project.accent])}>{item.value}</span>
                      <span className="mt-3 block text-sm leading-snug text-mist">{item.label}</span>
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-sm text-mist">{project.results.source}</p>
            </section>
          ) : null}

          {/* Credits & links */}
          {project.credits || project.links ? (
            <section className="mt-20 grid gap-10 border-t border-tide pt-10 md:grid-cols-2">
              {project.credits ? (
                <div>
                  <h3 className="text-sm text-mist">Credits</h3>
                  <ul className="mt-3 space-y-2 leading-relaxed">
                    {project.credits.map((credit) => (
                      <li key={credit}>{credit}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {project.links ? (
                <div>
                  <h3 className="text-sm text-mist">Links</h3>
                  <ul className="mt-3 flex flex-wrap gap-3">
                    {project.links
                      .filter((link) => link.href)
                      .map((link) => (
                        <li key={link.label}>
                          <a href={link.href} target="_blank" rel="noreferrer" className="btn-ghost !px-4 !py-2 text-sm">
                            {link.label}
                          </a>
                        </li>
                      ))}
                  </ul>
                </div>
              ) : null}
            </section>
          ) : null}
        </div>
      </motion.div>

      <AnimatePresence>
        {viewer ? (
          <Lightbox items={viewer.items} index={viewer.index} onIndex={setViewerIndex} onClose={closeViewer} />
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}
