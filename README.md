# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# React Hooks Tutorial

A collection of simple and practical examples to learn how to use some of React's most important hooks.

## What does it do?

- Shows **useState**, **useEffect**, **useRef**, **useContext**, **useCallback**, **useReducer**, and **useMemo** in action.  
- Provides short examples for each hook.  
- Helps beginners and intermediate developers understand **when and why to use each hook**.  

---

## Hooks Overview

### 1. useState
- Handles simple state in a component.  
- Example: counters, toggles, and simple form inputs.  

### 2. useEffect
- Performs side effects in components, like fetching data or subscribing to events.  
- Example: logging state changes or fetching API data on mount.

### 3. useRef
- Stores a mutable reference that persists across renders.  
- Example: focusing input elements or keeping track of previous values.

### 4. useContext
- Shares state or data between components without prop drilling.  
- Example: user authentication data accessible by multiple components.

### 5. useCallback
- Memoizes callback functions to prevent unnecessary re-renders.  
- Example: passing functions to child components that depend on stable references.

### 6. useReducer
- Handles complex state logic using a reducer function and dispatched actions.  
- Example: multi-step forms, counters with multiple actions, or state machines.

### 7. useMemo
- Memoizes expensive calculations to improve performance.  
- Example: searching or filtering large arrays without recalculating on every render.

---

## Usage

Import the hook examples and use them in your React app:

```tsx
import Counter from "./useStateDemo";
import UseEffectDemo from "./useEffectDemo";
import UseRefDemo from "./useRefDemo";
// ... and others
