// src/components/sections/Hero.tsx
"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/Button";
import { ProjectMarquee } from "@/components/sections/ProjectMarquee";
import { mainOffer } from "@/data/services";
import { siteContent } from "@/data/site-content";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen overflow-hidden border-b border-border px-4 pt-28 sm:px-6 sm:pt-32 lg:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(78,234,213,0.10),transparent_22%)]" />
      <div className="noise-layer" aria-hidden="true" />
      <div className="relative mx-auto flex w-full max-w-295 flex-col gap-7 pb-14 sm:gap-8 lg:pb-20">
        <div className="max-w-4xl">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="mb-6 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-cyan sm:mb-8 sm:text-xs sm:tracking-[0.42em]">
            Accueil / {siteContent.hero.label}
          </motion.p>
          <h1 className="text-text-primary">
            {siteContent.hero.titleLines.map((line, index) => (
              <motion.span
                key={line}
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "block uppercase leading-[0.78]",
                  line === "STUDIO"
                    ? "ml-2 mt-2 font-studio text-[7.6vw] font-normal tracking-[0.28em] sm:ml-3 sm:mt-3 sm:text-[5.8vw] sm:tracking-[0.34em] lg:ml-4 lg:mt-4 lg:text-[3rem]"
                    : "font-display text-[21vw] font-bold tracking-[-0.04em] sm:text-[14vw] lg:text-[10rem]",
                )}
              >
                {line}
              </motion.span>
            ))}
          </h1>
        </div>

        <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.28 }} className="grid gap-7">
          <div className="sketch-frame-white relative mx-auto w-full max-w-5xl overflow-visible px-4 py-4 sm:px-8">
            <p className="font-display text-[clamp(1.35rem,6vw,3.05rem)] font-black uppercase leading-none text-cyan">
              {siteContent.hero.statementLines.map((line) => (
                <span key={line} className="block whitespace-nowrap">
                  {line}
                </span>
              ))}
            </p>
          </div>

          <div className="relative min-w-0">
            <ProjectMarquee placement="home" />
          </div>

          <div id="services" className="sketch-frame-gold relative mx-auto w-full max-w-5xl bg-background/78 p-5 sm:p-7">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan sm:tracking-[0.35em]">Services</p>
            <p className="mt-3 max-w-3xl text-xs font-bold uppercase leading-6 tracking-[0.16em] text-text-primary sm:text-base sm:leading-7 sm:tracking-[0.2em]">
              {siteContent.hero.subtitle}
            </p>
            <div className="mt-5 grid gap-5 md:grid-cols-[0.75fr_1.25fr] md:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">{siteContent.hero.price}</p>
                <p className="mt-3 font-display text-5xl font-black leading-none text-text-primary sm:text-6xl">{mainOffer.price}</p>
              </div>
              <ul className="grid gap-2 text-sm leading-6 text-text-secondary sm:grid-cols-2">
                {mainOffer.heroFeatures.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href="#contact">Commander un visuel</Button>
              <Button href="#portfolio" variant="secondary">Mes réalisations</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
