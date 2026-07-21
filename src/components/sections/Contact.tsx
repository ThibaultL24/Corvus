// src/components/sections/Contact.tsx
import Link from "next/link";

import { budgetRanges, projectTypes, siteContent } from "@/data/site-content";

export function Contact() {
  return (
    <section id="contact" className="bg-background px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-[1800px] gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan sm:tracking-[0.38em]">Contact</p>
          <h2 className="mt-5 font-display text-4xl font-black uppercase leading-[0.9] tracking-tighter text-text-primary sm:text-7xl lg:text-8xl">{siteContent.contact.title}</h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-text-secondary sm:mt-8 sm:text-lg sm:leading-9">{siteContent.contact.text}</p>
          <div className="mt-8 space-y-4 wrap-break-word text-xs uppercase tracking-[0.14em] text-text-secondary sm:mt-10 sm:text-sm sm:tracking-[0.22em]">
            <Link href={siteContent.contact.instagramUrl} className="block text-cyan transition hover:text-cyan-bright">{siteContent.contact.instagram}</Link>
            <Link href={`mailto:${siteContent.contact.email}`} className="block transition hover:text-cyan">{siteContent.contact.email}</Link>
            <p>{siteContent.contact.responseTime}</p>
          </div>
        </div>
        <form className="grid gap-5 border border-border bg-background-soft p-4 sm:p-8" action="https://formspree.io/f/placeholder" method="POST">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm text-text-secondary">Nom<input name="name" required className="form-field" autoComplete="name" /></label>
            <label className="grid gap-2 text-sm text-text-secondary">Email<input name="email" type="email" required className="form-field" autoComplete="email" /></label>
          </div>
          <label className="grid gap-2 text-sm text-text-secondary">Téléphone optionnel<input name="phone" type="tel" className="form-field" autoComplete="tel" /></label>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm text-text-secondary">Type de projet<select name="projectType" required className="form-field">{projectTypes.map((type) => <option key={type}>{type}</option>)}</select></label>
            <label className="grid gap-2 text-sm text-text-secondary">Budget<select name="budget" required className="form-field">{budgetRanges.map((range) => <option key={range}>{range}</option>)}</select></label>
          </div>
          <label className="grid gap-2 text-sm text-text-secondary">Délai souhaité<input name="deadline" className="form-field" placeholder="Ex : cette semaine, fin du mois..." /></label>
          <label className="grid gap-2 text-sm text-text-secondary">Message<textarea name="message" required rows={6} className="form-field resize-y" /></label>
          <label className="flex gap-3 text-sm leading-6 text-text-secondary"><input type="checkbox" required name="consent" className="mt-1 h-4 w-4 accent-cyan" /> J’accepte d’être recontacté au sujet de ma demande.</label>
          <button type="submit" className="min-h-12 border border-cyan bg-cyan px-5 py-3 text-xs font-bold uppercase tracking-[0.22em] text-black transition hover:bg-cyan-bright focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan sm:tracking-[0.28em]">
            Envoyer ma demande
          </button>
        </form>
      </div>
    </section>
  );
}
