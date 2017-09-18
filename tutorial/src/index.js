///////////////////////////////////////////////////////////////////////////////
//
// The React "Tic-Tac-Toe" tutorial.
//
///////////////////////////////////////////////////////////////////////////////

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//
// From the create-react-app script:
//
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
//

//
class Person extends React.Component {

    render() {
        return (
            <div className="person">{this.props.firstName} {this.props.lastName}</div>
        );
    };

}

//
// SquareClass is being sent two properties:
//
// 1. `value` : the current square value (X, O, null)
// 2. `onClick` : a callback to execute onClick.
//
// This is being kept around to compare to the `Square`
// functional component below.
//
class SquareClass extends React.Component {
    render() {
      return (
        <button className="square" onClick={() => this.props.onClick()}>
          {this.props.value}
        </button>
      );
    }
  }

  //
  // Square is an example of a functional component.
  //
  // Functional components are lightweight components which only
  // consist of a render method.
  //
  // Functional components are preferred in React.
  // Being purely functional has many benefits, including:
  //
  // * Easier undo / redo time travel.
  // * Tracking changes
  //   * No need to track before / after.
  // * Change detection.
  //   * Allows React to determine when it needs to re-render.
  //   * Improves render performance, allows React to optimize re-render logic.
  //
  function Square(props) {
      return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
      );
  }
  class Board extends React.Component {

    renderSquare(i) {
      return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)} />
      );
    }

    render() {
      return (

        <div>
          <Person firstName="Damon" lastName="Allison" />
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }

  class Game extends React.Component {

    constructor() {
      super();
      this.state = {
        history: [{
          squares: Array(9).fill(null)
        }],
        stepNumber: 0,
        xIsNext: true,
      };
    }

    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);

      // Could / should this be broken out to a "history" component?
      const moves = history.map((step, move) => {
        const desc = move ? 'Move #' + move : 'Game Start';
        return (
          <li key={move}>
            <a href="#" onClick={() => this.jumpTo(move)}>{desc}</a>
          </li>
        );
      });
      let status;
      if (winner) {
        status = 'Winner: ' + winner;
      }
      else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }
      return (
        <div className="game">
          <div className="game-board">
            <Board
              squares={current.squares}
              onClick={(i) => this.handleClick(i)} />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
      );
    }

    jumpTo(step) {
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0,
      });
    }

    handleClick(i) {

      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      //
      // Call `.slice` to copy the array. Immutability is important.
      //
      const squares = current.squares.slice();

      if (calculateWinner(squares) || squares[i]) {
        return
      }
      squares[i] = this.state.xIsNext ? 'X' : 'O'
      this.setState({
        history: history.concat([{
          squares: squares,
        }]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext,
      });
    }

  } // class Game

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  // ========================================

  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
