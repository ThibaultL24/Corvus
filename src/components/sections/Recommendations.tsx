// src/components/sections/Recommendations.tsx
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteContent } from "@/data/site-content";

const recommendations = [
  {
    name: "Camille L.",
    role: "Luxothérapeute & hypnothérapeute",
    date: "28 avril 2026",
    quote:
      "Dylan m'accompagne régulièrement sur différents aspects créatifs liés à mon activité, notamment certains visuels et contenus de communication. J'apprécie particulièrement son sens de l'esthétique, ses idées, ainsi que sa capacité à comprendre rapidement l'univers et le message que l'on souhaite transmettre. C'est une personne impliquée, réactive et agréable dans les échanges. Je le recommande à toute personne recherchant un regard créatif sérieux et inspiré.",
  },
  {
    name: "Thibault L.",
    role: "Développeur web freelance",
    date: "9 mai 2026",
    quote:
      "Dylan a réalisé un excellent travail sur mes visuels de freelance. Il a su comprendre rapidement l'identité que je voulais transmettre : quelque chose de moderne, élégant, professionnel et impactant. Le rendu est soigné, cohérent et visuellement fort, avec une vraie attention portée aux détails, à l'ambiance graphique et à la lisibilité. J'ai particulièrement apprécié sa capacité à transformer une idée assez générale en supports concrets, propres et directement exploitables. Je recommande Dylan sans hésitation pour son sérieux, sa créativité et la qualité de son travail. Merci encore pour ces visuels !",
  },
  {
    name: "Tony S.",
    role: "Écrivain chez Millénium",
    date: "26 avril 2026",
    quote:
      "Franchement, ton travail m'a vraiment marqué. L'animation que tu as créée pour moi est juste incroyable, au-delà de ce que j'imaginais. Mais au-delà du talent, je tiens aussi à dire que tu es une personne en or : sympa, professionnel, et c'est rare aujourd'hui. Comme tu le dis si bien, moi je suis la bête à cornes et toi le Nosferatu. Je recommande à 100 %. Si vous cherchez quelqu'un pour vos visuels, foncez les yeux fermés, vous ne serez pas déçus. Encore merci pour tout.",
  },
  {
    name: "Alain V.",
    role: "Conseiller Relation Client · 25 ans terrain Luxe & Retail",
    date: "23 avril 2026",
    quote:
      "Dylan Lacas a fait quelque chose de rare : il a pris l'initiative de créer spontanément une vidéo mettant en valeur mon roman Les Murmures de Saint-Rocail, en assemblant avec talent plusieurs visuels de présentation. Le résultat est soigné, fluide et parfaitement en accord avec l'univers du livre. Aucune demande de ma part, juste un regard créatif, une maîtrise des outils, et l'envie sincère de valoriser le travail des autres. Dylan fait preuve d'une vraie sensibilité éditoriale et d'une capacité à produire du contenu engageant avec agilité. Des qualités précieuses dans tout environnement créatif ou communicant. Je le recommande sans réserve.",
  },
] as const;

export function Recommendations() {
  return (
    <section className="border-b border-border bg-background-soft px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1800px]">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <SectionHeader
            title={siteContent.recommendations.title}
            className="text-[2rem] min-[390px]:text-4xl sm:text-6xl lg:text-7xl"
          />
          <p className="border-l border-cyan pl-4 text-xs font-bold uppercase leading-6 tracking-[0.14em] text-text-secondary sm:pl-5 sm:text-sm sm:leading-7 sm:tracking-[0.18em]">
            Retours publics, preuve de sérieux et compétences graphiques.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {recommendations.map((recommendation) => (
            <article
              key={recommendation.name}
              className="flex min-h-full flex-col border border-border bg-background p-5 transition duration-300 hover:border-cyan sm:p-6"
            >
              <div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan sm:tracking-[0.24em]">{recommendation.name}</p>
                <p className="mt-2 text-xs font-bold uppercase leading-5 tracking-[0.12em] text-gold sm:tracking-[0.18em]">
                  {recommendation.role}
                </p>
              </div>
              <blockquote className="mt-5 grow text-sm leading-7 text-text-primary sm:mt-6 sm:text-base sm:leading-8">
                <span className="text-3xl font-black leading-none text-cyan" aria-hidden="true">«</span>
                {" "}
                {recommendation.quote}
                {" "}
                <span className="text-3xl font-black leading-none text-cyan" aria-hidden="true">»</span>
              </blockquote>
              <p className="mt-6 border-t border-border pt-4 text-xs font-bold uppercase tracking-[0.22em] text-text-secondary">
                {recommendation.date}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
