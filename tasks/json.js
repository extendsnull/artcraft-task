const { src, dest, lastRun } = require('gulp');
const { pathMap } = require('./settings');
const browserSync = require('browser-sync');

function json() {
  return src(`${pathMap.src.json}/**/*`, {
    since: lastRun(json),
    allowEmpty: true
  })
    .pipe(dest(`${pathMap.build.json}`)).pipe(browserSync.stream());
}

module.exports = json;
