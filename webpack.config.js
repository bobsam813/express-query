const path = require("path");
const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
const BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

const webpack = require('webpack');

module.exports = {
	target: 'electron',
	entry: SRC_PATH + '/app.js',
	output: {
	    path: BUILD_PATH,
	    filename: 'app.js'
	},
	module: {
	    loaders: [
	        { test: /\.css$/, loader: 'style!css'},
	        { test: /\.html?$/, loader: 'html' },
	        { test: /\.vue$/, loader: 'vue' },
	        { test: /\.(png|jpg|gif)$/ig, loader: 'url?limit=8192&name=img/[name]-[hash:16].[ext]'}
	    ]
	},
	plugins: [
	    new webpack.NoErrorsPlugin()
	]
};