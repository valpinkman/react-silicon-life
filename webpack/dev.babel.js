import webpack from 'webpack'
import merge from 'webpack-merge'

import webpackBaseConfig from './base'

export default merge(webpackBaseConfig, {
  entry: ['react-hot-loader/patch'],

  devtool: 'inline-source-map',

  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    port: 9000,
    hot: true,
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],
})
