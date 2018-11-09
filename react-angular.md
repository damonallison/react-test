# [React](https://facebook.github.io/react/)

## Tutorial

https://facebook.github.io/react/tutorial/tutorial.html

## Creating a new application

```bash

# create-react-app

$ npm install -g create-react-app
create-react-app my-app

cd my-app
npm start
```

## [Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html)

* Break the UI into components and hierarchy.
* Build a static version.
* Determine your minimal state representation.

## React

* Minimalistic compared to `Angular`.
* Flexible : "bring your own stack".
  * Router : [React Router](https://reacttraining.com/react-router/)
  * State Management : [Redux](http://redux.js.org/)
* Functional, immutable bent.
* Excellent debugging extensions.
    * React Devtools chrome extension for debugging rendered component trees.
    * VS Code Debugger chrome extension for debugging JS.
* Requires you to "bring your own stack".
    * In practice you probably don't need much.

## [Redux](http://redux.js.org/)

* UI state management container.
* Very functional. State is immutable.
* Reducers return updated data structures based on the actions they are given. (State Machines)

## React | Angular Comparison

* Both React and Angular provide componentization to building web applications.
* Angular is a full featured framework, React is minimalistic.
* React has a lower learning curve, less features out of the box.
* React will require each project to choose a library set to handle state management, routing, etc.
    * There are a few key packages - redux, router.

## Angular

* Full MVC framework.
* Data binding / DI (DI viewed as counter to functional / immutable)
* Heavy. Complex lifecycle.
* Leaky abstractions - you need to read the code. Hard to debug.

## Main Differences

* Template language.
    * React uses `JSX` to build component trees. JSX is a DSL extension to JS.
    * Angular uses HTML templates with custom Angular directives (e.g., `ngIf`, `ngFor`).

* Requires you to build your own stack (good or bad?)
    * Router
    * HTTP library
    * Additional unit testing libraries.

