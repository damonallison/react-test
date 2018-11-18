///////////////////////////////////////////////////////////////////////////////
//
// The React "Tic-Tac-Toe" tutorial.
// https://reactjs.org/tutorial/tutorial.html
//
///////////////////////////////////////////////////////////////////////////////

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Guess from './guess/Guess';
import MouseTracker from './guess/MouseTracker';

// import Game from './game';

// ========================================
// <Game />   - Tic-tac-toe
// <Guess />  - Guess a number
// ========================================

ReactDOM.render(
  <MouseTracker render={state => (
      <Guess />
    )} />,
  // <Game />,
  document.getElementById("app")
);
