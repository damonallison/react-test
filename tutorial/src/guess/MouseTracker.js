import React from "react";

//
// MouseTracker is a generic higher order component which adds mouse tracking
// capability to any child component.
//
// MouseTracker uses a "render property". A "render prop" is a property
// (function) that returns a React element. That function is called during
// render. This allows the caller to pass in any element which will be
// ultimately rendered.
//
// Render props allow components to become generic by allowing what is actually
// rendered to be dynamic.
//
export default class MouseTracker extends React.Component {

    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = {
            x: 0,
            y: 0
        };
    }

    handleMouseMove(event) {
        const state = {
            x: event.clientX,
            y: event.clientY
        };
        console.log(`MouseTracker tracked ${state}`);
        this.setState(state);
    }

    render() {
        return (
            <div onMouseMove={this.handleMouseMove}>
                {
                    // The render property is called with the state from this
                    // component.
                    //
                    // This "render prop" allows the user to render
                    // anything they want within this component.
                }
                {this.props.render(this.state)}
            </div>
        );
    }
}