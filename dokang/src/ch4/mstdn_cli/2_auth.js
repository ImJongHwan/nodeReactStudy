
const Mastodon = require('mastodon-api')
const fs = require('fs')
const path = require('path')
const readlineSync = require('readline-sync')
const file_cli_app = path.join(__dirname, 'cli-app.json')
const file_user = path.join(__dirname, 'token.json')
const instanceUri = 'https://pawoo.net'

const info = JSON.parse(fs.readFileSync(file_cli_app))

Mastodon.getAuthorizationUrl(
  info.client_id,
  info.client_secret,
  instanceUri)
  .then(url => {
    console.log("다음 url에 접근해서 출력되는 코드를 입력해주세요")
    console.log(url)
    const code = readlineSync.question('Code: ')
    return Mastodon.getAccessToken(
      info.client_id,
      info.client_secret,
      code,
      instanceUri
    )
  })
  .then(token => {
    console.log('Access Token:', token)
    fs.writeFileSync(file_user, token)
  })

