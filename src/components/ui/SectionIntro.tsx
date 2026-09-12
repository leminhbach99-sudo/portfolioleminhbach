import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  title: ReactNode;
  lead?: ReactNode;
  id?: string;
  className?: string;
};

/** Large editorial section heading with an optional lead paragraph aligned to its baseline. */
export function SectionIntro({ title, lead, id, className }: Props) {
  return (
    <div className={cn("grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-10", className)}>
      <h2 id={id} className="display text-[clamp(2.75rem,6.8vw,6.5rem)] font-extrabold uppercase lg:col-span-7">
        {title}
      </h2>
      {lead ? <p className="max-w-xl text-lg leading-relaxed text-mist lg:col-span-5 lg:pb-2">{lead}</p> : null}
    </div>
  );
}
