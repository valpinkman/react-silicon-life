import webpack from 'webpack'
import merge from 'webpack-merge'
import UglifyJSPlugin from 'uglifyjs-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

import webpackBaseConfig from './base'

export default merge(webpackBaseConfig, {
  plugins: [
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
    }),
  ],
})
