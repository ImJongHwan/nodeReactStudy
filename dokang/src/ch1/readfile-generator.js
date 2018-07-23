
const fs = require('fs')

function read_gfn(processStream, fname) {
  fs.readFile(fname, 'utf-8', (err, data) => {
    processStream.next(data) // next = const a = data..., const b =data ..., const c = data ...
  })
}

const processStream = (function * () {
  const a = yield read_gfn(processStream, 'a.txt')
  console.log(a)
  const b = yield read_gfn(processStream, 'b.txt')
  console.log(b)
  const c = yield read_gfn(processStream, 'c.txt')
  console.log(c)
}) ()
processStream.next()
