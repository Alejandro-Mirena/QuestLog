import { useMemo, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Colors } from "@/constants/colors";
import { useLibrary } from "@/features/library/library-context";
import { normalizeText } from "@/lib/normalize-text";

import { FilterSection } from "./filter-section";
import {
  MAX_GENRE_FILTERS,
  MAX_PLATFORM_FILTERS,
  MAX_YEAR_FILTERS,
  toggleSelection,
} from "./filter-selection";
import { ResultRow } from "./result-row";
import { SearchField } from "./search-field";
import {
  BEFORE_YEAR_LABEL,
  BEFORE_YEAR_LIMIT,
  GENRES,
  PLATFORMS,
  YEARS,
} from "./search-filters";

const HORIZONTAL_PADDING = 20;
const MAX_WIDTH = 480;

export function SearchScreen() {
  const { width } = useWindowDimensions();
  const { games } = useLibrary();

  const [query, setQuery] = useState("");
  const [genreFilters, setGenreFilters] = useState<string[]>([]);
  const [platformFilters, setPlatformFilters] = useState<string[]>([]);
  const [yearFilters, setYearFilters] = useState<string[]>([]);

  const contentWidth = Math.min(width, MAX_WIDTH);
  const hasFilters =
    query.trim() !== "" ||
    genreFilters.length > 0 ||
    platformFilters.length > 0 ||
    yearFilters.length > 0;

  const results = useMemo(() => {
    const term = normalizeText(query.trim());
    const year = yearFilters[0];

    return games.filter((game) => {
      if (term !== "") {
        const matchesTitle = normalizeText(game.title).includes(term);
        const matchesStudio = normalizeText(game.studio).includes(term);

        if (!matchesTitle && !matchesStudio) {
          return false;
        }
      }

      if (
        genreFilters.length > 0 &&
        !genreFilters.some((genre) => game.genres.includes(genre))
      ) {
        return false;
      }

      if (
        platformFilters.length > 0 &&
        !platformFilters.some((platform) => game.platforms.includes(platform))
      ) {
        return false;
      }

      if (year !== undefined) {
        const matchesYear =
          year === BEFORE_YEAR_LABEL
            ? game.year < BEFORE_YEAR_LIMIT
            : game.year === Number(year);

        if (!matchesYear) {
          return false;
        }
      }

      return true;
    });
  }, [games, query, genreFilters, platformFilters, yearFilters]);

  function toggleGenre(value: string) {
    setGenreFilters((current) => toggleSelection(current, value, MAX_GENRE_FILTERS));
  }

  function togglePlatform(value: string) {
    setPlatformFilters((current) => toggleSelection(current, value, MAX_PLATFORM_FILTERS));
  }

  function toggleYear(value: string) {
    setYearFilters((current) => toggleSelection(current, value, MAX_YEAR_FILTERS));
  }

  function clearFilters() {
    setQuery("");
    setGenreFilters([]);
    setPlatformFilters([]);
    setYearFilters([]);
  }

  return (
    <SafeAreaView style={styles.screen} edges={["top", "left", "right"]}>
      <ScrollView
        contentContainerStyle={[styles.content, { width: contentWidth }]}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Buscar</Text>

        <SearchField value={query} onChangeText={setQuery} />

        <FilterSection
          title="Género"
          options={GENRES}
          selected={genreFilters}
          onToggle={toggleGenre}
        />
        <FilterSection
          title="Plataforma"
          options={PLATFORMS}
          selected={platformFilters}
          onToggle={togglePlatform}
        />
        <FilterSection title="Año" options={YEARS} selected={yearFilters} onToggle={toggleYear} />

        <View style={styles.resultsHeader}>
          <Text style={styles.resultsTitle}>
            {results.length} {results.length === 1 ? "resultado" : "resultados"}
          </Text>

          {hasFilters && (
            <Pressable onPress={clearFilters} hitSlop={10} accessibilityRole="button">
              <Text style={styles.clear}>Limpiar</Text>
            </Pressable>
          )}
        </View>

        {results.length === 0 ? (
          <Text style={styles.empty}>No encontramos juegos con esos filtros.</Text>
        ) : (
          <View style={styles.results}>
            {results.map((game) => (
              <ResultRow key={game.id} game={game} />
            ))}
          </View>
        )}
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
  resultsHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  resultsTitle: {
    color: Colors.text,
    fontSize: 15,
    fontWeight: "600",
  },
  clear: {
    color: Colors.primary,
    fontSize: 13,
    fontWeight: "600",
  },
  results: {
    gap: 10,
  },
  empty: {
    color: Colors.textMuted,
    fontSize: 13,
    textAlign: "center",
    paddingVertical: 24,
  },
});
