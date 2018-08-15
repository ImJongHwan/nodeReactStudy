
const express = require('express')
const app = express()
const portNo = 3000

app.listen(portNo, () => {
  console.log('서버 실행 완료:', `http://localhost:${portNo}`)
})

app.get('/', (req, res) => {
  res.send('<form method="POST">' +
    '<textarea name="memo">테스트</textarea>' +
    '<br/><input type="submit" value="전송">' +
    '</form>')
})

app.post('/', (req, res) => {
  res.send('POST되었습니다.')
})
