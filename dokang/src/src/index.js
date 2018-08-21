import * as ReactDOM from 'react-dom'

console.log(`I'm a silly entry point`);

const arr = [1, 2, 3];
const iAmJavascriptES6 = () => console.log(...arr);
window.iAmJavascriptES6 = iAmJavascriptES6;

import App from "./App";
import style from "./main.css";
import store from './store'
import React from 'react'
import {Provider} from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app"))
