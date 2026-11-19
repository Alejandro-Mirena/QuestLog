import { useMemo, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Colors } from "@/constants/colors";
import { useLibrary } from "@/features/library/library-context";
import { ReviewCard } from "@/features/profile/review-card";

import { ActivityItem } from "./activity-item";
import { FriendCard } from "./friend-card";
import {
  buildActivityFeed,
  buildFriendSummaries,
  COMMUNITY_REVIEWS,
} from "./social-data";

const HORIZONTAL_PADDING = 20;
const MAX_WIDTH = 480;

export function SocialScreen() {
  const { width } = useWindowDimensions();
  const { games, reviews } = useLibrary();

  const [likedReviews, setLikedReviews] = useState<string[]>([]);
  const [following, setFollowing] = useState<string[]>(["ana"]);

  const events = useMemo(
    () => buildActivityFeed(games, reviews),
    [games, reviews]
  );

  const friends = useMemo(() => buildFriendSummaries(games), [games]);

  const contentWidth = Math.min(width, MAX_WIDTH);

  function toggleLike(id: string) {
    setLikedReviews((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  function toggleFollow(id: string) {
    setFollowing((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  return (
    <SafeAreaView style={styles.screen} edges={["top", "left", "right"]}>
      <ScrollView
        contentContainerStyle={[styles.content, { width: contentWidth }]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Social</Text>
          <Text style={styles.subtitle}>La actividad de tu comunidad</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Actividad reciente</Text>
          <View style={styles.feed}>
            {events.map((event) => (
              <ActivityItem key={event.id} event={event} />
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Reseñas de la comunidad</Text>
          <View style={styles.feed}>
            {COMMUNITY_REVIEWS.map((review) => {
              const liked = likedReviews.includes(review.id);

              return (
                <ReviewCard
                  key={review.id}
                  review={review}
                  author={review.author}
                  likes={review.likes + (liked ? 1 : 0)}
                  liked={liked}
                  onLike={() => toggleLike(review.id)}
                />
              );
            })}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Amigos</Text>
          <View style={styles.feed}>
            {friends.map((summary) => (
              <FriendCard
                key={summary.friend.id}
                summary={summary}
                isFollowing={following.includes(summary.friend.id)}
                onToggleFollow={() => toggleFollow(summary.friend.id)}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    alignSelf: "center",
    paddingTop: 20,
    paddingHorizontal: HORIZONTAL_PADDING,
    paddingBottom: 32,
    gap: 22,
  },
  header: {
    gap: 2,
  },
  title: {
    color: Colors.text,
    fontSize: 30,
    fontWeight: "700",
    letterSpacing: -0.5,
  },
  subtitle: {
    color: Colors.textMuted,
    fontSize: 13,
  },
  section: {
    gap: 12,
  },
  sectionTitle: {
    color: Colors.text,
    fontSize: 17,
    fontWeight: "600",
  },
  feed: {
    gap: 10,
  },
});
