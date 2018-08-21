
import React, {Component} from 'react'
import {connect} from 'react-redux'
import uuidv1 from 'uuid'
import {addArticle} from "../actions"

const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => dispatch(addArticle(article))
  }
}

class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    }
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    const {title} = this.state
    const id = uuidv1()
    this.props.addArticle({title, id})
    this.setState({title: ""})
  }

  render() {
    const {title} = this.state
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <div className={'form-group'}>
          <label htmlFor={'title'}>Title</label>
          <input
            type={'text'} className={'form-control'}
            id={'title'} value={title}
            onChange={e => this.handleChange(e)}
          />
        </div>
        <button type={'submit'} className={'btn btn-success btn-lg'}>
          SAVE
        </button>
      </form>
    )
  }
}

// there is nothing to get from global state (state in "store")
// but we want to get dispatcher for global state
const Form = connect(null, mapDispatchToProps) (ConnectedForm)

export default Form
