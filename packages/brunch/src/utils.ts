import type { StyleParameters } from "./types";

export function createUniqueId(): string {
  const random = Math.random().toString(36).substring(2);
  const timestamp = Date.now();
  return `${random}:${timestamp}`;
}

function isStyleFunction<T>(
  style: T | ((parameters: StyleParameters) => T),
): style is (parameters: StyleParameters) => T {
  return typeof style === "function";
}

export function extractStyleFromStyleProp<T>(
  style: T | ((parameters: StyleParameters) => T),
  parameters: StyleParameters,
): T {
  if (isStyleFunction<T>(style)) {
    return style(parameters);
  }

  return style;
}
