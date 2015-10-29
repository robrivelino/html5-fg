var gulp = require('gulp');

var scripts = [
  './angular/app.js',
  './angular/**/*.controller.js'
];

gulp.task('scripts', function() {

  var concat = require('gulp-concat');
  var uglify = require('gulp-uglifyjs');

  gulp
    .src(scripts)
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('.'));
});

gulp.task('watch', function() {
  gulp.watch(scripts, ['scripts'])
});

gulp.task('default', [
  'scripts',
  'watch'
]);
