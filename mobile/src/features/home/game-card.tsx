import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/constants/colors';

type GameCardProps = {
  title: string;
  genre: string;
  rating: number;
  tone: string;
};

export function GameCard({ title, genre, rating, tone }: GameCardProps) {
  return (
    <View style={styles.card}>
      <View style={[styles.cover, { backgroundColor: tone }]}>
        <Ionicons name="game-controller" size={36} color="rgba(232, 242, 245, 0.28)" />
        <View style={styles.rating}>
          <Ionicons name="star" size={11} color={Colors.rating} />
          <Text style={styles.ratingText}>{rating.toFixed(1)}</Text>
        </View>
      </View>
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
      <Text style={styles.genre} numberOfLines={1}>
        {genre}
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
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  rating: {
    position: 'absolute',
    right: 8,
    bottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    backgroundColor: 'rgba(10, 15, 18, 0.78)',
    borderRadius: 999,
    paddingHorizontal: 7,
    paddingVertical: 3,
  },
  ratingText: {
    color: Colors.text,
    fontSize: 11,
    fontWeight: '700',
  },
  title: {
    color: Colors.text,
    fontSize: 14,
    fontWeight: '600',
  },
  genre: {
    color: Colors.textMuted,
    fontSize: 12,
    marginTop: 2,
  },
});
