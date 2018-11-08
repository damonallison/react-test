import React from 'react';
import Board from './board';

export default class Game extends React.Component {

    //
    // Each component has state by setting the `this.state` property in the
    // constructor.
    //
    // All state should be considered internal to the component.
    //
    // To modify the state from within the component, call `setState`, passing
    // in only the values you want to set (not the entire state object).
    //
    // `setState` will cause the component (and it's children) to re-render.
    //
    // this.setState {
    //     xIsNext: false
    // };
    //
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
        const winner = this.calculateWinner(current.squares);

        // Could / should this be broken out to a "history" component?
        //
        // Important :
        // * Each child in an iterator (<li> here) should have a unique `key` property.
        //   `key` is used for change detection.
        //
        // * `key` is not accessible from the component itself.
        //   Only react can access the key property.
        //
        //
        const moves = history.map((step, move) => {
            const desc = move ? 'Move #' + move : 'Game Start';
            return (
                <li key={move}>
                <a href="#" onClick={() => this.jumpTo(move)}>{desc}</a>
                </li>);
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
            <Board squares={current.squares} onClick={(i) => this.handleClick(i)} />
            </div>
            <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
            </div>
            </div>)
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
        // We are storing a copy of the entire board at each step.
        //
        const squares = current.squares.slice();

        if (this.calculateWinner(squares) || squares[i]) {
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

    calculateWinner(squares) {
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
    }
}
