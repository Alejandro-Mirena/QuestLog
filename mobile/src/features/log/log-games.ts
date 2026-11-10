export type LibraryStatus = 'playing' | 'completed' | 'backlog' | 'dropped';

export type LogGame = {
  id: string;
  title: string;
  status: LibraryStatus;
  /** Color provisional del "cover" hasta tener portadas reales */
  tone: string;
};

export const STATUS_TABS: { key: LibraryStatus; label: string }[] = [
  { key: 'playing', label: 'Jugando' },
  { key: 'completed', label: 'Completados' },
  { key: 'backlog', label: 'Pendientes' },
  { key: 'dropped', label: 'Abandonados' },
];

export const LOG_GAMES: LogGame[] = [
  // Jugando
  { id: 'silksong', title: 'Hollow Knight: Silksong', status: 'playing', tone: '#123038' },
  { id: 'hades-2', title: 'Hades II', status: 'playing', tone: '#2A2233' },
  { id: 'balatro', title: 'Balatro', status: 'playing', tone: '#2C2230' },
  { id: 'stardew-valley', title: 'Stardew Valley', status: 'playing', tone: '#1D2C24' },

  // Completados
  {
    id: 'expedition-33',
    title: 'Clair Obscur: Expedition 33',
    status: 'completed',
    tone: '#1B2A36',
  },
  { id: 'split-fiction', title: 'Split Fiction', status: 'completed', tone: '#152F35' },
  { id: 'cyberpunk-2077', title: 'Cyberpunk 2077', status: 'completed', tone: '#3A2A1C' },
  { id: 'hollow-knight', title: 'Hollow Knight', status: 'completed', tone: '#123038' },

  // Pendientes
  {
    id: 'monster-hunter-wilds',
    title: 'Monster Hunter Wilds',
    status: 'backlog',
    tone: '#31291C',
  },
  {
    id: 'kingdom-come-2',
    title: 'Kingdom Come: Deliverance II',
    status: 'backlog',
    tone: '#26223A',
  },
  { id: 'persona-5-royal', title: 'Persona 5 Royal', status: 'backlog', tone: '#3A1F22' },
  { id: 'metaphor-refantazio', title: 'Metaphor: ReFantazio', status: 'backlog', tone: '#2C2230' },

  // Abandonados
  { id: 'nightreign', title: 'Elden Ring: Nightreign', status: 'dropped', tone: '#26223A' },
  { id: 'dark-souls-3', title: 'Dark Souls III', status: 'dropped', tone: '#2A2233' },
  { id: 'anthem', title: 'Anthem', status: 'dropped', tone: '#152F35' },
];
