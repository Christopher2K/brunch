import { useAtomValue } from "jotai";
import { useMemo } from "react";
import { StyleSheet, type ViewStyle } from "react-native";
import Animated from "react-native-reanimated";
import { FullWindowOverlay } from "react-native-screens";
import { MessageItem } from "./message-item";
import { messagesAtom, optionsAtom } from "./message-store";

const SPACING = 40;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    width: "100%",
    paddingHorizontal: 16,
    gap: 8,
  },
});

export const MessageContainer = () => {
  const options = useAtomValue(optionsAtom);
  const messages = useAtomValue(messagesAtom);

  const { position, messagesContainerStyle } = options;

  const positionStyle = useMemo(() => {
    if (position === "top") {
      return { top: SPACING } satisfies ViewStyle;
    }

    if (position === "bottom") {
      return {
        bottom: SPACING,
        justifyContent: "flex-end",
      } satisfies ViewStyle;
    }

    return {};
  }, [position]);

  if (messages.length === 0) {
    return null;
  }

  return (
    <FullWindowOverlay>
      <Animated.View
        accessibilityLiveRegion="polite"
        style={[styles.container, positionStyle, messagesContainerStyle]}
      >
        {messages.map((message) => (
          <Animated.View key={message.id}>
            <MessageItem key={message.id} message={message} />
          </Animated.View>
        ))}
      </Animated.View>
    </FullWindowOverlay>
  );
};
