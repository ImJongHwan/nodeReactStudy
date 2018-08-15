const express = require('express')
const app = express()

const multer = require('multer')
const path = require('path')

// var dir = './tmp';

// if (!fs.existsSync(dir)){
//     fs.mkdirSync(dir);
// }

const tmpDir = path.join(__dirname, 'tmp')
const pubDir = path.join(__dirname, 'pub')
const uploader = multer({dest: tmpDir})

app.listen(3000, () => {
  console.log('서버 실행 완료 - http://localhost:3000')
})

app.get('/', (req, res) => {
  res.send(
    '<form method="POST" action="/" enctype="multipart/form-data">' +
    '<input type="file" name ="aFile" /><br />' +
    '<input type="submit" value="업로드" />' +
    '</form>'
  )
})

app.use('/pub', express.static(pubDir))
app.post('/', uploader.single('aFile'), (req, res) => {
  console.log('파일을 받았습니다.')
  console.log('원본 파일 이름:', req.file.originalname)
  console.log('저장된 경로:', req.file.path)

  if (req.file.mimetype !== 'image/png') {
    res.send('PNG 이미지만 업로드할 수 있습니다.')
    return
  }

  if (!req.file.originalname.toLowerCase().endsWith('.png')) {
    res.send('확장자 명이 .png가 아닙니다.')
    return
  }

  const fname = req.file.filename + '.png'
  const des = pubDir + '/' + fname
  const fs = require('fs')
  console.log(req.file.path)
  console.log(des)
  fs.rename(req.file.path, des, err => {
    if (err) {
      console.log('파일을 업로드 할 수 없습니다.')
      console.log(err)
    }
  })

  res.send('다음과 같은 파일이 업로드 됐습니다.<br />' +
    `<img src="/pub/${fname}" />`)
})
