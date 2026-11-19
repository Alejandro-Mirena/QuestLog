import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

import { Colors } from "@/constants/colors";

import { formatRelativeTime } from "./social-data";
import type { ActivityEvent, ActivityType } from "./social-types";

type IconName = keyof typeof Ionicons.glyphMap;

type ActionStyle = {
  own: string;
  other: string;
  icon: IconName;
  color: string;
};

const ACTIONS: Record<ActivityType, ActionStyle> = {
  completed: {
    own: "Completaste",
    other: "Completó",
    icon: "checkmark-circle",
    color: Colors.primary,
  },
  started: {
    own: "Empezaste a jugar",
    other: "Empezó a jugar",
    icon: "play-circle",
    color: Colors.secondary,
  },
  review: {
    own: "Reseñaste",
    other: "Reseñó",
    icon: "chatbubble-ellipses",
    color: Colors.rating,
  },
  hours: {
    own: "Llevas",
    other: "Lleva",
    icon: "time",
    color: Colors.textMuted,
  },
};

type ActivityItemProps = {
  event: ActivityEvent;
};

export function ActivityItem({ event }: ActivityItemProps) {
  const action = ACTIONS[event.type];
  const isOwn = event.author.handle === "@alexquest";
  const rating = event.rating;

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={[styles.avatar, { backgroundColor: event.author.tone }]}>
          <Text style={styles.initial}>{event.author.name.charAt(0)}</Text>
        </View>

        <View style={styles.author}>
          <Text style={styles.name}>{event.author.name}</Text>
          <Text style={styles.handle}>{event.author.handle}</Text>
        </View>

        <Text style={styles.time}>{formatRelativeTime(event.minutesAgo)}</Text>
      </View>

      <View style={styles.body}>
        <View style={[styles.cover, { backgroundColor: event.tone }]}>
          <Ionicons
            name="game-controller"
            size={18}
            color="rgba(232, 242, 245, 0.3)"
          />
        </View>

        <View style={styles.detail}>
          <Text style={styles.action}>
            {isOwn ? action.own : action.other}
          </Text>
          <Text style={styles.game} numberOfLines={2}>
            {event.game}
          </Text>

          <View style={styles.meta}>
            <Ionicons name={action.icon} size={13} color={action.color} />

            {rating !== undefined ? (
              <View
                style={styles.stars}
                accessibilityLabel={`${rating} de 5 estrellas`}
              >
                {Array.from({ length: 5 }, (_, index) => (
                  <Ionicons
                    key={index}
                    name={index < rating ? "star" : "star-outline"}
                    size={12}
                    color={Colors.rating}
                  />
                ))}
              </View>
            ) : (
              <Text style={styles.metaText}>
                {event.hours !== undefined
                  ? `${event.hours} h jugadas`
                  : isOwn
                    ? "En tu log"
                    : "En su log"}
              </Text>
            )}
          </View>
        </View>
      </View>

      {event.quote !== undefined && (
        <Text style={styles.quote}>{`"${event.quote}"`}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    borderColor: Colors.border,
    borderWidth: 1,
    borderRadius: 14,
    padding: 14,
    gap: 12,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
  },
  initial: {
    color: Colors.background,
    fontSize: 14,
    fontWeight: "700",
  },
  author: {
    flex: 1,
    gap: 1,
  },
  name: {
    color: Colors.text,
    fontSize: 13,
    fontWeight: "700",
  },
  handle: {
    color: Colors.textMuted,
    fontSize: 11,
  },
  time: {
    color: Colors.textMuted,
    fontSize: 11,
  },
  body: {
    flexDirection: "row",
    gap: 12,
  },
  cover: {
    width: 44,
    height: 56,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  detail: {
    flex: 1,
    gap: 3,
  },
  action: {
    color: Colors.textMuted,
    fontSize: 12,
  },
  game: {
    color: Colors.text,
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 19,
  },
  meta: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 2,
  },
  stars: {
    flexDirection: "row",
    gap: 2,
  },
  metaText: {
    color: Colors.textMuted,
    fontSize: 12,
  },
  quote: {
    color: Colors.textMuted,
    fontSize: 13,
    lineHeight: 19,
    borderLeftWidth: 2,
    borderLeftColor: Colors.border,
    paddingLeft: 10,
  },
});
