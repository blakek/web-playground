/* eslint-env node */

var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  resolve: {
    extensions: ['', '.jsx', '.js', '.json'],
    modulesDirectories: ['node_modules', 'src/']
  },

  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    publicPath: '/',
    filename: 'playground.bundle.js'
  },

  devtool: 'eval-source-map',

  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-2', 'react']
        }
      },
      {
        test: /\.[s]?css$/,
        loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      }
    ],
    preLoaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'eslint'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      hot: true,
      template: path.resolve('./src/template.html')
    })
  ],

  devServer: {
    historyApiFallback: true,
    contentBase: 'public'
  },

  watch: true
}
