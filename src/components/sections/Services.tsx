// src/components/sections/Services.tsx
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { mainOffer } from "@/data/services";
import { siteContent } from "@/data/site-content";

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden border-b border-border bg-background-soft px-4 py-24 sm:px-6 lg:px-10 lg:py-32">
      <div className="absolute left-0 top-16 h-px w-2/3 rotate-[-2deg] bg-gold-soft" />
      <div className="mx-auto grid max-w-[1800px] gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <SectionHeader eyebrow="Services" title={siteContent.services.title} subtitle={siteContent.services.text} />
        <div className="relative border border-border bg-background p-6 sm:p-8">
          <span className="absolute -right-px -top-px h-16 w-16 border-r-4 border-t-4 border-gold" aria-hidden="true" />
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-cyan">{mainOffer.title}</p>
          <p className="mt-6 font-display text-8xl font-black leading-none tracking-[-0.08em] text-text-primary sm:text-9xl">{mainOffer.price}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {mainOffer.features.map((feature) => (
              <li key={feature} className="border-t border-border pt-3 text-sm text-text-secondary">
                {feature}
              </li>
            ))}
          </ul>
          <Button href="#contact" className="mt-9">Commander un visuel</Button>
        </div>
      </div>
    </section>
  );
}
