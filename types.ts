export interface CastMember {
  name: string;
  role: string;
  photo: string;
}

export interface Episode {
  id: string;
  title: string;
  description: string;
  duration: string;
  thumbnail?: string; // Image spécifique de l'épisode
  video_url: string;  // Lien spécifique de l'épisode
}

export interface Season {
  seasonNumber: number;
  title?: string; // Ex: "Livre 1 : L'eau" ou juste "Saison 1"
  episodes: Episode[];
}

export interface Movie {
  id: string;
  title: string;
  description: string;
  tagline?: string;
  category: string;
  genre: string[];
  thumbnail: string;
  backdrop: string;
  video_url?: string;
  trailer_url?: string;
  year: number;
  duration: string;
  rating: string;
  maturityRating: string;
  featured: boolean;
  director?: string;
  cast?: CastMember[];
  seasons?: Season[]; // Nouveau champ optionnel pour les séries
}