const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = nodeEnv === 'production';

const sourcePath = path.join(__dirname, './src');
const buildPath = path.join(__dirname, './dist');
const assetPath = path.join('./assets');

if (isProduction) {
} else {

}
module.exports = {
	context: path.resolve(__dirname, './src'),
	entry: {
		app: './index.js'
	},
	output: {
		filename: isProduction ? 'assets/[name].bundle.js' : '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: ''
	},

	resolve: {
		extensions: ['.js', '.jsx', '.scss', '.sass']
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.(scss|sass)$/i,
        use: ExtractTextPlugin.extract([ 'css-loader', 'sass-loader' ])
      },
		]
	},

	plugins: [
		new ExtractTextPlugin( isProduction ? 'assets/app.css' : 'app.css' ),
		new DashboardPlugin(),
		new HtmlWebpackPlugin({
	    template: path.join(sourcePath, 'index.html'),
	    path: isProduction ? assetPath : buildPath,
	    filename: 'index.html',
	  }),
		// new webpack.optimize.UglifyJsPlugin({
    //   sourceMap: isProduction ? 0:1
    // })
	],

	devServer: {
		contentBase: path.resolve(__dirname, './dist')
	}
};
