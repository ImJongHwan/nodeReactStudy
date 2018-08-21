import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CustomerApp from './CustomerApp'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CustomerApp />, document.getElementById('root'));
registerServiceWorker();
