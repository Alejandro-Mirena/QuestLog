import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/constants/colors';

type GameTileProps = {
  title: string;
  tone: string;
  width: number;
};

export function GameTile({ title, tone, width }: GameTileProps) {
  return (
    <View style={{ width }} accessible accessibilityLabel={title}>
      <View style={[styles.cover, { backgroundColor: tone }]}>
        <Ionicons name="game-controller" size={30} color="rgba(232, 242, 245, 0.28)" />
      </View>
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cover: {
    width: '100%',
    aspectRatio: 3 / 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  title: {
    color: Colors.text,
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 16,
  },
});
