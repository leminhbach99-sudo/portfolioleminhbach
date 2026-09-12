# Bach — AI Creative Portfolio

Personal portfolio for Bach (Lê Minh Bách), built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Run it locally

Requires Node.js 18.18 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy on Vercel (free)

1. Push this folder to a GitHub repository.
2. Go to vercel.com → Add New → Project → import the repository. Keep the default settings.
3. In Project Settings → Environment Variables, add `NEXT_PUBLIC_SITE_URL` with your final address
   (e.g. `https://your-name.vercel.app`) so social share previews use the right image URL.
4. Deploy. Every push to GitHub redeploys automatically.

## Editing content

Everything you'll want to change lives in **`src/content/site.ts`**:

- Text for every section
- Projects (set `published: false` to hide one)
- Links: LinkedIn and Portfolio are placeholders until you add `href`
- Results: remove a project's `results` block to hide the numbers
- Credits: add the Seventh Barista illustrator's name

## Adding images and videos

Media slots show a labeled placeholder until you provide a file:

- **Image:** put the file in `public/projects/<project>/`, then set `src: "/projects/<project>/<file>"`
  on that item in `site.ts`. If a file is missing, the placeholder shows instead of a broken image.
- **YouTube:** set `youtubeId` on a `video` entry. The embed only loads when the visitor presses play.
- **MP4:** set `mp4` (and ideally `poster`). Clips autoplay muted and loop, unless the visitor prefers reduced motion.

### Videos blocked in some countries

`videoNote` on a project holds the message shown next to its videos (currently the VPN note on
Reggae by the Sea). Delete the field to remove the note.

### Previewing without embeds

Set `NEXT_PUBLIC_OPEN_VIDEOS_EXTERNALLY=1` to make YouTube blocks link out instead of embedding.
Leave it unset for the real site.

Each `public/projects/*` folder has a README listing the expected files.

## Social preview image

`public/og.png` is a simple generated card. Replace it with your own 1200 × 630 image at any time.

## Structure

```
src/
  app/            layout (SEO + fonts), page, global styles, favicon
  components/     Navbar, Hero, HeroConsole, About, Skills, PromptShowcase,
                  Projects, ProjectCard, ProjectCaseStudy, WatchProject,
                  Workflow, Scriptwriting, Experimentation, AiRnd,
                  Experience, Contact, Footer
  components/ui/  Container, SectionIntro, MediaSlot, VideoSlot, Lightbox
  content/        site.ts (all content) and types.ts
  lib/            small helpers
```
