import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Brunch Test App" }} />

      <Stack.Screen
        name="default"
        options={{ title: "Default implementation" }}
      />
      <Stack.Screen
        name="custom-default-implementation"
        options={{ title: "Customize the default implementation" }}
      />
      <Stack.Screen
        name="custom"
        options={{ title: "Total custom implementation" }}
      />
    </Stack>
  );
}
