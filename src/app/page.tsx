import { About } from "@/components/About";
import { AiRnd } from "@/components/AiRnd";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Experimentation } from "@/components/Experimentation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Scriptwriting } from "@/components/Scriptwriting";
import { PromptShowcase } from "@/components/PromptShowcase";
import { Skills } from "@/components/Skills";
import { Workflow } from "@/components/Workflow";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 rounded-full bg-sun px-4 py-2 font-semibold text-abyss focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <PromptShowcase />
        <Projects />
        <Workflow />
        <Scriptwriting />
        <Experimentation />
        <AiRnd />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
