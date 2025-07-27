export type MessageContainerPosition = "top" | "bottom";

export type Options = {
  duration?: number;
  position?: MessageContainerPosition;
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
