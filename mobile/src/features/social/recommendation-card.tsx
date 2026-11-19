import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { Colors } from "@/constants/colors";

import type { Recommendation } from "./social-types";

type RecommendationCardProps = {
  recommendation: Recommendation;
  alreadyAdded: boolean;
  onAdd: () => void;
};

export function RecommendationCard({
  recommendation,
  alreadyAdded,
  onAdd,
}: RecommendationCardProps) {
  const { author, game, note } = recommendation;

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={[styles.avatar, { backgroundColor: author.tone }]}>
          <Text style={styles.initial}>{author.name.charAt(0)}</Text>
        </View>

        <View style={styles.headerText}>
          <Text style={styles.author}>{author.name} recomienda</Text>
          <Text style={styles.handle}>{author.handle}</Text>
        </View>
      </View>

      <View style={styles.body}>
        <View style={[styles.cover, { backgroundColor: game.tone }]}>
          <Ionicons
            name="game-controller"
            size={18}
            color="rgba(232, 242, 245, 0.3)"
          />
        </View>

        <View style={styles.bodyText}>
          <Text style={styles.game} numberOfLines={2}>
            {game.title}
          </Text>
          <Text style={styles.genres} numberOfLines={1}>
            {`${game.genres.join(" · ")} · ${game.year}`}
          </Text>
          <Text style={styles.note}>{`"${note}"`}</Text>
        </View>
      </View>

      <Pressable
        onPress={onAdd}
        disabled={alreadyAdded}
        hitSlop={10}
        accessibilityRole="button"
        accessibilityLabel={
          alreadyAdded
            ? `${game.title} ya está en tu log`
            : `Añadir ${game.title} a Mi Log`
        }
        style={[
          styles.button,
          alreadyAdded ? styles.buttonAdded : styles.buttonAdd,
        ]}
      >
        <Ionicons
          name={alreadyAdded ? "checkmark" : "add"}
          size={14}
          color={alreadyAdded ? Colors.primary : Colors.background}
        />
        <Text
          style={[
            styles.buttonText,
            alreadyAdded ? styles.buttonTextAdded : styles.buttonTextAdd,
          ]}
        >
          {alreadyAdded ? "En tu log" : "Añadir a Mi Log"}
        </Text>
      </Pressable>
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
    gap: 12,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
  },
  initial: {
    color: Colors.background,
    fontSize: 14,
    fontWeight: "700",
  },
  headerText: {
    flex: 1,
    gap: 1,
  },
  author: {
    color: Colors.text,
    fontSize: 13,
    fontWeight: "700",
  },
  handle: {
    color: Colors.primary,
    fontSize: 11,
  },
  body: {
    flexDirection: "row",
    gap: 12,
  },
  cover: {
    width: 44,
    height: 56,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  bodyText: {
    flex: 1,
    gap: 3,
  },
  game: {
    color: Colors.text,
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 19,
  },
  genres: {
    color: Colors.primary,
    fontSize: 11,
  },
  note: {
    color: Colors.textMuted,
    fontSize: 12,
    lineHeight: 17,
    marginTop: 2,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    paddingVertical: 9,
    borderRadius: 8,
  },
  buttonAdd: {
    backgroundColor: Colors.primary,
  },
  buttonAdded: {
    backgroundColor: Colors.background,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: "700",
  },
  buttonTextAdd: {
    color: Colors.background,
  },
  buttonTextAdded: {
    color: Colors.primary,
  },
});
