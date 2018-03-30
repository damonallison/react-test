import React from 'react';
import { connect } from 'react-redux';
import { manageFavorite } from './actionCreators';

const baseComponent = props => (
    <button type="button" onClick= { props.manageFavorite }>{ props.isSaved ? "⭐" : "☆️"}</button>
)

export default connect( (state, ownProps) => {
    const { currentSrc } = ownProps;
    console.log(`State == ${JSON.stringify}`)

    if (state.favorites == undefined) {
        return {
            isSaved: false
        }
    }
    const isSaved = state.favorites.some(f => f === currentSrc);

    return {
        isSaved
    };
},
(dispatch, ownProps) => {
    return {
        manageFavorite() {
            dispatch(manageFavorite(ownProps.currentSrc))
        }
    };
})(baseComponent);