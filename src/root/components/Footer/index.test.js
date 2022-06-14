import React from 'react';
import { render } from '../../../test-utils';
import Footer from './index';

it('renders without crashing', () => {
  // setup
  const div = document.createElement('div');
  div.setAttribute('id', 'root');
  document.body.appendChild(div);

  // render
  const { getByText } = render(<Footer />, { container: div });

  // assertions
  expect(getByText('Rajesh Sivanesan'))
});
