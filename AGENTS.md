# Agent Guidelines for Brunch

## Commands
- **Lint**: `pnpm lint` (root), `pnpm lint` (example-app)
- **Format**: `pnpm format` (root only)
- **Dev**: `cd example-app && pnpm dev` (starts Expo dev server)
- **Test**: No tests configured yet

## Code Style
- **Formatter**: Biome with 2-space indentation, 80-char line width, double quotes
- **Files**: kebab-case naming (enforced by linter)
- **Imports**: Use `import type` for types, organize imports automatically
- **Exports**: No default exports (except in example-app/app/ directory)
- **TypeScript**: Strict mode enabled, no non-null assertions, use const assertions
- **React**: Self-closing elements, preserve JSX

## Project Structure
- `src/`: Main library code (currently empty except .gitkeep)
- `example-app/`: Expo React Native demo app
- Root package.json manages the library, example-app has its own package.json

## Dependencies
- React Native 0.79.5, React 19.0.0
- Peer deps: react-native-gesture-handler required
- Dev tools: Biome for linting/formatting, TypeScript 5.8.3