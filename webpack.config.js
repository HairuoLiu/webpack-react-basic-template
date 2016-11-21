'use strict'

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    javascript: path.join(__dirname, 'src/entry.jsx'),
  },
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {     // CSS Loader
        test: /\.css$/,
        loader: 'style!css'
      }, {  // Babel Loader
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  }
};
