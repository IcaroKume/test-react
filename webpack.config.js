var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');


var config = {
  entry: [
    'webpack/hot/dev-server', path.resolve(__dirname, 'app/main.js')], 
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        },
    }, {
      test: /\.css$/, // Only .css files
      loader: 'style!css' // Run both loaders
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url?limit=25000'
    }]
  }
};

module.exports = config;