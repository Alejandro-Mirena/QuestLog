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

import { ActivityItem } from "./activity-item";
import { buildActivityFeed } from "./social-data";

const HORIZONTAL_PADDING = 20;
const MAX_WIDTH = 480;

export function SocialScreen() {
  const { width } = useWindowDimensions();
  const { games, reviews } = useLibrary();

  const events = useMemo(
    () => buildActivityFeed(games, reviews),
    [games, reviews]
  );

  const contentWidth = Math.min(width, MAX_WIDTH);

  return (
    <SafeAreaView style={styles.screen} edges={["top", "left", "right"]}>
      <ScrollView
        contentContainerStyle={[styles.content, { width: contentWidth }]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Social</Text>
          <Text style={styles.subtitle}>La actividad de tu comunidad</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Actividad reciente</Text>
          <View style={styles.feed}>
            {events.map((event) => (
              <ActivityItem key={event.id} event={event} />
            ))}
          </View>
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
  feed: {
    gap: 10,
  },
});
