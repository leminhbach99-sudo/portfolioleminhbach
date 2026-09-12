"use client";

import type { Project } from "@/content/types";
import { cn } from "@/lib/cn";
import { MediaSlot } from "./ui/MediaSlot";

export const ACCENT_TEXT: Record<Project["accent"], string> = {
  reggae: "text-sun",
  coffee: "text-coffee-crema",
  neutral: "text-mist",
};

type Props = {
  project: Project;
  flip?: boolean;
  onOpen: (element: HTMLElement) => void;
};

export function ProjectCard({ project, flip = false, onOpen }: Props) {
  const youtube = project.links?.find((link) => link.kind === "youtube" && link.href);

  return (
    <article aria-labelledby={`${project.slug}-card-title`} className="group grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
      <button
        type="button"
        onClick={(event) => onOpen(event.currentTarget)}
        aria-label={`Open case study: ${project.title}`}
        className={cn("focus-ring relative block overflow-hidden rounded-3xl text-left lg:col-span-7", flip && "lg:order-2")}
      >
        <div className="aspect-[16/11] transition-transform duration-700 ease-out group-hover:scale-[1.03]">
          <MediaSlot media={project.cover} />
        </div>
        <span className="absolute left-4 top-4 rounded-full bg-abyss/90 px-3 py-1 text-sm font-semibold">
          Project {project.number}
        </span>
        <span className="absolute bottom-4 left-4 translate-y-2 rounded-full bg-foam px-4 py-2 text-sm font-semibold text-abyss opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          Open case study
        </span>
      </button>

      <div className={cn("lg:col-span-5", flip && "lg:order-1")}>
        <p className={cn("text-base font-semibold", ACCENT_TEXT[project.accent])}>
          {project.category}, {project.year}
        </p>
        <h3 id={`${project.slug}-card-title`} className="display mt-4 text-[clamp(3rem,6.2vw,5.75rem)] font-extrabold uppercase">
          {project.title}
        </h3>
        <p className="mt-6 text-lg leading-relaxed text-mist">{project.summary}</p>

        <dl className="mt-8 grid gap-6 border-t border-tide pt-6 sm:grid-cols-2">
          <div>
            <dt className="text-sm text-mist">Role</dt>
            <dd className="mt-2 text-sm leading-relaxed">{project.role.join(", ")}</dd>
          </div>
          <div>
            <dt className="text-sm text-mist">Tools</dt>
            <dd className="mt-2 text-sm leading-relaxed">{project.tools.join(", ")}</dd>
          </div>
        </dl>

        <div className="mt-8 flex flex-wrap gap-3">
          <button type="button" onClick={(event) => onOpen(event.currentTarget)} className="btn-primary">
            View case study
          </button>
          {youtube?.href ? (
            <a href={youtube.href} target="_blank" rel="noreferrer" className="btn-ghost">
              Watch on YouTube
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
