import { useMemo, useState } from 'react';
import { FlatList, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Colors } from '@/constants/colors';
import { useLibrary } from '@/features/library/library-context';
import type { LibraryStatus } from '@/features/library/library-types';

import { GameTile } from './game-tile';
import { StatusTabs } from './status-tabs';

const COLUMNS = 3;
const HORIZONTAL_PADDING = 20;
const GAP = 12;
const MAX_WIDTH = 480;

export function LogScreen() {
  const { games } = useLibrary();
  const [status, setStatus] = useState<LibraryStatus>('playing');
  const { width } = useWindowDimensions();

  const contentWidth = Math.min(width, MAX_WIDTH);
  const tileWidth = (contentWidth - HORIZONTAL_PADDING * 2 - GAP * (COLUMNS - 1)) / COLUMNS;

  // Se recalcula cuando cambia la pestaña o cuando el contexto recibe un juego nuevo.
  const visibleGames = useMemo(
    () => games.filter((game) => game.status === status),
    [games, status]
  );

  return (
    <SafeAreaView style={styles.screen} edges={['top', 'left', 'right']}>
      <View style={[styles.header, { width: contentWidth }]}>
        <Text style={styles.title}>Mi Log</Text>
        <Text style={styles.subtitle}>Tu biblioteca por estado</Text>
        <StatusTabs value={status} onChange={setStatus} />
      </View>

      <FlatList
        key={status}
        data={visibleGames}
        keyExtractor={(game) => game.id}
        numColumns={COLUMNS}
        renderItem={({ item }) => (
          <GameTile title={item.title} tone={item.tone} width={tileWidth} />
        )}
        columnWrapperStyle={styles.row}
        contentContainerStyle={[styles.grid, { width: contentWidth }]}
        ListEmptyComponent={
          <Text style={styles.empty}>Aún no tienes juegos en este estado.</Text>
        }
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    alignSelf: 'center',
    paddingTop: 20,
    paddingBottom: 16,
    gap: 4,
  },
  title: {
    color: Colors.text,
    fontSize: 30,
    fontWeight: '700',
    letterSpacing: -0.5,
    paddingHorizontal: HORIZONTAL_PADDING,
  },
  subtitle: {
    color: Colors.textMuted,
    fontSize: 13,
    paddingHorizontal: HORIZONTAL_PADDING,
    marginBottom: 12,
  },
  grid: {
    alignSelf: 'center',
    paddingHorizontal: HORIZONTAL_PADDING,
    paddingBottom: 32,
    gap: 16,
  },
  row: {
    gap: GAP,
  },
  empty: {
    color: Colors.textMuted,
    fontSize: 13,
    textAlign: 'center',
    paddingTop: 40,
  },
});
