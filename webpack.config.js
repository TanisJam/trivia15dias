const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
module.exports = {
  mode: "development",
  entry: {
    app: "./src/app.js",
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/i,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "game.html",
      template: "./src/game/game.html",
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      template: "./src/about/about.html",
    }),
    new CopyPlugin({
      patterns: [{ from: "src/imgs", to: "public" },]
    })
  ],
  performance: {
    maxEntrypointSize: 768000,
    maxAssetSize: 768000,
  },
  devServer: {
    port: 9000,
  },
};
