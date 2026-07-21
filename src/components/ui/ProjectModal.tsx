// src/components/ui/ProjectModal.tsx
"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

import type { Project } from "@/types/project";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export function ProjectModal({ project, onClose, onNext, onPrevious }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNext();
      if (event.key === "ArrowLeft") onPrevious();
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, onNext, onPrevious, project]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/88 p-3 backdrop-blur-xl sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onMouseDown={onClose}
    >
      <div
        className="relative grid max-h-[92vh] w-full max-w-6xl overflow-y-auto border border-border bg-background-soft md:max-h-[90vh] md:grid-cols-[1.25fr_0.75fr]"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="relative min-h-[58vh] border-b border-border bg-black sm:min-h-[68vh] md:min-h-[70vh] md:border-b-0 md:border-r">
          <Image src={project.image} alt={project.alt} fill sizes="90vw" className="object-contain p-2 sm:p-4" priority />
        </div>
        <div className="flex flex-col justify-between p-5 sm:p-8">
          <div>
            <h3 id="project-modal-title" className="font-display text-4xl font-black uppercase leading-none text-text-primary sm:text-5xl">
              {project.title}
            </h3>
            <p className="mt-4 text-xs uppercase tracking-[0.24em] text-gold sm:mt-5 sm:text-sm sm:tracking-[0.3em]">{project.year}</p>
          </div>
          <div className="mt-10 flex items-center justify-between gap-3">
            <button className="border border-border p-3 text-text-primary transition hover:border-cyan hover:text-cyan focus-visible:outline-2 focus-visible:outline-cyan" type="button" onClick={onPrevious} aria-label="Projet précédent">
              <ChevronLeft aria-hidden="true" />
            </button>
            <button className="border border-border px-5 py-3 text-xs font-bold uppercase tracking-[0.25em] text-text-primary transition hover:border-cyan hover:text-cyan focus-visible:outline-2 focus-visible:outline-cyan" type="button" onClick={onClose}>
              Fermer
            </button>
            <button className="border border-border p-3 text-text-primary transition hover:border-cyan hover:text-cyan focus-visible:outline-2 focus-visible:outline-cyan" type="button" onClick={onNext} aria-label="Projet suivant">
              <ChevronRight aria-hidden="true" />
            </button>
          </div>
        </div>
        <button className="absolute right-4 top-4 border border-border bg-black/70 p-3 text-text-primary transition hover:border-cyan hover:text-cyan focus-visible:outline-2 focus-visible:outline-cyan" type="button" onClick={onClose} aria-label="Fermer la modale">
          <X aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
