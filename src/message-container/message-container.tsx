import { useAtomValue } from "jotai";
import { StyleSheet, View } from "react-native";
import { optionsAtom } from "../message-store";

const styles = StyleSheet.create({});

export type MessageContainerProps = {};

export const MessageContainer = ({}: MessageContainerProps) => {
  const options = useAtomValue(optionsAtom);
  const { position } = options;

  return <View />;
};
