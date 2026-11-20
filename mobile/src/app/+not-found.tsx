import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Colors } from "@/constants/colors";

export default function NotFoundScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.glowTop} />
      <View style={styles.glowBottom} />

      <View style={styles.dots}>
        {Array.from({ length: 12 }, (_, index) => (
          <View key={index} style={styles.dot} />
        ))}
      </View>

      <View style={styles.sparkleTop}>
        <Ionicons name="sparkles" size={18} color={Colors.secondary} />
      </View>
      <View style={styles.sparkleBottom}>
        <Ionicons name="star" size={14} color={Colors.rating} />
      </View>

      <View style={styles.card}>
        <View style={styles.topline}>
          <Text style={styles.code}>404</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>QUEST FAILED</Text>
          </View>
        </View>

        <View style={styles.iconWrap}>
          <Ionicons name="game-controller" size={46} color={Colors.primary} />
          <View style={styles.warning}>
            <Ionicons name="warning" size={14} color={Colors.background} />
          </View>
        </View>

        <Text style={styles.title}>Nivel no encontrado</Text>
        <Text style={styles.description}>
          Esta página no está en tu log. Puede que la ruta cambiara de estante o
          que nunca existiera.
        </Text>

        <View style={styles.clue}>
          <View style={styles.clueTop}>
            <Text style={styles.clueLabel}>Pistas encontradas</Text>
            <Text style={styles.clueValue}>0/1</Text>
          </View>
          <View style={styles.track}>
            <View style={styles.marker} />
          </View>
        </View>

        <Link href="/" style={styles.button}>
          <Ionicons name="home" size={16} color={Colors.background} />
          <Text style={styles.buttonText}>Volver al inicio</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    overflow: "hidden",
  },
  glowTop: {
    position: "absolute",
    width: 260,
    height: 260,
    borderRadius: 130,
    borderWidth: 1,
    borderColor: `${Colors.primary}35`,
    top: -100,
    left: -80,
  },
  glowBottom: {
    position: "absolute",
    width: 320,
    height: 320,
    borderRadius: 160,
    borderWidth: 1,
    borderColor: `${Colors.secondary}28`,
    bottom: -150,
    right: -110,
  },
  dots: {
    position: "absolute",
    flexDirection: "row",
    flexWrap: "wrap",
    width: 130,
    gap: 14,
    top: 90,
    right: -20,
    transform: [{ rotate: "18deg" }],
  },
  dot: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: `${Colors.text}30`,
  },
  sparkleTop: {
    position: "absolute",
    top: 110,
    left: 36,
    opacity: 0.8,
  },
  sparkleBottom: {
    position: "absolute",
    bottom: 120,
    right: 44,
    opacity: 0.7,
  },
  card: {
    width: "100%",
    maxWidth: 360,
    alignItems: "center",
    backgroundColor: Colors.card,
    borderColor: Colors.border,
    borderWidth: 1,
    borderRadius: 20,
    padding: 24,
    gap: 12,
  },
  topline: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  code: {
    color: Colors.primary,
    fontSize: 44,
    fontWeight: "700",
    letterSpacing: -2,
  },
  badge: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: `${Colors.danger}55`,
    backgroundColor: `${Colors.danger}1F`,
  },
  badgeText: {
    color: Colors.danger,
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1,
  },
  iconWrap: {
    width: 92,
    height: 92,
    borderRadius: 46,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: `${Colors.primary}44`,
    backgroundColor: `${Colors.primary}18`,
    marginTop: 4,
  },
  warning: {
    position: "absolute",
    right: 2,
    bottom: 2,
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: Colors.card,
    backgroundColor: Colors.danger,
  },
  title: {
    color: Colors.text,
    fontSize: 21,
    fontWeight: "700",
    textAlign: "center",
  },
  description: {
    color: Colors.textMuted,
    fontSize: 13,
    lineHeight: 19,
    textAlign: "center",
  },
  clue: {
    width: "100%",
    gap: 8,
    paddingVertical: 11,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: Colors.background,
  },
  clueTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  clueLabel: {
    color: Colors.textMuted,
    fontSize: 11,
  },
  clueValue: {
    color: Colors.rating,
    fontSize: 12,
    fontWeight: "700",
  },
  track: {
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.border,
  },
  marker: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.danger,
  },
  button: {
    alignSelf: "stretch",
    flexDirection: "row",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 13,
    borderRadius: 12,
    backgroundColor: Colors.primary,
    marginTop: 4,
  },
  buttonText: {
    color: Colors.background,
    paddingHorizontal: 4,
    fontSize: 13,
    fontWeight: "700",
  },
});
