// src/components/layout/Footer.tsx
import Link from "next/link";

import { siteContent } from "@/data/site-content";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1800px]">
        <div className="grid border border-border md:grid-cols-[1.1fr_0.9fr_0.9fr]">
          <div className="border-b border-border p-6 md:border-b-0 md:border-r">
            <Logo size="sm" />
            <p className="mt-5 max-w-sm text-sm leading-7 text-text-secondary">{siteContent.footer.phrase}</p>
          </div>
          <div className="border-b border-border p-6 md:border-b-0 md:border-r">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan">Contact</p>
            <div className="mt-6 space-y-4 text-xs uppercase tracking-[0.14em] text-text-secondary sm:text-sm sm:tracking-[0.18em]">
              <Link href={siteContent.contact.instagramUrl} className="block transition hover:text-cyan">Instagram</Link>
              <Link href={`mailto:${siteContent.contact.email}`} className="block transition hover:text-cyan">Email</Link>
            </div>
          </div>
          <div className="p-6">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan">Infos</p>
            <div className="mt-6 space-y-4 text-xs uppercase tracking-[0.14em] text-text-secondary sm:text-sm sm:tracking-[0.18em]">
              <Link href="#" className="block transition hover:text-cyan">Mentions légales</Link>
              <Link href="#" className="block transition hover:text-cyan">Politique de confidentialité</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 border-x border-b border-border px-6 py-4 text-[0.65rem] uppercase tracking-[0.16em] text-text-secondary sm:flex-row sm:text-[0.7rem] sm:tracking-[0.22em]">
          <p>© {year} CORVUS STUDIO</p>
          <p>Création de visuels publicitaires</p>
        </div>
      </div>
    </footer>
  );
}
