
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Campus Connect",
          headerShown: true,
        }}
      />

      <Stack.Screen
        name="announcements/[id]"
        options={{
          title: "Announcement Details",
          headerShown: true,
        }}
      />
    </Stack>
  );
}
