import React from 'react'

export default class ValueInut extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: this.props.value
    }
  }

  handleChange (e) {
    const v = e.target.value
    const newValue = v.replace(/[^0-9.]+/g, '')
    this.setState({value: newValue})
    if (this.props.onChange) {
      this.props.onChange({
        target: this,
        value: newValue
      })
    }
  }

  componentWillReceiveProps (newProps) {
    this.setState({value: newProps.value})
  }

  render () {
    return (
      <div>
        <label>{this.props.title}: <br />
          <input type='text' value={this.state.value} onChange={e => this.handleChange(e)} />
        </label>
      </div>
    )
  }
}
