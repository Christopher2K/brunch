import { useAtomValue } from "jotai";
import { useMemo } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { optionsAtom } from "./message-store";
import type { Message, MessageSeverity } from "./types";
import { extractStyleFromStyleProp } from "./utils";

const MessageItemNativeID = {
  title: "MessageItem.Title",
  description: "MessageItem.Description",
  action: "MessageItem.Action",
};

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

export type MessageItemProps = {
  message: Message;
};

export const MessageItem = ({ message }: MessageItemProps) => {
  const options = useAtomValue(optionsAtom);
  const backgroundColor = bgColorBySeverity[message.severity];
  const color = textColorBySeverity[message.severity];

  const {
    messageActionTextStyle,
    messageContainerStyle,
    messageDescriptionStyle,
    messageTitleStyle,
  } = options;

  const computedContainerStyle = useMemo(
    () =>
      extractStyleFromStyleProp(messageContainerStyle, {
        messageSeverity: message.severity,
      }),
    [messageContainerStyle, message.severity],
  );

  const computedTitleStyle = useMemo(
    () =>
      extractStyleFromStyleProp(messageTitleStyle, {
        messageSeverity: message.severity,
      }),
    [messageTitleStyle, message.severity],
  );

  const computedDescriptionStyle = useMemo(
    () =>
      extractStyleFromStyleProp(messageDescriptionStyle, {
        messageSeverity: message.severity,
      }),
    [messageDescriptionStyle, message.severity],
  );

  const computedActionTextStyle = useMemo(
    () =>
      extractStyleFromStyleProp(messageActionTextStyle, {
        messageSeverity: message.severity,
      }),
    [messageActionTextStyle, message.severity],
  );

  return (
    <View
      accessibilityRole="alert"
      style={[styles.container, { backgroundColor }, computedContainerStyle]}
    >
      <View
        style={[styles.textContainer]}
        // @ts-expect-error: Typings missing for this one
        experimental_accessibilityOrder={[
          MessageItemNativeID.title,
          MessageItemNativeID.description,
          MessageItemNativeID.action,
        ]}
      >
        <Text
          style={[styles.title, { color }, computedTitleStyle]}
          nativeID={MessageItemNativeID.title}
        >
          {message.title}
        </Text>
        <Text
          style={[styles.description, { color }, computedDescriptionStyle]}
          nativeID={MessageItemNativeID.description}
        >
          {message.description}
        </Text>
      </View>
      {message.action && (
        <Pressable
          onPress={() => message.action?.onPress(message)}
          nativeID={MessageItemNativeID.action}
        >
          <Text style={[styles.actionText, { color }, computedActionTextStyle]}>
            {message.action.label}
          </Text>
        </Pressable>
      )}
    </View>
  );
};
