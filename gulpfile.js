'use strict';
var gulp = require('gulp');
var server = require('gulp-express');
var sass = require('gulp-sass');

gulp.task('default', ['sass:watch']);

gulp.task('gulp-live-server', function() {
   server.run(['server.js']);
});

gulp.task('build-style', function () {
    return gulp.src('./app/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./app/scss/*.scss', ['build-style']);
});