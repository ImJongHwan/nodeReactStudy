
import React from 'react'

export default class SelectForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items,
      value: props.value
    }
  }
  render() {
    const options = this.state.items.map(i => {
      return (<option key={i} value={i}>
        {i}
      </option>)
    })
    return (<div>
      <form onSubmit={e => this.doSubmit(e)}>
        <select value={this.state.value} onChange={e => this.doChange(e)}>
          {options}
        </select>
       <input type='submit'/>
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
