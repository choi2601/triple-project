const path = require('path')

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const isProduction = (process.env.NODE_ENV = 'PRODUCTION')

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  output: {
    filename: '[name].[fullhash].js',
    path: path.resolve(__dirname, '..', './build'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, '../', './src'),
      '@components': path.resolve(__dirname, '../', './src/components'),
      '@pages': path.resolve(__dirname, '../', './src/pages'),
      '@styles': path.resolve(__dirname, '../', './src/styles'),
      '@hooks': path.resolve(__dirname, '../', './src/hooks'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(ts|js)$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
      {
        test: /\.hbs$/,
        use: ['handlebars-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[contenthash].[ext]',
          },
        },
      },
      {
        test: /.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4000,
              name() {
                if (!isProduction) {
                  return '[path][name].[ext]'
                } else {
                  return '[contenthash].[ext]'
                }
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './public/index.hbs'),
      minify: isProduction
        ? {
            collapseWhitespace: true,
            useShortDoctype: true,
            removeScriptTypeAttributes: true,
          }
        : false,
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map',
    }),
    new webpack.DefinePlugin({
      IS_PRODUCTION: isProduction,
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [{ from: 'public/images', to: 'images/' }],
    }),
  ],
}
