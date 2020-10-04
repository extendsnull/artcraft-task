const { src, dest } = require('gulp');
const { pathMap } = require('./settings');
const pug = require('gulp-pug');
const plumber = require('gulp-plumber');
const beautify = require('gulp-beautify');
const browserSync = require('browser-sync');

function markup() {
  return src(`${pathMap.src.pug}/*.pug`)
    .pipe(plumber())
    .pipe(pug())
    .pipe(beautify.html({
      indent_size: 2,
      unformatted: ['svg'],
      end_with_newline: true
    }))
    .pipe(dest(pathMap.build.html))
    .pipe(browserSync.stream());
}

module.exports = markup;
