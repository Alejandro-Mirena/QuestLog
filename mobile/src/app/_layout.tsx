import { DarkTheme, Stack, ThemeProvider } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { Colors } from '@/constants/colors';
import { LibraryProvider } from '@/features/library/library-context';

const navigationTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: Colors.primary,
    background: Colors.background,
    card: Colors.card,
    text: Colors.text,
    border: Colors.border,
    notification: Colors.danger,
  },
};

export default function RootLayout() {
  return (
    <ThemeProvider value={navigationTheme}>
      <LibraryProvider>
        <Stack screenOptions={{ headerShown: false }} />
        <StatusBar style="light" />
      </LibraryProvider>
    </ThemeProvider>
  );
}
