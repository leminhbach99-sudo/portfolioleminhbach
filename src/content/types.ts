/**
 * Content types. Every piece of text, link, and media slot on the site
 * lives in src/content/site.ts, so the portfolio can be updated without
 * touching components.
 */

export type Media = {
  /** Public path to the real file, e.g. "/projects/reggae-by-the-sea/cover.jpg". Leave undefined to show a placeholder. */
  src?: string;
  /** Where the file is expected to live. Shown inside the placeholder. */
  path: string;
  /** Short description shown in the placeholder. */
  label: string;
  alt: string;
  /** "contain" keeps the whole image visible (good for characters on transparent backgrounds). Defaults to "cover". */
  fit?: "cover" | "contain";
  /** Backdrop color behind transparent images or letterboxing, e.g. "#FDF8F5". */
  background?: string;
  /** Portrait images take two rows in galleries. */
  orientation?: "landscape" | "portrait";
};

export type VideoMedia = {
  title: string;
  label: string;
  /** Hint shown in the placeholder. */
  path: string;
  /** YouTube video ID (the part after watch?v=). */
  youtubeId?: string;
  /** Public path to an MP4 file. */
  mp4?: string;
  /** Poster image for MP4 or YouTube. */
  poster?: string;
};

export type LinkItem = {
  label: string;
  /** Leave undefined to show a labeled placeholder. */
  href?: string;
  /** Text shown instead of the raw URL. */
  display?: string;
  kind: "youtube" | "drive" | "external" | "email" | "phone";
};

export type Character = {
  name: string;
  /** Public path to a transparent character image. */
  image?: string;
  menu: string;
  trait: string;
  palette: string[];
};

export type CaseStage = {
  label: string;
  note: string;
  media: Media;
  /** Optional set of images shown as a grid instead of the single media. */
  gallery?: Media[];
};

export type Comic = {
  /** Original Vietnamese title. */
  title: string;
  titleEn: string;
  summary: string;
  page: Media;
  /** The four panels in reading order, for panel-by-panel reading on phones. */
  panels: Media[];
};

export type StoryPage = Media;

export type ShortStory = {
  title: string;
  summary: string;
  note: string;
  pages: StoryPage[];
};

export type ScriptCredit = {
  kind: string;
  title: string;
  titleEn?: string;
  meta: string;
  body: string;
  /** Optional AI test shot rendered from the excerpt below it. */
  clip?: { mp4: string; poster: string; title: string; note: string };
  /** Formatted screenplay excerpt, rendered in a monospace block. */
  excerpt?: { heading: string; lines: { type: "action" | "character" | "dialogue" | "paren" | "slug"; text: string }[] };
};

export type Fanpage = {
  intro: string;
  posts: Media[];
  comicsTitle: string;
  comicsIntro: string;
  comics: Comic[];
};

export type ResultBlock = {
  heading: string;
  source: string;
  items: { value: string; label: string }[];
};

export type Project = {
  slug: string;
  /** Set to false to hide a project without deleting it. */
  published: boolean;
  number: string;
  title: string;
  category: string;
  year: string;
  accent: "reggae" | "coffee" | "neutral";
  framing?: string;
  summary: string;
  description: string[];
  role: string[];
  tools: string[];
  workflow: string[];
  highlights?: string[];
  cover: Media;
  stagesTitle?: string;
  stages?: CaseStage[];
  characters?: Character[];
  results?: ResultBlock;
  credits?: string[];
  links?: LinkItem[];
  /** Video shown inside the case study. */
  video?: VideoMedia;
  /** Video shown in the large "Watch the project" block on the page. Falls back to `video`. */
  featuredVideo?: VideoMedia;
  fanpage?: Fanpage;
  /** Region-restriction note shown next to the videos. */
  videoNote?: string;
  story?: ShortStory;
};

export type ParamGroup = "character" | "action" | "camera" | "world";

export type PromptParam = {
  key: string;
  label: string;
  group: ParamGroup;
};

export type ReviewNote = { improved: boolean; text: string };

export type ExperimentVersion = {
  title: string;
  body: string;
  hook?: string;
  media?: Media;
  blocks?: ("base" | ParamGroup)[];
};

export type ExperimentCard = {
  key: "hook" | "style" | "prompt";
  title: string;
  question: string;
  versions: [ExperimentVersion, ExperimentVersion, ExperimentVersion];
};

export type Job = {
  period: string;
  role: string;
  company: string;
  bullets?: string[];
  focus?: string[];
};
