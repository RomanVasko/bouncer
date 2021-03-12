'use strict';
var gulp = require('gulp');
var less = require('gulp-less');
var concatCss = require('gulp-concat-css');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');

gulp.task('compile-less', function() {
    return gulp.src('./less/*.less')
        .pipe(less())
        .pipe(concatCss("main.css"))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./css'));
});

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: 'npm_gulp_grunt'
        },
    })
});

gulp.task('watch-less', gulp.series('browserSync'), function() {
   return  gulp.watch('./less/*.less' , gulp.series('compile-less'));
});


