/* eslint-disable no-var */
var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var env = process.env.WEBPACK_ENV

var output = {
  path: path.join(__dirname, 'dist'),
  filename: 'bundle.js'
}

var SASS_LOADER = {
  test: /\.scss$/,
  loaders: ['style', 'css', 'sass']
}

var JS_LOADER = {
  test: /\.js$/,
  exclude: /node_modules\/(?!(stardust))/,
  loader: 'babel',
  query: {
    cacheDirectory: true,
    presets: ['react', 'es2015', 'stage-2']
  }
}

var UGLIFY_PLUGIN = new webpack.optimize.UglifyJsPlugin({
  compressor: { warnings: false }
})

var HTMLWEBPACK_PLUGIN = new HtmlWebpackPlugin({
  template: './src/index.html'
})

var DEFINE_PLUGIN = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify(env)
})

var OCCURENCEORDER_PLUGIN = new webpack.optimize.OccurenceOrderPlugin()
var HOTMODULEREPLACEMENT_PLUGIN = new webpack.HotModuleReplacementPlugin()

var prodConfig = {
  entry: ['./src/js/index'],
  output,
  loaders: [SASS_LOADER, JS_LOADER],
  plugins: [UGLIFY_PLUGIN, OCCURENCEORDER_PLUGIN, HTMLWEBPACK_PLUGIN, DEFINE_PLUGIN],
  devtool: 'source-map'
}

var devConfig = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './src/js/index'
  ],
  output,
  loaders: [SASS_LOADER, JS_LOADER],
  plugins: [HOTMODULEREPLACEMENT_PLUGIN, HTMLWEBPACK_PLUGIN, DEFINE_PLUGIN],
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true
  },
  devtool: 'inline-source-map'
}

var testConfig = {
  loaders: [{
    test: /\.js$/,
    exclude: /\/node_modules\//,
    loader: 'babel-loader'
  }],
  externals: {
    cheerio: 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  devtool: 'inline-source-map',
  output: null
}

function getConfigForEnvironment (environment) {
  switch (environment) {
    case 'prod':
      return prodConfig
    case 'dev':
      return devConfig
    case 'test':
      return testConfig
    default:
      return {}
  }
}

module.exports = getConfigForEnvironment(env)
