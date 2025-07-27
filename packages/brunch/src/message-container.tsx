import { useAtomValue } from "jotai";
import { useMemo } from "react";
import { StyleSheet } from "react-native";
import Animated, { LinearTransition } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FullWindowOverlay } from "react-native-screens";
import { MessageItem } from "./message-item";
import { messagesAtom, optionsAtom } from "./message-store";

const styles = StyleSheet.create({
  viewContainer: {
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
      <Animated.View
        style={[styles.viewContainer, positionStyle]}
        layout={LinearTransition}
      >
        {messages.map((message) => (
          <MessageItem key={message.id} message={message} />
        ))}
      </Animated.View>
    </FullWindowOverlay>
  );
};
