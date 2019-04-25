const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');

// override process.env
const envConfig = dotenv.parse(fs.readFileSync(path.resolve('.env')));

for (let k in envConfig) {
  process.env[k] = envConfig[k]
}

const development = require('./webpack.dev');
const production = require('./webpack.prod');
const test = require('./webpack.test');

module.exports = {
  development,
  production,
  test
};
