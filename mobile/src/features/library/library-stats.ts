import type { LogGame, Review } from "./library-types";

export type LibraryStats = {
  totalGames: number;
  playing: number;
  completed: number;
  backlog: number;
  dropped: number;
  reviews: number;
  hours: number;
};

export function computeLibraryStats(
  games: LogGame[],
  reviews: Review[],
): LibraryStats {
  const stats: LibraryStats = {
    totalGames: games.length,
    playing: 0,
    completed: 0,
    backlog: 0,
    dropped: 0,
    reviews: reviews.length,
    hours: 0,
  };

  for (const game of games) {
    stats[game.status] += 1;
    stats.hours += game.hoursPlayed;
  }

  return stats;
}
