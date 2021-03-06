
module.exports = {
  entry: './src/main.js',
  output: {
    filename: './out/bundle.js'
  },
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
