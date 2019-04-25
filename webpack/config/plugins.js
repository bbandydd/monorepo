const path = require('path');
const fs = require('fs');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const AntDesignThemePlugin = require('antd-theme-webpack-plugin');
const lessToJs = require('less-vars-to-js');

// Read the less file in as string
const paletteLess = fs.readFileSync(path.join(__dirname, '../../src/styles/variables.less'), 'utf8');

// Pass in file contents
const palette = lessToJs(paletteLess, { resolveVariables: true, stripPrefix: false });

// 將 Object key 轉成 array
const themeVariables = Object.keys(palette).map(key => key);

// 設定 antd-theme-webpack-plugin 的 option
const options = {
  antDir: path.join(__dirname, '../../node_modules/antd'),
  stylesDir: path.join(__dirname, '../../src/styles'),
  varFile: path.join(__dirname, '../../src/styles/variables.less'),
  mainLessFile: path.join(__dirname, '../../src/styles/index.less'),
  themeVariables, // js 動態修改 less 會用到這些變數
  indexFileName: path.join(__dirname, '../../src/myapp1/index.html'),
  generateOnce: false,
  lessUrl: 'static/lib/less.min.js',
};

// const child_process = require('child_process');

// const commitHash = child_process
//   .execSync('git describe --always')
//   .toString();

// child_process.execSync(`export VERSION=${commitHash}`);

const plugins = (templatePath = 'src/index.html') => ({
  plugins: [
    // 把webpack壓出來的檔案自動夾到index.html樣板裡。
    // 避免改了webpack設定，增加或減少output檔案，卻忘了到index.html調整
    new HtmlWebpackPlugin({
      template: templatePath,
      chunksSortMode: 'none',
    }),
    new CopyWebpackPlugin([
      { from: './src/static/', to: './static/' },
    ]),
    new webpack.EnvironmentPlugin(['HOST_URL', 'GOOGLE_MAP_API_KEY', 'VERSION', 'KMUH_KEY', 'KMUH_IV', 'DEV']),
    new AntDesignThemePlugin(options),
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn|zh-tw|en/),
  ],
});

module.exports = plugins;
