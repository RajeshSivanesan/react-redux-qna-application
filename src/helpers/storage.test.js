import 'jest-canvas-mock';

jest.mock('react-secure-storage');
import storage from './storage';
import secureLocalStorage from 'react-secure-storage';

afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
})

it('storage - setItem', () => {
    // setup
    const item = {
        test: 'name'
    }

    // invoke function
    storage.setItem('item', item);

    // assertions
    expect(secureLocalStorage.setItem).toHaveBeenCalled()
});

it('storage - getItem', () => {
    // invoke function
    storage.getItem('item');

    // assertions
    expect(secureLocalStorage.getItem).toHaveBeenCalled()
});

it('storage - removeItem', () => {
    // invoke function
    storage.removeItem('item');

    // assertions
    expect(secureLocalStorage.removeItem).toHaveBeenCalled()
});

it('storage - removeAllItems', () => {
    // invoke function
    storage.removeAllItems();

    // assertions
    expect(secureLocalStorage.clear).toHaveBeenCalled()
});