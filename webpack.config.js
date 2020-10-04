const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.join(__dirname, 'src', 'js', 'index.js'),
  },
  output: {
    filename: '[name].min.js',
    path: path.join(__dirname, 'build', 'js'),
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['cache-loader', 'babel-loader'],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },

  plugins: [
    new webpack.ProvidePlugin({
      Popper: 'popper.js',
    }),
  ],
};
