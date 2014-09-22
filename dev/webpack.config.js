var path = require('path');
var webpack = require('webpack');

module.exports = {
  cache: true,
  entry: {
    nny: './app/nny'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: '[name].js',
    chunkFilename: '[chunkhash].js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      // Required for bootstrap fonts
      { test: /\.woff$/, loader: 'url?prefix=font/&limit=5000&mimetype=application/font-woff' },
      { test: /\.ttf$/, loader: 'file?prefix=font/' },
      { test: /\.eot$/, loader: 'file?prefix=font/' },
      { test: /\.svg$/, loader: 'file?prefix=font/' }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      // Automatically inject jQuery
      // This is required by many jQuery plugins
      jQuery: "jquery",
      $: "jquery"
    })
  ]
};
