import type { LogGame, Review } from "./library-types";

export const INITIAL_GAMES: LogGame[] = [
  {
    id: "silksong",
    title: "Hollow Knight: Silksong",
    status: "playing",
    tone: "#123038",
    hoursPlayed: 38,
  },
  {
    id: "hades-2",
    title: "Hades II",
    status: "playing",
    tone: "#2A2233",
    hoursPlayed: 24,
  },
  {
    id: "balatro",
    title: "Balatro",
    status: "playing",
    tone: "#2C2230",
    hoursPlayed: 62,
  },
  {
    id: "stardew-valley",
    title: "Stardew Valley",
    status: "playing",
    tone: "#1D2C24",
    hoursPlayed: 87,
  },

  {
    id: "expedition-33",
    title: "Clair Obscur: Expedition 33",
    status: "completed",
    tone: "#1B2A36",
    hoursPlayed: 54,
  },
  {
    id: "split-fiction",
    title: "Split Fiction",
    status: "completed",
    tone: "#152F35",
    hoursPlayed: 15,
  },
  {
    id: "cyberpunk-2077",
    title: "Cyberpunk 2077",
    status: "completed",
    tone: "#3A2A1C",
    hoursPlayed: 96,
  },
  {
    id: "hollow-knight",
    title: "Hollow Knight",
    status: "completed",
    tone: "#123038",
    hoursPlayed: 41,
  },

  {
    id: "monster-hunter-wilds",
    title: "Monster Hunter Wilds",
    status: "backlog",
    tone: "#31291C",
    hoursPlayed: 0,
  },
  {
    id: "kingdom-come-2",
    title: "Kingdom Come: Deliverance II",
    status: "backlog",
    tone: "#26223A",
    hoursPlayed: 0,
  },
  {
    id: "persona-5-royal",
    title: "Persona 5 Royal",
    status: "backlog",
    tone: "#3A1F22",
    hoursPlayed: 0,
  },
  {
    id: "metaphor-refantazio",
    title: "Metaphor: ReFantazio",
    status: "backlog",
    tone: "#2C2230",
    hoursPlayed: 0,
  },

  {
    id: "nightreign",
    title: "Elden Ring: Nightreign",
    status: "dropped",
    tone: "#26223A",
    hoursPlayed: 12,
  },
  {
    id: "dark-souls-3",
    title: "Dark Souls III",
    status: "dropped",
    tone: "#2A2233",
    hoursPlayed: 9,
  },
  {
    id: "anthem",
    title: "Anthem",
    status: "dropped",
    tone: "#152F35",
    hoursPlayed: 3,
  },
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: "silksong",
    game: "Hollow Knight: Silksong",
    rating: 5,
    date: "Hace 2 días",
    text: "La espera valió cada año. El combate es más rápido que el original y el mapa por fin respeta tu tiempo.",
    tone: "#123038",
  },
  {
    id: "expedition-33",
    game: "Clair Obscur: Expedition 33",
    rating: 5,
    date: "Hace 1 semana",
    text: "El mejor sistema de combate por turnos que he jugado. Cada personaje aporta algo distinto y la historia no decae.",
    tone: "#1B2A36",
  },
  {
    id: "balatro",
    game: "Balatro",
    rating: 4,
    date: "Hace 3 semanas",
    text: "Pensé que sería un juego corto y llevo 60 horas. Solo le falta un poco más de variedad en los jefes finales.",
    tone: "#2C2230",
  },
];
