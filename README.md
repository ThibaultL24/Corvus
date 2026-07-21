# Corvus Studio

Portfolio one-page pour **Corvus Studio**, un studio indépendant de création de visuels publicitaires premium.

L’univers du site mêle direction artistique sombre, esthétique cosmique, typographie monumentale, touches cyan/violet et galerie de réalisations animée.

## Aperçu

Le site présente :

- une page d’accueil immersive avec logo, slogan et offre principale ;
- un bandeau défilant de réalisations ;
- une galerie filtrable avec modale projet ;
- une section tarifs claire ;
- une liste des domaines de création ;
- une présentation du studio avec portrait ;
- des recommandations clients ;
- un formulaire de contact prêt à connecter à Formspree, Resend ou une API Next.js.

## Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- next/image

## Lancer le projet

```bash
npm install
npm run dev
```

Le site sera disponible sur `http://localhost:3000`.

## Scripts utiles

```bash
npm run dev
npm run typecheck
npm run lint
npm run build
npm run start
```

## Structure principale

```text
src/
  app/
  components/
    layout/
    sections/
    ui/
  data/
  lib/
  types/
public/
  about/
  projects/
  recommendations/
```

## Contenu modifiable

Les contenus principaux sont centralisés pour rester simples à modifier :

- `src/data/site-content.ts` : textes du site, contact, paragraphes de présentation ;
- `src/data/projects.ts` : réalisations affichées dans la galerie ;
- `src/data/services.ts` : offre, tarifs et domaines de création.

## Déploiement

Le projet est prêt pour un déploiement sur Vercel.

```bash
npm run build
```

Si le build passe, le site peut être publié directement depuis le repository GitHub.
