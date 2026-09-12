import { profile } from "@/content/site";
import { Container } from "./ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-tide">
      <Container className="flex flex-col gap-4 py-8 text-sm text-mist md:flex-row md:items-center md:justify-between">
        <p>
          © {profile.year} {profile.fullName} ({profile.name})
        </p>
        <p className="md:text-center">{profile.positioning}</p>
        <a href="#top" className="focus-ring rounded-md hover:text-foam">
          Back to top
        </a>
      </Container>
      <div aria-hidden className="tri-band h-1.5" />
    </footer>
  );
}
