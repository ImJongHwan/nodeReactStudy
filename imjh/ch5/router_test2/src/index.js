import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloApp2 from './HelloApp2';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HelloApp2 />, document.getElementById('root'));
registerServiceWorker();
