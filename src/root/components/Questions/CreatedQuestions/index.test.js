import React from 'react';
import { render, screen } from '../../../../test-utils';
import CreatedQuestions from './index';
import { fireEvent, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
})

it('renders without crashing / no questions', () => {
    // setup
    const div = document.createElement('div');
    div.setAttribute('id', 'root');
    document.body.appendChild(div);

    // render
    const { getByText, container } = render(
        <CreatedQuestions />,
        { container: div }
    );

    // assertions
    expect(getByText('Created Questions'));
    expect(getByText('No questions yet :-('))
});

it('no questions remove all criteria', async () => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');

    // setup
    const div = document.createElement('div');
    div.setAttribute('id', 'root');
    document.body.appendChild(div);

    // render
    const { getByText, getByTestId } = render(
        <CreatedQuestions />,
        { container: div }
    );

    await act(async () => {
        fireEvent.click(getByTestId('removeQuestions'));

        jest.runAllTimers();
    });

    // assertions
    expect(getByText('No questions yet :-('))
});

it('no questions sort all criteria', async () => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');

    // setup
    const div = document.createElement('div');
    div.setAttribute('id', 'root');
    document.body.appendChild(div);

    // render
    const { getByText, getByTestId } = render(
        <CreatedQuestions />,
        { container: div }
    );

    await act(async () => {
        fireEvent.click(getByTestId('sortQuestions'));

        jest.runAllTimers();
    });

    // assertions
    expect(getByText('No questions yet :-('))
});

it('render created questions', () => {
    // setup
    const div = document.createElement('div');
    div.setAttribute('id', 'root');
    document.body.appendChild(div);

    // render
    const { getByText, container } = render(
        <CreatedQuestions />,
        { 
            container: div,
            preloadedState: {
                questions: [{
                    id: 1,
                    questionText: 'text',
                    answerText: 'text123'
                }]
            }
        }
    );

    // assertions
    expect(getByText('Created Questions'));
    expect(container.querySelector('.accordion')).toBeDefined();
    expect(getByText('text'))
});

it('remove all questions', async () => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');

    // setup
    const div = document.createElement('div');
    div.setAttribute('id', 'root');
    document.body.appendChild(div);

    // render
    const { getByTestId, container, getByText } = render(
        <CreatedQuestions />,
        { 
            container: div,
            preloadedState: {
                questions: [{
                    id: 1,
                    questionText: 'text',
                    answerText: 'text123'
                }]
            }
        }
    );

    await act(async () => {
        fireEvent.click(getByTestId('removeQuestions'));

        jest.runAllTimers();
    });

    // assertions
    expect(setTimeout).toHaveBeenCalledTimes(1);
});

it('sort all questions', async () => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');

    // setup
    const div = document.createElement('div');
    div.setAttribute('id', 'root');
    document.body.appendChild(div);

    // render
    const { getByTestId, container } = render(
        <CreatedQuestions />,
        { 
            container: div,
            preloadedState: {
                questions: [{
                    id: 1,
                    questionText: 'text',
                    answerText: 'text123'
                }, {
                    id: 2,
                    questionText: 'hello',
                    answerText: 'hello'
                }]
            }
        }
    );

    const accordions = container.querySelectorAll('.accordion');
    expect(accordions[0].textContent).toEqual('texttext123');
    expect(accordions[1].textContent).toEqual('hellohello');

    await act(async () => {
        fireEvent.click(getByTestId('sortQuestions'));

        jest.runAllTimers();
    });

    // assertions
    expect(setTimeout).toHaveBeenCalledTimes(1);
});

it('remove a question', async () => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');

    // setup
    const div = document.createElement('div');
    div.setAttribute('id', 'root');
    document.body.appendChild(div);

    // render
    const { getByTestId, container, getByText } = render(
        <CreatedQuestions />,
        { 
            container: div,
            preloadedState: {
                questions: [{
                    id: 1,
                    questionText: 'text',
                    answerText: 'text123'
                }]
            }
        }
    );

    await act(async () => {
        fireEvent.click(getByTestId('removeQuestion'));

        jest.runAllTimers();
    });

    await waitFor(() => {}, 0)

    // assertions
    expect(setTimeout).toHaveBeenCalledTimes(1);
});

it('edit a question', async () => {
    // setup
    const div = document.createElement('div');
    div.setAttribute('id', 'root');
    document.body.appendChild(div);

    // render
    const { getByTestId, container, getByText } = render(
        <CreatedQuestions />,
        { 
            container: div,
            preloadedState: {
                questions: [{
                    id: 1,
                    questionText: 'text',
                    answerText: 'text123'
                }]
            }
        }
    );

    await act(async () => {
        fireEvent.click(getByTestId('editQuestion'));
    });

    await waitFor(() => {}, 0)

    // assertions
    expect(container.querySelector('.modal')).toBeDefined();
});