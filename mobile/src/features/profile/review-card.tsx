import { Ionicons } from "@expo/vector-icons";
import { useEffect, useRef } from "react";
import { Animated, Pressable, StyleSheet, Text, View } from "react-native";

import { Colors } from "@/constants/colors";

import type { Review } from "@/features/library/library-types";

type ReviewAuthor = {
  name: string;
  handle: string;
  tone: string;
};

type ReviewCardProps = {
  review: Review;
  author?: ReviewAuthor;
  likes?: number;
  liked?: boolean;
  onLike?: () => void;
};

type LikeButtonProps = {
  likes: number;
  liked: boolean;
  onLike: () => void;
};

function LikeButton({ likes, liked, onLike }: LikeButtonProps) {
  const pop = useRef(new Animated.Value(1)).current;
  const ringScale = useRef(new Animated.Value(1)).current;
  const ringOpacity = useRef(new Animated.Value(0)).current;
  const number = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    number.setValue(0.3);
    Animated.timing(number, {
      toValue: 1,
      duration: 260,
      useNativeDriver: true,
    }).start();
  }, [likes, number]);

  function handlePress() {
    if (liked) {
      Animated.sequence([
        Animated.timing(pop, {
          toValue: 0.8,
          duration: 90,
          useNativeDriver: true,
        }),
        Animated.spring(pop, {
          toValue: 1,
          friction: 5,
          tension: 220,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      ringScale.setValue(0.5);
      ringOpacity.setValue(0.85);
      Animated.parallel([
        Animated.sequence([
          Animated.timing(pop, {
            toValue: 1.4,
            duration: 110,
            useNativeDriver: true,
          }),
          Animated.spring(pop, {
            toValue: 1,
            friction: 4,
            tension: 200,
            useNativeDriver: true,
          }),
        ]),
        Animated.timing(ringScale, {
          toValue: 2,
          duration: 450,
          useNativeDriver: true,
        }),
        Animated.timing(ringOpacity, {
          toValue: 0,
          duration: 450,
          useNativeDriver: true,
        }),
      ]).start();
    }

    onLike();
  }

  return (
    <Pressable
      onPress={handlePress}
      hitSlop={10}
      accessibilityRole="button"
      accessibilityLabel={liked ? "Quitar me gusta" : "Me gusta"}
      style={styles.like}
    >
      <View style={styles.heartWrap}>
        <Animated.View
          pointerEvents="none"
          style={[
            styles.ring,
            { opacity: ringOpacity, transform: [{ scale: ringScale }] },
          ]}
        />
        <Animated.View style={{ transform: [{ scale: pop }] }}>
          <Ionicons
            name={liked ? "heart" : "heart-outline"}
            size={17}
            color={liked ? Colors.danger : Colors.textMuted}
          />
        </Animated.View>
      </View>

      <Animated.Text
        style={[styles.likeText, liked && styles.likeTextActive, { opacity: number }]}
      >
        {likes}
      </Animated.Text>
    </Pressable>
  );
}

export function ReviewCard({
  review,
  author,
  likes,
  liked = false,
  onLike,
}: ReviewCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={[styles.cover, { backgroundColor: review.tone }]}>
          <Ionicons
            name="game-controller"
            size={18}
            color="rgba(232, 242, 245, 0.3)"
          />
        </View>

        <View style={styles.headerText}>
          <Text style={styles.game} numberOfLines={1}>
            {review.game}
          </Text>
          <Text style={styles.date} numberOfLines={1}>
            {author
              ? `${author.name} · ${author.handle} · ${review.date}`
              : review.date}
          </Text>
        </View>
      </View>

      <View
        style={styles.stars}
        accessibilityLabel={`${review.rating} de 5 estrellas`}
      >
        {Array.from({ length: 5 }, (_, index) => (
          <Ionicons
            key={index}
            name={index < review.rating ? "star" : "star-outline"}
            size={13}
            color={Colors.rating}
          />
        ))}
      </View>

      <Text style={styles.text}>{review.text}</Text>

      {likes !== undefined && onLike !== undefined && (
        <LikeButton likes={likes} liked={liked} onLike={onLike} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    borderColor: Colors.border,
    borderWidth: 1,
    borderRadius: 14,
    padding: 14,
    gap: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  cover: {
    width: 44,
    height: 56,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    flex: 1,
    gap: 2,
  },
  game: {
    color: Colors.text,
    fontSize: 14,
    fontWeight: "600",
  },
  date: {
    color: Colors.textMuted,
    fontSize: 11,
  },
  stars: {
    flexDirection: "row",
    gap: 2,
  },
  text: {
    color: Colors.textMuted,
    fontSize: 13,
    lineHeight: 19,
  },
  like: {
    alignSelf: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 2,
  },
  heartWrap: {
    width: 22,
    height: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  ring: {
    position: "absolute",
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: Colors.danger,
  },
  likeText: {
    color: Colors.textMuted,
    fontSize: 13,
    fontWeight: "700",
  },
  likeTextActive: {
    color: Colors.danger,
  },
});
