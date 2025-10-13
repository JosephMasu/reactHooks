# useEffect Demo Hook

This custom hook (`useCountWithEffect`) demonstrates how to use React's built-in `useEffect` hook along with `useState`.

## What does it do?

- Tracks a counter (`count`) in state.
- Logs the current count whenever it changes.
- Logs a cleanup message before the next effect or component unmount.

## Usage

```tsx
const { count, setCount } = useCountWithEffect(initialValue);
