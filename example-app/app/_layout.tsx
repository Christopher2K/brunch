import { MessageProvider } from "@cool/brunch";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <MessageProvider options={{ duration: 10000 }}>
      <Stack />
    </MessageProvider>
  );
}
