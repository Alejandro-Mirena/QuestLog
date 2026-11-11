import { useMemo } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Colors } from "@/constants/colors";
import { useLibrary } from "@/features/library/library-context";
import { computeLibraryStats } from "@/features/library/library-stats";

import { buildProfileStats } from "./profile-data";
import { ProfileHeader } from "./profile-header";
import { ReviewCard } from "./review-card";
import { SettingsSection } from "./settings-section";
import { StatsGrid } from "./stats-grid";

const HORIZONTAL_PADDING = 20;
const MAX_WIDTH = 480;

export function ProfileScreen() {
  const { width } = useWindowDimensions();
  const { games, reviews } = useLibrary();

  const stats = useMemo(
    () => buildProfileStats(computeLibraryStats(games, reviews)),
    [games, reviews]
  );

  const recentReviews = useMemo(() => reviews.slice(0, 3), [reviews]);

  const contentWidth = Math.min(width, MAX_WIDTH);

  return (
    <SafeAreaView style={styles.screen} edges={["top", "left", "right"]}>
      <ScrollView
        contentContainerStyle={[styles.content, { width: contentWidth }]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Perfil</Text>
          <Text style={styles.subtitle}>
            Tus estadísticas, tus reseñas y ajustes
          </Text>
        </View>

        <ProfileHeader
          name="Alex"
          handle="@alexquest"
          bio="Cazador de logros y RPGs por turnos. Siempre con algo pendiente en la biblioteca."
          memberSince="Miembro desde 2024"
        />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Estadísticas</Text>
          <StatsGrid stats={stats} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Reseñas recientes</Text>
          <View style={styles.reviews}>
            {recentReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ajustes</Text>
          <SettingsSection />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    alignSelf: "center",
    paddingTop: 20,
    paddingHorizontal: HORIZONTAL_PADDING,
    paddingBottom: 32,
    gap: 22,
  },
  header: {
    gap: 2,
  },
  title: {
    color: Colors.text,
    fontSize: 30,
    fontWeight: "700",
    letterSpacing: -0.5,
  },
  subtitle: {
    color: Colors.textMuted,
    fontSize: 13,
  },
  section: {
    gap: 12,
  },
  sectionTitle: {
    color: Colors.text,
    fontSize: 17,
    fontWeight: "600",
  },
  reviews: {
    gap: 10,
  },
});
