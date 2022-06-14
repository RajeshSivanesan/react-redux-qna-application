import React from 'react';
import { render } from '../../../../test-utils';
import AddQuestion from './index';
import { fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
});

it('renders without crashing', () => {
    // setup
    const div = document.createElement('div');
    div.setAttribute('id', 'root');
    document.body.appendChild(div);

    // render
    const { getByText, container } = render(
        <AddQuestion />,
        { container: div }
    );

    // assertions
    expect(getByText('Create Question'))
    expect(container.querySelector('.modal')).toBeDefined();
});

it('Create Question', async () => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');

    // setup
    const div = document.createElement('div');
    div.setAttribute('id', 'root');
    document.body.appendChild(div);

    // render
    const { getByTestId, container } = render(
        <AddQuestion />,
        { container: div }
    );

    // post render trigger keydown event
    await act(async () => {
        fireEvent.change(getByTestId('questionText'), {
            target: {
                value: 'test1234'
            }
        })

        fireEvent.change(getByTestId('answerText'), {
            target: {
                value: 'test1234'
            }
        })

        fireEvent.submit(getByTestId('addEditSubmit'));
        // Fast-forward until all timers have been executed
        jest.runAllTimers();
    });

    // assertions
    expect(setTimeout).toHaveBeenCalledTimes(1);
});