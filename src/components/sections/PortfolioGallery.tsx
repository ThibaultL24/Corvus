// src/components/sections/PortfolioGallery.tsx
"use client";

import { useMemo, useState } from "react";

import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projectCategories, projects } from "@/data/projects";
import { siteContent } from "@/data/site-content";
import type { Project } from "@/types/project";
import { cn } from "@/lib/utils";

export function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState<(typeof projectCategories)[number]>("Tous");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "Tous") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  function getSelectedIndex() {
    if (!selectedProject) return -1;
    return filteredProjects.findIndex((project) => project.id === selectedProject.id);
  }

  function showNextProject() {
    const index = getSelectedIndex();
    setSelectedProject(filteredProjects[(index + 1 + filteredProjects.length) % filteredProjects.length]);
  }

  function showPreviousProject() {
    const index = getSelectedIndex();
    setSelectedProject(filteredProjects[(index - 1 + filteredProjects.length) % filteredProjects.length]);
  }

  return (
    <section id="portfolio" className="border-b border-border bg-background px-4 py-24 sm:px-6 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1800px]">
        <SectionHeader title={siteContent.gallery.title} subtitle={siteContent.gallery.subtitle} />
        <div className="mt-8 flex gap-3 overflow-x-auto pb-2 sm:mt-10 sm:flex-wrap sm:overflow-visible sm:pb-0" aria-label="Filtres des réalisations">
          {projectCategories.map((category) => (
            <button key={category} type="button" onClick={() => setActiveCategory(category)} className={cn("shrink-0 border px-4 py-3 text-xs font-bold uppercase tracking-[0.22em] transition focus-visible:outline-2 focus-visible:outline-cyan", activeCategory === category ? "border-cyan text-cyan" : "border-border text-text-secondary hover:border-cyan hover:text-cyan")}>
              {category}
            </button>
          ))}
        </div>
        <div className="mt-8 grid auto-rows-60 grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-60 xl:auto-rows-70">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} variant={index % 5 === 0 ? "wide" : "standard"} />
          ))}
        </div>
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} onNext={showNextProject} onPrevious={showPreviousProject} />
    </section>
  );
}
