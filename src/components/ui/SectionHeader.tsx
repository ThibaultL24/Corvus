// src/components/ui/SectionHeader.tsx
import { RevealText } from "@/components/ui/RevealText";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({ eyebrow, title, subtitle, align = "left", className }: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-5xl"}>
      {eyebrow ? (
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.38em] text-cyan">{eyebrow}</p>
      ) : null}
      <RevealText
        text={title}
        className={cn(
          "font-display text-5xl font-black uppercase leading-[0.92] tracking-tighter text-text-primary sm:text-7xl lg:text-8xl",
          className,
        )}
      />
      {subtitle ? (
        <p className="mt-6 max-w-2xl text-base leading-8 text-text-secondary sm:text-lg">{subtitle}</p>
      ) : null}
    </div>
  );
}
