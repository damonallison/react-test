import {takeEvery} from 'redux-saga/effects';

export function* manageFavorite() {
    console.log("not broken");
}

// When a `MANAGE_FAVORITES` action is handled,
// invoke the manage favorite saga.
export function* watchManageFavorite() {
    yield takeEvery('MANAGE_FAVORITES', manageFavorite)
}}