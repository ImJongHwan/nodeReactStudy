import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    console.log('constructor')
  }
  componentWillMount() {
    console.log('componentWillMount')
  }
  componentDidMount() {
    console.log('componentDidMount')
  }
  //변경
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps')
  }
  shouldComponentUpdate(nextProps, nextState0) {
    console.log('shouldComponentUpdate')
    return true
  }
  componentWillUpdate() {
    console.log('conponentWillUpdate')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  //언마운트
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  render() {
    console.log('render')
    const setStateHandler = e => {
      console.log('* call setState()')
      this.setState({r: Math.random()})
    }

    return (
      <div className="App">
        <button onClick={setStateHandler}>
          setState
        </button>
      </div>
    );
  }
}

export default App;
