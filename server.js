const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config.js');

const app = express();

const BINDING = {
  PORT: 3001,
  IP: '0.0.0.0',
}

const compiler = webpack(config);
const middleware = webpackMiddleware(compiler, {
  publicPath: config.output.publicPath,
  contentBase: 'src',
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  }
});

app.use(middleware);

app.use(function(req, res, next) {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Cache-Control', 'no-cache');
  return next();
});

app.listen(BINDING.PORT, BINDING.IP, function onStart(err) {
  if(err) {
    console.log(err)
  }else{
    console.info(
        '==> 🌎 Listening on port %s. Open up http://%s:%s/ in your browser.',
        BINDING.PORT,
        BINDING.IP,
        BINDING.PORT
    );
  }
});
