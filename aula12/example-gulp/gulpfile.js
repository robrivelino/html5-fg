var gulp = require('gulp');

gulp.task('default', [
  'views',
  'watch'
]);

gulp.task('views', function() {
  var jade = require('gulp-jade');
  gulp
    .src('./assets/**/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./public/'));
});

gulp.task('watch', function() {
  gulp.watch('./assets/**/*.jade', ['views'])
});
