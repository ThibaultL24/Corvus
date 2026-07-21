// src/components/layout/MobileMenu.tsx
"use client";

import { X } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { label: "À propos", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background/96 px-5 py-5 backdrop-blur-xl md:hidden" role="dialog" aria-modal="true" aria-label="Menu mobile">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <span className="text-xs font-black uppercase tracking-[0.35em] text-text-primary">CORVUS</span>
        <button className="border border-border p-3 text-text-primary focus-visible:outline-2 focus-visible:outline-cyan" type="button" onClick={onClose} aria-label="Fermer le menu">
          <X aria-hidden="true" />
        </button>
      </div>
      <nav className="mt-14 flex flex-col gap-8" aria-label="Navigation mobile">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} onClick={onClose} className="font-display text-5xl font-black uppercase leading-none text-cyan transition hover:text-cyan-bright focus-visible:outline-2 focus-visible:outline-cyan">
            {item.label}
          </Link>
        ))}
      </nav>
      <Button href="#contact" className="mt-12 w-full" onClick={onClose}>Commander</Button>
    </div>
  );
}
