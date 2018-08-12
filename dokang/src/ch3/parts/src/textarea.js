
import React from 'react'

export default class TextAreaForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}
  }
  render() {
    return (<div>
      <form onSubmit={e => this.doSubmit(e)}>
        <textarea onChange={e => this.doChange(e)} value={this.state.value}/><br/>
        <input type='submit' value={'결정'}/>
      </form>
    </div>)
  }

  doChange(e) {
    this.setState({
      value: e.target.value
    })
  }
  doSubmit(e) {
    e.preventDefault()
    window.alert(this.state.value)
  }
}
