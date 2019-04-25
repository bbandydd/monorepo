const path = require('path');
const merge = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const devServer = require('./config/devServer');
const resolve = require('./config/resolve');
const modules = require('./config/modules');
const optimization = require('./config/optimization');
const plugins = require('./config/plugins');

const config = site => ({
  mode: 'development',
  devtool: 'source-map',
  entry: {
    // 'babel-polyfill', // 解決ie問題
    bundle: ['babel-polyfill', `./src/${site}/index.js`],
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[hash].js', // [name] : entry的key,
    // publicPath設成/，BrowserRouter才不會壞掉
    publicPath: '/',
    chunkFilename: '[name]-[hash].js',
  },
  // watch: true,
  // watchOptions: {
  //   aggregateTimeout: 300,
  //   poll: 1000, // Check for changes every second
  //   ignored: /node_modules/
  // },
});

const newPlugins = site => ({
  plugins: plugins(`src/${site}/index.html`).plugins, // .concat(new BundleAnalyzerPlugin()),
});

module.exports = site => merge(
  config(site),
  resolve,
  optimization,
  modules(true),
  newPlugins(site),
  devServer,
);
