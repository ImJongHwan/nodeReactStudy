import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const HelloApp2 = () => (
  <Router>
    <div style={{margin: 20}}>
      <HelloHeader />
      <div>
        <Route exact path='/' component={HelloKorean} />
        <Route path='/ko' component={HelloKorean} />
        <Route path='/ja' component={HelloJapanese} />
        <Route path='/en' component={HelloEnglish} />
      </div>
      <HelloFooter />
    </div>
  </Router>
)

const HelloHeader = () => (
  <div>
    <h3 style={styleHeader}>HelloApp v2</h3>
    <p>
      [<a href='/ko'>한국어</a>]
      [<a href='/ja'>일본어</a>]
      [<a href='/en'>영어</a>]
    </p>
  </div>
)

const HelloFooter = () => (
  <div style={styleHeader}>
    인사를 다양한 언어로 출력하는 애플리케이션입니다.
  </div>
)

const HelloKorean = () => (
  <div><h1>안녕하세요</h1></div>
)

const HelloJapanese = () => (
  <div><h1>こんにちは。</h1></div>
)

const HelloEnglish = () => (
  <div><h1>Hello</h1></div>
)

const styleHeader = {
  backgroundColor: 'orange',
  color: 'white',
  padding: 8
}

export default HelloApp2
