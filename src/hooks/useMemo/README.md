# useMemo Demo Component

This React component (`Demo`) demonstrates how to use **React’s `useMemo` hook** to optimize performance when working with large datasets.

## What does it do?

- Tracks a counter (`count`) in state.
- Displays a **selected item** from a very large array (`initialItems` with ~30 million objects).
- Uses `useMemo` to **cache the result of a costly search** so it only recalculates when necessary.
- Provides a button to increment the count, demonstrating re-renders without redoing expensive computations.

