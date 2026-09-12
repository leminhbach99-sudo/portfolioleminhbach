"use client";

import { motion } from "framer-motion";
import { hero } from "@/content/site";
import { EASE } from "@/lib/motion";
import { HeroConsole } from "./HeroConsole";
import { Container } from "./ui/Container";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden pt-28 md:pt-36">
      <Container>
        <h1 id="hero-title" className="display text-[clamp(3.6rem,13vw,13rem)] font-extrabold uppercase">
          {hero.headline.map((line, index) => (
            <span key={line} className="block overflow-hidden pb-[0.05em]">
              <motion.span
                className="block"
                initial={{ y: "105%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.95, delay: 0.1 + index * 0.12, ease: EASE }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="mt-10 grid gap-12 pb-20 md:mt-14 md:pb-28 lg:grid-cols-12 lg:gap-10">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <p className="text-lg font-semibold md:text-xl">{hero.subheadline}</p>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-mist">{hero.supporting}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#work" className="btn-primary">
                {hero.primaryCta}
              </a>
              <a href="#contact" className="btn-ghost">
                {hero.secondaryCta}
              </a>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease: EASE }}
          >
            <HeroConsole />
          </motion.div>
        </div>
      </Container>
      <div aria-hidden className="tri-band h-1 w-full" />
    </section>
  );
}
