import { rnd } from "@/content/site";
import { Container } from "./ui/Container";
import { SectionIntro } from "./ui/SectionIntro";

export function AiRnd() {
  return (
    <section id="rnd" aria-labelledby="rnd-title" className="py-24 md:py-36">
      <Container>
        <SectionIntro id="rnd-title" title={rnd.title} lead={rnd.lead} />

        {/* The loop: six stages, with the last feeding back into the first */}
        <div className="mt-16">
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {rnd.loop.map((stage, index) => (
              <li key={stage} className="flex flex-col justify-between rounded-2xl border border-tide p-4 sm:min-h-[7.5rem]">
                <span className="font-mono text-xs text-mist">{String(index + 1).padStart(2, "0")}</span>
                <span className="mt-3 text-lg font-semibold leading-snug sm:mt-5">{stage}</span>
              </li>
            ))}
          </ol>
          <div aria-hidden className="mt-3 hidden gap-3 lg:grid lg:grid-cols-6">
            <div className="relative col-span-6 mx-[8%] h-6 rounded-b-xl border-x-2 border-b-2 border-sky/70">
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-abyss px-3 text-sm font-semibold text-sky">
                Feeds the next problem
              </span>
            </div>
          </div>
          <p className="mt-4 text-sm text-mist lg:hidden">Each improved workflow becomes the starting point for the next problem.</p>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h3 className="text-3xl font-bold">What I test</h3>
            <ul className="mt-6 flex flex-wrap gap-2">
              {rnd.focus.map((item) => (
                <li key={item} className="rounded-full border border-tide px-3.5 py-1.5 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-8">
            <h3 className="text-3xl font-bold">{rnd.notesTitle}</h3>
            <ul className="mt-6 grid gap-4 md:grid-cols-2">
              {rnd.notes.map((note) => (
                <li key={note.area} className="rounded-3xl border border-tide p-6">
                  <p className="text-lg font-bold text-sun">{note.area}</p>
                  <dl className="mt-4 space-y-4">
                    <div>
                      <dt className="text-sm text-mist">Challenge</dt>
                      <dd className="mt-1 leading-relaxed">{note.challenge}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-mist">Prompt adjustment</dt>
                      <dd className="mt-1 leading-relaxed">{note.adjustment}</dd>
                    </div>
                  </dl>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
