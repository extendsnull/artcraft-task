const del = require('del');
const { pathMap } = require('./settings');

function clean() {
  return del([`${pathMap.build.main}/**`, `!${pathMap.build.main}`]);
}

module.exports = clean;
