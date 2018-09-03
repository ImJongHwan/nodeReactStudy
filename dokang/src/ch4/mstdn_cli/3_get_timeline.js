
const Mastodon = require('mastodon-api')
const fs = require('fs')
const path = require('path')
const instanceUri = 'https://pawoo.net'

const token = fs.readFileSync(path.join(__dirname, 'token.json'))

const M = new Mastodon({
  access_token: token,
  timeout_ms: 60 * 1000,
  api_url: instanceUri + '/api/v1/'
})

M.get('timelines/home', error => console.error(error))
  .then(res => {
    const data = res.data
    console.log(data)
  })
