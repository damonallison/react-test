import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

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
  function Square(props) {
      return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
      );
  }
  class Board extends React.Component {

    constructor() {
        super();
        this.state = {
            squares: Array(9).fill(null),
        };
    }

    handleClick(i) {
        // Call `.slice` to copy the array. Immutability is important.
        const squares = this.state.squares.slice();
        squares[i] = 'X';[]
        this.setState({squares: squares})
    }

    renderSquare(i) {
      return (
            <Square
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)} />
      );
    }

    render() {
      const status = 'Next player: X';

      return (
        <div>
          <Person firstName="Damon" lastName="Allison" />
          <div className="status">{status}</div>
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
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }

  // ========================================

  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
