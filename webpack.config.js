'use strict';

const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, 'src/entry.jsx')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    // injection of html template
    new htmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.tmpl.html'),
      injection: true,
      filename: 'index.html'
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        // css-loader & style-loader: for css files
        test: /\.css$/,
        loader: 'style!css'
      }, {
        // babel-loader: for ES6+ [React] transformation
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }, {
        // file-loader: for images and other files
        test: [/\.svg$/, /\.jpe?g/, /\.png/],
        loader: 'file-loader'
      }
    ]
  }
};
