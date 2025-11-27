import { closeMessage, MessageProvider, openMessage } from "@coolstack/brunch";
import { Button, View } from "react-native";

export default function Default() {
  return (
    <MessageProvider
      options={{
        duration: undefined,
        position: "bottom",
      }}
    >
      <Demo />
    </MessageProvider>
  );
}

export const Demo = () => {
  return (
    <View>
      <Button
        title="Open info message"
        onPress={() =>
          openMessage({
            title: "Hello World",
            severity: "info",
            description: "This is a test",
            action: {
              label: "Action",
              onPress: ({ id }) => {
                closeMessage(id);
              },
            },
          })
        }
      />

      <Button
        title="Open warning message"
        onPress={() =>
          openMessage({
            title: "Hello World",
            severity: "warning",
            description: "This is a test",
            action: {
              label: "Action",
              onPress: ({ id }) => {
                closeMessage(id);
              },
            },
          })
        }
      />

      <Button
        title="Open error message"
        onPress={() =>
          openMessage({
            title: "Hello World",
            severity: "error",
            description: "This is a test",
            action: {
              label: "Action",
              onPress: ({ id }) => {
                closeMessage(id);
              },
            },
          })
        }
      />

      <Button
        title="Open success message"
        onPress={() =>
          openMessage({
            title: "Hello World",
            severity: "success",
            description: "This is a test",
            action: {
              label: "Action",
              onPress: ({ id }) => {
                closeMessage(id);
              },
            },
          })
        }
      />
    </View>
  );
};
