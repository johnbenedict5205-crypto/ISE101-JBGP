
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import {
  announcements as initialAnnouncements,
  type AnnouncementItem,
} from "../data/announcements";
import AnnouncementCard from "./AnnouncementCard";

export default function AnnouncementPanel() {
  const [announcements, setAnnouncements] =
    useState<AnnouncementItem[]>(initialAnnouncements);

  const unreadCount = announcements.filter(
    (announcement) => !announcement.read
  ).length;

  const handleMarkRead = (id: string) => {
    setAnnouncements((currentAnnouncements) =>
      currentAnnouncements.map((announcement) =>
        announcement.id === id
          ? { ...announcement, read: !announcement.read }
          : announcement
      )
    );
  };

  const handleViewDetails = (id: string) => {
    router.push(`/announcements/${id}` as any);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Announcements</Text>

        <Text style={styles.unread}>
          Unread: {unreadCount}
        </Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {announcements.map((announcement) => (
          <AnnouncementCard
            key={announcement.id}
            title={announcement.title}
            category={announcement.category}
            read={announcement.read}
            onMarkRead={() => handleMarkRead(announcement.id)}
            onViewDetails={() =>
              handleViewDetails(announcement.id)
            }
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1F2937",
  },

  unread: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2563EB",
  },

  scrollView: {
    flex: 1,
  },
});
