# useCallback Demo Hook

This component (`UseCallbackDemo`) demonstrates how to use React's built-in `useCallback` hook along with `React.memo`.

## What does it do?

- Maintains a list of users (`users`) in state.
- Filters users based on input from a memoized `Search` component.
- Memoizes the search function (`handleSearch`) so its reference stays stable across renders.
- Prevents the `Search` component from re-rendering unnecessarily when other state updates occur (e.g., shuffling the user list).

## Usage

```tsx
import UseCallbackDemo from './UseCallbackDemo';

export default function App() {
  return <UseCallbackDemo />;
}
