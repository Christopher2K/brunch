import { useAtomValue } from "jotai";
import { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FullWindowOverlay } from "react-native-screens";
import { messagesAtom, optionsAtom } from "./message-store";

const styles = StyleSheet.create({
  viewContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    width: "100%",
  },
});

export const MessageContainer = () => {
  const options = useAtomValue(optionsAtom);
  const messages = useAtomValue(messagesAtom);

  const { position } = options;
  const safeAreaInsets = useSafeAreaInsets();

  const positionStyle = useMemo(() => {
    if (position === "top") {
      return { top: safeAreaInsets.top };
    }

    if (position === "bottom") {
      return { bottom: safeAreaInsets.bottom };
    }
  }, [position, safeAreaInsets]);

  return (
    <FullWindowOverlay>
      <View style={[styles.viewContainer, positionStyle]}>
        {messages.map((message) => (
          <View key={message.id}>
            <Text>{message.id}</Text>
            <Text>{message.title}</Text>
          </View>
        ))}
      </View>
    </FullWindowOverlay>
  );
};
