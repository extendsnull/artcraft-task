const process = require('process');

const pathMap = {
  src: {
    pug: 'src/templates',
    sass: 'src/styles',
    javascript: 'src/js',
    images: 'src/img',
    json: 'src/json',
    fonts: 'src/fonts',
    sprite: 'src/sprite',
  },
  build: {
    main: 'build',
    html: 'build',
    css: 'build/css',
    javascript: 'build/js',
    images: 'build/img',
    json: 'build/json',
    fonts: 'build/fonts',
    sprite: 'build/img'
  }
};

function isDevelopmentMode() {
  return process.env.NODE_ENV === 'development';
}

function setModeToDevelopment() {
  process.env.NODE_ENV = 'development';
  return Promise.resolve(`Set mode to "development"`);
}

function setModeToProduction() {
  process.env.NODE_ENV = 'production';
  return Promise.resolve(`Set mode to "production"`);
}

module.exports = {
  pathMap,
  isDevelopmentMode,
  setModeToDevelopment,
  setModeToProduction
};
