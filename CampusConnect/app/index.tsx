
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import type { Announcement } from "../types/announcement";
import { getUnreadAnnouncements } from "../services/announcementUtils";

const sampleAnnouncements: Announcement[] = [
  {
    id: "a1",
    title: "Enrollment reminders",
    category: "Academic",
    read: false,
  },
  {
    id: "a2",
    title: "Campus orientation",
    category: "Events",
    read: true,
  },
  {
    id: "a3",
    title: "Library schedule",
    category: "Notice",
    read: false,
  },
];

export default function HomeScreen() {
  const unread = getUnreadAnnouncements(sampleAnnouncements);

  return (
    <View style={styles.container}>
      {/* NAVBAR */}
      <View style={styles.navbar}>
        <Text style={styles.logo}>Campus Connect</Text>

        <View style={styles.navLinks}>
          <TouchableOpacity>
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.navText}>Explore</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.navText}>Docs ↗</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* MAIN CONTENT */}
      <View style={styles.content}>
        <Text style={styles.title}>Campus Connect</Text>

        <Text style={styles.description}>
          One campus. Connected students.
          {"\n"}
          Welcome to the Week 2 project.
        </Text>

        {/* ANNOUNCEMENTS */}
        <View style={styles.announcementBox}>
          <Text style={styles.sectionTitle}>Campus Announcements</Text>

          <Text style={styles.unread}>
            Unread announcements: {unread.length}
          </Text>

          {sampleAnnouncements.map((item) => (
            <View key={item.id} style={styles.announcementItem}>
              <Text style={styles.announcementTitle}>
                {item.title}
              </Text>

              <Text style={styles.category}>
                {item.category} • {item.read ? "Read" : "Unread"}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F5F9",
  },

  navbar: {
    height: 65,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
  },

  logo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0F172A",
  },

  navLinks: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },

  navText: {
    fontSize: 14,
    color: "#334155",
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 8,
  },

  description: {
    fontSize: 12,
    color: "#000000",
    textAlign: "center",
    lineHeight: 16,
    marginBottom: 25,
  },

  announcementBox: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0F172A",
    marginBottom: 10,
  },

  unread: {
    fontSize: 14,
    color: "#2563EB",
    fontWeight: "600",
    marginBottom: 15,
  },

  announcementItem: {
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#E2E8F0",
  },

  announcementTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#334155",
  },

  category: {
    fontSize: 12,
    color: "#64748B",
    marginTop: 4,
  },
});
