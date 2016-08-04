import baseConfig from './webpack.config.babel.js'
import { resolve } from 'path'

export default {
  ...baseConfig,

  devtool: 'eval-source-map',

  devServer: {
    contentBase: resolve('./templates'),
    hot: true
  }
}
