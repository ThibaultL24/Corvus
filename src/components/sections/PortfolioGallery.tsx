// src/components/sections/PortfolioGallery.tsx
"use client";

import { useState } from "react";

import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projects } from "@/data/projects";
import { siteContent } from "@/data/site-content";
import type { Project } from "@/types/project";

export function PortfolioGallery() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  function getSelectedIndex() {
    if (!selectedProject) return -1;
    return projects.findIndex((project) => project.id === selectedProject.id);
  }

  function showNextProject() {
    const index = getSelectedIndex();
    setSelectedProject(projects[(index + 1 + projects.length) % projects.length]);
  }

  function showPreviousProject() {
    const index = getSelectedIndex();
    setSelectedProject(projects[(index - 1 + projects.length) % projects.length]);
  }

  return (
    <section id="portfolio" className="border-b border-border bg-background px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1800px]">
        <SectionHeader title={siteContent.gallery.title} subtitle={siteContent.gallery.subtitle} />
        <div className="mt-8 grid auto-rows-56 grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:auto-rows-60 lg:grid-cols-4 xl:auto-rows-70">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} variant={index % 5 === 0 ? "wide" : "standard"} />
          ))}
        </div>
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} onNext={showNextProject} onPrevious={showPreviousProject} />
    </section>
  );
}
