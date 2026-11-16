import { Pressable, StyleSheet, Text, View } from "react-native";

import { Colors } from "@/constants/colors";

type FilterSectionProps = {
  title: string;
  options: string[];
  selected: string[];
  onToggle: (value: string) => void;
};

export function FilterSection({ title, options, selected, onToggle }: FilterSectionProps) {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.chips}>
        {options.map((option) => {
          const isSelected = selected.includes(option);

          return (
            <Pressable
              key={option}
              onPress={() => onToggle(option)}
              accessibilityRole="button"
              accessibilityState={{ selected: isSelected }}
              style={[styles.chip, isSelected && styles.chipSelected]}
            >
              <Text style={[styles.chipLabel, isSelected && styles.chipLabelSelected]}>
                {option}
              </Text>
            </Pressable>
          );
        })}
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
  chipSelected: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  chipLabel: {
    color: Colors.textMuted,
    fontSize: 13,
    fontWeight: "600",
  },
  chipLabelSelected: {
    color: Colors.background,
  },
});
