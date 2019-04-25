import baseConfig from './app.base.config';

const config = {
  ...baseConfig,
  version: process.env.VERSION,
  dev: process.env.DEV,
};

export default config;
