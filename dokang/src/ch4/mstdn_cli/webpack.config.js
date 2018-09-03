
const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: "development",
  entry: {
    index: path.join(__dirname, 'src', 'index.js')
  },
  output: {
    path: path.join(__dirname, 'out'),
    filename: '[name].js'
  },
  devtool: 'cheap-module-eval-source-map',
  target: 'electron-renderer',
  module: {
    rules: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react']
        }
      }
    ]
  }
}

