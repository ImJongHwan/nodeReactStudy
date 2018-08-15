
const express = require('express')
const app = express()
const portNo = 3000

app.get('/', (req, res,next) =>{
  res.send('Hello World!')
})

app.listen(portNo, ()=> {
  console.log('서버 실행 완료:', `http://localhost:${portNo}`)
})
