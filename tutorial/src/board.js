import React from 'react';
import Person from './test_components/person';
import Square from './square';

export default class Board extends React.Component {

    renderSquare(i) {
      return (
        <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />
      );
    }

    render() {
      return (
        // Here we assume a hardcoded board with 9 squares.
        // We should validate that and lay out the board with code.
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
  };
