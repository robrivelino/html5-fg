var gulp = require('gulp');

// gulp.src faz um stream de leitura, com base em um glob
// .pipe // faz o processamento desse stream
// gulp.dest // escreve o stream em algum path
// .watch

gulp.task('default', function() {
  var concat = require('gulp-concat');
  var sourcemaps = require('gulp-sourcemaps');
  var uglify = require('gulp-uglifyjs');

  gulp
    .src('./assets/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(uglify({mangle: true}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./public'));
});



