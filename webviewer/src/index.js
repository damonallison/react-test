import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './RootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

// Build a middleware that only passes along interesting messages.
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(
    sagaMiddleware
));

sagaMiddleware.run(rootSaga)

const metadataMiddleware = store => next => action => {
    console.log(`in metadata mw`)

    next(action);
};

// The root reducer.
// const store = createStore(function (state = [], action) {

//     console.log(`Handling action: ${action.type} with state ${state}`)

//     switch(action.type) {
//         case 'MANAGE_FAVORITES':
//             const alreadyAdded = state.some(f => f === action.src)
//             const resultingFavorites = alreadyAdded
//                 ? state.filter (f => f !== action.src)
//                 : [...state, action.src];
//             return resultingFavorites
//             break;
//     }

//     return state;
// });


// Test dispatching to fire the reducer.
store.dispatch({
    type: 'MANAGE_FAVORITES',
    src: 'https://dev-inavisphere.chrobinson.com/orders/audit/v1'
})

// Runs on every message dispatch.
store.subscribe(() => {
    console.log(`Received action: ${store.getState()}`)
})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
