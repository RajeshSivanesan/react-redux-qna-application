import React from 'react';
import { render } from '../../../../test-utils';
import EditQuestion from './index';
import { fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
})

it('renders without crashing', () => {
    // setup
    const div = document.createElement('div');
    div.setAttribute('id', 'root');
    document.body.appendChild(div);

    // render
    const { getByText, container } = render(
        <EditQuestion
            setShow={jest.fn()}
            show={true}
            questionDetails={{ id: 1, questionText: 'test', answerText: 'test' }}
            setEditQuestion={jest.fn()}
        />,
        { container: div }
    );

    // assertions
    expect(getByText('Edit Question'))
    expect(container.querySelector('.modal')).toBeDefined();
});

it('show modal - false', () => {
    // setup
    const div = document.createElement('div');
    div.setAttribute('id', 'root');
    document.body.appendChild(div);

    // render
    const { getByText, container } = render(
        <EditQuestion
            setShow={jest.fn()}
            show={false}
            questionDetails={{ id: 1, questionText: 'test', answerText: 'test' }}
            setEditQuestion={jest.fn()}
        />,
        { container: div }
    );

    // assertions
    expect(container.querySelector('.modal')).toBe(null)
});

it('show modal - keydown close', () => {
    // setup
    const div = document.createElement('div');
    div.setAttribute('id', 'root');
    document.body.appendChild(div);
    const mockFunction = jest.fn();

    // render
    const { getByText } = render(
        <EditQuestion
            setShow={mockFunction}
            show={true}
            questionDetails={{ id: 1, questionText: 'test', answerText: 'test' }}
            setEditQuestion={jest.fn()}
        />,
        { container: div }
    );

    // post render trigger keydown event
    const event = new KeyboardEvent("keydown", { keyCode: 27 });
    document.body.dispatchEvent(event);

    // assertions
    expect(mockFunction).toHaveBeenCalled()
});

it('show modal - clear questionDetails on submission', async () => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');

    // setup
    const div = document.createElement('div');
    div.setAttribute('id', 'root');
    document.body.appendChild(div);
    const mockFunction = jest.fn();

    // render
    const { getByTestId, container } = render(
        <EditQuestion
            setShow={jest.fn()}
            show={true}
            questionDetails={{ id: 1, questionText: 'test', answerText: 'test' }}
            setEditQuestion={mockFunction}
        />,
        { container: div }
    );

    // post render trigger keydown event
    await act(async () => {
        fireEvent.submit(getByTestId('addEditSubmit'));
        // Fast-forward until all timers have been executed
        jest.runAllTimers();
    });

    // assertions
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(mockFunction).toHaveBeenCalled();
});

it('change input values and submit', async () => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');

    // setup
    const div = document.createElement('div');
    div.setAttribute('id', 'root');
    document.body.appendChild(div);
    const mockFunction = jest.fn();

    // render
    const { getByTestId, container } = render(
        <EditQuestion
            setShow={jest.fn()}
            show={true}
            questionDetails={{ id: 1, questionText: 'test', answerText: 'test' }}
            setEditQuestion={mockFunction}
        />,
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
