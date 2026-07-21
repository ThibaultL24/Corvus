// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Michroma, Teko } from "next/font/google";
import type { ReactNode } from "react";

import { Header } from "@/components/layout/Header";
import { CyanStarfield } from "@/components/ui/CyanStarfield";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://corvus-studio.fr";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const teko = Teko({
  subsets: ["latin"],
  variable: "--font-teko",
  weight: ["400", "500", "600", "700"],
});

const michroma = Michroma({
  subsets: ["latin"],
  variable: "--font-michroma",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Corvus Studio — Création de visuels publicitaires",
  description:
    "Corvus Studio crée des affiches, publicités et visuels premium pour les marques, artistes, événements, films, jeux vidéo et réseaux sociaux.",
  openGraph: {
    title: "Corvus Studio — Création de visuels publicitaires",
    description:
      "Affiches, publicités et visuels premium pour marques, artistes, événements, films, jeux vidéo et réseaux sociaux.",
    url: siteUrl,
    siteName: "Corvus Studio",
    images: [{ url: "/og-corvus.jpg", width: 1200, height: 630, alt: "Corvus Studio" }],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corvus Studio — Création de visuels publicitaires",
    description: "Visuels premium, cinématographiques et publicitaires.",
    images: ["/og-corvus.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${teko.variable} ${michroma.variable}`} suppressHydrationWarning>
        <CyanStarfield />
        <Header />
        {children}
      </body>
    </html>
  );
}
