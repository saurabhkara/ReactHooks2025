# React Hooks

## useState

useState is a Hook that lets you add state to functional components. It returns a state variable and a function to update it.

## useEffect()

useEffect is a React Hook that lets you perform side effects in functional components. Examples of side effects include:

- Fetching data from an API

- Updating the DOM

- Subscribing/unsubscribing to events

- Setting up timers

## useLayoutEffect()

useLayoutEffect is a React Hook similar to useEffect, but it fires synchronously after all DOM mutations and before the browser repaints

- You need to measure layout or DOM properties before the browser repaints
- You are synchronizing scroll position or style calculations.
- You want to prevent flickering or layout shift.

## useRef()

useRef is a React Hook that gives you a mutable reference which persists across re-renders without causing a re-render when its value changes.

## Context API

The React Context API is a powerful feature for sharing global data (like user auth, theme, language, etc.) across your app without prop drilling.

## createContext()

createContext() API is used to create context in react application. createContext returns a context object

## useContext()

useContext is a React Hook that lets you consume values from a Context object without manually using a <Context.Consumer> wrapper.

## useReducer()

useReducer is a React Hook that provides an alternative to useState for complex state logic. It works similarly to a Redux-style reducer: you dispatch actions to update state based on a function.

## React 19 handles memoization out of box, so we don't need useMemo and useCallback

## useImperativeHandle()

useImperativeHandle is an advanced React Hook that lets you customize the instance value that is exposed to parent components when using ref.
