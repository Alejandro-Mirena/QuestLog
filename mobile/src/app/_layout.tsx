import { Head } from 'expo-router/head';
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
      <Head>
        <title>QuestLog — Tu biblioteca de videojuegos</title>
        <meta
          name="description"
          content="Lleva el control de tus juegos, tus horas y tus reseñas desde una sola app."
        />
        <meta name="theme-color" content="#0A0F12" />
      </Head>
      <LibraryProvider>
        <Stack screenOptions={{ headerShown: false }} />
        <StatusBar style="light" />
      </LibraryProvider>
    </ThemeProvider>
  );
}
