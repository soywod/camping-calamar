const path = require('path')
const merge = require('webpack-merge')
const CleanPlugin = require('clean-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const ExtractPlugin = require('mini-css-extract-plugin')
const common = require('./common')
const dist = path.join("..", "dist")

const baseCSS = path.join("src", "static", "base.css")
const animationSprite = path.join("src", "static", "animation", "sprite.jpg")
const animationJS = path.join("src", "static", "animation", "animation.js")

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
      {from: baseCSS, to: dist},
      {from: animationJS, to: path.join(dist, "animation")},
      {from: animationSprite, to: path.join(dist, "animation")},
    ]),
    new ExtractPlugin({
      filename: "app.[chunkhash:8].css",
    }),
  ],
}

module.exports = merge(common, production)

