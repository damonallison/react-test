# [React](https://facebook.github.io/react/)

## Tutorial

https://facebook.github.io/react/tutorial/tutorial.html

## Creating a new application

```
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
* Pure javascript. No additional syntax (typescript, directives, template syntax).
* Excellent debugging extensions.
    * React Devtools chrome extension for debugging rendered component trees.
    * VS Code Debugger chrome extension for debugging JS.
* Will require more guidance / library conformity than Angular.
    * Each react app will be wildly different.
    * Paradox of choice? Too many things to pick from?

## [Redux](http://redux.js.org/)

* UI state management container.
* Very functional. State is immutable.
* Reducers return updated data structures based on the actions they are given. (State Machines)

## React | Angular Comparison

* Both React and Angular provide structure to building web applications.
* Both frameworks are based on component composition.
* Angular is a full featured framework, React is minimalistic.
* React has a lower learning curve, less features out of the box.
* React will require each project to choose a library set to handle state management, routing, etc.

## Angular

* Full MVC framework.
* Data binding / DI (DI viewed as counter to functional / immutable)
* Heavy. Complex lifecycle.
* Leaky abstractions - you need to read the code. Hard to debug.

## Main Differences

* Template language.
    * React uses `JSX` to build component trees.
        * JSX = XML-like language built on top of JS.
        * Does this work in practice? JSX sounds like a **complete hack**. JS DSL to produce HTML? What?
    * Angular uses HTML templates with custom Angular directives (e.g., `ngIf`, `ngFor`).
    * How does this work in practice?

* Requires you to build your own stack (good or bad?)
    * Router
    * HTTP library
    * Additional unit testing libraries.

* Type checking
    * `Flow` (JS type checker) vs. `Typescript` (completely different language)
    * `Redux` vs. `Binding`
        * Is this a fair comparison?


## Links

* [React vs. Angular](https://www.sitepoint.com/react-vs-angular/)
    * Describes both products with no clear winner. The authors generally prefer React due to minialism.
* [Angular vs. React - the tie breaker](https://www.airpair.com/angularjs/posts/angular-vs-react-the-tie-breaker)
    * React is generally easier. Likes Angular's templating engine over React.
