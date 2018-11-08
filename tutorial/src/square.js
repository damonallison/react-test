import React from 'react';

//
// Square is being sent two properties:
//
// 1. `value` : the current square value (X, O, null)
// 2. `onClick` : a callback to execute onClick.
//
export default function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>);
}
