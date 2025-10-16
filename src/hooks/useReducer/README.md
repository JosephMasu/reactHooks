# useReducer Demo Hook

This example demonstrates how to use React's built-in `useReducer` hook for managing complex state in functional components.

## What does it do?

- Uses a **reducer function** to handle state transitions based on dispatched actions.
- Handles **multiple related state updates** in a predictable way.
- Makes state management **more maintainable, testable, and scalable**.
- Ideal for **forms, counters with multiple actions, or multi-step workflows**.

---

## Usage

```tsx
import { useReducer } from "react";

// Define reducer and actions
const reducer = (state, action) => {
  switch (action.type) {
    case "increment": return state + 1;
    case "decrement": return state - 1;
    case "reset": return 0;
    default: return state;
  }
};

// Use reducer in your component
const [count, dispatch] = useReducer(reducer, 0);
