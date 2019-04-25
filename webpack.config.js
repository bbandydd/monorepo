/* eslint no-console: "off" */
const webpackConfigs = require('./webpack');

const defaultConfig = 'development';

module.exports = (configName) => {
  // console.log('[entry]configName--->', configName);
  // 沒有帶--env 就使用預設的
  const requestedConfig = configName || defaultConfig;

  let LoadedConfig;
  if (webpackConfigs[requestedConfig] !== undefined) {
    LoadedConfig = webpackConfigs[requestedConfig];
  } else {
    console.warn(`
      Provided environment "${configName}" was not found.
      Please use one of the following ones:
      ${Object.keys(webpackConfigs).join(' ')}
    `);
    LoadedConfig = webpackConfigs[defaultConfig];
  }
  return LoadedConfig;
};
