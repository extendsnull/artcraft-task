const { series, parallel } = require('gulp');
const {
  setModeToDevelopment,
  setModeToProduction,
} = require('./tasks/settings');
const clean = require('./tasks/clean');
const markup = require('./tasks/markup');
const style = require('./tasks/style');
const javascript = require('./tasks/javascript');
const sprite = require('./tasks/sprite');
const image = require('./tasks/image');
const json = require('./tasks/json');
const serve = require('./tasks/serve');
const fonts = require('./tasks/fonts');

module.exports = {
  clean,
  build: series(
    setModeToDevelopment,
    clean,
    parallel(markup, sprite, style, javascript, image, json, fonts)
  ),
  deploy: series(
    setModeToProduction,
    clean,
    parallel(markup, sprite, style, javascript, image, json, fonts)
  ),
  default: series(
    setModeToDevelopment,
    clean,
    parallel(markup, sprite, style, javascript, image, json, fonts, serve)
  ),
};
