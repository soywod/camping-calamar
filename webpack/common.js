const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

const common = {
  target: "web",
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        enforce: "pre",
        loader: "tslint-loader?emitErrors",
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: "file-loader",
      },
    ],
  },
  plugins: [
    new HtmlPlugin({
      template: path.join("src", "template", "index.ejs"),
      filename: "index.html",
    }),
  ],
}

module.exports = common

