// modules
var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');

// tasks
gulp.task('sass', function(){
  gulp.src('stylesheets/scss/styles.scss')
    .pipe(plumber()) // Using Gulp plumber
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('stylesheets/css'))
});

gulp.task('watch', function(){
  gulp.watch('stylesheets/scss/**/*.scss', ['sass']);
})

gulp.task('default', ['watch'], function () {
});