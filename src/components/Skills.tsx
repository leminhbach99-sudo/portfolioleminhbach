import { skills } from "@/content/site";
import { cn } from "@/lib/cn";
import { Container } from "./ui/Container";
import { SectionIntro } from "./ui/SectionIntro";

export function Skills() {
  const [aiGroup, creativeGroup, contentGroup] = skills.groups;

  return (
    <section id="skills" aria-labelledby="skills-title" className="border-t border-tide py-24 md:py-36">
      <Container>
        <SectionIntro id="skills-title" title={<>Core<br />skills</>} lead={skills.lead} />

        <div className="mt-14 grid gap-4 lg:grid-cols-12">
          {/* Prompt engineering is the dominant card. */}
          <article
            tabIndex={0}
            aria-labelledby="pe-title"
            className="pe-card focus-ring relative flex flex-col overflow-hidden rounded-3xl bg-sun p-7 text-abyss md:p-10 lg:col-span-7 lg:row-span-2"
          >
            <h3 id="pe-title" className="display text-[clamp(2.3rem,9.5vw,3.6rem)] lg:text-[clamp(3.6rem,5.6vw,5.75rem)] font-extrabold uppercase">
              Prompt
              <br />
              engineering
            </h3>
            <ol className="mt-7 flex flex-wrap items-center gap-x-2.5 gap-y-2 text-lg font-bold md:text-xl" aria-label="Prompting cycle">
              {skills.promptEngineering.steps.map((step, index) => (
                <li key={step} className="flex items-center gap-2.5">
                  <span>{step}</span>
                  {index < skills.promptEngineering.steps.length - 1 ? <span aria-hidden>→</span> : null}
                </li>
              ))}
            </ol>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {skills.promptEngineering.strip.map((item) => (
                <figure key={item.path} className="overflow-hidden rounded-xl bg-abyss/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.src} alt={item.alt} loading="lazy" decoding="async" className="aspect-video w-full object-cover" />
                </figure>
              ))}
            </div>
            <p className="mt-3 text-sm font-semibold text-abyss/75">{skills.promptEngineering.stripCaption}</p>

            <pre className="mt-6 whitespace-pre-wrap break-words rounded-xl bg-abyss p-4 font-mono text-[0.6rem] leading-relaxed text-foam sm:text-[0.68rem] md:text-xs">
              <code>{skills.promptEngineering.excerpt.join("\n")}</code>
            </pre>

            <div className="relative mt-8">
              <p className="pe-detail max-w-xl text-lg font-medium leading-snug md:text-2xl">{skills.promptEngineering.detail}</p>
            </div>
          </article>

          <SkillGroup className="lg:col-span-5" title={aiGroup.title} items={aiGroup.items} highlight="Prompt Engineering" />
          <SkillGroup className="lg:col-span-5" title={creativeGroup.title} items={creativeGroup.items} />
          <SkillGroup className="lg:col-span-6" title={contentGroup.title} items={contentGroup.items} />

          <div className="rounded-3xl border border-tide p-7 md:p-8 lg:col-span-6">
            <h3 className="text-xl font-bold">Design & tools</h3>
            <ul className="mt-6 grid grid-cols-2 gap-x-6">
              {skills.tools.map((tool) => (
                <li key={tool} className="border-t border-tide py-3 text-lg font-semibold md:text-xl">
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

function SkillGroup({
  title,
  items,
  highlight,
  className,
}: {
  title: string;
  items: string[];
  highlight?: string;
  className?: string;
}) {
  return (
    <div className={cn("rounded-3xl border border-tide p-7 md:p-8", className)}>
      <h3 className="text-xl font-bold">{title}</h3>
      <ul className="mt-6 flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className={cn(
              "rounded-full px-3.5 py-1.5 text-sm",
              item === highlight ? "bg-sun font-semibold text-abyss" : "border border-tide text-foam",
            )}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
