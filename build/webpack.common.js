const { merge } = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.js')
// const CopyWebpackPlugin = require('copy-webpack-plugin')
// const plugins = baseWebpack.plugins

// const patterns = [
//   'LICENSE',
//   'README.md',
//   'packages',
//   'package.json',
//   'src',
// ].map(function (fileName) {
//   const item = {}
//   item.from = item.to = fileName
//   if (fileName === 'LICENSE') item.toType = 'file'
//   return item
// })

module.exports = merge(webpackBaseConfig, {
  entry: {
    'element-pro.common': ['./src/index.js']
  },
  output: {
    libraryExport: 'default',
    library: 'ElementPro',
  },
  stats: {
    children: false,
  },
  // plugins: [].concat(plugins, new CopyWebpackPlugin(patterns))
})