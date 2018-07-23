const fs = require('fs')

function readFilePr (fname) {
  return new Promise((resolve) => {
    fs.readFile(fname, 'utf-8', (err, s) => {
      resolve(s)
      if (err) throw err
    })
  })
}

readFilePr('a.txt')
  .then((text) => {
    console.log('a.txt를 읽어 들였습니다.', text)
    return readFilePr('b.txt')
  })
  .then((text) => {
    console.log('b.txt를 읽어 들였습니다.', text)
    return readFilePr('c.txt')
  })
  .then((text) => {
    console.log('c.txt를 읽어 들였습니다.', text)
  })
