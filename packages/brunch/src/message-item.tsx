import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeInUp, FadeOutUp } from "react-native-reanimated";
import type { Message, MessageSeverity } from "./types";

const bgColorBySeverity: Record<MessageSeverity, string> = {
  success: "#059669",
  info: "#2563eb",
  warning: "#d97706",
  error: "#dc2626",
};

const textColorBySeverity: Record<MessageSeverity, string> = {
  success: "#ffffff",
  info: "#ffffff",
  warning: "#ffffff",
  error: "#ffffff",
};

const styles = StyleSheet.create({
  animatedContainer: {
    width: "100%",
  },
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  textContainer: {
    flexDirection: "column",
    gap: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: 700,
  },
  description: {
    fontSize: 16,
  },
  actionText: {
    fontSize: 16,
    fontWeight: 700,
  },
});

type MessageItemProps = {
  message: Message;
};

export const MessageItem = ({ message }: MessageItemProps) => {
  const backgroundColor = bgColorBySeverity[message.severity];
  const color = textColorBySeverity[message.severity];

  return (
    <Animated.View
      style={styles.animatedContainer}
      entering={FadeInUp}
      exiting={FadeOutUp}
    >
      <View style={[styles.container, { backgroundColor }]}>
        <View style={[styles.textContainer]}>
          <Text style={[styles.title, { color }]}>{message.title}</Text>
          <Text style={[styles.description, { color }]}>
            {message.description}
          </Text>
        </View>
        {message.action && (
          <TouchableOpacity onPress={() => message.action?.onPress(message)}>
            <Text style={[styles.actionText, { color }]}>
              {message.action.label}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </Animated.View>
  );
};
