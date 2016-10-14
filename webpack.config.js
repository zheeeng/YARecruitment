var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

var SRC_DIR = path.resolve(__dirname, 'src');
var DIST_DIRNAME = 'dist';

module.exports = {
  entry: SRC_DIR + '/main.js',
  output: {
    path: path.resolve(__dirname, DIST_DIRNAME),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    fallback: [path.join(__dirname, './node_modules')],
    alias: {
      'src': path.resolve(__dirname, './src'),
      'styles': path.resolve(__dirname, './src/styles'),
      'components': path.resolve(__dirname, './src/components')
    }
  },
  module: {
    preLoaders: [
      { test: /\.jsx?$/, loader: 'eslint', include: SRC_DIR, exclude: /node_modules/ }
    ],
    loaders: [
      { test: /\.jsx?$/, include: SRC_DIR, exclude: /node_modules/, loader: 'babel' },
      { test: /\.scss$/, include: SRC_DIR, exclude: /node_modules/, loaders: ["style", "css", "sass"] },
      { test: /\.json$/, include: SRC_DIR, exclude: /node_modules/, loader: 'json'}
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
        { from: 'index.html'},
        { from: 'vendors', to: 'vendors'}
      ]
    )
  ]
};
