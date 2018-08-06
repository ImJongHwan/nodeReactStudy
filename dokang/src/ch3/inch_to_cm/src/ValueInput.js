
import React, {Component} from 'react'

export default class ValueInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.value
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({value: nextProps.value})
  }

  handleChange(e) {
    const v = e.target.value
    const filtered = v.replace(/[^0-9.]+/g, '')
    this.setState({value: filtered})
    if (this.props.onChange) {
      this.props.onChange({
        value: filtered
      })
    }
  }

  render() {
    return (
      <div><label>
        {this.props.title}: <br/>
        <input type={'text'} value={this.state.value} onChange={e => this.handleChange(e)}/>
      </label></div>
    )
  }
}
