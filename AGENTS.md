# Agent Guidelines for Brunch

## Commands
- **Library Dev**: `pnpm brunch:dev` (from root)
- **Library Lint**: `pnpm brunch:lint` (from root)
- **Library Format**: `pnpm brunch:format` (from root)
- **App Dev**: `pnpm app:dev` or `cd apps/example-app && pnpm dev` (starts Expo dev server)
- **Test**: No tests configured yet

## Code Style
- **Formatter**: Biome with 2-space indentation, 80-char line width, double quotes
- **Files**: kebab-case naming (enforced by linter)
- **Imports**: Use `import type` for types, organize imports automatically
- **Exports**: No default exports (except in apps/example-app/app/ directory)
- **TypeScript**: Strict mode enabled, no non-null assertions, use const assertions
- **React**: Self-closing elements, preserve JSX

## Project Structure
- `packages/brunch/`: Main library code
- `apps/example-app/`: Expo React Native demo app
- Monorepo with pnpm workspaces

## Dependencies
- React Native 0.79.5, React 19.0.0
- Peer deps: react-native-gesture-handler required
- Dev tools: Biome for linting/formatting, TypeScript 5.8.3
