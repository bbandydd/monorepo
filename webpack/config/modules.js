// const path = require('path');
// const AntTheme = require('../../src/theme_ant');

const jsRules = (useEslint = false) => {
  let use = ['babel-loader'];
  if (useEslint) {
    use = [...use, 'eslint-loader'];
  }
  return {
    use,
    test: /\.js$/,
    exclude: /node_modules/,
  };
};

const cssRules = {
  // postcss-loader幫CSS加前綴 css-loader讓webpack 可以讀css內容，style-loader把css加樣式
  test: /\.css$/,
  use: [
    { loader: 'style-loader' },
    {
      loader: 'css-loader',
      options: {
        importLoaders: true,
      },
    },
  ],
};

const scssRules = {
  test: /\.scss$/,
  use: [{
    loader: 'style-loader',
    options: {
      sourceMap: true,
    },
  }, {
    loader: 'css-loader',
    options: {
      modules: true,
      importLoaders: true,
      localIdentName: '[path]__[name]__[local]___[hash:base64:5]',
      sourceMap: true,
    },
  },
  {
    loader: 'resolve-url-loader',
  }, {
    loader: 'sass-loader',
    options: {
      sourceMap: true,
    },
  }],
};

const lessRules = {
  test: /\.less$/,
  use: [
    {
      loader: 'style-loader',
    }, {
      loader: 'css-loader', // translates CSS into CommonJS
    }, {
      loader: 'less-loader', // compiles Less to CSS

      options: {
        modifyVars: {
          'primary-color': 'rgba(31, 69, 103, 1)',
          'link-color': 'rgba(31, 69, 103, 1)',
          'btn-disable-color': 'rgba(255, 255, 255, 1)',
          'btn-disable-bg': 'rgba(204, 204, 204, 1)',
          'table-row-hover-bg': 'rgba(105, 119, 128, 0.05)',
          'table-header-bg': 'rgba(105, 119, 128, 0.05)',
          'primary-1': 'rgba(105, 119, 128, 0.05)',
        },
        // modifyVars: AntTheme,
        javascriptEnabled: true,
        enableJavascript: true,
      },
    },
  ],
};

const imageRules = {
  test: /\.(jpe?g|png|gif)$/,
  use: [
    {
      loader: 'url-loader',
      options: {
        limit: 40000, // 單位：byte  40k以下都會被編成base64，以上就變成檔案
        name: 'img/[hash].[ext]',
      },
    },
  ],
};


const fontRules = {
  test: /\.(woff|woff2|ttf|eot)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        limit: 40000, // 單位：byte  40k以下都會被編成base64，以上就變成檔案
        name: 'fonts/[hash].[ext]',
      },
    },
  ],
};


const svgIconRules = {
  test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
  use: [
    {
      loader: 'babel-loader',
    },
    {
      loader: '@svgr/webpack',
      options: {
        babel: false,
        icon: true,
      },
    },
  ],
};

const csvRules = {
  test: /\.csv/,
  use: [
    {
      loader: 'url-loader',
      options: {
        limit: 0, // 單位：byte  0k以下都會被編成base64，以上就變成檔案
        name: 'csv/[hash].[ext]',
      },
    },
  ],
};

const modules = (withEslint = true) => ({
  module: {
    rules: [
      jsRules(withEslint),
      cssRules,
      lessRules,
      scssRules,
      svgIconRules,
      imageRules,
      fontRules,
      csvRules,
    ],
  },
});

module.exports = modules;
