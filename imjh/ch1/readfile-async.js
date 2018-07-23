const fs = require('fs')

function readFileEx (fname) {
  return new Promise((resolve, reject) => {
    fs.readFile(fname, 'utf-8', (err, data) => {
      resolve(data)
      if (err) console.log(err)
    })
  })
}

async function readAll () {
  const a = await readFileEx('a.txt')
  console.log(a)
  const b = await readFileEx('b.txt')
  console.log(b)
  const c = await readFileEx('c.txt')
  console.log(c)
}
readAll()
