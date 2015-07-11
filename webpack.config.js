module.exports = {
  entry: './js/main.jsx',
  output: {
    path: './build',
    publicPath: '/build/',
    filename: 'main.js'       
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.jsx$/, loader: 'babel-loader' },
      { test: /\.json$/, loader:'json' }
    ]
  }
};
