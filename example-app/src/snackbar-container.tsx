import { openMessage, useMessages } from "@cool/brunch";
import { Button, Text, View } from "react-native";

export const SnackbarContainer = () => {
  const { messages } = useMessages();

  return (
    <View>
      <Button
        title="Open Message"
        onPress={() =>
          openMessage({
            title: "Hello World",
            severity: "info",
            description: "This is a test!!!!",
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
