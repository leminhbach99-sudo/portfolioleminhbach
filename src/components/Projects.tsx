"use client";

import { AnimatePresence } from "framer-motion";
import { useCallback, useRef, useState } from "react";
import { projects } from "@/content/site";
import { ProjectCard } from "./ProjectCard";
import { ProjectCaseStudy } from "./ProjectCaseStudy";
import { WatchProject } from "./WatchProject";
import { Container } from "./ui/Container";
import { SectionIntro } from "./ui/SectionIntro";

export function Projects() {
  const published = projects.filter((project) => project.published);
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const trigger = useRef<HTMLElement | null>(null);

  const openProject = published.find((project) => project.slug === openSlug) ?? null;
  const featured = published.find((project) => project.slug === "reggae-by-the-sea");

  const handleOpen = useCallback((slug: string, element: HTMLElement) => {
    trigger.current = element;
    setOpenSlug(slug);
  }, []);

  const handleClose = useCallback(() => {
    setOpenSlug(null);
    trigger.current?.focus();
  }, []);

  return (
    <section id="work" aria-labelledby="work-title" className="py-24 md:py-36">
      <Container>
        <SectionIntro
          id="work-title"
          title={<>Case<br />studies</>}
          lead="Each project shows the process behind the output: the idea, the prompts, the iterations, and the final content."
        />

        <div className="mt-16 space-y-24 md:mt-20 md:space-y-32">
          {published.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              flip={index % 2 === 1}
              onOpen={(element) => handleOpen(project.slug, element)}
            />
          ))}
        </div>

        {featured && (featured.featuredVideo || featured.video) ? <WatchProject project={featured} /> : null}
      </Container>

      <AnimatePresence>
        {openProject ? <ProjectCaseStudy key={openProject.slug} project={openProject} onClose={handleClose} /> : null}
      </AnimatePresence>
    </section>
  );
}
