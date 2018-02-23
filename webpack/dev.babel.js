import webpack from 'webpack'
import merge from 'webpack-merge'

import webpackConfig from './base'

export default merge(webpackConfig, {
  entry: ['react-hot-loader/patch'],

  devServer: {
    contentBase: './dist',
    port: 9000,
    hot:true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
