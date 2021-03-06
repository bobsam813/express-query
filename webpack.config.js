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
	    	{ test: /\.js$/, loader: 'babel', query: { presets: ['es2015'], plugins: [ ['transform-runtime', { helpers: false, polyfill: false, regenerator: true, }], 'transform-es2015-destructuring' ] } },
	        { test: /\.css$/, loader: 'style!css'},
	        { test: /\.html?$/, loader: 'html' },
	        { test: /\.vue$/, loader: 'vue' },
	        { test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url" },
	        { test: /\.(png|jpg|gif)$/ig, loader: 'url?limit=8192&name=img/[name].[ext]'},
	        { test: /\.json$/, loader: 'json'},
	    ]
	},
	resolve: {
	    extensions: ['', '.js', '.vue']
	},
	plugins: [
	    new webpack.NoErrorsPlugin()
	]
};