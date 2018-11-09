# React

* React is a JS library for building UIs. UIs are built from `Component`s.

* React does *not* include a full set of libraries needed to build UIs. It must
  be paired with libraries for state management (redux), networking (axios),
  routing (react-router), etc.

* React supports unidirectional data flow (flux architecture) as opposed to
  Angular's bidirectional flow.
  * actions -> dispatcher -> store -> view
  * "Properties flow down, actions flow up"
  * `redux` is a commonly used flux library.

* React has a `Context` API. A `Context` is global state, accessible via any
  component without the need to pass it thru `props`.

## Components

* Components are given a set of immutable properties (props) from their parent
  component.
* React uses a Virtual DOM, only drawing DOM elements when things change.
* React components have lifecycle hooks which allow execution of code during
  component lifecycle events.
  * `shouldComponentUpdate`
  * `componentDidMount`
    * Component created and associated to the DOM. Used for triggering an API
      load.
  * `render`

* Components can have `state`.
  * Do not modify state directly, use `this.setState({ });` to force a
    re-render.
  * Do not rely on state values for setting the new state.
  * Calling `setState()` will *merge* the defined state into the current state.

```js

// WRONG!
this.setState( {
  counter: this.state.counter + 1
})

// Right
this.setState((state, props) => {
  return {
    counter: state.counter + 1
  }
})
```

* When rendering lists, react uses the `key` property to determine if list
  elements have changed. Always give list elements a proper `key` attribute.
  Typically, you'd want to use a unique id. By default, elements are given their
  ordinal as the key if you don't explicitly supply one.

```js

render() {
  const list = numbers.map(x => {
    <li key={x.toString()}>{x}</li>
  }
}
```
## JSX

* JSX (JavaScript eXtension) is an extension to JS for creating HTML.
* JSX must be compiled (Babel) to JS.
* Attributes are passed into child components as props.
* JSX prevents Injection Attacks. ReactDOM will escape any strings before
  rendering.

```js

function formatName(name) {
  return name.toLowercase();
};

function getName(user) {
  // Don't put quotes around curly braces. Either use quotes (for string values)
  // or curly braces (for expressions), but not both for the same attribute.
  return <h1 tag={user.name} style="test">Hello, {formatName(user.name)}</h1>
};

```

## Common Librares

* Lodash - utility library providing low level data structures / common
  functionality missing in JS.
* Redux - state management.
* react-router - render components on URL changes.
* Axios - Promise based HTTP library. Consider as an alternative to the native
  `fetch` JS API.
* Jest - Unit testing.

### Redux

* Managing state in a large, asynchronous UI like a SPA requires simple,
  predictable state management.
* Redux is a flux-like library for managing state. Since flux implements
  unidirectional data flow, state management in large JS UIs (SPAs) is simple
  and predictable.
* Redux (and flux) revolves around state, actions, and reducers.
* All state is stored in an object tree in a single `store`.
* The only way to change state in the store is to submit an action.
* A reducer listens for actions and transforms state. Reducers do not mutate
  existing state, rather create a new state object. Reducers are pure functions
  which accept a state and return a new state. No mutation.
* Listeners can subscribe to state changes. (i.e., to update UI, make API
  calls).

### react-router

* React router allows you to render components based on URL patterns.
* The browser back button is respected.
* You can link to other components with `<Link />`, or redirect using
  `<Redirect />`.
* Routing is dynamic - you don't need to define a static "Routes" object with
  all your routes.

### Axios

* Axios is a promise based HTTP library for JS (browser and node).
* Issues HTTP requests using promises or `async / await`.

### Jest

* Simple ("delightful") JS unit testing framework.