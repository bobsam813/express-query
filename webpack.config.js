const path = require("path");
const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
const BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

const webpack = require('webpack');

module.exports = {
	entry: SRC_PATH + '/app.js',
	output: {
	    path: BUILD_PATH,
	    publicPath: resourcePath,
	    filename: '[name]-[hash:8].js'
	},
	module: {
	    loaders: [
	        { test: /\.js$/, loader: 'babel', query: { cacheDirectory: true, presets: ['es2015'], plugins: ['transform-remove-strict-mode'] } },
	        { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
	        { test: /\.less$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less') },
	        { test: /\.s[ac]ss/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass') },
	        { test: /\.html?$/, loader: 'html' },
	        { test: /\.vue$/, loader: 'vue' },
	        { test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url" },
	        { test: /\.(png|jpg|gif)$/ig, loader: 'url?limit=8192&name=img/[name]-[hash:16].[ext]'}
	    ]
	},
	resolve: {
	    extensions: ['', '.js']
	},
	plugins: [
	    new webpack.NoErrorsPlugin(),
	    new ExtractTextPlugin('[name]-[hash:8].css', {allChunks: true})
	]
};