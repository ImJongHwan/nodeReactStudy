import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import HelloApp2 from "./HelloApp2"
import CustomerApp from './CustomerApp'

ReactDOM.render(<CustomerApp />, document.getElementById('root'));
registerServiceWorker();
