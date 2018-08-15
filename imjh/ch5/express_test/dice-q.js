const express = require('express')
const app = express()
const portNo = 3000

app.get('/', (req, res) => {
  if (!req.query.q) {
    res.send(
      '<p><a href="/dice/6">6면체 주사위</a><br />' +
      '<a href="/dice/12">12면체 주사위</a></p>'
    )
  } else {
    const q = parseInt(req.query.q, 10)
    res.send(
      '주사위의 값은...' + dice(q)
    )
  }
})

function dice (n) {
  return Math.floor(Math.random() * n) + 1
}

app.listen(portNo, () => {
  console.log('서버 실행 완료:', `http://localhost:${portNo}`)
})
