import { education, experience } from "@/content/site";
import { Container } from "./ui/Container";
import { SectionIntro } from "./ui/SectionIntro";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="border-t border-tide py-24 md:py-36">
      <Container>
        <SectionIntro id="experience-title" title="Experience" />

        <ol className="mt-14 divide-y divide-tide border-y border-tide">
          {experience.map((job) => (
            <li key={`${job.company}-${job.period}`} className="grid gap-4 py-10 md:grid-cols-12 md:gap-8">
              <p className="font-mono text-sm text-mist md:col-span-2 md:pt-1.5">{job.period}</p>
              <div className="md:col-span-4">
                <h3 className="text-2xl font-bold leading-tight md:text-3xl">{job.role}</h3>
                <p className="mt-2 text-lg text-mist">{job.company}</p>
              </div>
              <div className="md:col-span-6">
                {job.bullets ? (
                  <ul className="space-y-2.5 leading-relaxed">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="relative pl-5">
                        <span aria-hidden className="absolute left-0 top-[0.7em] h-1.5 w-1.5 rounded-full bg-sun" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {job.focus ? (
                  <ul className="flex flex-wrap gap-2" aria-label="Focus areas">
                    {job.focus.map((item) => (
                      <li key={item} className="rounded-full border border-tide px-3 py-1 text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </li>
          ))}
        </ol>

        <div id="education" className="mt-20 grid gap-4 md:grid-cols-12 md:gap-8">
          <h3 className="text-sm text-mist md:col-span-2 md:pt-4">Education</h3>
          <div className="md:col-span-10">
            <p className="display text-[clamp(3rem,8vw,6.5rem)] font-extrabold uppercase">{education.school}</p>
            <p className="mt-4 text-xl font-semibold">{education.degree}</p>
            <p className="mt-1 text-lg text-mist">{education.detail}</p>
            <p className="mt-1 text-lg text-mist">{education.languages}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
