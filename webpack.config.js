const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
      inject: 'body'
    }),
    new webpack.WatchIgnorePlugin({
      paths: [/css\.d\.ts$/]
    })
  ],
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.s?css$/,
        use: [
            'style-loader',
            {
              loader: '@teamsupercell/typings-for-css-modules-loader',
              options: {
                formatter: 'prettier'
              }
            },
            {
              loader: 'css-loader',
              options: {
                modules: true
              }
            }
          ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|mp3)$/,
        use: 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js',
      '.css',
      '.scss'
    ],
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      containers: path.resolve(__dirname, 'src/containers'),
      App: path.resolve(__dirname, 'src/App')
    }
  },
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public')
    },
    compress: true,
    port: 9000,
    historyApiFallback: true
  }
};