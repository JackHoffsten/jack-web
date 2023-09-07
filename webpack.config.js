const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
      inject: 'body'
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
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public')
    },
    compress: true,
    port: 9000
  }
};