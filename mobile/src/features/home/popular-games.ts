import { CATALOG } from "@/features/library/catalog";

export type PopularGame = {
  id: string;
  title: string;
  genre: string;
  rating: number;
  tone: string;
};

type PopularSeed = {
  id: string;
  genre: string;
  rating: number;
};

const SEEDS: PopularSeed[] = [
  { id: "silksong", genre: "Metroidvania", rating: 4.9 },
  { id: "hades-2", genre: "Roguelike", rating: 4.8 },
  { id: "expedition-33", genre: "RPG por turnos", rating: 4.8 },
  { id: "monster-hunter-wilds", genre: "Acción", rating: 4.6 },
  { id: "balatro", genre: "Roguelike de cartas", rating: 4.7 },
  { id: "split-fiction", genre: "Cooperativo", rating: 4.7 },
  { id: "kingdom-come-2", genre: "RPG", rating: 4.6 },
  { id: "nightreign", genre: "Acción", rating: 4.5 },
];

export const POPULAR_GAMES: PopularGame[] = SEEDS.map(
  ({ id, genre, rating }) => ({
    id,
    title: CATALOG[id].title,
    genre,
    rating,
    tone: CATALOG[id].tone,
  })
);
