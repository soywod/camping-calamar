const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')

const common = require('./common')

const development = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, "..", "src", "static"),
  },
  output: {
    filename: "app.js",
  },
  module: {
    rules: [
      {
        test: /\.(c|sc|sa)ss$/,
        use: [
          "style-loader",
          "css-loader?modules&camelCase&sourceMap",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
}

module.exports = merge(common, development)

