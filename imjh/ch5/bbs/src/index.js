import React from 'react'
import ReactDOM from 'react-dom'
import request from 'superagent'

class BBSForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      body: ''
    }
  }

  nameChanged (e) {
    this.setState({ name: e.target.value })
  }

  bodyChanged (e) {
    this.setState({ body: e.target.value })
  }
  post (e) {
    request
      .get('/api/write')
      .query({
        name: this.state.name,
        body: this.state.body
      })
      .end((err, data) => {
        if (err) {
          console.error(err)
        }
        this.setState({name: '', body: ''})
        if (this.props.onPost) {
          this.props.onPost()
        }
      })
  }

  render () {
    return (
      <div style={styles.form}>
        이름:<br />
        <input tyle='text' value={this.state.name}
          onChange={e => this.nameChanged(e)} /><br />
        본문:<br />
        <input type='text' value={this.state.body} size='60'
          onChange={e => this.bodyChanged(e)} /><br />
        <button onClick={e => this.post()}>전송</button>
      </div>
    )
  }
}

class BBSApp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      items: []
    }
  }
  componentWillMount () {
    this.loadLogs()
  }
  loadLogs () {
    request
      .get('/api/getItems')
      .end((err, data) => {
        if (err) {
          console.error(err)
          return
        }
        this.setState({items: data.body.logs})
      })
  }
  render () {
    const itemsHtml = this.state.items.map(e => (
      <li key={e._id}>{e.name} - {e.body}</li>
    ))
    return (
      <div>
        <h1 style={styles.h1}>게시판</h1>
        <BBSForm onPost={e => this.loadLogs()} />
        <p style={styles.right}>
          <button onClick={e => this.loadLogs()}>
            다시 불러오기</button>
        </p>
        <ul>{itemsHtml}</ul>
      </div>
    )
  }
}

const styles = {
  h1: {
    backgroundColor: 'blue',
    color: 'white',
    fontSize: 24,
    padding: 12
  },
  form: {
    padding: 12,
    border: '1px solid silver',
    backgroundColor: '#F0F0F0'
  },
  right: {
    textAlign: 'right'
  }
}

ReactDOM.render(
  <BBSApp />,
  document.getElementById('root')
)
