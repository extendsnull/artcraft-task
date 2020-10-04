const { src, dest } = require('gulp');
const { pathMap } = require('./settings');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const gulpIf = require('gulp-if');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const browserSync = require('browser-sync');
const { isDevelopmentMode } = require('./settings');

const plugins = [
  autoprefixer({
    // grid: 'autoplace',
  }),
  cssnano(),
];

function style() {
  return src(`${pathMap.src.sass}/index.scss`)
    .pipe(plumber())
    .pipe(gulpIf(isDevelopmentMode(), sourcemaps.init('')))
    .pipe(sass({
      includePaths: ['node_modules'],
      outputStyle: 'compressed',
    }))
    .pipe(postcss(plugins))
    .pipe(rename({
      basename: 'style',
      suffix: '.min',
    }))
    .pipe(gulpIf(isDevelopmentMode(), sourcemaps.write('')))
    .pipe(dest(pathMap.build.css))
    .pipe(browserSync.stream());
}

module.exports = style;
