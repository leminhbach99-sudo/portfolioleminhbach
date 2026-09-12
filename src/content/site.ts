import type {
  Comic,
  ScriptCredit,
  ExperimentCard,
  Job,
  LinkItem,
  Media,
  Project,
  PromptParam,
  ReviewNote,
} from "./types";

/* ------------------------------------------------------------------ */
/*  Profile & navigation                                               */
/* ------------------------------------------------------------------ */

export const profile = {
  name: "Bach",
  fullName: "Lê Minh Bách",
  positioning: "Turning ideas into visuals through AI, creative thinking, and precise prompting.",
  roles: ["AI Content Creator", "AI Video Creative", "Prompt Engineer", "Creative Content Specialist"],
  year: "2026",
};

export const nav = {
  links: [
    { label: "Work", href: "#work" },
    { label: "Prompting", href: "#prompting" },
    { label: "Process", href: "#process" },
    { label: "Writing", href: "#writing" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
};

/* ------------------------------------------------------------------ */
/*  Hero & about                                                       */
/* ------------------------------------------------------------------ */

export const hero = {
  headline: ["From ideas", "to visuals."],
  subheadline: "AI Content Creator · Prompt Engineer · Video Creative",
  supporting:
    "I explore the intersection of AI, storytelling, and visual creativity — turning ideas into characters, scenes, videos, and engaging digital experiences.",
  primaryCta: "View my work",
  secondaryCta: "Let’s connect",
  consoleIdea: "A reggae pirate captain who answers every problem with a song.",
  consoleVisual: {
    src: "/projects/reggae-by-the-sea/hero-visual.webp",
    path: "/projects/reggae-by-the-sea/hero-visual.webp",
    label: "Visual",
    alt: "The reggae pirate captain steering a ship's wheel on deck, with a small turtle beside him",
  } as Media,
  /** Where the subject sits in the visual, as fractions of the frame. Measured from the image. */
  consoleSubject: { x0: 0.36, y0: 0.125, x1: 0.66, y1: 0.8, label: "subject at 68% of frame height" },
  consoleVideo: {
    title: "The captain character dancing to music",
    mp4: "/projects/reggae-by-the-sea/hero-video.mp4",
    poster: "/projects/reggae-by-the-sea/hero-video-poster.webp",
  },
  consolePrompt: [
    { tag: "identity", text: "same face, dreadlocks, eyepatch, feathered hat", tone: "text-sun" },
    { tag: "pose", text: "standing at the waterline, strumming a guitar", tone: "text-palm" },
    { tag: "camera", text: "medium close, three-quarter view, 16:9", tone: "text-sky" },
    { tag: "light", text: "warm side light, clean silhouette", tone: "text-rasta" },
  ],
};

export const about = {
  lead: "My name is Bach, and I love stories, visuals, and creating things that feel a little different!",
  body: [
    "I explore the intersection of storytelling, AI, and visual creativity to turn ideas into characters, scenes, and engaging video content. My work often experiments with imaginative concepts, distinctive characters, and playful visual styles, always looking for new ways to make an idea stand out.",
    "I enjoy experimenting with AI tools, prompt engineering, video editing, and creative concepts to bring ideas from imagination to screen. Whether I’m building a character, developing a visual world, or crafting a short video, I’m always looking for that little spark that makes people stop, look, and wonder:",
  ],
  closing: "“What happens next?”",
  portrait: {
    src: "/about/portrait.webp",
    path: "/about/portrait.webp",
    label: "Portrait",
    alt: "Portrait of Bach (Lê Minh Bách) in a navy suit on a boat, with the Ho Chi Minh City skyline behind him",
  } as Media,
  facts: [
    { term: "Open to", detail: "AI content and AI video roles or projects" },
    { term: "Education", detail: "Bachelor of Multimedia Communications, FPT University, Ho Chi Minh City (2019–2023), GPA 7.3 / 10" },
    { term: "Also", detail: "Screenwriting for short films and TVCs" },
    { term: "Languages", detail: "English: TOEIC 840 / IELTS 5.5" },
  ],
};

/* ------------------------------------------------------------------ */
/*  Skills                                                             */
/* ------------------------------------------------------------------ */

export const skills = {
  lead: "Four groups of skills, with prompting at the center of how every project gets made.",
  promptEngineering: {
    steps: ["Concept", "Structure", "Generate", "Refine", "Iterate"],
    detail:
      "Using structured prompts to control character identity, composition, visual style, camera direction, movement, lighting, and scene consistency.",
    stripCaption: "Same characters, new settings: identity locked while outfit, pose, and scene change.",
    strip: [
      {
        src: "/projects/reggae-by-the-sea/prompt-strip/scene-1.webp",
        path: "/projects/reggae-by-the-sea/prompt-strip/scene-1.webp",
        label: "Stone steps",
        alt: "The captain and the navigator in football-themed outfits on flower-lined stone steps",
      },
      {
        src: "/projects/reggae-by-the-sea/prompt-strip/scene-2.webp",
        path: "/projects/reggae-by-the-sea/prompt-strip/scene-2.webp",
        label: "River at sunset",
        alt: "The same two characters on a boat at sunset, with the Eiffel Tower behind them",
      },
      {
        src: "/projects/reggae-by-the-sea/prompt-strip/scene-3.webp",
        path: "/projects/reggae-by-the-sea/prompt-strip/scene-3.webp",
        label: "City square",
        alt: "The same two characters in a sunlit plaza, one with a football, the other playing guitar",
      },
    ] as Media[],
    excerpt: [
      "Use the exact reference image as the main character guide.",
      "Keep the same male reggae pirate captain character, same face,",
      "skin tone, hairstyle, long brown dreadlocks, eye patch, pirate hat,",
      "feather details, … body proportions, and overall adorable",
      "reggae-inspired chibi identity.",
      "… Use a medium, moderately close cinematic camera angle …",
    ],
  },
  groups: [
    {
      title: "AI & prompt engineering",
      items: [
        "Prompt Engineering",
        "AI-Assisted Content Creation",
        "AI Image Generation",
        "AI Video Generation",
        "AI Character Design",
        "AI Creative Workflow",
        "AI Research & Tool Exploration",
      ],
    },
    {
      title: "Creative & video",
      items: [
        "Creative Concept Development",
        "Scriptwriting (short film, TVC)",
        "Visual Storytelling",
        "Character Development",
        "Visual Direction",
        "Video Editing",
        "Short-form Video Production",
        "Scene Development",
        "Video Pacing",
      ],
    },
    {
      title: "Content & research",
      items: [
        "Content Creation",
        "YouTube Content Production",
        "YouTube SEO",
        "Audience Research",
        "Trend Research",
        "Competitor Content Research",
        "Content Performance Analysis",
      ],
    },
  ],
  tools: ["ChatGPT", "Claude", "Gemini", "Flow AI", "Adobe Photoshop", "Adobe Premiere Pro", "CapCut", "Canva"],
};

/* ------------------------------------------------------------------ */
/*  Prompt engineering showcase                                        */
/* ------------------------------------------------------------------ */

export const promptParams: PromptParam[] = [
  { key: "identity", label: "Character identity", group: "character" },
  { key: "outfit", label: "Outfit", group: "character" },
  { key: "pose", label: "Pose", group: "action" },
  { key: "camera", label: "Camera", group: "camera" },
  { key: "lighting", label: "Lighting", group: "world" },
  { key: "environment", label: "Environment", group: "world" },
  { key: "motion", label: "Motion", group: "action" },
  { key: "composition", label: "Composition", group: "camera" },
  { key: "style", label: "Visual style", group: "world" },
  { key: "consistency", label: "Consistency", group: "character" },
];

export const promptShowcase = {
  title: "The art of prompting",
  lead: "My strength isn’t simply using AI tools. It’s knowing how to communicate creative intent through prompts, reviewing what comes back, and refining until the output matches the idea.",
  workflow: [
    "Creative idea",
    "Character / scene requirements",
    "Prompt structure",
    "AI generation",
    "Output review",
    "Prompt refinement",
    "Final output",
  ],
  /** Zero-based indexes of the steps that repeat. */
  loop: [2, 3, 4, 5],
  loopNote: "Steps 3 to 6 repeat until the output matches the creative intent.",
  demoNote: "Refined prompt rewritten from my working template to match the output shown.",
  draft: {
    text: "Young pirate captain standing on a tropical beach, playing guitar, cartoon style.",
    /** Parameters the draft touches on, however loosely. Everything else is shown as "left to guess". */
    mentions: ["pose", "environment", "style"],
    output: {
      path: "/projects/reggae-by-the-sea/prompt-demo-draft.jpg",
      label: "Output from the draft prompt",
      alt: "AI output generated from the one-line draft prompt",
    },
    notes: [
      { improved: false, text: "Face, hair, and outfit drift away from the established character." },
      { improved: false, text: "Framing and camera distance are left to chance." },
      { improved: false, text: "Random props, text, or weapons can appear in the frame." },
    ] as ReviewNote[],
  },
  refined: {
    segments: [
      { param: "identity", text: "Use the exact reference image as the main character guide. Keep the same reggae captain: same face, warm skin tone, big brown eyes, goatee, long brown dreadlocks with red, yellow, and green beads, and body proportions." },
      { param: "outfit", text: "Keep the cream embroidered shirt, reggae sash, dark trousers, brown lace-up boots, and beaded bracelets. Replace the pirate hat with a knotted reggae headband in Red #C62828, Yellow #F9A825, Green #2E7D32." },
      { param: "pose", text: "Sitting on the sand, leaning back against a palm trunk, legs stretched out, strumming an acoustic guitar with a believable hand position, mouth open mid-song, joyful smile." },
      { param: "camera", text: "Medium-wide camera at eye level with a slight three-quarter view. No extreme close-up, no distant aerial shot." },
      { param: "composition", text: "The captain sits left of center on a tiny sandy island, the palm rising behind him to the right. A friendly cartoon shark in a reggae bandana and sailor collar pops out of the water at the lower right. Balanced 16:9 frame." },
      { param: "lighting", text: "Bright midday sun from above, sparkling highlights on the water, soft clean shadows." },
      { param: "environment", text: "A tiny island in the open ocean: turquoise water, gentle ripples, a few shells and pebbles on the sand, clear horizon with soft clouds." },
      { param: "motion", text: "Red, yellow, and green musical notes swirl up from the guitar on the left without covering his face. Dreadlocks sway lightly in the breeze." },
      { param: "style", text: "Polished 2D anime-chibi illustration, clean linework, vibrant colors, family-friendly." },
      { param: "consistency", text: "No weapons, no text, no logo, no watermark. Hands, fingers, guitar strings, and boots correctly formed." },
    ],
    output: {
      src: "/projects/reggae-by-the-sea/prompt-demo-refined.webp",
      path: "/projects/reggae-by-the-sea/prompt-demo-refined.webp",
      label: "Output from the refined prompt",
      alt: "The reggae captain in a headband playing guitar under a palm tree on a tiny island, with a cartoon shark in the water",
    },
    notes: [
      { improved: true, text: "Identity is locked to the reference; the outfit changes only where the prompt says so." },
      { improved: true, text: "Camera, framing, and light are directed, not guessed." },
      { improved: true, text: "A clean frame that is ready for animation and editing." },
    ] as ReviewNote[],
  },
  annotated: {
    title: "What the prompt names, and what it doesn’t",
    body: "Every label with an arrow is a phrase the prompt actually specifies. Everything without one — the camera distance, the light, the exact outfit, where the character sits in the frame — is left to the model. That gap is what a refined prompt closes.",
    note: "Annotated study of the draft prompt above.",
    media: {
      src: "/projects/reggae-by-the-sea/prompt-annotated.webp",
      path: "/projects/reggae-by-the-sea/prompt-annotated.webp",
      label: "Annotated study",
      alt: "Illustration of the beach scene with arrows labelling the phrases the draft prompt specifies",
    } as Media,
  },
  closing: "Better outputs come from better creative direction, structured prompting, and iteration.",
};

/* ------------------------------------------------------------------ */
/*  Projects                                                           */
/* ------------------------------------------------------------------ */

const comicPanels = (chap: number, title: string): Media[] =>
  [1, 2, 3, 4].map((n) => ({
    src: `/projects/seventh-barista/comics/chap-${chap}-panel-${n}.webp`,
    path: `/projects/seventh-barista/comics/chap-${chap}-panel-${n}.webp`,
    label: `${title}, panel ${n}`,
    alt: `${title}, panel ${n}`,
  }));

const seventhBaristaComics: Comic[] = [
  {
    title: "Đôi khi chỉ cần ánh mắt là đủ",
    titleEn: "Sometimes a look is all it takes",
    summary: "Roberto greets a customer without saying a word, and the look lands better than any welcome — much to Teapot’s surprise.",
    page: { src: "/projects/seventh-barista/comics/chap-1.webp", path: "/projects/seventh-barista/comics/chap-1.webp", label: "Chap 1", alt: "Four-panel comic: Đôi khi chỉ cần ánh mắt là đủ" },
    panels: comicPanels(1, "Đôi khi chỉ cần ánh mắt là đủ"),
  },
  {
    title: "9 người, 10 ý",
    titleEn: "Nine people, ten opinions",
    summary: "The team writes a welcome sign, and every barista trims the slogan until only the café’s name is left. The owner loves it.",
    page: { src: "/projects/seventh-barista/comics/chap-2.webp", path: "/projects/seventh-barista/comics/chap-2.webp", label: "Chap 2", alt: "Four-panel comic: 9 người, 10 ý" },
    panels: comicPanels(2, "9 người, 10 ý"),
  },
  {
    title: "Nói ít thôi",
    titleEn: "Keep it short",
    summary: "A customer asks about his drink and gets a wall of text, then a lecture in chemical formulas. Roberto and Teapot sum it up in one symbol.",
    page: { src: "/projects/seventh-barista/comics/chap-3.webp", path: "/projects/seventh-barista/comics/chap-3.webp", label: "Chap 3", alt: "Four-panel comic: Nói ít thôi" },
    panels: comicPanels(3, "Nói ít thôi"),
  },
];

const REGGAE_CHANNEL = "https://www.youtube.com/@ReggaebytheSea";
const REGGAE_VIDEO_FOLDER = "https://drive.google.com/drive/folders/1tMryxsOU7J6NXdmjvMb_X_b0NmNPmmdF?usp=sharing";

export const projects: Project[] = [
  {
    slug: "seventh-barista",
    published: true,
    number: "01",
    title: "The Seventh Barista",
    category: "AI-assisted character & storytelling",
    year: "2023",
    accent: "coffee",
    framing: "An AI-assisted reinterpretation and visual development of the original 2023 campaign concept.",
    summary:
      "Seven chibi baristas, one for each drink category on a café’s menu — a playful way for a coffee shop to connect with young customers.",
    description: [
      "This was a marketing project I worked on for a coffee shop. The goal was to create a fresh and unconventional way for the brand to connect with its customers by combining AI-generated Chibi characters with seven real beverage categories from the café’s menu.",
      "Each Chibi character was designed to represent the brand’s target audience — young, energetic, and creative people — while reflecting the personality and identity associated with each beverage category. By turning real products into relatable characters, the project aimed to communicate the brand’s message and values through a more playful, engaging, and memorable visual storytelling approach.",
    ],
    role: [
      "Concept Development",
      "Character Development",
      "Prompt Engineering",
      "AI-Assisted Visual Creation",
      "Visual Direction",
      "Video Editing",
      "Comic Story Writing",
    ],
    tools: ["ChatGPT", "Claude", "Gemini", "Adobe Photoshop", "Adobe Premiere Pro", "CapCut"],
    workflow: [
      "Idea",
      "Character Development",
      "Visual Direction",
      "Prompt Engineering",
      "AI Visual Creation",
      "Scene Development",
      "Editing",
      "Sound",
      "Final Content",
    ],
    cover: {
      src: "/projects/seventh-barista/cover.webp",
      path: "/projects/seventh-barista/cover.webp",
      label: "Project cover: the seven baristas",
      alt: "The Seventh Barista logo above the seven chibi barista characters",
      fit: "contain",
      background: "#FFFFFF",
    },
    stagesTitle: "From concept to final visual",
    stages: [
      {
        label: "Concept",
        note: "Seven menu categories become seven baristas, each with a personality, a look, and a story.",
        media: {
          src: "/projects/seventh-barista/01-concept.webp",
          path: "/projects/seventh-barista/01-concept.webp",
          label: "Menu categories and their baristas",
          alt: "The café menu with a line-art barista beside each drink category",
          fit: "contain",
          background: "#FDF8F5",
        },
      },
      {
        label: "Character",
        note: "A character sheet for each barista: traits, appearance, and a color palette tied to the drink.",
        media: {
          src: "/projects/seventh-barista/02-character.webp",
          path: "/projects/seventh-barista/02-character.webp",
          label: "Character sheet",
          alt: "Roberto, the traditional coffee barista, next to his color palette",
          fit: "contain",
          background: "#FDF8F5",
        },
      },
      {
        label: "Prompt",
        note: "Structured prompts translate each character sheet into visual direction.",
        media: { path: "/projects/seventh-barista/03-prompt.jpg", label: "Prompt excerpt", alt: "Excerpt of a character prompt" },
      },
      {
        label: "AI output",
        note: "Generated variations reviewed against the character direction.",
        media: { path: "/projects/seventh-barista/04-ai-output.jpg", label: "AI output variations", alt: "AI-generated variations of a barista character" },
      },
      {
        label: "Final visual",
        note: "The selected direction refined into the final campaign visual.",
        media: {
          src: "/projects/seventh-barista/05-final.webp",
          path: "/projects/seventh-barista/05-final.webp",
          label: "Final visual",
          alt: "The Seventh Barista logo with all seven baristas lined up",
          fit: "contain",
          background: "#FDF8F5",
        },
      },
    ],
    characters: [
      { name: "Roberto", image: "/projects/seventh-barista/characters/roberto.webp", menu: "Traditional coffee", trait: "Quiet and serious on the outside, attentive to everything around him.", palette: ["#3C3A39", "#F2EEED", "#DDDDDD", "#C3BABE", "#222222"] },
      { name: "Antony", image: "/projects/seventh-barista/characters/antony.webp", menu: "Arabica coffee", trait: "Outgoing and vibrant, with a smile that always shines.", palette: ["#E6C182", "#8E9A42", "#FDF8F5", "#222222"] },
      { name: "Dr Yu", image: "/projects/seventh-barista/characters/dr-yu.webp", menu: "Signature drinks", trait: "Confident and inventive, solves ordinary problems in unusual ways.", palette: ["#4F4546", "#8C6553", "#FDF8F5", "#342E2F"] },
      { name: "Picasso", image: "/projects/seventh-barista/characters/picasso.webp", menu: "Artisan coffee", trait: "Open, generous, and always drawing.", palette: ["#B74D56", "#38496A", "#FDF8F5", "#222222"] },
      { name: "Cocoa", image: "/projects/seventh-barista/characters/cocoa.webp", menu: "Cacao", trait: "Energetic, enthusiastic, and a little competitive.", palette: ["#A96D3C", "#80503A", "#E1D3D2", "#1E1E1E"] },
      { name: "Teapot", image: "/projects/seventh-barista/characters/teapot.webp", menu: "Tea", trait: "Introverted, calm, and quietly expressive.", palette: ["#B2C488", "#495431", "#333A25", "#FDF8F5"] },
      { name: "Frann", image: "/projects/seventh-barista/characters/frann.webp", menu: "Fresh juice", trait: "Kind and gentle, always reminding everyone to live healthy.", palette: ["#F68D48", "#569584", "#A83433", "#745D2C"] },
    ],
    results: {
      heading: "Original 2023 campaign results",
      source: "FPT University capstone report. Campaign ran 20 Feb – 9 Apr 2023 on Facebook and Instagram.",
      items: [
        { value: "9.5/10", label: "Client evaluation score" },
        { value: "15,014", label: "Views on the campaign video “Mộng Barista” (target 15,000)" },
        { value: "6,083", label: "Facebook page likes (target 5,500)" },
        { value: "2,563", label: "Instagram followers (target 2,500)" },
      ],
    },
    credits: [
      "Original campaign: FPT University capstone project for The Seventh Barista café, led by Bach with teammates Trần Nguyễn Xuân Anh and Phan Tại Khánh.",
      "Original chibi illustrations and 4-panel comics: Tayura.",
      "Character concepts developed with ChatGPT.",
      "4-panel comic stories: Bach (@Young).",
    ],
    links: [{ label: "The Seventh Barista on Facebook", href: "https://www.facebook.com/the.seventh.barista", kind: "external" }],
    fanpage: {
      intro: "Posts from the original 2023 campaign on Facebook and Instagram.",
      posts: [
        { src: "/projects/seventh-barista/fanpage/post-1.webp", path: "/projects/seventh-barista/fanpage/post-1.webp", label: "Dr Yu and a coffee-matcha fusion", alt: "Dr Yu winking on a tiny chair next to a layered coffee and matcha drink" },
        { src: "/projects/seventh-barista/fanpage/post-2.webp", path: "/projects/seventh-barista/fanpage/post-2.webp", label: "Frann and fresh orange juice", alt: "Frann happily sipping orange juice beside a glass of fresh juice and green oranges" },
        { src: "/projects/seventh-barista/fanpage/post-3.webp", path: "/projects/seventh-barista/fanpage/post-3.webp", label: "Teapot and a pot of tea", alt: "Teapot sipping tea under cherry blossoms next to a glass teapot and madeleines", orientation: "portrait" },
        { src: "/projects/seventh-barista/fanpage/post-4.webp", path: "/projects/seventh-barista/fanpage/post-4.webp", label: "Teapot at tea time", alt: "A puzzled Teapot standing on a bamboo tray while tea is poured into glass cups" },
        { src: "/projects/seventh-barista/fanpage/post-5.webp", path: "/projects/seventh-barista/fanpage/post-5.webp", label: "Antony for Women’s Day", alt: "Antony holding a rose beside an iced coffee, with a Happy Women’s Day greeting" },
      ],
      comicsTitle: "Chuyện chưa kể bên quầy Bar",
      comicsIntro: "Four-panel comics about life behind the bar, written by Bach (@Young) and drawn by Tayura.",
      comics: seventhBaristaComics,
    },
  },
  {
    slug: "reggae-by-the-sea",
    published: true,
    number: "02",
    title: "Reggae by the Sea",
    category: "AI video production & YouTube content",
    year: "2026",
    accent: "reggae",
    summary:
      "A tropical reggae YouTube channel built around pirate-themed AI characters, with a repeatable workflow from prompt to published video.",
    description: [
      "Created a tropical Reggae YouTube content project combining music, ocean scenery, and pirate-themed characters. The project focused on building a consistent visual identity and producing AI-assisted visual and video content for YouTube.",
    ],
    role: [
      "Creative Direction",
      "Character Design",
      "Prompt Engineering",
      "AI Image Generation",
      "AI Video Generation",
      "Video Editing",
      "Thumbnail Design",
      "YouTube SEO",
    ],
    tools: ["ChatGPT", "Flow AI", "Canva", "CapCut"],
    workflow: [
      "Research",
      "Concept",
      "Visual Identity",
      "Character Design",
      "Prompt Engineering",
      "AI Image Generation",
      "AI Video Generation",
      "Music & Scene Planning",
      "Video Editing",
      "Thumbnail",
      "YouTube SEO",
      "Final Video",
    ],
    highlights: [
      "Developed a tropical / Rasta-inspired visual identity.",
      "Created male, female, couple, Chibi characters and companion animals.",
      "Developed prompts for character appearance, movement, facial expression, lip-sync, camera direction, and environmental animation.",
      "Built a repeatable AI-assisted workflow for producing YouTube visual content.",
      "Combined AI-generated visuals with editing and YouTube content optimization.",
    ],
    cover: {
      src: "/projects/reggae-by-the-sea/cover.webp",
      path: "/projects/reggae-by-the-sea/cover.webp",
      label: "Project cover: the captain and navigator",
      alt: "The reggae pirate captain drumming and the navigator rowing a small wooden boat",
      fit: "contain",
      background: "#4F6BFF",
    },
    stagesTitle: "The prompt pipeline",
    stages: [
      {
        label: "Outfit design",
        note: "An LLM writes the design prompt from reference images, locked to the reggae palette and 2D chibi style.",
        media: {
          src: "/projects/reggae-by-the-sea/01-outfit.webp",
          path: "/projects/reggae-by-the-sea/01-outfit.webp",
          label: "Outfit design",
          alt: "The navigator dancing in a red, yellow, and green reggae outfit",
          fit: "contain",
          background: "#4F6BFF",
        },
      },
      {
        label: "Pose & scene",
        note: "An identity-lock block keeps face and outfit fixed while the pose, scene, and camera change.",
        media: {
          src: "/projects/reggae-by-the-sea/02-pose-scene.webp",
          path: "/projects/reggae-by-the-sea/02-pose-scene.webp",
          label: "New pose and scene",
          alt: "The captain sitting on the sand playing a hand drum",
          fit: "contain",
          background: "#4F6BFF",
        },
      },
      {
        label: "Batch prompts",
        note: "Six scene prompts generated as one batch from the same character reference, keeping her identity consistent across every setting.",
        media: { src: "/projects/reggae-by-the-sea/batch/scene-1.webp", path: "/projects/reggae-by-the-sea/batch/scene-1.webp", label: "Batch of scenes", alt: "The navigator in six generated scenes" },
        gallery: [
          { src: "/projects/reggae-by-the-sea/batch/scene-1.webp", path: "/projects/reggae-by-the-sea/batch/scene-1.webp", label: "Scene 1 of 6", alt: "The navigator sitting on a wooden barrel in a mangrove lagoon, playing guitar" },
          { src: "/projects/reggae-by-the-sea/batch/scene-2.webp", path: "/projects/reggae-by-the-sea/batch/scene-2.webp", label: "Scene 2 of 6", alt: "The navigator on a ship's deck holding a compass above a rocky coast" },
          { src: "/projects/reggae-by-the-sea/batch/scene-3.webp", path: "/projects/reggae-by-the-sea/batch/scene-3.webp", label: "Scene 3 of 6", alt: "The navigator posing on a ruined seaside terrace under a pink sky" },
          { src: "/projects/reggae-by-the-sea/batch/scene-4.webp", path: "/projects/reggae-by-the-sea/batch/scene-4.webp", label: "Scene 4 of 6", alt: "The navigator dancing with a rose at a moonlit harbor, with a small turtle" },
          { src: "/projects/reggae-by-the-sea/batch/scene-5.webp", path: "/projects/reggae-by-the-sea/batch/scene-5.webp", label: "Scene 5 of 6", alt: "The navigator playing guitar on a night balcony with a parrot and a treasure chest" },
          { src: "/projects/reggae-by-the-sea/batch/scene-6.webp", path: "/projects/reggae-by-the-sea/batch/scene-6.webp", label: "Scene 6 of 6", alt: "The navigator playing guitar on a sunset beach with a small bat" },
        ],
      },
      {
        label: "Motion",
        note: "The sixth scene from the batch, brought to life as an 8-second clip with timed beats, a fixed camera, and a seamless loop.",
        media: { src: "/projects/reggae-by-the-sea/04-motion.webp", path: "/projects/reggae-by-the-sea/04-motion.webp", label: "Motion clip frame", alt: "Frame from the animated clip of the navigator playing guitar on the beach" },
      },
      {
        label: "Companion animals",
        note: "Anthropomorphic animal companions in pirate outfits with reggae accents, generated on a clean background for compositing.",
        media: { src: "/projects/reggae-by-the-sea/05-companion.webp", path: "/projects/reggae-by-the-sea/05-companion.webp", label: "Companion animals", alt: "A lion pirate captain in a red coat holding a compass", fit: "contain", background: "#FFFFFF" },
      },
      {
        label: "Thumbnail type",
        note: "Transparent one-line typography built to stay readable at thumbnail size.",
        media: { src: "/projects/reggae-by-the-sea/06-thumbnail.webp", path: "/projects/reggae-by-the-sea/06-thumbnail.webp", label: "Thumbnail", alt: "Reggae by the Sea thumbnail: the captain playing guitar on a whale's back above the word REGGAE and a track list" },
      },
    ],
    results: {
      heading: "Channel results, first 23 days",
      source: "YouTube Studio, 25 Jun – 17 Jul 2026. Produced for Sun Media and shared with permission.",
      items: [
        { value: "489,146", label: "Views" },
        { value: "89,152", label: "Hours watched" },
        { value: "1,906", label: "New subscribers" },
        { value: "8.45%", label: "Click-through rate across 4.6M thumbnail impressions" },
      ],
    },
    credits: ["Produced for Sun Media."],
    links: [
      { label: "Reggae by the Sea on YouTube", href: REGGAE_CHANNEL, kind: "youtube" },
      { label: "More AI video samples", href: REGGAE_VIDEO_FOLDER, kind: "drive" },
    ],
    video: {
      title: "Reggae Songs Help You Wake Up Every Morning",
      label: "Featured video",
      path: "YouTube",
      youtubeId: "Y2QQPUO6auU",
    },
    videoNote:
      "Viewing in Vietnam? This video is region-restricted and won’t play there. To watch it, connect to a VPN set to another country, or browse the sample clips below.",
    story: {
      title: "The Mona Lisa Job",
      summary:
        "The captain plans the perfect museum heist, only to find the frame already empty. Up on the roof, the navigator got there first.",
      note: "Three pages generated with ChatGPT, keeping both characters consistent across panels.",
      pages: [
        { src: "/projects/reggae-by-the-sea/story/page-1.webp", path: "/projects/reggae-by-the-sea/story/page-1.webp", label: "Page 1: the plan", alt: "The captain imagines the heist while the navigator waits on the roof" },
        { src: "/projects/reggae-by-the-sea/story/page-2.webp", path: "/projects/reggae-by-the-sea/story/page-2.webp", label: "Page 2: the empty frame", alt: "The captain finds an empty gilded frame as guards rush in" },
        { src: "/projects/reggae-by-the-sea/story/page-3.webp", path: "/projects/reggae-by-the-sea/story/page-3.webp", label: "Page 3: the twist", alt: "The navigator holds the painting on the roof while the captain is chased below" },
      ],
    },
    featuredVideo: {
      title: "Reggae by the Sea: the captain on a whale",
      label: "Watch the project",
      path: "YouTube",
      youtubeId: "JJgACz2vSew",
      poster: "/projects/reggae-by-the-sea/06-thumbnail.webp",
    },
  },
  {
    // Placeholder for a future project. Set published: true once content is ready.
    slug: "game-ad",
    published: false,
    number: "03",
    title: "Game Ad",
    category: "[Add category]",
    year: "[Add year]",
    accent: "neutral",
    summary: "[Add a one-sentence summary]",
    description: ["[Add description]"],
    role: ["[Add role]"],
    tools: ["[Add tools]"],
    workflow: ["[Add workflow]"],
    cover: { path: "/projects/game-ad/cover.jpg", label: "Project cover", alt: "Game ad project cover" },
  },
];

/* ------------------------------------------------------------------ */
/*  AI video workflow                                                  */
/* ------------------------------------------------------------------ */

export const videoWorkflow = {
  title: "How I build AI videos",
  lead: "Seven steps from a first idea to a finished video. Prompting and refining sit in the middle, and they often repeat before the edit begins.",
  steps: [
    { title: "Research", body: "Understand the audience, trend, reference, and creative objective." },
    { title: "Concept", body: "Define the story, visual direction, format, and hook." },
    { title: "Prompt", body: "Translate creative intent into structured prompts." },
    { title: "Generate", body: "Create characters, environments, images, and video assets." },
    { title: "Refine", body: "Review outputs and iterate prompts to improve quality and consistency." },
    { title: "Edit", body: "Combine AI-generated assets into a coherent video." },
    { title: "Finalize", body: "Add sound, pacing, transitions, subtitles, and finishing touches." },
  ],
};

/* ------------------------------------------------------------------ */
/*  Experimentation                                                    */
/* ------------------------------------------------------------------ */

const experimentCards: ExperimentCard[] = [
  {
    key: "hook",
    title: "Hook",
    question: "How should the first seconds pull someone in?",
    versions: [
      { title: "Start mid-performance", body: "Open on the captain already singing, so the music and character land at once.", hook: "The captain is already strumming on deck." },
      { title: "Start with a problem", body: "A small comic setback gives the viewer a reason to keep watching.", hook: "The treasure map led to a guitar instead of gold." },
      { title: "Start with a question", body: "Speak directly to the viewer and invite a reaction.", hook: "Sailing toward success today, or just pretending you have a map?" },
    ],
  },
  {
    key: "style",
    title: "Style",
    question: "Which visual treatment fits the format?",
    versions: [
      { title: "2D anime-chibi", body: "Human characters with clean linework and reggae color accents.", media: { src: "/projects/reggae-by-the-sea/style-a-chibi.webp", path: "/projects/reggae-by-the-sea/style-a-chibi.webp", label: "Version A: 2D anime-chibi", alt: "The captain playing guitar in 2D anime-chibi style", fit: "contain", background: "#4F6BFF" } },
      { title: "Full scene with a companion", body: "The character placed in a complete tropical scene, sharing the frame with a companion animal.", media: { src: "/projects/reggae-by-the-sea/style-b-scene.webp", path: "/projects/reggae-by-the-sea/style-b-scene.webp", label: "Version B: full scene", alt: "The captain playing guitar on a bamboo raft with a parrot on a post" } },
      { title: "Isolated for compositing", body: "Characters on pure white or chroma green, combined with scenes in the edit.", media: { src: "/projects/reggae-by-the-sea/style-c-isolated.webp", path: "/projects/reggae-by-the-sea/style-c-isolated.webp", label: "Version C: isolated subject", alt: "The captain at a ship's wheel, isolated on a plain white background", fit: "contain", background: "#FFFFFF" } },
    ],
  },
  {
    key: "prompt",
    title: "Prompt",
    question: "How much structure does the model need?",
    versions: [
      { title: "One-line description", body: "Fast to write, but identity, framing, and props are left to the model.", blocks: ["base"] },
      { title: "Identity lock + direction", body: "Adds rules for face, outfit, pose, and camera, so the character stays recognizable.", blocks: ["base", "character", "character", "action", "camera"] },
      { title: "Reusable template", body: "Adds conditional motion rules and negative constraints, so one prompt works across many images.", blocks: ["base", "character", "character", "action", "action", "camera", "camera", "world", "world"] },
    ],
  },
];

export const experiments = {
  lead: "AI generation is rarely a one-prompt process. I experiment with different creative directions, prompting structures, visual styles, hooks, and workflows to find the strongest result.",
  note: "Versions below are drawn from the Reggae by the Sea workflow.",
  cards: experimentCards,
};

/* ------------------------------------------------------------------ */
/*  AI R&D                                                             */
/* ------------------------------------------------------------------ */

export const rnd = {
  title: "AI R&D",
  lead: "I continuously explore AI tools and prompting approaches to understand how they can improve creative production, visual quality, consistency, and workflow efficiency.",
  loop: ["Problem", "Experiment", "Prompt adjustment", "New output", "Evaluation", "Improved workflow"],
  focus: ["Character consistency", "Camera movement", "Composition", "Lighting", "Facial expression", "Scene continuity", "Motion", "Visual style"],
  notesTitle: "Field notes from Reggae by the Sea",
  notes: [
    {
      area: "Character consistency",
      challenge: "A character’s face and outfit can drift whenever the pose or scene changes.",
      adjustment: "A reusable identity-lock block that lists every feature to keep and every change to forbid.",
    },
    {
      area: "Camera & composition",
      challenge: "Characters can come out too small in the frame, or cropped too tightly.",
      adjustment: "Explicit framing: a medium, moderately close camera, the subject at 45–55% of frame height, and named shots to avoid.",
    },
    {
      area: "Motion",
      challenge: "In animated clips, seated characters may stand up and dance, or hands leave the instrument.",
      adjustment: "Conditional action rules: standing characters dance, seated characters only sway, instruments are played, the steering wheel stays in hand.",
    },
    {
      area: "Scene continuity",
      challenge: "Generated backgrounds make it hard to reuse characters across videos.",
      adjustment: "Characters generated on pure white or chroma green, then combined with scenes during the edit.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Experience & education                                             */
/* ------------------------------------------------------------------ */

export const experience: Job[] = [
  {
    period: "2026, until August",
    role: "AI Content Specialist",
    company: "Sun Media",
    bullets: [
      "Developed AI prompts for characters, visual concepts, environments, and scenes.",
      "Created AI-generated characters, images, and videos.",
      "Experimented with prompting techniques to improve character consistency, composition, camera direction, lighting, visual style, and scene continuity.",
      "Translated creative ideas into visual sequences.",
      "Iterated AI-generated outputs through prompt refinement.",
      "Combined AI-generated assets with video editing workflows.",
      "Researched and tested AI tools and workflows.",
    ],
  },
  {
    period: "2025–2026",
    role: "Content Specialist / SEO Content Writer",
    company: "ECXO Agency",
    focus: ["Content research", "AI-assisted content creation", "Prompt engineering", "Audience intent", "Content performance analysis", "Creative direction"],
  },
  {
    period: "2023–2025",
    role: "Social Media Specialist / YouTube Content Specialist",
    company: "Công ty TNHH Địa Điểm Ăn Uống",
    focus: ["Social media content", "YouTube content", "Thumbnail design", "Audience research", "Content trends", "AI-assisted content creation", "YouTube optimization"],
  },
  {
    period: "2022–2023",
    role: "Social Media Specialist",
    company: "The Seventh Barista",
    focus: ["Social media content", "Product storytelling", "Visual content", "Audience engagement", "Brand communication"],
  },
];

export const education = {
  school: "FPT University",
  degree: "Bachelor of Multimedia Communications",
  detail: "Ho Chi Minh City, 2019–2023. GPA 7.3 / 10",
  languages: "English: TOEIC 840 / IELTS 5.5",
};

/* ------------------------------------------------------------------ */
/*  Contact                                                            */
/* ------------------------------------------------------------------ */

export const scriptwriting = {
  title: "From script to screen",
  lead: "Before AI, the idea. I write scripts for short films and TVCs, and I watch a lot of films — so an AI video starts with a story and a shot list, not with a tool.",
  credits: [
    {
      kind: "Short film script",
      title: "Kỳ Án Ánh Trăng",
      titleEn: "The Moonlight Case",
      meta: "Four scenes. Written solo.",
      body: "A mystery about a medical student and a private detective investigating a series of deaths that happen at the same dormitory room every full moon. The script carries its own motifs: a finger tapping faster as deduction builds, and a piano sonata that keeps returning.",
      clip: {
        mp4: "/writing/ky-an-anh-trang.mp4",
        poster: "/writing/ky-an-anh-trang-poster.webp",
        title: "Kỳ Án Ánh Trăng, test shot",
        note: "AI-generated test shot, prompted from the script excerpt below. Not live-action footage.",
      },
      excerpt: {
        heading: "Scene 3, excerpt",
        lines: [
          { type: "slug", text: "EXT. HOA VIÊN BỆNH VIỆN. NGÀY" },
          { type: "action", text: "Huyên Linh ngồi một mình trên ghế đá. Ngón tay cô bắt đầu gõ chậm rãi lên cuốn sách." },
          { type: "character", text: "LINH" },
          { type: "paren", text: "(độc thoại)" },
          { type: "dialogue", text: "Trên cánh cửa phòng có một vết xước lớn và một vết hằn." },
          { type: "action", text: "Nhịp gõ mỗi lúc một nhanh." },
          { type: "character", text: "LINH" },
          { type: "paren", text: "(độc thoại)" },
          { type: "dialogue", text: "Và tên hung thủ này còn hiểu biết về âm nhạc cổ điển." },
          { type: "action", text: "Ngón tay gõ nhanh rồi dậm một nhịp mạnh sau chót." },
        ],
      },
    },
    {
      kind: "TVC script",
      title: "Mộng Barista",
      titleEn: "A Barista’s Dream",
      meta: "5-minute campaign video. Scriptwriter and voice-over writer.",
      body: "The emotional centerpiece of The Seventh Barista campaign. It cuts between a café owner today and his younger self: a young man who loved to draw, worked as a server, lost that job, and years later runs the shop. The new chibi menu is what sends him back. It closes on the campaign line, “Hãy trở thành Barista của chính bạn.”",
      excerpt: {
        heading: "Opening, excerpt",
        lines: [
          { type: "slug", text: "INT. THE SEVENTH BARISTA. DAY" },
          { type: "character", text: "VOICE OFF" },
          { type: "dialogue", text: "Các bạn có biết, một ly cà phê hoàn hảo không thể đạt được chỉ sau một lần pha…" },
          { type: "action", text: "Tại quán The Seventh Barista, khách hàng đang trò chuyện rộn ràng bên quầy bar." },
          { type: "action", text: "QUAY CẬN VÀO MENU. 7 NHÂN VẬT CHIBI." },
          { type: "action", text: "Ánh mắt Bảy già bỗng trở nên hoài niệm. Mấy ai biết thời còn trẻ, chú cũng có một đam mê." },
        ],
      },
    },
  ] as ScriptCredit[],
  closing: "Bring me an idea. I’ll write it, plan the shots, and prompt it into a video — from animated characters to realistic, live-action-style ads.",
};

const contactLinks: LinkItem[] = [
  { label: "Email", href: "mailto:leminhbach99@gmail.com", display: "leminhbach99@gmail.com", kind: "email" },
  { label: "Phone", href: "tel:+84389247470", display: "+84 38 924 7470", kind: "phone" },
  { label: "YouTube", href: REGGAE_CHANNEL, display: "Reggae by the Sea", kind: "youtube" },
];

export const contact = {
  title: ["Let’s create", "something."],
  lead: "Have an idea? Let’s turn it into something people want to watch.",
  links: contactLinks,
};
