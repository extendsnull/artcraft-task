const { src, dest, lastRun } = require('gulp');
const { pathMap } = require('./settings');
const browserSync = require('browser-sync');

function fonts() {
  return src(`${pathMap.src.fonts}/**/*`, {
    since: lastRun(fonts),
    allowEmpty: true
  })
    .pipe(dest(`${pathMap.build.fonts}`)).pipe(browserSync.stream());
}

module.exports = fonts;
