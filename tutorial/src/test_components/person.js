import React from 'react';

//
// Person is an example of a function component.
//
// Function components are lightweight components which only consist of a render
// method.
//
// Functional components are preferred in React. Being purely functional has
// many benefits, including:
//
// * Easier undo / redo time travel.
// * Tracking changes
//   * No need to track before / after.
// * Change detection.
//   * Allows React to determine when it needs to re-render.
//   * Improves render performance, allows React to optimize re-render logic.
//
export default function Person(props) {
    return (
      <div className="person">{props.firstName} {props.lastName}</div>
    );
};
