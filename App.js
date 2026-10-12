import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, I'm Benedict!</Text>
      <Text style={styles.subtitle}>Welcome to React Native!</Text>
      <Text style={styles.section}>BSIS 3A</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E6F4FF",
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#123B66",
    marginBottom: 12,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#444444",
    marginBottom: 15,
    textAlign: "center",
  },
  section: {
    fontSize: 16,
    fontWeight: "600",
    color: "#00796B",
    marginTop: 8,
    padding: 10,
  },
});
