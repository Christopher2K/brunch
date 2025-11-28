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

/**
 * Action button configuration for a message
 */
export type MessageAction = {
  /** Label text displayed on the action button */
  label: string;
  /** Callback function invoked when the action button is pressed */
  onPress: (message: Message) => void;
};

/**
 * Represents a message displayed to the user
 */
export type Message = {
  /** Unique identifier for the message */
  id: string;
  /** Severity level that determines the message's visual style */
  severity: MessageSeverity;
  /** Primary heading text of the message */
  title: string;
  /** Detailed description or body text of the message */
  description: string;
  /** Customization action for the close button */
  closeAction?: MessageAction;
};

export type NewMessage = Omit<Message, "id">;
