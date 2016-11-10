import baseConfig from './webpack.config.babel.js'
import { resolve } from 'path'
import webpack from 'webpack'

export default {
  ...baseConfig,

  devtool: 'eval-source-map',

  plugins: [
    new webpack.ProvidePlugin({
      'regeneratorRuntime': 'regenerator-runtime/runtime'
    })
  ],

  devServer: {
    contentBase: resolve('./templates'),
    hot: true
  }
}
