import React, {Component} from 'react'

export default class ZipInput extends Component {
  constructor (props) {
    super(props)
    const v = (this.props.value) ? this.props.value : ''

    this.state = {
      value: v,
      isOK: this.checkValue(v)
    }
  }

  checkValue (s) {
    const zipPattern = /^\d{5}$/
    return zipPattern.test(s)
  }

  handleChange (e) {
    const v = e.target.value
    const newValue = v.replace(/[^0-9]+/g, '')
    const newIsOK = this.checkValue(newValue)

    this.setState({
      value: newValue,
      isOK: newIsOK
    })

    if (this.props.onChange) {
      this.props.onChange({
        target: this,
        value: newValue,
        isOK: newIsOK
      })
    }
  }

  compoentWillReceiveProps (nextProps) {
    this.setState({
      value: nextProps.value,
      isOK: this.checkValue(nextProps.value)
    })
  }

  render () {
    const msg = this.renderStatusMessage()
    return (
      <div>
        <label>우편 번호: <br />
          <input type='text'
            placeholder='우편 번호를 입력해주세요.'
            value={this.state.value}
            onChange={e => this.handleChange(e)} />
          {msg}
        </label>
      </div>
    )
  }

  renderStatusMessage () {
    const so = {
      margin: '8px',
      padding: '8px',
      color: 'white'
    }

    let msg = null
    if (this.state.isOK) {
      so.backgroundColor = 'green'
      msg = <span style={so}>OK</span>
    } else {
      if (this.state.value !== '') {
        so.backgroundColor = 'red'
        msg = <span style={so}>NG</span>
      }
    }
    return msg
  }
}
