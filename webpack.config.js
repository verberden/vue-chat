var path = require('path');
var webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  target: 'web',
  plugins: [
    new VueLoaderPlugin()
  ],
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, './dist/js/'),
    filename: 'vue-chat.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'vue-style-loader'
          },
          {
            loader: 'css-loader',
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          preserveWhitespace: false,
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          outputPath: '/',
          name: '[name].[hash].[ext]',
        },
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: false
    })
  ])
}
