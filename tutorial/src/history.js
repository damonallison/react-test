import React from 'react';

export default function History(props) {
    const moves = props.history.map((step, index) => {
        const desc = index !== 0 ? `Move # ${index}` : 'Game Start';

        //
        // When rendering a list, you must provide a `key`. `key` tells React
        // about the identity of each component which allows React to maintain
        // state between re-renders.
        //
        // Keys do not have to be globally unique. Keys only need to be unique
        // between components and their siblings.
        //
        // Because each move is never re-ordered, deleted or inserted in the
        // middle, we are safe to use the index as the key.
        //
        return (<li key={index}><a href="#" onClick={() => props.onClick(index)}>{desc}</a></li>);
    });
    return (<ol>{moves}</ol>);

}