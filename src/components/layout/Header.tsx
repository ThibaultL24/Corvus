// src/components/layout/Header.tsx
"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { MobileMenu } from "@/components/layout/MobileMenu";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "À propos", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setHasScrolled(window.scrollY > 16);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={cn("fixed left-0 top-0 z-40 w-full border-b border-border transition duration-300", hasScrolled ? "bg-background/88 backdrop-blur-xl" : "bg-background/45 backdrop-blur-md")}>
        <div className="mx-auto flex h-20 max-w-[1800px] items-center justify-between px-4 sm:h-24 sm:px-6 lg:px-10">
          <Link href="#top" className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan" aria-label="Retour à l'accueil">
            <Logo size="sm" />
          </Link>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Navigation principale">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-xs font-bold uppercase tracking-[0.28em] text-cyan transition hover:text-cyan-bright focus-visible:outline-2 focus-visible:outline-cyan">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button href="#contact" variant="ghost" className="min-h-10 px-4 py-2">Commander</Button>
          </div>
          <button className="border border-border p-3 text-text-primary md:hidden focus-visible:outline-2 focus-visible:outline-cyan" type="button" onClick={() => setIsMenuOpen(true)} aria-label="Ouvrir le menu">
            <Menu aria-hidden="true" />
          </button>
        </div>
      </header>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
