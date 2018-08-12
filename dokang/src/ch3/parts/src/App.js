import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextForm from "./text"
import CBoxForm from "./cbox"
import TextAreaForm from "./textarea"
import RadioForm from "./radio"
import SelectForm from "./select"

class App extends Component {
  render() {
    return (
      <div className="App">
        <TextForm/><br/>
        <CBoxForm/><br/>
        <TextAreaForm/><br/>
        <RadioForm items={['초콜렛', '과자', '콜라']}/><br/>
        <SelectForm items={['초콜렛', '과자', '콜라']} value={'콜라'}/><br/>
      </div>
    );
  }
}

export default App;
