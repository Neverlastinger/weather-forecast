import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../store/configureStore';
import App from './App';

const store = configureStore();

/**
 * Redux Root component. This is where application kicks in.
 */
const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

export default Root;
