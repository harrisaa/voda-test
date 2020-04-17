const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const abs = (file) => { return path.resolve(process.cwd(), file) }

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    bundle: [
      'core-js/fn/promise',
      'core-js/fn/array',
      'core-js/fn/object/assign',
      'core-js/fn/object/keys',
      'core-js/fn/string/includes',
      'core-js/es6/string',
      'core-js/fn/number/is-integer',
      './src/app.js',
    ],
  },
  output: {
    path: abs('build/assets'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].chunk.js',
    publicPath: './',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.html', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        rules: [
          { use: 'babel-loader' },
        ],
      },
      {
        test: /\.(css|scss)(\?.+)?$/,
        use: [
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              parser: 'postcss-scss',
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      {
        from: abs('src/public'),
        to: './public',
      },
    ]),
  ],
  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    publicPath: '/',
    hot: true,
    // quiet: true,
    open: 'http://localhost:3000',
  },
}
