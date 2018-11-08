///////////////////////////////////////////////////////////////////////////////
//
// The React "Tic-Tac-Toe" tutorial.
// https://reactjs.org/tutorial/tutorial.html
//
///////////////////////////////////////////////////////////////////////////////

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Custom component
import Guess from './guess';
import Game from './game';

// ========================================
// <Game />   - Tic-tac-toe
// <Guess />  - Guess a number
// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById("app")
);
