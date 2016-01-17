var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules_dir, 'react/dist/react.min.js');
var pathToReactDom = path.resolve(node_modules_dir, 'react-dom/dist/react-dom.min.js');

var config = {
  entry: {
    app: path.resolve(__dirname, 'app/main.js'),

    // Since react is installed as a node module, node_modules/react,
    // we can point to it directly, just like require('react');
    vendors: ['react', 'react-dom']
  }, 
  resolve: {
    alias: {
      'react': pathToReact,
      'react-dom': pathToReactDom,
    }
  }, 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  module: {
    loaders: [{
      test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        },
        noParse: [pathToReact, pathToReactDom]
    }, {
      test: /\.css$/, // Only .css files
      loader: 'style!css' // Run both loaders
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url?limit=25000'
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ]
};

module.exports = config;