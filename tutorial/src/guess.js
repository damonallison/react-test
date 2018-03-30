import React from 'react';

//
// This example shows how to "bind" form data in React.
// https://reactjs.org/docs/forms.html
//
// "Controlled Components"
//
// Controlled Components is the React term for having a Javascript function
// handle the form submission and have access to the data.
//
// The form is "controlled" in the sense that React handles
// interaction with the form, overriding the default value.
//
// * Every state mutation has an associated handler function.
// * This is effectively manual data binding.
//
export default class Guess extends React.Component {

    constructor() {
        super();
        this.state = {
            randomNumber: Math.floor(Math.random() * 100) + 1,
            allowedGuesses: 5,
            guesses: [],
            currentGuess: ""
        }

        // Makes `this` point at the component within the functions.
        this.handleChange = this.handleChange.bind(this);
        this.handleGuess = this.handleGuess.bind(this);
    }

    handleChange(event) {
        const val = event.target.value;
        console.log(`current guess: ${val}`);

        // Performs a partial state update.
        this.setState({currentGuess: val});
    }

    handleGuess(event) {

        event.preventDefault();

        const val = parseInt(this.state.currentGuess);
        if (isNaN(val)) {
            return;
        }
        console.log("adding guess: " + val);

        var guesses = this.state.guesses.slice();
        guesses.push(val);
        this.setState({ guesses: guesses })

        console.log("guesses : " + this.jsonStringify(this.state.guesses));


        // How do we access the text input control to delete
        // the text?
    }

    jsonStringify(obj) {
        return JSON.stringify(obj, null, 2);
    }

    canGuess() {
        return this.state.guesses.length < this.state.allowedGuesses
    }

    hasWinner() {
        return this.state.guesses.indexOf(this.state.randomNumber) !== -1
    }

    progressMessage() {
        if (this.hasWinner()) {
            return "Congratulations, you won!";
        }
        else if (!this.canGuess()) {
            return "Sorry, Game over!";
        }
        else {
            const rem = this.state.allowedGuesses - this.state.guesses.length;
            return "Keep trying! You have " + rem + " guesses remaining."
        }
    }

    // Controlled components allow a JS function to handle
    // form submission rather than posting to a new page.
    render() {
        const winnerMsgStyle = {
            color: this.hasWinner() ? "green" : "",
        }
        return (
            <div>
                <div>The answer is : {this.state.randomNumber}</div>
                <div>Guesses so far : ({this.state.guesses.length}) : {this.jsonStringify(this.state.guesses)}</div>
                <div>Remaining guesses : {(this.state.allowedGuesses - this.state.guesses.length)}</div>
                <div>Current guess : {this.state.currentGuess}</div>
                <div style={winnerMsgStyle}>{this.progressMessage()}</div>
                <form onSubmit={this.handleGuess}>
                    <input type="text"
                           value={this.state.currentGuess}
                           onChange={this.handleChange} />
                    <input type="submit" value="Submit" disabled={!this.canGuess() || this.hasWinner()} />
                </form>
            </div>
        );
    }
};
