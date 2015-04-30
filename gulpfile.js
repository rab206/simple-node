var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  livereload = require('gulp-livereload'),
  sass = require('gulp-ruby-sass'),
  jshint = require('gulp-jshint-cached');

gulp.task('sass', function () {
  return sass('./public/css/')
    .pipe(gulp.dest('./public/css'))
    .pipe(livereload());
});

gulp.task('assets:js', function(){
  return gulp.src(['./*/*.js', './public/js/*.js'])
    .pipe(jshint.cached())
    .pipe(jshint.reporter('default'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  gulp.watch('./public/css/*.scss', ['sass']);
  gulp.watch(['./*/*.js', './public/js/*.js'], ['assets:js']);
});

gulp.task('develop', function () {
  livereload.listen(35729, function(err){
        if(err) return console.log(err);
    });
  nodemon({
    script: 'bin/www',
    ext: 'js jade coffee',
  }).on('restart', function () {
    setTimeout(function () {
      livereload.changed(__dirname);
    }, 500);
  });
});

gulp.task('default', [
  'sass',
  'develop',
  'watch'
]);
