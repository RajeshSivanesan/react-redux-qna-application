import React from 'react';
import { render } from '../../../test-utils';
import Header from './index';

it('renders without crashing', () => {
  // setup
  const div = document.createElement('div');
  div.setAttribute('id', 'root');
  document.body.appendChild(div);

  // render
  const { getByText } = render(<Header />, { container: div });

  // assertions
  expect(getByText('The awesome Q/A tool'))
});
