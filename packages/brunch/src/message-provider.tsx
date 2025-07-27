import { useAtomValue, useSetAtom } from "jotai";
import { type PropsWithChildren, useEffect, useMemo } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  clearMessages,
  closeMessage,
  messagesAtom,
  openMessage,
  optionsAtom,
} from "./message-store";
import type { Message, NewMessage, Options } from "./types";

type MessageProviderProps = PropsWithChildren<{
  options?: Options;
}>;
export const MessageProvider = ({
  children,
  options,
}: MessageProviderProps) => {
  const setOptions = useSetAtom(optionsAtom);

  // biome-ignore lint/correctness/useExhaustiveDependencies: We want to initialize this just ONCE and not update it
  useEffect(() => {
    if (options) {
      setOptions((base) => ({
        ...base,
        ...options,
      }));
    }
  }, []);

  return <>{children}</>;
};

type UseMessagesReturnType = {
  messages: Message[];
  openMessage: (message: NewMessage) => void;
  closeMessage: (messageId: string) => void;
  clearMessages: () => void;
};

export const useMessages = (): UseMessagesReturnType => {
  const messages = useAtomValue(messagesAtom);

  return useMemo(
    () => ({
      messages,
      openMessage,
      closeMessage,
      clearMessages,
    }),
    [messages],
  );
};
