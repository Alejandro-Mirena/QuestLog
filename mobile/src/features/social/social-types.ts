import type {
  LibraryStatus,
  LogGame,
  Review,
} from "@/features/library/library-types";

export type ActivityType = "completed" | "started" | "review" | "hours";

export type SocialTab = "activity" | "reviews" | "friends" | "recommendations";

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

export type CommunityReview = Review & {
  author: ActivityAuthor;
  likes: number;
};

export type FriendGame = {
  title: string;
  status: LibraryStatus;
};

export type Friend = {
  id: string;
  author: ActivityAuthor;
  games: FriendGame[];
};

export type FriendSummary = {
  friend: Friend;
  total: number;
  completed: number;
  inCommon: number;
};

export type Recommendation = {
  id: string;
  author: ActivityAuthor;
  game: LogGame;
  note: string;
};
