const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader', 'eslint-loader'] 
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
      ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: "./src",
    compress: true,
    port: 8080,
    watchOptions: {
      ignored: /node_modules/
    },
    hot: true
  } 
};