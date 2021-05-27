const { merge } = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.js')
const components = require('../components.json')

module.exports = merge(webpackBaseConfig, {
  entry: components,
})