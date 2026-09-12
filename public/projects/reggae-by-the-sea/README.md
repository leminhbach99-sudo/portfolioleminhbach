# Reggae by the Sea — media

Replace any file with a higher-quality version using the same name; nothing else needs changing.

- `cover.webp` — project cover
- `hero-visual.webp` — Hero console, "Visual" step. If you replace it, re-measure the subject box
  (`hero.consoleSubject` in `src/content/site.ts`).
- `hero-video.mp4`, `hero-video-poster.webp` — Hero console, "Video" step (8-second loop)
- `01-outfit.webp`, `02-pose-scene.webp`, `04-motion.webp`, `05-companion.webp`, `06-thumbnail.webp` — prompt-pipeline stages
- `batch/scene-1.webp` … `scene-6.webp` — "Batch prompts" grid
- `prompt-strip/scene-1.webp` … `scene-3.webp` — the strip inside the Prompt Engineering card
  (`skills.promptEngineering.strip` in `src/content/site.ts`)
- `prompt-annotated.webp` — the annotated study in "What the prompt names, and what it doesn't"
- `prompt-demo-refined.webp` — output for the refined prompt
- `prompt-demo-draft.jpg` — not added yet; set `src` on `promptShowcase.draft.output` once you have it
- `style-a-chibi.webp`, `style-b-scene.webp`, `style-c-isolated.webp` — Style versions in the Experiment section
- `story/page-1.webp` … `page-3.webp` — the AI short story "The Mona Lisa Job"

Videos:

- The large "Watch the project" block uses `featuredVideo` (YouTube ID + local poster).
- The case study uses `video` (YouTube ID).
- `videoNote` holds the region-restriction message shown next to both.
