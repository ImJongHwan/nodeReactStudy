
import React, {Component} from 'react'
import ValueInput from './ValueInput'

export default class InchToCm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inch: 0,
      cm: 0
    }
  }
  cmChanged(e) {
    this.setState({
      inch: e.value / 2.54,
      cm: e.value
    })
  }
  inchChanged(e) {
    this.setState({
      inch: e.value,
      cm: e.value * 2.54
    })
  }

  render() {
    return (
      <div>
        <ValueInput title={'inch'} onChange={e => this.inchChanged(e)} value={this.state.inch}/>
        <ValueInput title={'cm'} onChange={e => this.cmChanged(e)} value={this.state.cm}/>
      </div>
    )
  }
}
