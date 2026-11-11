import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

import { Colors } from "@/constants/colors";

import type { Review } from "@/features/library/library-types";

type ReviewCardProps = {
  review: Review;
};

export function ReviewCard({ review }: ReviewCardProps) {
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
          <Text style={styles.date}>{review.date}</Text>
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
});
