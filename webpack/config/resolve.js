const path = require('path');

// 當前目錄： path.resolve(__dirname) || script跑的地方： path.resolve('./src')
module.exports = {
  resolve: {
    alias: {
      '~~apis': path.resolve(__dirname, '../../src', 'apis'),
      '~~components': path.resolve(__dirname, '../../src', 'components'),
      '~~atoms': path.resolve(__dirname, '../../src', 'components/atoms'),
      '~~compose': path.resolve(__dirname, '../../src', 'components/compose'),
      '~~config': path.resolve(__dirname, '../../src', 'config'),
      '~~locales': path.resolve(__dirname, '../../src', 'locales'),
      '~~modules': path.resolve(__dirname, '../../src', 'modules'),
      '~~routes': path.resolve(__dirname, '../../src', 'routes'),
      '~~static': path.resolve(__dirname, '../../src', 'static'),
      '~~store': path.resolve(__dirname, '../../src', 'store'),
      '~~utils': path.resolve(__dirname, '../../src', 'utils'),
      '~~styles': path.resolve(__dirname, '../../src', 'styles'),
      '~~constant': path.resolve(__dirname, '../../src', 'constants'),
      '~~validator': path.resolve(__dirname, '../../src', 'validators'),
      '@ant-design/icons/lib/dist$': path.resolve(__dirname, '../../src/icon.ts'),
    },
    extensions: [
      '.js',
      '.jsx',
    ],
  },
};
