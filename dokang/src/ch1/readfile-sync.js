
const fs = require('fs')

const data = fs.readFileSync('test.txt', 'utf-8')
console.log(data)

fs.readFile('test.txt', 'utf-8', readHandler)

function readHandler(err, data) {
  console.log(data)
}
