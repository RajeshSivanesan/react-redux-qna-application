import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.scss'; // scss

import store from './store'
import App from './root/App'
import * as serviceWorker from './serviceWorker';
import { loadInitialState } from './store/questions';

import storage from './helpers/storage';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const constructInitialData = () => {
    const existingItems = storage.getItem('questions');
    if (!existingItems || existingItems?.length === 0) { // no existing items
        return [{
            id: 1,
            questionText: 'How was your day?',
            answerText: 'Well, it was good, how was yours ?'
        }]
    } else {
        return existingItems;
    }
}

// load initialdata to redux and localStorage
store.dispatch(loadInitialState(constructInitialData()));

// renders the App wrapped over redux provider
root.render(
    <Provider store={store}>
        <App />
    </Provider>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


