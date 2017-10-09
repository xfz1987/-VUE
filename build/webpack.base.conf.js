'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// var utils = require('./utils')
// var config = require('../config')
// var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  entry: {
    app: [
      path.resolve(__dirname, '../src/main.js')
    ] 
  },
  output: {
    path: path.resolve(__dirname, '../dist/static'),
    filename: '[name].[hash:8].js',
    publicPath: 'static/'
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {
   rules: [
    {
      test: /\.vue$/,
      loader: 'vue-loader'
    },
    {
      test: /\.js$/,
      loader: 'babel-loader?presets=es2015',
      exclude: '/node_modules/'
    }
   ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: path.resolve(__dirname, '../index.html')
    })
  ]
};
