import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Stopwatch from './Stopwatch';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Stopwatch />, document.getElementById('root'));
registerServiceWorker();
