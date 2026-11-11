export type LibraryStatus = "playing" | "completed" | "backlog" | "dropped";

export type LogGame = {
  id: string;
  title: string;
  status: LibraryStatus;
  tone: string;
  hoursPlayed: number;
};

export type Review = {
  id: string;
  game: string;
  rating: number;
  date: string;
  text: string;
  tone: string;
};
