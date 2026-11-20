import { createContext, useCallback, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";

import { INITIAL_GAMES, INITIAL_REVIEWS } from "./library-data";
import type { LogGame, Review } from "./library-types";

type LibraryContextValue = {
  games: LogGame[];
  reviews: Review[];
  addGame: (game: LogGame) => void;
};

const LibraryContext = createContext<LibraryContextValue | null>(null);

export function LibraryProvider({ children }: { children: ReactNode }) {
  const [games, setGames] = useState<LogGame[]>(INITIAL_GAMES);
  const reviews = INITIAL_REVIEWS;

  const addGame = useCallback((game: LogGame) => {
    setGames((current) => [game, ...current]);
  }, []);

  const value = useMemo(
    () => ({ games, reviews, addGame }),
    [games, reviews, addGame]
  );

  return <LibraryContext.Provider value={value}>{children}</LibraryContext.Provider>;
}

export function useLibrary() {
  const context = useContext(LibraryContext);

  if (!context) {
    throw new Error("useLibrary debe usarse dentro de <LibraryProvider>");
  }

  return context;
}
