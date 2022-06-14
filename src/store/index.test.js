import 'jest-canvas-mock';

jest.mock('react-secure-storage');
import secureLocalStorage from 'react-secure-storage';

afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
})

import store from './index';
import { loadInitialState } from './questions';

it('load store', () => {
    store.dispatch(loadInitialState([{
        id: 1,
        questionText: 'hello',
        answerText: 'hello'
    }]));
});
