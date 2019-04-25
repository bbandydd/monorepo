import baseConfig from './app.base.config';

const config = {
  ...baseConfig,
  version: process.env.VERSION,
};

export default config;
