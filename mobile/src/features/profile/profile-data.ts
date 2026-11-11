import type { Ionicons } from '@expo/vector-icons';

import { Colors } from '@/constants/colors';
import type { LibraryStats } from '@/features/library/library-stats';

export type IconName = keyof typeof Ionicons.glyphMap;

export type ProfileStat = {
  id: string;
  label: string;
  value: string;
  icon: IconName;
  color: string;
};

export function buildProfileStats(stats: LibraryStats): ProfileStat[] {
  return [
    {
      id: 'games',
      label: 'Juegos',
      value: String(stats.totalGames),
      icon: 'game-controller',
      color: Colors.primary,
    },
    {
      id: 'completed',
      label: 'Completados',
      value: String(stats.completed),
      icon: 'trophy',
      color: Colors.rating,
    },
    {
      id: 'reviews',
      label: 'Reseñas',
      value: String(stats.reviews),
      icon: 'chatbubble-ellipses',
      color: Colors.secondary,
    },
    {
      id: 'hours',
      label: 'Horas jugadas',
      value: String(stats.hours),
      icon: 'time',
      color: Colors.textMuted,
    },
  ];
}
