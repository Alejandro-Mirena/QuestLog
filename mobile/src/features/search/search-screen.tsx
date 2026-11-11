import { ScrollView, StyleSheet, Text, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Colors } from "@/constants/colors";

import { FilterSection } from "./filter-section";
import { SearchField } from "./search-field";
import { GENRES, PLATFORMS, YEARS } from "./search-filters";

const HORIZONTAL_PADDING = 20;
const MAX_WIDTH = 480;

export function SearchScreen() {
  const { width } = useWindowDimensions();
  const contentWidth = Math.min(width, MAX_WIDTH);

  return (
    <SafeAreaView style={styles.screen} edges={["top", "left", "right"]}>
      <ScrollView
        contentContainerStyle={[styles.content, { width: contentWidth }]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Buscar</Text>

        <SearchField />

        <FilterSection title="Género" options={GENRES} />
        <FilterSection title="Plataforma" options={PLATFORMS} />
        <FilterSection title="Año" options={YEARS} />
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
  title: {
    color: Colors.text,
    fontSize: 30,
    fontWeight: "700",
    letterSpacing: -0.5,
  },
});
