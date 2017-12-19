var gulp = require('gulp');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');
var concatJs = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

// Static server
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        // server: {
        //     baseDir: "./"
        // },
        proxy: "localhost:8888/jens-wp"
    });

    gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.watch("./css/*.css").on('change', browserSync.reload);
    gulp.watch("./js/script.js").on('change', browserSync.reload);
    gulp.watch("./*.php").on('change', browserSync.reload);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

gulp.task('sass', function () {
  return gulp
    .src('./sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'));
});

gulp.task('default', ['serve']);
