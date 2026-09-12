import { about } from "@/content/site";
import { Container } from "./ui/Container";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-24 md:py-36">
      <Container className="grid gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-8">
          <h2 id="about-title" className="sr-only">
            About me
          </h2>
          <p className="max-w-4xl text-[clamp(2rem,4.4vw,3.9rem)] font-bold leading-[1.06] tracking-tight">{about.lead}</p>
          <div className="mt-12 grid gap-8 text-lg leading-relaxed text-mist md:grid-cols-2 md:gap-10">
            {about.body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <p className="display mt-14 text-[clamp(3.25rem,10vw,9rem)] font-extrabold uppercase text-sun">{about.closing}</p>
        </div>

        <aside className="lg:col-span-4 lg:border-l lg:border-tide lg:pl-10">
          <div className="lg:sticky lg:top-28">
          <div className="relative mx-auto mb-10 aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-tide lg:max-w-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={about.portrait.src}
              alt={about.portrait.alt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
          <dl className="grid gap-8 sm:grid-cols-3 lg:grid-cols-1">
            {about.facts.map((fact) => (
              <div key={fact.term} className="border-t border-tide pt-4 lg:border-t-0 lg:pt-0">
                <dt className="text-sm text-mist">{fact.term}</dt>
                <dd className="mt-2 text-lg leading-snug">{fact.detail}</dd>
              </div>
            ))}
          </dl>
          </div>
        </aside>
      </Container>
    </section>
  );
}
