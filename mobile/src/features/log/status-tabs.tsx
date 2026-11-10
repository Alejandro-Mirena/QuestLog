import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';

import { Colors } from '@/constants/colors';

import { LibraryStatus, STATUS_TABS } from './log-games';

type StatusTabsProps = {
  value: LibraryStatus;
  onChange: (status: LibraryStatus) => void;
};

export function StatusTabs({ value, onChange }: StatusTabsProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.list}
    >
      {STATUS_TABS.map((tab) => {
        const selected = tab.key === value;

        return (
          <Pressable
            key={tab.key}
            accessibilityRole="tab"
            accessibilityState={{ selected }}
            onPress={() => onChange(tab.key)}
            style={[styles.tab, selected && styles.tabSelected]}
          >
            <Text style={[styles.label, selected && styles.labelSelected]}>{tab.label}</Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  list: {
    gap: 8,
    paddingHorizontal: 20,
  },
  tab: {
    backgroundColor: Colors.card,
    borderColor: Colors.border,
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  tabSelected: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  label: {
    color: Colors.textMuted,
    fontSize: 13,
    fontWeight: '600',
  },
  labelSelected: {
    color: Colors.background,
  },
});
