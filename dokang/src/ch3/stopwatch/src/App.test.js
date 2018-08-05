import React from 'react';
import ReactDOM from 'react-dom';
import Stopwatch from './Stopwatch';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Stopwatch />, div);
  ReactDOM.unmountComponentAtNode(div);
});
