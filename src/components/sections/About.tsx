// src/components/sections/About.tsx
import Image from "next/image";

import { siteContent } from "@/data/site-content";

export function About() {
  return (
    <section id="about" className="border-b border-border bg-background-soft px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1800px]">
        <div className="max-w-5xl pl-3">
          <h2 className="font-display text-5xl font-black uppercase leading-[0.86] tracking-tighter text-text-primary sm:text-7xl lg:text-8xl">
            À PROPOS DE CORVUS
          </h2>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-[0.58fr_1.42fr] md:items-start lg:mt-14">
          <figure className="about-portrait-card relative w-full max-w-sm overflow-hidden border border-cyan bg-background p-2 md:max-w-none">
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
          <div>
            <div className="space-y-6 text-base leading-8 text-text-secondary sm:text-lg sm:leading-9">
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
