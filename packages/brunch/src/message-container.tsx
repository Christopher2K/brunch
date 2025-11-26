import { useAtomValue } from "jotai";
import { useMemo } from "react";
import { StyleSheet } from "react-native";
import Animated, { LinearTransition } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FullWindowOverlay } from "react-native-screens";
import { MessageItem } from "./message-item";
import { messagesAtom, optionsAtom } from "./message-store";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    width: "100%",
  },
  messageContainer: {
    width: "100%",
    paddingHorizontal: 16,
    gap: 8,
  },
});

export const MessageContainer = () => {
  const options = useAtomValue(optionsAtom);
  const messages = useAtomValue(messagesAtom);

  const { position, messagesContainerStyle } = options;
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
      <Animated.View
        style={[styles.container, positionStyle]}
        layout={LinearTransition}
      >
        <Animated.View
          style={[styles.messageContainer, messagesContainerStyle]}
        >
          {messages.map((message) => (
            <MessageItem key={message.id} message={message} />
          ))}
        </Animated.View>
      </Animated.View>
    </FullWindowOverlay>
  );
};
