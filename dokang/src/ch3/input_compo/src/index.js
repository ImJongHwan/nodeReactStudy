import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FormInput from './FormInput';
import registerServiceWorker from './registerServiceWorker';

class CustomForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      tel: '',
      allok: false
    }
    this.oks = {}
  }
  handleChange(e) {
    this.oks[e.name] = e.isOK
    this.setState({
      [e.name]: e.value,
      allok: (this.oks['email'] && this.oks['tel'])
    })
  }
  handleSubmit(e) {
    window.alert(JSON.stringify(this.state))
    e.preventDefault()
  }
  render() {
    const emailPat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const asciiFilter = /[^\u0020-\u007e]+/g
    const telPat = /^[0-9-()+]+$/
    const telFilter = /[^0-9-()+]/g
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <FormInput name={'email'} label={'메일 주소'}
                   value={this.state.email} filter={asciiFilter} pattern={emailPat}
                   onChange={e => this.handleChange(e)}
        />
        <FormInput name={'tel'} label={'전화 번호'}
                   value={this.state.tel} filter={telFilter} pattern={telPat}
                   onChange={e => this.handleChange(e)}
        />
        <input type={'submit'} value={'전송'} disabled={!this.state.allok}/>
      </form>
    )
  }
}

ReactDOM.render(<CustomForm/>, document.getElementById('root'));
registerServiceWorker();
