import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Brunch Test App" }} />

      <Stack.Screen
        name="default"
        options={{ title: "Default implementation" }}
      />
      <Stack.Screen
        name="custom"
        options={{ title: "Custom implementation" }}
      />
      <Stack.Screen
        name="modal"
        options={{ title: "With a native modal", presentation: "modal" }}
      />
    </Stack>
  );
}
