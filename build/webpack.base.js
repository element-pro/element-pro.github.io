const path = require('path')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const config = require('./config')

module.exports = {
  mode: 'production',
  entry: {},
  output: {
    path: path.resolve(process.cwd()),
    filename: 'lib/[name].js',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    modules: ['node_modules']
  },
  externals: config.externals,
  performance: {
    hints: false
  },
  stats: 'none',
  optimization: {
    minimize: false
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        compilerOptions: {
          preserveWhitespace: false
        }
      }
    }, {
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader']
    }]
  },
  plugins: [
    new ProgressBarPlugin(),
    new VueLoaderPlugin(),
  ]
}