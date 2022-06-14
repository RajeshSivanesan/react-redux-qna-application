import React from 'react';
import userEvent from '@testing-library/user-event';
import { render } from '../../../test-utils';
import { Tooltip, Contents, HoverTrigger } from './index';

it('renders without crashing', () => {
    //setup
    const div = document.createElement('div');
    div.setAttribute('id', 'root');
    document.body.appendChild(div);

    //render
    const { container } = render(
        <Tooltip>
            <HoverTrigger>
                Test
            </HoverTrigger>
            <Contents>
                Test tooltip
            </Contents>
        </Tooltip>
        , { container: div });

    //assertions
    expect(container.querySelector('.Tooltip')).toBeDefined();
});

it('hover effect on tooltip', () => {
    //setup
    const div = document.createElement('div');
    div.setAttribute('id', 'root');
    document.body.appendChild(div);

    //render
    const { getByTestId, container } = render(
        <Tooltip>
            <HoverTrigger>
                Test
            </HoverTrigger>
            <Contents>
                Test tooltip
            </Contents>
        </Tooltip>
        , { container: div });

    userEvent.hover(getByTestId('hoverTrigger'));

    //assertions
    expect(container.querySelector('.Tooltip-content')).toBeDefined();
});