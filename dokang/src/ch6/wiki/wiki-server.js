
const path = require('path')
const NeDB = require('nedb')
const db = new NeDB({
  filename: path.join(__dirname, 'wiki.db'),
  autoload: true
})

const express = require('express')
const app = express()
const portNo = 3001

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.listen(portNo, () => {
  console.log('서버 실행 완료:', `http://localhost:${portNo}`)
})


app.get('/api/get/:wikiname', (req, res) => {
  const wikiname = req.params.wikiname
  db.find({name: wikiname}, (err, docs) => {
    if (err) {
      res.json({status: false, msg: err})
      return
    }
    if (docs.length === 0) {
      docs = [{name: wikiname, body: ''}]
    }
    res.json(
      {status: true, data: docs[0]}
    )
  })
})


app.post('/api/put/:wikiname', (req, res) => {
  const wikiname = req.params.wikiname
  console.log('/api/put/' + wikiname, req.body)
  db.find({'name': wikiname}, (err, docs) => {
    if(err) {
      res.json({status: false, msg: err})
      return
    }
    const body = req.body.body
    if (docs.length ===0) {
      db.insert({name: wikiname, body})
    } else {
      db.update({name: wikiname}, {name: wikiname, body})
    }
    res.json({status: true})
  })
})

app.use('/wiki/:wikiname', express.static('./public'))
app.use('/edit/:wikiname', express.static('./public'))
app.get('/', (req, res) => {
  res.redirect(302, '/wiki/FrontPage')
})
