const { watch } = require('gulp');
const { pathMap } = require('./settings');
const browserSync = require('browser-sync');

const markup = require('./markup');
const style = require('./style');
const javascript = require('./javascript');
const sprite = require('./sprite');
const image = require('./image');
const json = require('./json');
const fonts = require('./fonts');

function serve() {
  browserSync.init({
    server: {
      baseDir: pathMap.build.main,
      port: 8080,
    },
    // proxy: 'http://example.loc/',
    notify: false,
    open: false
  });

  watch([`${pathMap.src.pug}/**/*.pug`], markup);
  watch([`${pathMap.src.sass}/**/*.scss`], style);
  watch([`${pathMap.src.javascript}/**/*.js`], javascript);
  watch([`${pathMap.src.sprite}/**/*`], sprite);
  watch([`${pathMap.src.images}/**/*`], image);
  watch([`${pathMap.src.json}/**/*`], json);
  watch([`${pathMap.src.fonts}/**/*`], fonts);
  watch([`${pathMap.src.fonts}/**/*`], fonts);
}

module.exports = serve;
