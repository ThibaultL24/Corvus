// src/components/sections/Pricing.tsx
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { mainOffer, pricingOptions } from "@/data/services";
import { siteContent } from "@/data/site-content";

export function Pricing() {
  return (
    <section className="border-b border-border bg-background-soft px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-[1800px] gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeader title={siteContent.pricing.title} />
        <div className="grid gap-5">
          <article className="neon-price-card bg-background p-5 sm:p-8">
            <div className="flex flex-col justify-between gap-6 sm:flex-row">
              <div>
                <h3 className="font-display text-3xl font-black uppercase text-text-primary sm:text-4xl">Création d’un visuel</h3>
                <p className="mt-3 text-text-secondary">Direction complète, création, modifications et fichiers prêts à publier.</p>
              </div>
              <p className="font-display text-6xl font-black leading-none text-cyan sm:text-7xl">{mainOffer.price}</p>
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {mainOffer.features.slice(0, 6).map((feature) => <li key={feature} className="border-t border-border pt-3 text-sm text-text-secondary">{feature}</li>)}
            </ul>
          </article>
          <div className="grid gap-5 md:grid-cols-2">
            {pricingOptions.map((option) => (
              <article key={option.title} className="border border-border bg-background p-5 sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">{option.price}</p>
                <h3 className="mt-3 font-display text-3xl font-black uppercase text-text-primary">{option.title}</h3>
                <ul className="mt-6 space-y-3 text-sm leading-7 text-text-secondary">
                  {option.features.map((feature) => <li key={feature}>{feature}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <p className="border-l border-gold pl-5 text-sm leading-7 text-text-secondary">{siteContent.pricing.note}</p>
          <Button href="#contact" variant="secondary" className="w-fit">Parler de mon projet</Button>
        </div>
      </div>
    </section>
  );
}
