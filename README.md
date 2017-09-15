# [React](https://facebook.github.io/react/)

## Creating a new application

```
$ npm install -g create-react-app
create-react-app my-app

cd my-app
npm start
```

* JSX is a XML like syntax for composing a React component tree.
* React is based on a `virtual DOM`, which only rerenders deltas.
* `Controlled components` : a component controlled by its parent.
    * It is given state by its parent.
    * Sends state back to its parent.
* Immutability improves react performance by simplifying update detection.


# Comparison to Angular

## React

* Minimalistic compared to `Angular`.
* Flexible : "bring your own stack".
* Functional, immutable bent.
* Excellent debugging extensions.
    * React Devtools chrome extension for debugging rendered component trees.
    * VS Code Debugger chrome extension for debugging JS.

## Angular

* Full MVC framework.
* Data binding / DI (DI viewed as counter to functional / immutable)* Heavy. Complex lifecycle.
* Leaky abstractions - you need to read the code. Hard to debug.

## Similiarities

* Both frameworks are based on component composition.


## Main Differences

* JSX rather than classic HTML.
    * JSX = XML-like language built on top of JS.
    * How does this work in practice?
        * JSX sounds like a **complete hack**. JS DSL to produce HTML? What?

* Requires you to build your own stack (good or bad?)
    * Router
    * HTTP library
    * Additional unit testing libraries.

* Type checking
    * `Flow` vs. `Typescript`
    * `Redux` vs. `Binding`
        * Is this a fair comparison?


## Links

* [React vs. Angular](https://www.sitepoint.com/react-vs-angular/)
* [Angular vs. React - the tie breaker](https://www.airpair.com/angularjs/posts/angular-vs-react-the-tie-breaker)

