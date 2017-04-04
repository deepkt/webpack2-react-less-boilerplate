const path = require('path');
const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	context: path.resolve(__dirname, './src'),
	entry: {
		app: './index.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, './dist'),
		publicPath: '/dist'
	},

	resolve: {
		extensions: ['.js', '.jsx', '.scss']
	},

	module: {
		rules: [
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: {
							minimize: true
						}
					}
				]
			}, {
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
        test: /\.less$/i,
        use: ExtractTextPlugin.extract([ 'css-loader', 'less-loader' ])
      },
		]
	},

	plugins: [
		new ExtractTextPlugin(path.resolve(__dirname, 'dist/app.css')),
		new DashboardPlugin()
	],

	devServer: {
		contentBase: path.resolve(__dirname, './src')
	}
};
