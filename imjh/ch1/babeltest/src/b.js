class Foo {
  constructor () {
    this.value = 100
  }

  bar () {
    console.log('Foo.bar')
    console.log(this.value)
  }
}

const f = new Foo()
f.bar()
