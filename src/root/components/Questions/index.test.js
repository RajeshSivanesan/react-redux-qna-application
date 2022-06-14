import React from 'react';
import { render } from '../../../test-utils';
import Questions from './index';

it('renders without crashing', () => {
  // setup
  const div = document.createElement('div');
  div.setAttribute('id', 'root');
  document.body.appendChild(div);

  // render
  const { getByText } = render(<Questions />, { container: div });

  // assertions
  expect(getByText('Please find the questions and answers so far created. Feel free to create your own questions.'))
});
