// src/components/ui/ProjectCard.tsx
import Image from "next/image";

import type { Project } from "@/types/project";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  variant?: "standard" | "wide";
}

export function ProjectCard({ project, onSelect, variant = "standard" }: ProjectCardProps) {
  return (
    <button
      className={cn(
        "group relative h-full w-full overflow-hidden border border-border bg-surface text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan",
        variant === "wide" && "lg:col-span-2",
      )}
      type="button"
      onClick={() => onSelect(project)}
      aria-label={`Voir le projet ${project.title}`}
    >
      <Image
        src={project.image}
        alt={project.alt}
        fill
        sizes={variant === "wide" ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"}
        className="object-cover transition duration-700 group-hover:scale-[1.03]"
      />
      <span className="absolute inset-0 bg-linear-to-t from-black via-black/25 to-transparent opacity-75 transition group-hover:opacity-88" />
      <span className="absolute bottom-0 left-0 right-0 border-t border-border bg-black/72 p-3 backdrop-blur-sm sm:p-4">
        <span className="block font-display text-xl font-black uppercase leading-none text-text-primary sm:text-3xl">
          {project.title}
        </span>
        <span className="mt-2 flex items-center justify-between gap-4 text-[0.62rem] uppercase tracking-[0.16em] text-text-secondary sm:mt-3 sm:tracking-[0.22em]">
          <span>{project.year}</span>
          <span className="text-cyan opacity-0 transition group-hover:opacity-100">Voir le projet</span>
        </span>
      </span>
    </button>
  );
}
