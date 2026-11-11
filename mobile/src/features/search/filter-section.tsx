import { StyleSheet, Text, View } from "react-native";

import { Colors } from "@/constants/colors";

type FilterSectionProps = {
  title: string;
  options: string[];
};

export function FilterSection({ title, options }: FilterSectionProps) {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.chips}>
        {options.map((option) => (
          <View key={option} style={styles.chip}>
            <Text style={styles.chipLabel}>{option}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    gap: 10,
  },
  title: {
    color: Colors.text,
    fontSize: 15,
    fontWeight: "600",
  },
  chips: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  chip: {
    backgroundColor: Colors.card,
    borderColor: Colors.border,
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  chipLabel: {
    color: Colors.textMuted,
    fontSize: 13,
    fontWeight: "600",
  },
});
