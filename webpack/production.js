const path = require('path')
const merge = require('webpack-merge')
const CleanPlugin = require('clean-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const ExtractPlugin = require('mini-css-extract-plugin')

const common = require('./common')
const dist = path.join("..", "dist")

const static = path.join("src", "static")
const scripts = path.join(static, "scripts")
const animationSprite = path.join("src", "static", "images", "animation", "sprite.jpg")
const animationScript = path.join("src", "static", "scripts", "animation.js")

const production = {
  mode: "production",
  output: {
    filename: "app.[chunkhash:8].js",
  },
  module: {
    rules: [
      {
        test: /\.(c|sc|sa)ss$/,
        use: [
          ExtractPlugin.loader,
          "css-loader?modules&camelCase&minimize",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new CleanPlugin(
      ["dist"],
      {root: process.cwd()}
    ),
    new CopyPlugin([
      {from: "LICENSE", to: dist},
      {from: animationScript, to: path.join(dist, "scripts")},
      {from: animationSprite, to: path.join(dist, "images", "animation")},
    ]),
    new ExtractPlugin({
      filename: "app.[chunkhash:8].css",
    }),
  ],
}

module.exports = merge(common, production)

