import { Stack } from "expo-router";

export default function RootLayout() {
  // stack order appears not to matter
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="about" options={{ title: 'About' }} />
    </Stack>
  );
}
