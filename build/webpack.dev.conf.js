var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var webpack = require('webpack');
//引入基本配置
var config = require('./webpack.base.conf.js');
//修改基本配置
config.output.publicPath = '/';
config.plugins = [
	new webpack.optimize.OccurrenceOrderPlugin(),
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NoEmitOnErrorsPlugin(),
	new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../index.html'),
      inject: true
    })
];

var devClient = require('./dev-client');
Object.keys(config.entry).forEach(function(name,i){
	var extress = [devClient];
	config.entry[name] = extress.concat(config.entry[name]);
});

module.exports = config;