
import { Stack, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

import { announcements } from "../../data/announcements";

export default function AnnouncementDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const announcement = announcements.find(
    (item) => item.id === id
  );

  if (!announcement) {
    return (
      <View style={styles.container}>
        <Text style={styles.notFound}>
          Announcement Not Found
        </Text>

        <Text style={styles.description}>
          The announcement you are looking for does not exist.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: announcement.title,
        }}
      />

      <Text style={styles.title}>
        {announcement.title}
      </Text>

      <Text style={styles.category}>
        Category: {announcement.category}
      </Text>

      <Text style={styles.id}>
        Announcement ID: {announcement.id}
      </Text>

      <Text style={styles.status}>
        Status: {announcement.read ? "Read" : "Unread"}
      </Text>

      <Text style={styles.description}>
        This is the announcement details screen of Campus Connect.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F8FAFC",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: 15,
  },

  category: {
    fontSize: 16,
    color: "#2563EB",
    marginBottom: 10,
  },

  id: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 10,
  },

  status: {
    fontSize: 14,
    color: "#16A34A",
    marginBottom: 15,
  },

  description: {
    fontSize: 16,
    color: "#374151",
    lineHeight: 24,
  },

  notFound: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#DC2626",
    marginBottom: 10,
  },
});
