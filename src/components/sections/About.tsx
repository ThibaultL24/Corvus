// src/components/sections/About.tsx
import Image from "next/image";

import { siteContent } from "@/data/site-content";

export function About() {
  return (
    <section id="about" className="border-b border-border bg-background-soft px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1800px]">
        <div className="max-w-5xl pl-2 sm:pl-3">
          <h2 className="whitespace-nowrap font-display text-4xl font-black uppercase leading-[0.86] tracking-tighter text-text-primary sm:text-6xl lg:text-7xl">
            {siteContent.about.title}
          </h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-[0.42fr_1fr] md:items-start lg:mt-14 lg:gap-8">
          <figure className="about-portrait-card relative mx-auto w-full max-w-sm overflow-hidden border border-cyan bg-background p-2 md:mx-0 md:max-w-none">
            <div className="relative aspect-square overflow-hidden bg-black">
              <Image
                src="/about/dylan-lacas.png"
                alt="Portrait de Dylan Lacas, créateur de Corvus Studio"
                fill
                sizes="(min-width: 768px) 24vw, 100vw"
                className="object-cover grayscale"
              />
            </div>
            <figcaption className="border-t border-border px-2 py-3 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-cyan">
              Dylan Lacas / Corvus Studio
            </figcaption>
          </figure>
          <div className="text-center md:max-w-3xl md:text-left">
            <p className="mb-5 text-[clamp(0.98rem,4.15vw,1.25rem)] font-black leading-tight tracking-tight text-text-primary sm:text-3xl xl:text-4xl">
              <span className="block whitespace-nowrap">Derrière la constellation Corvus</span>
              <span className="block whitespace-nowrap">se cache un vaisseau nommé Dylan Lacas.</span>
            </p>
            <div className="space-y-3 text-center text-base leading-7 text-text-primary sm:text-lg sm:leading-8 md:text-justify">
              {siteContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {siteContent.about.values.map((value) => (
                <p key={value} className="about-value-card border px-4 py-5 text-xs font-bold uppercase tracking-[0.22em] text-text-primary sm:tracking-[0.25em]">{value}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
