import { Colors } from "@/constants/colors";
import type {
  LibraryStatus,
  LogGame,
  Review,
} from "@/features/library/library-types";

import type {
  ActivityAuthor,
  ActivityEvent,
  CommunityReview,
  Friend,
  FriendGame,
  FriendSummary,
} from "./social-types";

const HOUR = 60;
const DAY = 24 * HOUR;
const WEEK = 7 * DAY;

export const ALEX: ActivityAuthor = {
  name: "Tú",
  handle: "@alexquest",
  tone: Colors.primary,
};

const ANA: ActivityAuthor = {
  name: "Ana",
  handle: "@anaplays",
  tone: Colors.secondary,
};

const MARCOS: ActivityAuthor = {
  name: "Marcos",
  handle: "@marcosplays",
  tone: Colors.rating,
};

const LUCIA: ActivityAuthor = {
  name: "Lucía",
  handle: "@luciajuega",
  tone: Colors.danger,
};

const COMMUNITY_EVENTS: ActivityEvent[] = [
  {
    id: "ana-silksong",
    type: "completed",
    author: ANA,
    game: "Hollow Knight: Silksong",
    tone: "#123038",
    minutesAgo: 2 * HOUR,
    rating: 5,
  },
  {
    id: "marcos-hades",
    type: "started",
    author: MARCOS,
    game: "Hades II",
    tone: "#2A2233",
    minutesAgo: 5 * HOUR,
  },
  {
    id: "lucia-balatro",
    type: "review",
    author: LUCIA,
    game: "Balatro",
    tone: "#2C2230",
    minutesAgo: DAY,
    rating: 5,
    quote: "Llevo 80 horas y todavía descubro combinaciones nuevas.",
  },
  {
    id: "ana-stardew",
    type: "hours",
    author: ANA,
    game: "Stardew Valley",
    tone: "#1D2C24",
    minutesAgo: 2 * DAY,
    hours: 120,
  },
  {
    id: "marcos-expedition",
    type: "completed",
    author: MARCOS,
    game: "Clair Obscur: Expedition 33",
    tone: "#1B2A36",
    minutesAgo: 4 * DAY,
    rating: 4,
  },
];

export const COMMUNITY_REVIEWS: CommunityReview[] = [
  {
    id: "community-silksong",
    author: ANA,
    game: "Hollow Knight: Silksong",
    rating: 5,
    date: "Hace 4 h",
    text: "El combate es rapidísimo y el mapa por fin respeta tu tiempo. Mejoró todo lo bueno del original.",
    tone: "#123038",
    likes: 12,
  },
  {
    id: "community-expedition",
    author: MARCOS,
    game: "Clair Obscur: Expedition 33",
    rating: 4,
    date: "Ayer",
    text: "Un sistema de turnos con esquivas y paradas. Cada personaje aporta algo distinto al equipo.",
    tone: "#1B2A36",
    likes: 8,
  },
  {
    id: "community-hades",
    author: LUCIA,
    game: "Hades II",
    rating: 5,
    date: "Hace 3 días",
    text: "La nueva protagonista tiene un ritmo propio y la música vuelve a estar a la altura del mito.",
    tone: "#2A2233",
    likes: 5,
  },
];

function game(title: string, status: LibraryStatus): FriendGame {
  return { title, status };
}

const FRIENDS: Friend[] = [
  {
    id: "ana",
    author: ANA,
    games: [
      game("Hollow Knight: Silksong", "completed"),
      game("Balatro", "playing"),
      game("Stardew Valley", "playing"),
      game("Cuphead", "completed"),
      game("Celeste", "completed"),
    ],
  },
  {
    id: "marcos",
    author: MARCOS,
    games: [
      game("Hades II", "playing"),
      game("Clair Obscur: Expedition 33", "completed"),
      game("Split Fiction", "completed"),
      game("Monster Hunter Wilds", "backlog"),
      game("Elden Ring", "completed"),
      game("Sekiro: Shadows Die Twice", "completed"),
    ],
  },
  {
    id: "lucia",
    author: LUCIA,
    games: [
      game("Balatro", "completed"),
      game("Cyberpunk 2077", "completed"),
      game("Persona 5 Royal", "playing"),
      game("Dead Cells", "completed"),
      game("It Takes Two", "backlog"),
    ],
  },
];

export function parseRelativeTime(label: string): number {
  if (label === "Ayer") {
    return DAY;
  }

  const match = label.match(/Hace (\d+) (min|minutos?|h|d[ií]as?|semanas?)/i);
  if (!match) {
    return 0;
  }

  const amount = Number(match[1]);
  const unit = match[2].toLowerCase();

  if (unit === "min" || unit.startsWith("minuto")) {
    return amount;
  }
  if (unit === "h") {
    return amount * HOUR;
  }
  if (unit.startsWith("semana")) {
    return amount * WEEK;
  }
  return amount * DAY;
}

export function formatRelativeTime(minutes: number): string {
  if (minutes < HOUR) {
    return `Hace ${minutes} min`;
  }
  if (minutes < DAY) {
    return `Hace ${Math.round(minutes / HOUR)} h`;
  }
  if (minutes < 2 * DAY) {
    return "Ayer";
  }
  if (minutes < WEEK) {
    return `Hace ${Math.round(minutes / DAY)} días`;
  }

  const weeks = Math.round(minutes / WEEK);
  return weeks === 1 ? "Hace 1 semana" : `Hace ${weeks} semanas`;
}

export function buildActivityFeed(
  games: LogGame[],
  reviews: Review[]
): ActivityEvent[] {
  const ownReviews: ActivityEvent[] = reviews.map((review) => ({
    id: `own-review-${review.id}`,
    type: "review" as const,
    author: ALEX,
    game: review.game,
    tone: review.tone,
    minutesAgo: parseRelativeTime(review.date),
    rating: review.rating,
    quote: review.text,
  }));

  const ownCompleted: ActivityEvent[] = games
    .filter((game) => game.status === "completed")
    .map((game, index) => {
      const review = reviews.find((item) => item.id === game.id);

      return {
        id: `own-completed-${game.id}`,
        type: "completed" as const,
        author: ALEX,
        game: game.title,
        tone: game.tone,
        minutesAgo: review ? parseRelativeTime(review.date) : (index + 2) * DAY,
        rating: review?.rating,
      };
    });

  return [...COMMUNITY_EVENTS, ...ownReviews, ...ownCompleted].sort(
    (a, b) => a.minutesAgo - b.minutesAgo
  );
}

export function buildFriendSummaries(games: LogGame[]): FriendSummary[] {
  const ownTitles = new Set(games.map((item) => item.title));

  return FRIENDS.map((friend) => ({
    friend,
    total: friend.games.length,
    completed: friend.games.filter((item) => item.status === "completed").length,
    inCommon: friend.games.filter((item) => ownTitles.has(item.title)).length,
  }));
}
