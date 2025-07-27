import { MessageContainer, MessageProvider, openMessage } from "@cool/brunch";
import { Button, Text, View } from "react-native";

export default function Default() {
  return (
    <MessageProvider>
      <MessageContainer />
      <Demo />
    </MessageProvider>
  );
}

export const Demo = () => {
  return (
    <View>
      <Button
        title="Open Message"
        onPress={() =>
          openMessage({
            title: "Hello World",
            severity: "info",
            description: "This is a test",
          })
        }
      />
    </View>
  );
};
