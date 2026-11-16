import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

import { Colors } from "@/constants/colors";

type SearchFieldProps = {
  value: string;
  onChangeText: (text: string) => void;
};

export function SearchField({ value, onChangeText }: SearchFieldProps) {
  return (
    <View style={styles.field}>
      <Ionicons name="search" size={18} color={Colors.textMuted} />
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder="Buscar juegos, sagas o estudios"
        placeholderTextColor={Colors.textMuted}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="search"
        accessibilityLabel="Buscar juegos"
      />

      {value !== "" && (
        <Pressable
          onPress={() => onChangeText("")}
          hitSlop={10}
          accessibilityRole="button"
          accessibilityLabel="Borrar búsqueda"
        >
          <Ionicons name="close-circle" size={18} color={Colors.textMuted} />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
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
});
