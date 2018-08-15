
const express = require('express')
const app = express()

const multer = require('multer')
const path = require('path')

const tmpDir = path.join(__dirname, 'tmp')
const pubDir = path.join(__dirname, 'pub')
const uploader = multer({dest: tmpDir})

const portNo = 3000
app.listen(portNo, () => {
  console.log('서버 실행 완료:', `http://localhost:${portNo}`)
})

app.get('/', (req,res) => {
  res.send(
    '<form method="POST" action="/" enctype="multipart/form-data">' +
    '<input type="file" name="aFile"/><br/>' +
    '<input type="submit" name="업로드"/>' +
    '</form>'
  )
})

app.use('/pub', express.static(pubDir))

app.post('/', uploader.single('aFile'), (req, res) => {
  console.log('파일을 받았습니다.')
  console.log('원본 파일 이름:', req.file.originalname)
  console.log('지정된 경로:', req.file.path)
  if (req.file.mimetype !== 'image/png') {
    res.send('PNG 이미지만 업로드 할 수 있습니다.')
    return
  }
  const fname = req.file.filename + '.png'
  console.log(fname)
  const fs = require('fs')
  const des = pubDir + '/' + fname
  fs.mkdir(pubDir, () => { })
  fs.rename(req.file.path, des, () => {
    res.send('다음과같이 파일이 업로드되었습니다.<br/>' +
      `<img src="/pub/${fname}"/>`)
  })
})

