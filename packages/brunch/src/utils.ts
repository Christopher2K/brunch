export function createUniqueId(): string {
  const random = Math.random().toString(36).substring(2);
  const timestamp = Date.now();
  return `${random}:${timestamp}`;
}

