const { src, dest, lastRun } = require('gulp');
const { pathMap } = require('./settings');
const { isDevelopmentMode } = require('./settings');
const browserSync = require('browser-sync');
const plumber = require('gulp-plumber');
const webpack = require('webpack-stream');
const config = require('../webpack.config');

const devLoaders = ['cache-loader'];
const prodLoaders = ['babel-loader'];


function javascript() {
  return src(`${pathMap.src.javascript}/*.js`, {
    since: lastRun(javascript),
  })
    .pipe(plumber())
    .pipe(webpack({
      ...config,
      mode: isDevelopmentMode() ? 'development' : 'production',
      devtool: isDevelopmentMode() ? 'eval-source-map' : 'none',
      module: {
        rules: [{
          test: /\.js$/,
          use: isDevelopmentMode() ? devLoaders : prodLoaders,
        }],
      },
    }))
    .pipe(dest(`${pathMap.build.javascript}`))
    .pipe(browserSync.stream());
}

module.exports = javascript;
