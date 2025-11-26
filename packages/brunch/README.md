# Brunch

Dead simple message system for React Native and Expo (iOS, Android, Web)

> ⚠️ This package is currently in alpha. Expect breaking changes.

## Features

- Simple, intuitive API for displaying messages, toasts, and snackbars
- Support for multiple severity levels (info, warning, error, success)
- Customizable positioning (top/bottom)
- Custom styling support with callbacks
- Optional action buttons
- Auto-dismiss with configurable duration
- TypeScript support with full type definitions
- Allow for custom UI implementation
- Smooth animations powered by react-native-reanimated

## Installation

```bash
npm install @coolstack/brunch jotai react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context
# or
yarn add @coolstack/brunch jotai react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context
# or
pnpm add @coolstack/brunch jotai react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context
```

### Additional Setup

Some peer dependencies require additional setup:

**react-native-reanimated**: Follow the [installation guide](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/)

**react-native-gesture-handler**: Follow the [installation guide](https://docs.swmansion.com/react-native-gesture-handler/docs/fundamentals/installation)

**react-native-screens**: Follow the [installation guide](https://reactnavigation.org/docs/getting-started/#installing-dependencies-into-a-bare-react-native-project)

> For Expo projects, these dependencies are typically already included. You may only need to install `jotai`.

## Usage

### Basic Setup

Wrap your app with the `MessageProvider`:

```tsx
import { MessageProvider } from "@coolstack/brunch";

export default function App() {
  return (
    <MessageProvider>
      {/* Your app content */}
    </MessageProvider>
  );
}
```

### Displaying Messages

Use the `useMessages` hook to display messages:

```tsx
import { useMessages } from "@coolstack/brunch";

function MyComponent() {
  const { openMessage } = useMessages();

  const handlePress = () => {
    openMessage({
      severity: "success",
      title: "Success",
      description: "Your action was completed successfully",
    });
  };

  return <Button onPress={handlePress} title="Show Message" />;
}
```

### Message Severities

Brunch supports four severity levels with different default colors:

```tsx
// Info (blue)
openMessage({
  severity: "info",
  title: "Info",
  description: "This is an informational message",
});

// Success (green)
openMessage({
  severity: "success",
  title: "Success",
  description: "Operation completed successfully",
});

// Warning (orange)
openMessage({
  severity: "warning",
  title: "Warning",
  description: "Please be cautious",
});

// Error (red)
openMessage({
  severity: "error",
  title: "Error",
  description: "Something went wrong",
});
```

### Adding Actions

Messages can include an optional action button:

```tsx
openMessage({
  severity: "info",
  title: "Update Available",
  description: "A new version is available",
  action: {
    label: "Update",
    onPress: (message) => {
      console.log("Updating...", message);
    },
  },
});
```

### Managing Messages

The `useMessages` hook provides several utilities:

```tsx
const { messages, openMessage, closeMessage, clearMessages } = useMessages();

// Get all active messages
console.log(messages);

// Close a specific message
closeMessage("message-id");

// Clear all messages
clearMessages();
```

## Configuration

### Provider Options

Configure global options by passing them to the `MessageProvider`:

```tsx
<MessageProvider
  options={{
    duration: 5000, // Auto-dismiss after 5 seconds
    position: "bottom", // Display at bottom of screen
  }}
>
  {/* Your app */}
</MessageProvider>
```

### Available Options

```typescript
type Options = {
  // Duration in milliseconds before auto-dismiss
  // Set to undefined to disable auto-dismiss
  duration?: number;

  // Position of message container
  position?: "top" | "bottom";

  // Style for the container holding all messages
  messagesContainerStyle?: StyleProp<ViewStyle>;

  // Style for individual message containers
  messageContainerStyle?: CustomStyleProp<ViewStyle>;

  // Style for message titles
  messageTitleStyle?: CustomStyleProp<TextStyle>;

  // Style for message descriptions
  messageDescriptionStyle?: CustomStyleProp<TextStyle>;

  // Style for action button text
  messageActionTextStyle?: CustomStyleProp<TextStyle>;
};
```

### Custom Styling

You can customize styles using either static styles or callback functions:

```tsx
<MessageProvider
  options={{
    // Static style
    messageContainerStyle: {
      borderRadius: 12,
      padding: 20,
    },
    
    // Dynamic style based on severity
    messageTitleStyle: ({ messageSeverity }) => ({
      fontSize: messageSeverity === "error" ? 18 : 16,
      fontWeight: "bold",
    }),
  }}
>
  {/* Your app */}
</MessageProvider>
```

### Headless UI

For complete control over the UI, use the headless mode:

```tsx
<MessageProvider customUI={true}>
  {/* Your app */}
</MessageProvider>
```

Then implement your own message display component:

```tsx
import { useMessages } from "@coolstack/brunch";

function CustomMessageDisplay() {
  const { messages, closeMessage } = useMessages();

  return (
    <View>
      {messages.map((message) => (
        <View key={message.id}>
          <Text>{message.title}</Text>
          <Text>{message.description}</Text>
          <Button onPress={() => closeMessage(message.id)} title="Close" />
        </View>
      ))}
    </View>
  );
}
```

## API Reference

### `MessageProvider`

Provider component that must wrap your app.

**Props:**
- `customUI?: boolean` - Enable headless mode (default: `false`)
- `options?: Options` - Global configuration options
- `children: ReactNode` - Your app content

### `useMessages()`

Hook that provides message management functions.

**Returns:**
```typescript
{
  messages: Message[];
  openMessage: (message: NewMessage) => void;
  closeMessage: (messageId: string) => void;
  clearMessages: () => void;
}
```

### `openMessage(message)`

Function to display a new message.

**Parameters:**
```typescript
{
  severity: "info" | "warning" | "error" | "success";
  title: string;
  description: string;
  action?: {
    label: string;
    onPress: (message: Message) => void;
  };
}
```

### `closeMessage(messageId)`

Function to close a specific message by its ID.

### `clearMessages()`

Function to close all active messages.

## TypeScript

Brunch is written in TypeScript and provides full type definitions. All types are exported from the main package:

```typescript
import type {
  Message,
  NewMessage,
  MessageSeverity,
  MessageAction,
  Options,
  CustomStyleProp,
  StyleCallback,
  StyleParameters,
} from "@coolstack/brunch";
```

## License

MIT

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on [GitHub](https://github.com/christopher2k/brunch).

## Support

If you encounter any issues, please file them on the [GitHub issue tracker](https://github.com/christopher2k/brunch/issues).
