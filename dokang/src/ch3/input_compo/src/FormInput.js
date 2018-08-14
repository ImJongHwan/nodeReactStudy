import React, { Component } from 'react';
import PropTypes from 'prop-types'
import logo from './logo.svg';
import './App.css';

class FormInput extends Component {
  constructor(props) {
    super(props)
    const v = (this.props.value) ? this.props.value : ''
    this.state = {
      value: v,
      isOK: this.checkValue(v)
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value,
      isOK: this.checkValue(nextProps.value)
    })
  }
  checkValue(s) {
    if (this.props.pattern === null) {
      return true
    }
    return this.props.pattern.test(s)
  }
  handleChange(e) {
    const v = e.target.value
    const newValue = v.replace(this.props.filter, '')
    const newIsOK = this.checkValue(newValue)
    this.setState({
      value: newValue,
      isOK: newIsOK
    })
    if (this.props.onChange) {
      this.props.onChange({
        name: this.props.name,
        value: newValue,
        isOK: newIsOK
      })
    }
  }
  render() {
    const msg = this.renderStatusMessage()
    return (
      <div className="App">
        <label>{this.props.label}: <br/>
          <input type = 'text'
                 placeholder={this.props.placeholder}
                 value={this.state.value}
                 onChange={e => this.handleChange(e)} />
          {msg}
        </label>
      </div>
    );
  }
  renderStatusMessage() {
    const so = {
      margin: '8px',
      padding: '8px',
      color: 'white'
    }
    let msg = null
    if(this.state.isOK) {
      so.backgroundColor = 'green'
      msg = <span style={so}>OK</span>
    }
    else {
      if (this.state.value!=='') {
        so.backgroundColor = 'red'
        msg = <span style={so}>NG</span>
      }
    }
    return msg
  }
}

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  filter: PropTypes.object,
  pattern: PropTypes.object,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
}

FormInput.defaultProps = {
  filter: null,
  pattern: null,
  value: '',
  placeholder: '',
  onChange: null
}

export default FormInput;
