import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { Colors } from "@/constants/colors";

import type { FriendSummary } from "./social-types";

type FriendCardProps = {
  summary: FriendSummary;
  isFollowing: boolean;
  onToggleFollow: () => void;
};

export function FriendCard({
  summary,
  isFollowing,
  onToggleFollow,
}: FriendCardProps) {
  const { friend, total, completed, inCommon } = summary;

  return (
    <View style={styles.card}>
      <View style={[styles.avatar, { backgroundColor: friend.author.tone }]}>
        <Text style={styles.initial}>{friend.author.name.charAt(0)}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.name}>{friend.author.name}</Text>
        <Text style={styles.handle}>{friend.author.handle}</Text>
        <Text style={styles.detail}>
          {total} juegos · {completed} completados · {inCommon} en común contigo
        </Text>
      </View>

      <Pressable
        onPress={onToggleFollow}
        hitSlop={10}
        accessibilityRole="button"
        accessibilityLabel={
          isFollowing
            ? `Dejar de seguir a ${friend.author.name}`
            : `Seguir a ${friend.author.name}`
        }
        style={[
          styles.button,
          isFollowing ? styles.buttonFollowing : styles.buttonFollow,
        ]}
      >
        <Text
          style={[
            styles.buttonText,
            isFollowing ? styles.buttonTextFollowing : styles.buttonTextFollow,
          ]}
        >
          {isFollowing ? "Siguiendo" : "Seguir"}
        </Text>
        <Ionicons
          name={isFollowing ? "checkmark" : "add"}
          size={13}
          color={isFollowing ? Colors.primary : Colors.background}
        />
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
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  initial: {
    color: Colors.background,
    fontSize: 17,
    fontWeight: "700",
  },
  info: {
    flex: 1,
    gap: 1,
  },
  name: {
    color: Colors.text,
    fontSize: 14,
    fontWeight: "700",
  },
  handle: {
    color: Colors.primary,
    fontSize: 11,
    fontWeight: "600",
  },
  detail: {
    color: Colors.textMuted,
    fontSize: 11,
    lineHeight: 15,
    marginTop: 3,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 8,
  },
  buttonFollow: {
    backgroundColor: Colors.primary,
  },
  buttonFollowing: {
    backgroundColor: Colors.background,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  buttonText: {
    fontSize: 11,
    fontWeight: "700",
  },
  buttonTextFollow: {
    color: Colors.background,
  },
  buttonTextFollowing: {
    color: Colors.primary,
  },
});
