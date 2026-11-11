import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

import { Colors } from "@/constants/colors";

import type { ProfileStat } from "./profile-data";

type StatsGridProps = {
  stats: ProfileStat[];
};

export function StatsGrid({ stats }: StatsGridProps) {
  return (
    <View style={styles.grid}>
      {stats.map((stat) => (
        <View key={stat.id} style={styles.card}>
          <View
            style={[styles.iconWrap, { backgroundColor: `${stat.color}22` }]}
          >
            <Ionicons name={stat.icon} size={18} color={stat.color} />
          </View>
          <Text style={styles.value}>{stat.value}</Text>
          <Text style={styles.label}>{stat.label}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  card: {
    flexBasis: "40%",
    flexGrow: 1,
    backgroundColor: Colors.card,
    borderColor: Colors.border,
    borderWidth: 1,
    borderRadius: 14,
    padding: 14,
    gap: 6,
  },
  iconWrap: {
    width: 32,
    height: 32,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 2,
  },
  value: {
    color: Colors.text,
    fontSize: 24,
    fontWeight: "700",
  },
  label: {
    color: Colors.textMuted,
    fontSize: 12,
  },
});
