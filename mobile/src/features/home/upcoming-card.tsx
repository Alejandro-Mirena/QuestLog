import { StyleSheet, Text, View } from "react-native";

import { Colors } from "@/constants/colors";

const MONTHS = [
  "ENE",
  "FEB",
  "MAR",
  "ABR",
  "MAY",
  "JUN",
  "JUL",
  "AGO",
  "SEP",
  "OCT",
  "NOV",
  "DIC",
];

type UpcomingCardProps = {
  title: string;
  releaseDate: string;
  platforms: string;
  tone: string;
};

export function UpcomingCard({
  title,
  releaseDate,
  platforms,
  tone,
}: UpcomingCardProps) {
  const [, month, day] = releaseDate.split("-").map(Number);

  return (
    <View style={styles.card}>
      <View style={[styles.cover, { backgroundColor: tone }]}>
        <Text style={styles.day}>{day}</Text>
        <Text style={styles.month}>{MONTHS[month - 1]} 2026</Text>
      </View>
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
      <Text style={styles.platforms} numberOfLines={2}>
        {platforms}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 148,
  },
  cover: {
    height: 190,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  day: {
    color: Colors.text,
    fontSize: 38,
    fontWeight: "700",
    lineHeight: 42,
  },
  month: {
    color: Colors.textMuted,
    fontSize: 11,
    fontWeight: "600",
    letterSpacing: 1.2,
    marginTop: 2,
  },
  title: {
    color: Colors.text,
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 18,
    minHeight: 36,
  },
  platforms: {
    color: Colors.textMuted,
    fontSize: 11,
    lineHeight: 14,
    marginTop: 4,
  },
});
