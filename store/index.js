import { applyMiddleware, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import storage from '../helpers/storage';

import rootReducer from './questions';

const middlewares = [thunk];

/**
 * @note on store data change this gets invoked to update the localStorage.
 * @param {object} state the redux updated state to be persisted in localStorage.
 */
function saveToLocalStorage(state) {
    try {
        storage.setItem("questions", state.questions);
    } catch (e) {
        console.warn(e);
    }
}

// Note: devTools is enabled for testing purposes
const store = configureStore({ reducer: { questions: rootReducer }, devTools: true }, applyMiddleware(...middlewares));

// listen for store changes and use saveToLocalStorage to
// save them to localStorage
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
