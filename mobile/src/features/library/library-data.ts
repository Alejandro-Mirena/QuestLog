import { CATALOG } from "./catalog";
import type { LibraryStatus, LogGame, Review } from "./library-types";

type Seed = {
  id: string;
  status: LibraryStatus;
  hoursPlayed: number;
};

const SEEDS: Seed[] = [
  { id: "silksong", status: "playing", hoursPlayed: 38 },
  { id: "hades-2", status: "playing", hoursPlayed: 24 },
  { id: "balatro", status: "playing", hoursPlayed: 62 },
  { id: "stardew-valley", status: "playing", hoursPlayed: 87 },
  { id: "expedition-33", status: "completed", hoursPlayed: 54 },
  { id: "split-fiction", status: "completed", hoursPlayed: 15 },
  { id: "cyberpunk-2077", status: "completed", hoursPlayed: 96 },
  { id: "hollow-knight", status: "completed", hoursPlayed: 41 },
  { id: "monster-hunter-wilds", status: "backlog", hoursPlayed: 0 },
  { id: "kingdom-come-2", status: "backlog", hoursPlayed: 0 },
  { id: "persona-5-royal", status: "backlog", hoursPlayed: 0 },
  { id: "metaphor-refantazio", status: "backlog", hoursPlayed: 0 },
  { id: "nightreign", status: "dropped", hoursPlayed: 12 },
  { id: "dark-souls-3", status: "dropped", hoursPlayed: 9 },
  { id: "anthem", status: "dropped", hoursPlayed: 3 },
];

export const INITIAL_GAMES: LogGame[] = SEEDS.map(
  ({ id, status, hoursPlayed }) => ({
    ...CATALOG[id],
    id,
    status,
    hoursPlayed,
  })
);

export const INITIAL_REVIEWS: Review[] = [
  {
    id: "silksong",
    game: CATALOG.silksong.title,
    rating: 5,
    date: "Hace 2 días",
    text: "La espera valió cada año. El combate es más rápido que el original y el mapa por fin respeta tu tiempo.",
    tone: CATALOG.silksong.tone,
  },
  {
    id: "expedition-33",
    game: CATALOG["expedition-33"].title,
    rating: 5,
    date: "Hace 1 semana",
    text: "El mejor sistema de combate por turnos que he jugado. Cada personaje aporta algo distinto y la historia no decae.",
    tone: CATALOG["expedition-33"].tone,
  },
  {
    id: "balatro",
    game: CATALOG.balatro.title,
    rating: 4,
    date: "Hace 3 semanas",
    text: "Pensé que sería un juego corto y llevo 60 horas. Solo le falta un poco más de variedad en los jefes finales.",
    tone: CATALOG.balatro.tone,
  },
];
