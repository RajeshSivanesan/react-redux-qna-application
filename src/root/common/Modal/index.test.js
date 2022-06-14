import React from 'react';
import { render } from '../../../test-utils';
import Modal from './index';

it('renders without crashing', () => {
    //setup
    const div = document.createElement('div');
    div.setAttribute('id', 'root');
    document.body.appendChild(div);
    
    //render
    const { container } = render(<Modal show={true} onClose={jest.fn()} title={'Test'}><div>Children</div></Modal>, { container: div });

    //assertions
    expect(container.querySelector('.modal')).toBeDefined();
});

it('close modal on escape', () => {
    //setup
    const div = document.createElement('div');
    div.setAttribute('id', 'root');
    document.body.appendChild(div);
    const mockFunction = jest.fn();

    //render
    render(<Modal show={true} onClose={mockFunction} title={'Test'}><div>Children</div></Modal>, { container: div });

    // post render trigger keydown event
    const event = new KeyboardEvent("keydown", { keyCode: 27 });
    document.body.dispatchEvent(event);

    // assertions
    expect(mockFunction).toHaveBeenCalled();
});