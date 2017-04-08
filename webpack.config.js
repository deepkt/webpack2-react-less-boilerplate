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
		extensions: ['.js', '.jsx', '.scss']
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
        test: /\.less$/i,
        use: ExtractTextPlugin.extract([ 'css-loader', 'less-loader' ])
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
    //   sourceMap: options.devtool && (options.devtool.indexOf("sourcemap") >= 0 || options.devtool.indexOf("source-map") >= 0)
    // })
	],

	devServer: {
		contentBase: path.resolve(__dirname, './dist')
	}
	// devServer: {
  //   contentBase:'./src',
  //   historyApiFallback: true,
  //   port: 8080,
  //   compress: true,
  //   inline: false,
  //   hot: true,
  //   host: 'localhost',
  //   stats: {
  //     assets: true,
  //     children: false,
  //     chunks: false,
  //     hash: false,
  //     modules: false,
  //     publicPath: false,
  //     timings: true,
  //     version: false,
  //     warnings: true,
  //     colors: {
  //       green: '\u001b[32m',
  //     },
  //   },
  // },
};
