// src/components/sections/CreativeFields.tsx
import { creativeFields } from "@/data/services";
import { siteContent } from "@/data/site-content";

export function CreativeFields() {
  return (
    <section className="border-b border-border bg-background px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1800px]">
        <p className="text-xs font-bold uppercase tracking-[0.38em] text-cyan">Domaines</p>
        <h2 className="mt-5 max-w-5xl font-display text-4xl font-black uppercase leading-[0.9] tracking-tighter text-text-primary sm:text-7xl lg:text-8xl">
          {siteContent.fields.title}
        </h2>
        <ul className="mt-14">
          {creativeFields.map((field, index) => (
            <li key={field} className="group border-t border-border last:border-b">
              <div className="flex items-center gap-4 py-4 transition duration-300 group-hover:translate-x-2 sm:py-5">
                <span className="w-10 text-[0.65rem] font-bold uppercase tracking-[0.25em] text-gold opacity-0 transition group-hover:opacity-100">{String(index + 1).padStart(2, "0")}</span>
                <span className="h-px w-0 bg-cyan transition-all duration-300 group-hover:w-8" aria-hidden="true" />
                <span className="font-display text-xl font-black uppercase leading-none text-text-secondary transition group-hover:text-cyan sm:text-4xl lg:text-5xl">{field}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
