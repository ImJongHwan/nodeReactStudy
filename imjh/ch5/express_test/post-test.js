const express = require('express')
const app = express()

app.listen(3000, () => {
  console.log('서버 실행 완료 - http://localhost:3000')
})

app.get('/', (req, res) => {
  res.send('<form method="POST">' +
    '<textarea name="meto">테스트</textarea>' +
    '<br /><input type="submit" value="전송">' +
    '</form>')
})

app.post('/', (req, res) => {
  res.send('POST 되었습니다.')
})
