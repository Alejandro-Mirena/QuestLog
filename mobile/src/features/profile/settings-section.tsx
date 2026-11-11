import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

import { Colors } from "@/constants/colors";

import type { IconName } from "./profile-data";

export function SettingsSection() {
  const [notifications, setNotifications] = useState(true);
  const [publicProfile, setPublicProfile] = useState(false);

  return (
    <View style={styles.card}>
      <SettingsRow
        icon="notifications"
        label="Notificaciones"
        description="Lanzamientos y actividad de la comunidad"
        value={notifications}
        onValueChange={setNotifications}
      />

      <View style={styles.divider} />

      <SettingsRow
        icon="globe"
        label="Perfil público"
        description="Cualquiera puede ver tus reseñas"
        value={publicProfile}
        onValueChange={setPublicProfile}
      />
    </View>
  );
}

type SettingsRowProps = {
  icon: IconName;
  label: string;
  description: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
};

function SettingsRow({
  icon,
  label,
  description,
  value,
  onValueChange,
}: SettingsRowProps) {
  return (
    <View style={styles.row}>
      <View style={styles.iconWrap}>
        <Ionicons name={icon} size={18} color={Colors.textMuted} />
      </View>

      <View style={styles.rowText}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>

      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: Colors.border, true: Colors.primary }}
        thumbColor={Colors.text}
        ios_backgroundColor={Colors.border}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    borderColor: Colors.border,
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 14,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 14,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.border,
  },
  iconWrap: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: Colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  rowText: {
    flex: 1,
    gap: 2,
  },
  label: {
    color: Colors.text,
    fontSize: 14,
    fontWeight: "600",
  },
  description: {
    color: Colors.textMuted,
    fontSize: 11,
    lineHeight: 15,
  },
});
