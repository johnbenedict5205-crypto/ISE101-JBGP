
import { Alert, StyleSheet, Text, View } from "react-native";

import ActionButton from "../components/ActionButton";
import AnnouncementPanel from "../components/AnnouncementPanel";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campus Connect</Text>

      <Text style={styles.subtitle}>
        Welcome to Campus Connect!
      </Text>

      <ActionButton
        title="View Campus Updates"
        onPress={() =>
          Alert.alert(
            "Campus Connect",
            "Button Pressed!"
          )
        }
      />

      <AnnouncementPanel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2563EB",
    textAlign: "center",
    marginTop: 40,
  },
  subtitle: {
    fontSize: 16,
    color: "#6B7280",
    textAlign: "center",
    marginBottom: 20,
  },
});
