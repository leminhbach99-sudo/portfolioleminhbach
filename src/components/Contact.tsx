import { contact } from "@/content/site";
import { cn } from "@/lib/cn";
import { Container } from "./ui/Container";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-tide py-24 md:py-40">
      <Container>
        <h2 id="contact-title" className="display text-[clamp(3.25rem,11.5vw,11rem)] font-extrabold uppercase">
          {contact.title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
        <p className="mt-8 max-w-xl text-xl leading-relaxed text-mist md:text-2xl">{contact.lead}</p>

        <ul className="mt-16 grid border-t border-tide md:grid-cols-3">
          {contact.links.map((link, index) => {
            const external = link.kind !== "email" && link.kind !== "phone";
            return (
            <li key={link.label} className={cn("border-b border-tide", index < contact.links.length - 1 && "md:border-r")}>
              {link.href ? (
                <a
                  href={link.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className="focus-ring group flex flex-col gap-1 py-7 transition-colors md:px-6"
                >
                  <span className="text-sm text-mist">{link.label}</span>
                  <span className="break-all text-2xl font-semibold transition-colors group-hover:text-sun md:text-xl lg:text-2xl">
                    {link.display ?? link.href}
                  </span>
                </a>
              ) : (
                <div className="flex flex-col gap-1 py-7 md:px-6">
                  <span className="text-sm text-mist">{link.label}</span>
                  <span className="text-lg text-mist">[Placeholder: add your {link.label} URL in src/content/site.ts]</span>
                </div>
              )}
            </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
