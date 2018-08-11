import React from 'react'

export default class MultiForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '윤인성',
      age: 25,
      hobby: '독서'
    }
  }

  doChange (e) {
    const newValue = e.target.value
    const key = e.target.name
    this.setState({[key]: newValue})
  }

  doSubmit (e) {
    e.preventDefault()
    const j = JSON.stringify(this.state)
    window.alert(j)
  }

  render () {
    const doSubmit = (e) => this.doSubmit(e)
    const doChange = (e) => this.doChange(e)
    return (
      <form onSubmit={doSubmit}>
        <div>
          <label>
            이름: <br />
            <input name='name' type='text' value={this.state.name} onChange={doChange} />
          </label>
        </div>
        <div>
          <label>
            나이: <br />
            <input name='age' type='number' value={this.state.age} onChange={doChange} />
          </label>
        </div>
        <div>
          <label>
            이름: <br />
            <input name='hobby' type='text' value={this.state.age} onChange={doChange} />
          </label>
        </div>
        <input type='submit' value='전송' />
      </form>
    )
  }
}
