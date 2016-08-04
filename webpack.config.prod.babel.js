import baseConfig from './webpack.config.babel.js'
import webpack from 'webpack'

export default {
  ...baseConfig,

  devtool: 'source-map',

  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') }
    }),

    new webpack.optimize.UglifyJsPlugin({
      compress:{ warnings: false }
    })
  ]
}
