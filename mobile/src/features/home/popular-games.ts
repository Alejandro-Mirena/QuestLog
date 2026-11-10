export type PopularGame = {
  id: string;
  title: string;
  genre: string;
  rating: number;
  /** Color provisional del "cover" hasta tener portadas reales */
  tone: string;
};

export const POPULAR_GAMES: PopularGame[] = [
  {
    id: 'silksong',
    title: 'Hollow Knight: Silksong',
    genre: 'Metroidvania',
    rating: 4.9,
    tone: '#123038',
  },
  {
    id: 'hades-2',
    title: 'Hades II',
    genre: 'Roguelike',
    rating: 4.8,
    tone: '#2A2233',
  },
  {
    id: 'expedition-33',
    title: 'Clair Obscur: Expedition 33',
    genre: 'RPG por turnos',
    rating: 4.8,
    tone: '#1B2A36',
  },
  {
    id: 'monster-hunter-wilds',
    title: 'Monster Hunter Wilds',
    genre: 'Acción',
    rating: 4.6,
    tone: '#31291C',
  },
  {
    id: 'balatro',
    title: 'Balatro',
    genre: 'Roguelike de cartas',
    rating: 4.7,
    tone: '#2C2230',
  },
  {
    id: 'split-fiction',
    title: 'Split Fiction',
    genre: 'Cooperativo',
    rating: 4.7,
    tone: '#1D2C24',
  },
  {
    id: 'kingdom-come-2',
    title: 'Kingdom Come: Deliverance II',
    genre: 'RPG',
    rating: 4.6,
    tone: '#152F35',
  },
  {
    id: 'nightreign',
    title: 'Elden Ring: Nightreign',
    genre: 'Acción',
    rating: 4.5,
    tone: '#26223A',
  },
];
