# useContext Demo Hook

This example (`UseContextDemo`) demonstrates how to use React's built-in `useContext` hook to share data between multiple components without prop drilling.

## What does it do?

- Defines a `DashboardContext` to hold shared user data.
- Wraps all child components inside a `DashboardContext.Provider`.
- Allows any component (like `Sidebar` or `Profile`) to access the user data using the `useUserContext` hook.
- Eliminates the need to pass props manually through multiple component layers.

## Usage

```tsx
import UseContextDemo from './UseContextDemo';

export default function App() {
  return <UseContextDemo />;
}
