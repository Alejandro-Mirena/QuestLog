import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import type { ReactNode } from "react";

import { INITIAL_GAMES, INITIAL_REVIEWS } from "./library-data";
import type { LibraryStatus, LogGame, Review } from "./library-types";

type LibraryContextValue = {
  games: LogGame[];
  reviews: Review[];
  addGame: (game: LogGame) => void;
  addReview: (review: Review) => void;
  updateGameStatus: (id: string, status: LibraryStatus) => void;
};

const LibraryContext = createContext<LibraryContextValue | null>(null);

export function LibraryProvider({ children }: { children: ReactNode }) {
  const [games, setGames] = useState<LogGame[]>(INITIAL_GAMES);
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);

  const addGame = useCallback((game: LogGame) => {
    setGames((current) => [game, ...current]);
  }, []);

  const addReview = useCallback((review: Review) => {
    setReviews((current) => [review, ...current]);
  }, []);

  const updateGameStatus = useCallback((id: string, status: LibraryStatus) => {
    setGames((current) =>
      current.map((game) => (game.id === id ? { ...game, status } : game)),
    );
  }, []);

  const value = useMemo(
    () => ({ games, reviews, addGame, addReview, updateGameStatus }),
    [games, reviews, addGame, addReview, updateGameStatus],
  );

  return (
    <LibraryContext.Provider value={value}>{children}</LibraryContext.Provider>
  );
}

export function useLibrary() {
  const context = useContext(LibraryContext);

  if (!context) {
    throw new Error("useLibrary debe usarse dentro de <LibraryProvider>");
  }

  return context;
}
