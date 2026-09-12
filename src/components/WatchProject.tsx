"use client";

import type { Project } from "@/content/types";
import { VideoSlot } from "./ui/VideoSlot";

/** Large featured video block for the YouTube project. */
export function WatchProject({ project }: { project: Project }) {
  const video = project.featuredVideo ?? project.video;
  if (!video) return null;
  const channel = project.links?.find((link) => link.kind === "youtube" && link.href);
  const folder = project.links?.find((link) => link.kind === "drive" && link.href);

  return (
    <div id="watch" className="mt-28 md:mt-40">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h3 className="display text-[clamp(3.25rem,10vw,9.5rem)] font-extrabold uppercase">Watch the project</h3>
        <p className="max-w-sm pb-2 text-lg leading-relaxed text-mist">
          {project.title}: AI characters, music, and ocean scenes made with the workflow on this page.
        </p>
      </div>

      {project.videoNote ? (
        <p className="mt-8 max-w-3xl rounded-2xl border border-sun/50 bg-sun/10 px-5 py-4 leading-relaxed">
          <strong className="font-bold text-sun">Viewing in Vietnam?</strong>{" "}
          {project.videoNote.replace("Viewing in Vietnam? ", "")}
        </p>
      ) : null}

      <div className="mt-6 aspect-video overflow-hidden rounded-3xl border border-tide">
        <VideoSlot video={video} />
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {channel?.href ? (
          <a href={channel.href} target="_blank" rel="noreferrer" className="btn-primary">
            Open the YouTube channel
          </a>
        ) : null}
        {folder?.href ? (
          <a href={folder.href} target="_blank" rel="noreferrer" className="btn-ghost">
            {folder.label}
          </a>
        ) : null}
      </div>
    </div>
  );
}
