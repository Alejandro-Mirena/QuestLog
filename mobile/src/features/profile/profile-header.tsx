import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

import { Colors } from "@/constants/colors";

type ProfileHeaderProps = {
  name: string;
  handle: string;
  bio: string;
  memberSince: string;
};

export function ProfileHeader({
  name,
  handle,
  bio,
  memberSince,
}: ProfileHeaderProps) {
  return (
    <View style={styles.card}>
      <View style={styles.avatar}>
        <Ionicons name="person" size={38} color={Colors.primary} />
      </View>

      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.handle}>{handle}</Text>
        <Text style={styles.bio}>{bio}</Text>
        <Text style={styles.member}>{memberSince}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    borderColor: Colors.border,
    borderWidth: 1,
    borderRadius: 18,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 2,
    borderColor: Colors.primary,
    backgroundColor: Colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  info: {
    flex: 1,
    gap: 2,
  },
  name: {
    color: Colors.text,
    fontSize: 20,
    fontWeight: "700",
  },
  handle: {
    color: Colors.primary,
    fontSize: 13,
    fontWeight: "600",
  },
  bio: {
    color: Colors.textMuted,
    fontSize: 13,
    lineHeight: 18,
    marginTop: 4,
  },
  member: {
    color: Colors.textMuted,
    fontSize: 11,
    marginTop: 4,
  },
});
