var path = require('path');
var webpack = require('webpack');

module.exports = {
  cache: true,
  entry: './src/App.js',
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
      jQuery: "jquery", // jQuery
      $: "jquery",  // jQuery
      THREE: "three", // three.js
      dat: "dat-gui"//,  // dat.gui
      // VideoPlayer: "video-player"  // dat.gui
    })
  ]
};
