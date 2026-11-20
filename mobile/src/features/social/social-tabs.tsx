import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { Colors } from "@/constants/colors";

import type { SocialTab } from "./social-types";

type IconName = keyof typeof Ionicons.glyphMap;

const TABS: Array<{ id: SocialTab; label: string; icon: IconName }> = [
  { id: "activity", label: "Actividad", icon: "pulse" },
  { id: "reviews", label: "Reseñas", icon: "chatbubble-ellipses" },
  { id: "friends", label: "Amigos", icon: "people" },
  { id: "recommendations", label: "Recomienda", icon: "sparkles" },
];

type SocialTabsProps = {
  value: SocialTab;
  onChange: (tab: SocialTab) => void;
};

export function SocialTabs({ value, onChange }: SocialTabsProps) {
  return (
    <View style={styles.container}>
      {TABS.map((tab) => {
        const active = tab.id === value;

        return (
          <Pressable
            key={tab.id}
            onPress={() => onChange(tab.id)}
            accessibilityRole="tab"
            accessibilityState={{ selected: active }}
            accessibilityLabel={tab.label}
            style={[styles.tab, active && styles.tabActive]}
          >
            <Ionicons
              name={tab.icon}
              size={13}
              color={active ? Colors.background : Colors.primary}
            />
            <Text style={[styles.label, active && styles.labelActive]}>
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 6,
    padding: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: Colors.card,
  },
  tab: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    paddingVertical: 9,
    borderRadius: 9,
  },
  tabActive: {
    backgroundColor: Colors.primary,
  },
  label: {
    color: Colors.primary,
    fontSize: 11,
    fontWeight: "700",
  },
  labelActive: {
    color: Colors.background,
  },
});
