const path = require("path");
const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
const BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

const webpack = require('webpack');

module.exports = {
	entry: SRC_PATH + '/app.js',
	output: {
	    path: BUILD_PATH,
	    filename: 'app.js'
	},
	module: {
	    loaders: [
	        { test: /\.css$/, loader: 'style!css', exclude: /node_modules/},
	        { test: /\.html?$/, loader: 'html', exclude: /node_modules/ },
	        { test: /\.vue$/, loader: 'vue', exclude: /node_modules/ },
	        { test: /\.(png|jpg|gif)$/ig, loader: 'url?limit=8192&name=img/[name]-[hash:16].[ext]', exclude: /node_modules/}
	    ]
	},
	plugins: [
	    new webpack.NoErrorsPlugin()
	]
};