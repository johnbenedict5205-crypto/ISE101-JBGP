
import { Pressable, StyleSheet, Text, View } from "react-native";

type AnnouncementCardProps = {
  title: string;
  category: string;
  read: boolean;
  onMarkRead: () => void;
  onViewDetails: () => void;
};

export default function AnnouncementCard({
  title,
  category,
  read,
  onMarkRead,
  onViewDetails,
}: AnnouncementCardProps) {
  return (
    <View style={styles.card}>
      {/* Announcement Information */}
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.category}>
        Category: {category}
      </Text>

      <Text style={styles.status}>
        Status: {read ? "Read" : "Unread"}
      </Text>

      {/* Mark as Read / Unread Button */}
      <Pressable
        onPress={onMarkRead}
        style={({ pressed }) => [
          styles.button,
          styles.readButton,
          pressed && styles.buttonPressed,
        ]}
      >
        <Text style={styles.buttonText}>
          {read ? "Mark as Unread" : "Mark as Read"}
        </Text>
      </Pressable>

      {/* View Details Button */}
      <Pressable
        onPress={onViewDetails}
        style={({ pressed }) => [
          styles.button,
          styles.detailsButton,
          pressed && styles.buttonPressed,
        ]}
      >
        <Text style={styles.buttonText}>
          View Details
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#DCE3EC",
  },

  title: {
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 6,
    color: "#1F2937",
  },

  category: {
    fontSize: 14,
    color: "#555555",
  },

  status: {
    fontSize: 14,
    marginTop: 6,
    marginBottom: 12,
    color: "#6B7280",
  },

  button: {
    padding: 11,
    borderRadius: 6,
    alignItems: "center",
    marginBottom: 8,
  },

  readButton: {
    backgroundColor: "#2563EB",
  },

  detailsButton: {
    backgroundColor: "#16A34A",
  },

  buttonPressed: {
    opacity: 0.65,
    transform: [{ scale: 0.98 }],
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 14,
  },
});
