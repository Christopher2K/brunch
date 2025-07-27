import { MessageProvider, useMessages } from "@cool/brunch";
import { Button, Text, View } from "react-native";

export default function Custom() {
  return (
    <MessageProvider>
      <Demo />
    </MessageProvider>
  );
}

export const Demo = () => {
  const { messages, openMessage } = useMessages();
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

      {messages.map((message) => (
        <View key={message.id}>
          <Text>{message.id}</Text>
          <Text>{message.title}</Text>
        </View>
      ))}
    </View>
  );
};
