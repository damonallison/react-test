import React from 'react';

//
// This example shows how to "bind" form data in React.
// https://reactjs.org/docs/forms.html
//
// "Controlled Components"
//
// A Controlled Component is the React term for "controlling" (i.e., handling)
// DOM events and "controlling" what we do with them.
//
// In this example, the form is "controlled". We handle interaction with the
// form, overriding the default value.
//
// * In this example, every state mutation has an associated handler function.
// * This is effectively manual data binding.
//
export default class GuessingGame extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            randomNumber: Math.floor(Math.random() * 100) + 1,
            allowedGuesses: 5,
            guesses: [],
            currentGuess: ""
        }

        //
        // Makes `this` point to our component from within the functions.
        //
        // Generally, any callback you reference from within JSX, you want to
        // manually bind to give each callback the correct `this` context.
        //
        this.handleChange = this.handleChange.bind(this);
        this.handleGuess = this.handleGuess.bind(this);
    }

    handleChange(event) {
        const val = event.target.value;
        console.log(`Updating current guess: ${val}`);

        // Performs a partial state update.
        this.setState({currentGuess: val});
    }

    handleGuess(event) {
        //
        // Tells the user-agent to *not* perform the default action for this
        // event. In this case, prevent the form from submitting.
        //
        event.preventDefault();

        const val = parseInt(this.state.currentGuess);

        // Regardless if this guess is valid or not, we want to clear it.
        this.setState( {currentGuess: ""} );
        
        if (isNaN(val)) {
            console.warn(`Invalid guess entered: ${val}`);
            return;
        }
        let guesses = this.state.guesses.slice();
        console.log("Guesses : " + this.jsonStringify(guesses));
        guesses.push(val);

        this.setState({ guesses: guesses })
    }

    jsonStringify(obj) {
        return JSON.stringify(obj, null, 2);
    }

    canGuess() {
        return !isNaN(this.state.guesses.length) && !isNaN(this.state.allowedGuesses) && this.state.guesses.length < this.state.allowedGuesses
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
