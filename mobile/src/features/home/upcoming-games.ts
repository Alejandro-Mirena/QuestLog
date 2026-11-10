export type UpcomingGame = {
  id: string;
  title: string;
  /** Fecha confirmada en formato ISO (YYYY-MM-DD) */
  releaseDate: string;
  platforms: string;
  /** Color provisional del "cover" hasta tener portadas reales */
  tone: string;
};

/** Lanzamientos confirmados para lo que queda de 2026. */
export const UPCOMING_GAMES: UpcomingGame[] = [
  {
    id: 'gta-6',
    title: 'Grand Theft Auto VI',
    releaseDate: '2026-11-19',
    platforms: 'PS5 · Xbox',
    tone: '#2A2233',
  },
  {
    id: 'gothic-3-classic',
    title: 'Gothic III Classic',
    releaseDate: '2026-11-24',
    platforms: 'PS5 · Xbox · Switch 2',
    tone: '#31291C',
  },
  {
    id: 'hela',
    title: 'Hela: Of Mice & Magic',
    releaseDate: '2026-12-01',
    platforms: 'PS5 · Xbox · Switch 2 · PC',
    tone: '#1D2C24',
  },
  {
    id: 'rayman-legends-retold',
    title: 'Rayman Legends Retold',
    releaseDate: '2026-12-03',
    platforms: 'PS5 · Xbox · Switch 2 · PC',
    tone: '#123038',
  },
  {
    id: 'dragon-quest-monsters',
    title: 'Dragon Quest Monsters: The Withered World',
    releaseDate: '2026-12-03',
    platforms: 'PS5 · Switch 2 · Switch',
    tone: '#1B2A36',
  },
  {
    id: 'dawn-of-war-4',
    title: 'Warhammer 40,000: Dawn of War IV',
    releaseDate: '2026-12-03',
    platforms: 'PC',
    tone: '#3A1F22',
  },
  {
    id: 'professor-layton',
    title: 'Professor Layton and the New World of Steam',
    releaseDate: '2026-12-10',
    platforms: 'PS5 · Switch 2 · Switch · PC',
    tone: '#152F35',
  },
  {
    id: 'path-of-exile-2',
    title: 'Path of Exile 2',
    releaseDate: '2026-12-11',
    platforms: 'PS5 · Xbox · PC',
    tone: '#26223A',
  },
];
