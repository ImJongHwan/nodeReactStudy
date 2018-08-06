
import React, {Component} from 'react'

export default class MultiForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '강동옥',
      age: 30,
      hobby: '자전거'
    }
  }
  doChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  doSubmit(e) {
    e.preventDefault()
    const json = JSON.stringify(this.state)
    window.alert(json)
  }
  render() {
    const doChange = e => this.doChange(e)
    const doSubmit = e => this.doSubmit(e)
    return (
      <form onSubmit={doSubmit}>
        <div>
          <label>
          이름: <br/>
          <input name='name' type='text' value={this.state.name} onChange={doChange} />
          </label>
        </div>
        <div>
          <label>
          나이: <br/>
          <input name='age' type='number' value={this.state.age} onChange={doChange} />
          </label>
        </div>
        <div>
          <label>
          취미: <br/>
          <input name='hobby' type='text' value={this.state.hobby} onChange={doChange} />
          </label>
        </div>
        <input type={'submit'} value={'전송'} />
      </form>
    )
  }
}
