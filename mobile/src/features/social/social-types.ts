export type ActivityType = "completed" | "started" | "review" | "hours";

export type ActivityAuthor = {
  name: string;
  handle: string;
  tone: string;
};

export type ActivityEvent = {
  id: string;
  type: ActivityType;
  author: ActivityAuthor;
  game: string;
  tone: string;
  minutesAgo: number;
  rating?: number;
  hours?: number;
  quote?: string;
};
