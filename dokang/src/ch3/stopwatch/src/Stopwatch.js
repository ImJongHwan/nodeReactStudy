import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Stopwatch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLive: false,
      curTime: 0,
      startTime: 0
    }
    this.timerId = 0
  }
  componentWillMount() {
    this.timerId = setInterval(e => {
      this.tick()
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timerId)
  }
  tick(e) {
    if (this.state.isLive) {
      const v = new Date().getTime()
      this.setState({curTime: v})
    }
  }
  clickHandler(e) {
    if (this.state.isLive) {
      this.setState({isLive:false})
    }
    else {
      const v = new Date().getTime()
      this.setState({
        curTime: v,
        startTime: v,
        isLive: true
      })
    }
  }
  getDisp() {
    const s = this.state
    const delta = s.curTime - s.startTime
    const seconds = Math.floor(delta / 1000)
    const ss = seconds % 60
    const minutes = Math.floor(seconds / 60)
    const mm = minutes % 60
    const hh = Math.floor(minutes / 60)
    const zeroAdded = num => {
      const s = '0' + num.toString()
      return s.substr(s.length - 2, 2)
    }
    return <span className='disp'>
      {zeroAdded(hh)}:{zeroAdded(mm)}:{zeroAdded(ss)}
    </span>
  }

  render() {
    const label = this.state.isLive ? 'STOP' : 'START'
    const disp = this.getDisp()
    const fclick = e => this.clickHandler(e)
    return (
      <div className="Stopwatch">
        <div>{disp}</div>
        <button onClick={fclick}>{label}</button>
      </div>
    );
  }
}

export default Stopwatch;
