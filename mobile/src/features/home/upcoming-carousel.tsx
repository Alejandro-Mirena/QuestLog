import { FlatList, StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/constants/colors';

import { UPCOMING_GAMES } from './upcoming-games';
import { UpcomingCard } from './upcoming-card';

export function UpcomingCarousel() {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>Próximos lanzamientos</Text>
      <FlatList
        data={UPCOMING_GAMES}
        keyExtractor={(game) => game.id}
        renderItem={({ item }) => (
          <UpcomingCard
            title={item.title}
            releaseDate={item.releaseDate}
            platforms={item.platforms}
            tone={item.tone}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    gap: 12,
  },
  title: {
    color: Colors.text,
    fontSize: 17,
    fontWeight: '600',
    paddingHorizontal: 24,
  },
  list: {
    paddingHorizontal: 24,
    gap: 14,
  },
});
