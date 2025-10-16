# useRef Demo Hook

This example demonstrates how to use React's built-in `useRef` hook to persist values and access DOM elements directly without causing re-renders.

## What does it do?

This demo contains two examples:

1. **`useRefDemo`** — Shows how to use a ref to store mutable values that don’t trigger a re-render.
2. **`useRefDemo2`** — Demonstrates how to use a ref to access and manipulate a DOM element (e.g., focusing an input field).

---

## Example 1: Persisting Values with `useRef`

```tsx
import { useRef, useState } from "react";

export default function useRefDemo() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleIncrement = () => {
    setCount(count + 1);
    countRef.current++;

    console.log("State:", count);
    console.log("Ref:", countRef.current);
  };

  return (
    <div className="tutorial">
      Count: {count}
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
