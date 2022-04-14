// 开发环境和生产环境公共的配置
const path = require('path');

const webpackBaseConfig = {
  entry: path.join(__dirname, '../src/index.jsx'), // 入口文件
  output: {
    // 输入文件
    path: path.join(__dirname, '../dist'),
    filename: '[name].[fullhash:4].js',
  },
  resolve: {
    // 文件解析
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.js[x]/,
        use: 'babel-loader',
      },
      {
        test: /\.ts[x]/,
        use: 'ts-loader',
      },
      {
        test: /\.(sc|c)ss/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};

module.exports = webpackBaseConfig;
