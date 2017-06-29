const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');
const APP_PATH = path.resolve(ROOT_PATH, 'app');

module.exports = {
  entry: {
    app: path.resolve(APP_PATH, 'app.jsx'),
  },
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js',
  },

  devtool: 'eval-source-map',
  // devServer: {
  //   historyApiFallback: true,
  //   hot: true,
  //   inline: true,
  //   progress: true,
  // },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.jsx?$/,
        loader: ['babel-loader'],
        include: APP_PATH
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'use plugin',
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
