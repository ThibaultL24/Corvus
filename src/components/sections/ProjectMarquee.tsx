// src/components/sections/ProjectMarquee.tsx
"use client";

import Image from "next/image";

import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectMarqueeProps {
  placement?: "home" | "section";
}

export function ProjectMarquee({ placement = "section" }: ProjectMarqueeProps) {
  const marqueeProjects = [...projects, ...projects];
  const isHomePlacement = placement === "home";

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-background",
        isHomePlacement ? "border-y border-border py-3" : "border-b border-border py-8",
      )}
      aria-label="Bandeau de réalisations"
    >
      <div
        className={cn(
          "marquee-track flex w-max hover:[animation-play-state:paused]",
          isHomePlacement ? "gap-3 px-0" : "gap-4 px-4 sm:px-6",
        )}
      >
        {marqueeProjects.map((project, index) => (
          <div
            key={`${project.id}-${index}`}
            className={cn(
              "group relative shrink-0 overflow-hidden border border-border bg-surface",
              isHomePlacement ? "h-20 w-36 sm:h-24 sm:w-48 lg:h-28 lg:w-56" : "h-40 w-72 sm:h-52 sm:w-96",
            )}
          >
            <Image src={project.image} alt={project.alt} fill sizes={isHomePlacement ? "224px" : "384px"} className="object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/25 transition group-hover:bg-black/0" />
            <p className={cn("absolute left-3 font-bold uppercase text-text-primary", isHomePlacement ? "bottom-2 text-[0.55rem] tracking-[0.18em]" : "bottom-3 text-xs tracking-[0.25em]")}>
              {project.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
