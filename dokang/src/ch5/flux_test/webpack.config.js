
module.exports ={
  entry: './src/index.js',
  output: {
    filename: './out/bundle.js'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        options: {
          presets:['env', 'react']
        }
      },
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /.svg$/,
        use: ['svg-loader']
      }
    ]
  }
}
