/** Shared easing curve: quick start, long soft landing. */
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Tailwind classes for each prompt parameter group. Kept as full literal strings so Tailwind can find them. */
export const GROUP_STYLES = {
  character: { chip: "bg-sun text-abyss", mark: "bg-sun/25 decoration-sun", line: "decoration-sun/40", dot: "bg-sun" },
  action: { chip: "bg-palm text-abyss", mark: "bg-palm/25 decoration-palm", line: "decoration-palm/40", dot: "bg-palm" },
  camera: { chip: "bg-sky text-abyss", mark: "bg-sky/25 decoration-sky", line: "decoration-sky/40", dot: "bg-sky" },
  world: { chip: "bg-rasta text-abyss", mark: "bg-rasta/25 decoration-rasta", line: "decoration-rasta/40", dot: "bg-rasta" },
  base: { chip: "bg-mist text-abyss", mark: "bg-mist/25 decoration-mist", line: "decoration-mist/40", dot: "bg-mist" },
} as const;
