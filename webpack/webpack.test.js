const webpack = require('webpack');

const merge = require('webpack-merge');

const resolve = require('./config/resolve');
const modules = require('./config/modules');


const config = {
  mode: 'development',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': 'test'
    })
  ],
  externals: {
    jsdom: 'window',
    cheerio: 'window',
    // fix error: Can't resolve 'fs' in '...node_modules/nock/lib'
    fs: '{}',
    'react/lib/ExecutionEnvironment': true,
    'react/addons': true,
    'react/lib/ReactContext': 'window'

    // 'sinon': 'window.sinon'
  }
};

module.exports = merge(
  config,
  resolve,
  modules(false),
);
