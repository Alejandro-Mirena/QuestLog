import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

import { Colors } from "@/constants/colors";
import type { LogGame } from "@/features/library/library-types";

type ResultRowProps = {
  game: LogGame;
};

export function ResultRow({ game }: ResultRowProps) {
  return (
    <View style={styles.row}>
      <View style={[styles.cover, { backgroundColor: game.tone }]}>
        <Ionicons name="game-controller" size={16} color="rgba(232, 242, 245, 0.3)" />
      </View>

      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>
          {game.title}
        </Text>
        <Text style={styles.meta} numberOfLines={1}>
          {game.studio} · {game.year}
        </Text>
        <Text style={styles.genres} numberOfLines={1}>
          {game.genres.join(" · ")}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: Colors.card,
    borderColor: Colors.border,
    borderWidth: 1,
    borderRadius: 14,
    padding: 10,
  },
  cover: {
    width: 44,
    height: 56,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  info: {
    flex: 1,
    gap: 2,
  },
  title: {
    color: Colors.text,
    fontSize: 14,
    fontWeight: "600",
  },
  meta: {
    color: Colors.textMuted,
    fontSize: 12,
  },
  genres: {
    color: Colors.primary,
    fontSize: 11,
    fontWeight: "600",
  },
});
