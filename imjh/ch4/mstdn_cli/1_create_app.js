const Mastodon = require('mastodon-api')
const fs = require('fs')
const path = require('path')

const instanceUri = 'https://pawoo.net'
const clientName = 'MastodonCli'
const saveFile = path.join(__dirname, 'cli-app.json')

Mastodon.createOAuthApp(instanceUri + '/api/v1/apps', clientName)
  .catch(err => console.log(err))
  .then(res => {
    console.log(res)
    fs.writeFileSync(saveFile, JSON.stringify(res))
  })
