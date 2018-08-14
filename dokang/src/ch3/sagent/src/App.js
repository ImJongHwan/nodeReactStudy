import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import request from 'superagent'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: null
    }
  }
  componentWillMount() {
    request.get('./fruits.json')
      .accept('application/json')
      .end((err, res) => {this.loadedJSON(err, res)})
  }
  loadedJSON(err, res) {
    if(err) {
      console.log('JSON을 읽어 들이는 동안 오류가 발생했습니다.')
    }
    else {
      this.setState({
        items: res.body
      })
    }
  }
  render() {
    if (!this.state.items) {
      return <div className={'App'}>
        읽어들이는 중입니다..
      </div>
    }
    else {
      const options = this.state.items.map (e => {
        return <option value={e.price} key={e.name}>
          {e.name}
        </option>
      })
      return (
        <div className="App">
          과일: <select>{options}</select>
        </div>
      );
    }
  }
}

export default App;
