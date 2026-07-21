// src/components/sections/Recommendations.tsx
import Image from "next/image";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteContent } from "@/data/site-content";

const recommendations = [
  {
    title: "Certification copywriting",
    image: "/recommendations/certification-copywriting.png",
    alt: "Story Instagram montrant une certification copywriting LearningShelter au nom de Dylan Lacas",
  },
  {
    title: "Tony S",
    image: "/recommendations/reco-tony-s.png",
    alt: "Recommandation Instagram de Tony S pour le travail visuel de Dylan",
  },
  {
    title: "Alain V",
    image: "/recommendations/reco-alain-v.png",
    alt: "Recommandation d'Alain V sur des visuels et du copywriting réalisés par Dylan",
  },
  {
    title: "Thibault L",
    image: "/recommendations/reco-thibault-l.png",
    alt: "Recommandation de Thibault L pour une bannière et une grille tarifaire réalisées par Dylan",
  },
  {
    title: "Camille L",
    image: "/recommendations/reco-camille-l.png",
    alt: "Recommandation LinkedIn de Camille L sur l'accompagnement créatif de Dylan",
  },
] as const;

export function Recommendations() {
  return (
    <section className="border-b border-border bg-background-soft px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1800px]">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <SectionHeader
            title={siteContent.recommendations.title}
            subtitle={siteContent.recommendations.subtitle}
            className="text-5xl sm:text-6xl lg:text-7xl"
          />
          <p className="border-l border-cyan pl-4 text-xs font-bold uppercase leading-6 tracking-[0.14em] text-text-secondary sm:pl-5 sm:text-sm sm:leading-7 sm:tracking-[0.18em]">
            Retours publics, preuve de sérieux et compétence rédactionnelle pour accompagner les visuels.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {recommendations.map((recommendation) => (
            <article
              key={recommendation.title}
              className="group border border-border bg-background p-3 transition duration-300 hover:border-cyan"
            >
              <div className="relative h-[72vh] min-h-96 overflow-hidden bg-black sm:h-150 lg:h-140 xl:h-125">
                <Image
                  src={recommendation.image}
                  alt={recommendation.alt}
                  fill
                  sizes="(min-width: 1280px) 20vw, (min-width: 640px) 50vw, 100vw"
                  className="object-contain transition duration-500 group-hover:scale-[1.015]"
                />
              </div>
              <p className="mt-4 border-t border-border pt-4 text-xs font-bold uppercase tracking-[0.25em] text-cyan">
                {recommendation.title}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
