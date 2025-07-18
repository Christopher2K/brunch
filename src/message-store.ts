import { atom, getDefaultStore } from "jotai";
import { createUniqueId } from "utils";
import type { Message, NewMessage, Options } from "./types";

const _defaultOptions: Options = {
  duration: 3000,
};

const store = getDefaultStore();

export const optionsAtom = atom<Options>(_defaultOptions);
export const messagesAtom = atom<Message[]>([]);

const getMessages = () => store.get(messagesAtom);
const getOptions = () => store.get(optionsAtom);

export function openMessage(
  newMessage: NewMessage,
  customOptions?: Options,
): Message {
  const options = customOptions ?? getOptions();
  const id = createUniqueId();
  const message = {
    id,
    ...newMessage,
  };

  store.set(messagesAtom, [...getMessages(), message]);

  if (options.duration) {
    setTimeout(() => {
      closeMessage(id);
    }, options.duration);
  }

  return message;
}

export function closeMessage(messageId: string): string {
  const messages = getMessages();
  store.set(
    messagesAtom,
    messages.filter((m) => m.id !== messageId),
  );
  return messageId;
}

export function clearMessages(): void {
  store.set(messagesAtom, []);
}
