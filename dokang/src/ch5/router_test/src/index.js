import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import HelloApp2 from "./HelloApp2"

ReactDOM.render(<HelloApp2 />, document.getElementById('root'));
registerServiceWorker();
