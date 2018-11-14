// ************************************
// This file configures the Redux Store
// https://redux.js.org/api/store
// ************************************

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import forecast from './reducers/forecast';

// https://github.com/zalmoxisus/redux-devtools-extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
	forecast
});

const configureStore = () => (
	createStore(
	    rootReducer,
	    {},
	    composeEnhancers(
	        applyMiddleware(thunkMiddleware)
	    )
	)
);

export default configureStore;
