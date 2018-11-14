import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../store/configureStore';
import App from '../containers/App';

const store = configureStore();

/**
 * Root component. This is where application kicks in.
 * Provides the Redux store to the application. 
 */
const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

export default Root;
