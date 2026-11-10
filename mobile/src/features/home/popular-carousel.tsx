import { FlatList, StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/constants/colors';

import { GameCard } from './game-card';
import { POPULAR_GAMES } from './popular-games';

export function PopularCarousel() {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>Populares esta semana</Text>
      <FlatList
        data={POPULAR_GAMES}
        keyExtractor={(game) => game.id}
        renderItem={({ item }) => (
          <GameCard
            title={item.title}
            genre={item.genre}
            rating={item.rating}
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
