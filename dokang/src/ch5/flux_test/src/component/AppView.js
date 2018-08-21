
import {Actions} from "../action/actions"
import {nameStore, messageStore} from "../store/stores"
import React from "react"

export class AppView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {name: '', message: ''}
    nameStore.onChange = () => {
      this.setState({name: nameStore.name})
    }
    messageStore.onChange = () => {
      this.setState({message: messageStore.message})
    }
  }

  render() {
    console.log('View.render')
    return (<div>
      <div>
        <input
          value={this.state.name}
          onChange={e => Actions.changeName(e.target.value)}
        />
        <button onClick={e => Actions.submitName()}>등록</button>
      </div>
      <div>{this.state.message}</div>
    </div>)
  }
}
