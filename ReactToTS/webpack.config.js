const path = require("path")
const webpack = require("webpack")
var HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  name: "ReactToTS",
  mode: "development", // 배포할 때는 production
  devtool: "eval", // 배포할 때는 hidden-source-map
  resolve: {
    extensions: [".js", "jsx", ".tsx", ".ts"]
  },
  entry: {
    app: ["./client"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
        options: {}
      },
      {
        test: /\.css?$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },

  plugins: [new webpack.LoaderOptionsPlugin({ debug: true })],

  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist/"
  },
  devServer: {
    historyApiFallback: true
  }
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: "./index.html"
  //   })
  // ]
}
