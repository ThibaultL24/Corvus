// src/types/project.ts
export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  image: string;
  alt: string;
  year: string;
  format: "portrait" | "landscape" | "square";
  featured: boolean;
  description: string;
}

export type ProjectCategory =
  | "Cinéma"
  | "Jeux vidéo"
  | "MMA & sport"
  | "Beauté"
  | "Musique"
  | "Automobile"
  | "Food"
  | "Réseaux sociaux";
