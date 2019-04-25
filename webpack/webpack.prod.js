const path = require('path');
const merge = require('webpack-merge');

const resolve = require('./config/resolve');
const modules = require('./config/modules');
const optimization = require('./config/optimization');
const plugins = require('./config/plugins');


const config = site => ({
  mode: 'production',
  entry: {
    // 'babel-polyfill', // 解決ie問題
    bundle: ['babel-polyfill', `./src/${site}/index.js`],
  },
  output: {
    path: path.resolve(__dirname, `../${site}_dist`),
    // url-loader會把檔案路徑指到publicPath下面
    // publicPath: '/static/'  // django 使用
    filename: 'js/[name].[hash].js', // [name] : entry的key
  },
});

module.exports = site => merge(
  config(site),
  resolve,
  optimization,
  modules(false),
  plugins(`src/${site}/index.html`),
);
