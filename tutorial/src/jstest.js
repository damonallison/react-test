import React from 'react';

//
// A playground for learning JS.
//
export default class JsTest extends React.Component {

    testNumeric() {
        const num = Number("damon");
        
        console.log("num is " + num);
        console.log("equality test : " +  (6 === (2 + 4)));
    }

    render() {
        this.testNumeric();
        return (
            <div>Hello, Javascript!</div>
        );
    }
}