import React, {Component} from 'react'
import ReactDOM from 'react-dom'
const {clipboard} = require('electron')

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      isActive: false,
      low2up: true
    }
    setInterval(e => this.tick(), 1000)
  }
  convToUpper(str) {
    return str.toUpperCase()
  }
  tick() {
    if(!this.state.isActive) return
    const clip = clipboard.readText()
    const clip2 = this.state.low2up ? this.convToUpper(clip) : clip
    if (clip !== clip2) {
      clipboard.writeText(clip2)
    }
    this.setState({text: clip})
  }
  changeState(e) {
    const name = e.target.name
    this.setState({[name]: !this.state[name]})
  }
  render() {
    const taStyle = {
      width: '100%',
      height: '300px',
      backgroundColor: '#F4F4F4'
    }
    return(<div className={'window'}>
      <div className={'window-content'}>
        <div className={'pane-group'}>
          <div className={'pane-sm sidebar'}>
            <div>
              <ul className={'list-group'}>
                <li className={'list-group-item'}>
                  <label>
                    <input type={'checkbox'}
                           checked={this.state.isActive}
                           name={'isActive'}
                           onChange={e => this.changeState(e)}
                    />
                    감시 활성화
                  </label>
                </li>
                <li className={'list-group-item'}>
                  <label>
                    <input type={'checkbox'}
                           checked={this.state.low2up}
                           name={'low2up'}
                           onChange={e => this.changeState(e)}
                    />
                    소문자를 대문자로 변환
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div className={'pane'}>
            <div className={'padded-more'}>
              클립보드:<br/>
              <textarea style={taStyle} value={this.state.text}/>
            </div>
          </div>
        </div>
      </div>
    </div> )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
