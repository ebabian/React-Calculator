const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
entry: './src/index.js',
output: {
    path: path.resolve('build'),
    filename: 'main.js',
  },
    devServer: {
        contentBase: "./build",
  },
    module: {
      rules: [
    { test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader' ]
    }
    ]
  },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve('./index.html'),
      }),
    ]
};
