const { src, dest, lastRun } = require('gulp');
const { pathMap } = require('./settings');
const browserSync = require('browser-sync');

function images() {
  return src([
    `${pathMap.src.images}/**/*.*`,
    `!${pathMap.src.images}/sprite.svg`], {
    since: lastRun(images),
    allowEmpty: true
  })
    .pipe(dest(`${pathMap.build.images}`)).pipe(browserSync.stream());
}

module.exports = images;
