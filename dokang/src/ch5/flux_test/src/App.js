import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {AppView} from "./component/AppView"

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppView/>
      </div>
    );
  }
}

export default App;
