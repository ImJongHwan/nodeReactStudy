function * counter () {
  yield 1
  yield 2
  yield 3
}

const g = counter()

console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
