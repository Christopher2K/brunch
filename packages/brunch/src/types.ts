import type { StyleProp, TextStyle, ViewStyle } from "react-native";

export type MessageContainerPosition = "top" | "bottom";

export type StyleParameters = {
  messageSeverity: MessageSeverity;
};
export type StyleCallback<T> = (parameters: StyleParameters) => T;
export type CustomStyleProp<T> = StyleProp<T> | StyleCallback<T>;

export type Options = {
  /**
   * Duration in milliseconds on how long the message should be displayed
   * If set to undefined, the message will not be automatically closed
   */
  duration?: number;
  /**
   * Position of the message container
   * Defaults to `top`
   */
  position?: MessageContainerPosition;

  /**
   * Style for the messages container (holds all messages)
   * Default to `undefined`
   */
  messagesContainerStyle?: StyleProp<ViewStyle>;
  /**
   * Style for each message container
   * Default to `undefined`
   */
  messageContainerStyle?: CustomStyleProp<ViewStyle>;
  /**
   * Style for the message title
   * Default to `undefined`
   */
  messageTitleStyle?: CustomStyleProp<TextStyle>;
  /**
   * Style for the message description
   * Default to `undefined`
   */
  messageDescriptionStyle?: CustomStyleProp<TextStyle>;
  /**
   * Style for the action text
   * Default to `undefined`
   */
  messageActionTextStyle?: CustomStyleProp<TextStyle>;
};

export type MessageSeverity = "info" | "warning" | "error" | "success";

export type MessageAction = {
  label: string;
  onPress: (message: Message) => void;
};

export type Message = {
  id: string;
  severity: MessageSeverity;
  title: string;
  description: string;
  action?: MessageAction;
};

export type NewMessage = Omit<Message, "id">;
