const { src, dest } = require('gulp');
const { pathMap } = require('./settings');
// const plumber = require('gulp-plumber');
const spritesmith = require('gulp.spritesmith');
const merge = require('merge-stream');


function sprite() {
  const spriteData = src(`${pathMap.src.sprite}/*.*`)
    .pipe(spritesmith({
      imgName: 'sprite.png',
      imgPath: `../img/sprite.png`,
      cssName: 'sprite.scss',
      retinaSrcFilter: `${pathMap.src.sprite}/*@2x.png`,
      retinaImgName: 'sprite@2x.png',
      retinaImgPath: `../img/sprite@2x.png`,
      padding: 5
    }));

  const imgStream = spriteData.img
    .pipe(dest(pathMap.build.sprite));

  const cssStream = spriteData.css
    .pipe(dest(`${pathMap.src.sass}/settings`));

  return merge(imgStream, cssStream);
}

module.exports = sprite;
