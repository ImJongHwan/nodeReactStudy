import React from 'react';
import ReactDOM from 'react-dom';
import FormInput from './FormInput';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormInput />, div);
  ReactDOM.unmountComponentAtNode(div);
});
