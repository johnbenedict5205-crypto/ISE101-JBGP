
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type ActionButtonProps = {
  title: string;
  onPress: () => void;
};

export default function ActionButton({
  title,
  onPress,
}: ActionButtonProps) {
  const [pressedMessage, setPressedMessage] = useState("");

  const handlePress = () => {
    setPressedMessage("Button Pressed!");
    onPress();
  };

  return (
    <View>
      <Pressable
        onPress={handlePress}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>

      {pressedMessage !== "" && (
        <Text style={styles.message}>{pressedMessage}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#2563EB",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 8,
  },
  buttonPressed: {
    opacity: 0.6,
    transform: [{ scale: 0.97 }],
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  message: {
    color: "green",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
});
