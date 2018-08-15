const express = require('express')
const app = express()

app.listen(3000, () => {
  console.log('서버 실행 완료 - http://localhost:3000')
})

app.use('/', express.static('./html'))
