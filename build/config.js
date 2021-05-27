// const path = require('path')
const nodeExternals = require('webpack-node-externals')
const components = require('../components.json')
const externals = {}

Object.keys(components).forEach(function (componentName) {
  const modulePath = 'tzcloud-element-pro/lib/' + componentName
  externals[modulePath] = modulePath
})

exports.externals = [Object.assign({ vue: 'vue' }, externals), nodeExternals()]