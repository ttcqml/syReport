const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // css代码剥离
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // css代码压缩
const NODE_ENV = process.env.NODE_ENV; // 该环境变量提供给依赖包使用
const WEBPACK_MODE = process.env.WEBPACK_MODE; // webpack的mode配置
const BACKEND_ENV = process.env.BACKEND_ENV; // 后台服务器环境
const SOURCEMAP = JSON.parse(process.env.SOURCEMAP) && 'eval-cheap-module-source-map'; // source-map类型[inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map
const WATCH = JSON.parse(process.env.WATCH); // 是否实时编译
const SHELL = process.env.SHELL; // 外壳类型（browser：浏览器  nw：node-webkit壳  cef：cef壳）
const PROTOCOL = process.env.PROTOCOL; // 访问应用使用的协议（file或http）
const isWDS = /webpack-dev-server/.test(process.argv[1]); // 是否使用webpack-dev-server
const outputDir = path.resolve(__dirname, 'build/' + (SHELL == 'browser' ? 'browser' : BACKEND_ENV));

console.log('NODE_ENV = ', NODE_ENV);
console.log('WEBPACK_MODE = ', WEBPACK_MODE);
console.log('BACKEND_ENV = ', BACKEND_ENV);
console.log('SOURCEMAP = ', SOURCEMAP);
console.log('WATCH = ', WATCH);
console.log('SHELL = ', SHELL);
console.log('PROTOCOL = ', PROTOCOL);
console.log('isWDS = ', isWDS);
console.log('outputDir = ', outputDir);

const config = {
    mode: WEBPACK_MODE,

    watch: WATCH,

    devtool: SOURCEMAP,

    entry: './src/index.jsx',

    target: {
      browser: 'web',
      cef: 'web',
      nw: 'node-webkit',
    }[SHELL] || 'web',

    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        js: path.resolve(__dirname, './src/assets/js'),
        img: path.resolve(__dirname, './src/assets/img'),
        oss: path.resolve(__dirname, './src/assets/oss'),
        libs: path.resolve(__dirname, './src/libs'),
        components: path.resolve(__dirname, './src/components'),
        pages: path.resolve(__dirname, './src/pages'),
      }
    },

    output: {
      path: outputDir,
      filename: '[name].js' + (isWDS || PROTOCOL == 'file' ? '' : '?[chunkhash:7]'),
    },

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react'],
              plugins: [
                '@babel/syntax-dynamic-import',
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-proposal-object-rest-spread',
              ]
            }
          }
        },
        {
          test: /\.css$/,
          exclude: [
            path.resolve(__dirname, './src/pages'),
            path.resolve(__dirname, './src/components'),
          ],
          use: [isWDS ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.css$/,
          include: [
            path.resolve(__dirname, './src/pages'),
            path.resolve(__dirname, './src/components'),
          ],
          use: [
            isWDS ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[local]-[hash:base64:5]'
                }
              }
            },
            'postcss-loader'
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg|ttf|eot|woff|woff2)$/,
          loader: 'file-loader',
          include: path.resolve(__dirname, './src'),
          exclude: path.resolve(__dirname, './src/assets/oss'),
          options: {
            publicPath: '/CSHT/', // 本地存储
            name: '[name].[ext]' + (isWDS || PROTOCOL == 'file' ? '' : '?v=[contenthash:7]'),
            esModule: false,
          }
        },
        {
          test: /\.js$/,
          loader: 'file-loader',
          include: path.resolve(__dirname, './src/assets/js'),
          options: {
            publicPath: '/CSHT/', // 本地存储
            name: '[name].[ext]' + (isWDS || PROTOCOL == 'file' ? '' : '?v=[contenthash:7]'),
            esModule: false,
          }
        },
        {
          test: /\.(png|jpe?g|gif|svg|ttf|eot|woff|woff2)$/,
          loader: 'file-loader',
          include: path.resolve(__dirname, './src/assets/oss'),
          options: {
            publicPath: 'http://xxxxxx.oss-cn-hangzhou.aliyuncs.com/', // oss存储
            name: '[name].[ext]?v=[contenthash:7]',
            esModule: false,
          }
        },
      ]
    },

    plugins: [
      ...(isWDS ? [] : [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: !WATCH }),
      ]),
    new webpack.DefinePlugin({
      'BACKEND_ENV': JSON.stringify(BACKEND_ENV),
      'SHELL': JSON.stringify(SHELL),
      'PROTOCOL': JSON.stringify(PROTOCOL),
    }),
    new CopyWebpackPlugin([
      { from: './public', ignore: ['index.html'] },
    ]),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    ...(isWDS ? [] : [
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash:7].css',
      }),
    ]),
  ],

  devServer: {
  host: '0.0.0.0',
    disableHostCheck: true,
    port: 3040,
    useLocalIp: true,
    open: true,
    openPage: 'index.html#/Login',
    proxy: [
    {
      target: 'http://localhost:3040',
    },
  ],
},

optimization: {
  splitChunks: {
    chunks: 'all',
  },
  minimizer: [
    new OptimizeCSSAssetsPlugin(),
  ],
},
};

module.exports = config;
