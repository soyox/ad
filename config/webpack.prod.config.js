const path = require("path");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackBaseConfig = require("./webpack.base.config");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const webpackConfigProd = {
  mode: "production",
  plugins: [
    new CleanWebpackPlugin({
      protectWebpackAssets: true,
    }), //清理文件
    new HtmlWebpackPlugin({
      inject: "body", //注入位置
      title: "React APP",
      filename: "index.html",
      template: path.join(__dirname, "../src/index.html"),
    }),
  ],
};

module.exports = merge(webpackBaseConfig, webpackConfigProd); //合并导出
