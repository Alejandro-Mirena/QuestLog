import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import { Colors } from "@/constants/colors";

import {
  MAX_SEARCH_DIGITS,
  MAX_SEARCH_LENGTH,
  MAX_SEARCH_WORDS,
  type SearchBlock,
  sanitizeSearchInput,
} from "./search-input";

const BLOCK_MESSAGES: Record<SearchBlock, string> = {
  characters: `Máximo ${MAX_SEARCH_LENGTH} caracteres.`,
  words: `Máximo ${MAX_SEARCH_WORDS} palabras.`,
  digits: `Máximo ${MAX_SEARCH_DIGITS} números.`,
  symbols: "Solo letras, números y los signos : - ' . &",
  empty: "Escribe al menos una letra o un número.",
};

const WARNING_DURATION = 3000;

type SearchFieldProps = {
  value: string;
  onChangeText: (text: string) => void;
};

export function SearchField({ value, onChangeText }: SearchFieldProps) {
  const [warning, setWarning] = useState<{
    text: string;
    block: SearchBlock;
    id: number;
  } | null>(null);

  useEffect(() => {
    if (warning === null) {
      return;
    }

    const timer = setTimeout(() => setWarning(null), WARNING_DURATION);
    return () => clearTimeout(timer);
  }, [warning]);

  function handleChange(text: string) {
    const result = sanitizeSearchInput(text);
    onChangeText(result.text);

    if (result.block === null) {
      setWarning(null);
      return;
    }

    const block = result.block;
    const message = BLOCK_MESSAGES[block];
    setWarning((current) => ({
      text: message,
      block,
      id: (current?.id ?? 0) + 1,
    }));
  }

  function handleClear() {
    onChangeText("");
    setWarning(null);
  }

  const showWarning =
    warning !== null &&
    (value !== "" || warning.block === "empty" || warning.block === "symbols");

  return (
    <View style={styles.wrapper}>
      <View style={styles.field}>
        <Ionicons name="search" size={18} color={Colors.textMuted} />
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={handleChange}
          placeholder="Buscar juegos, sagas o estudios"
          placeholderTextColor={Colors.textMuted}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="search"
          accessibilityLabel="Buscar juegos"
        />

        {value !== "" && (
          <Pressable
            onPress={handleClear}
            hitSlop={10}
            accessibilityRole="button"
            accessibilityLabel="Borrar búsqueda"
          >
            <Ionicons name="close-circle" size={18} color={Colors.textMuted} />
          </Pressable>
        )}
      </View>

      {showWarning && warning !== null && (
        <View style={styles.warning}>
          <Ionicons name="alert-circle" size={14} color={Colors.rating} />
          <Text style={styles.warningText} accessibilityLiveRegion="polite">
            {warning.text}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    gap: 8,
  },
  field: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: Colors.card,
    borderColor: Colors.border,
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  input: {
    flex: 1,
    color: Colors.text,
    fontSize: 14,
    padding: 0,
  },
  warning: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  warningText: {
    flex: 1,
    color: Colors.rating,
    fontSize: 12,
  },
});
