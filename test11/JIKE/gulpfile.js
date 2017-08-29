var gulp = require('gulp'),
    less = require('gulp-less');
    cssmin = require('gulp-minify-css');

gulp.task('default', function() {
  gulp.src('less/index.less')
        .pipe(less())
        .pipe(cssmin())
        .pipe(gulp.dest('css'));
});