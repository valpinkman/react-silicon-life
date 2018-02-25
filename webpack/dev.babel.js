/* eslint import/no-extraneous-dependencies: 0 */
import webpack from 'webpack'
import merge from 'webpack-merge'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import webpackConfig from './base'

export default merge(webpackConfig, {
  entry: ['react-hot-loader/patch'],

  devServer: {
    contentBase: './dist',
    port: 9000,
    hot: true,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'React Silicon Life',
      template: 'index.html',
    }),
  ],
})
