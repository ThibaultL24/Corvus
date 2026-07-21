// src/components/ui/Button.tsx
import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface ButtonProps extends ComponentPropsWithoutRef<typeof Link> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}

const variants = {
  primary:
    "border-cyan bg-cyan text-black shadow-[0_0_28px_rgba(78,234,213,0.22)] hover:bg-cyan-bright",
  secondary: "border-gold text-text-primary hover:border-cyan hover:text-cyan",
  ghost: "border-border text-text-primary hover:border-cyan hover:text-cyan",
};

export function Button({ children, className, variant = "primary", ...props }: ButtonProps) {
  return (
    <Link
      className={cn(
        "group inline-flex min-h-12 items-center justify-center border px-5 py-3 text-xs font-bold uppercase tracking-[0.28em] transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
