// src/app/page.tsx
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { CreativeFields } from "@/components/sections/CreativeFields";
import { Hero } from "@/components/sections/Hero";
import { PortfolioGallery } from "@/components/sections/PortfolioGallery";
import { Pricing } from "@/components/sections/Pricing";
import { Recommendations } from "@/components/sections/Recommendations";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Recommendations />
      <PortfolioGallery />
      <Pricing />
      <CreativeFields />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
