var gulp = require('gulp');
var plummer = require('gulp-plumber');
var browsersync = require('browser-sync');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var config = require('../config');

gulp.task('sass', function () {
  browsersync.notify('Compiling Sass');

  return gulp
    // Find all `.scss` files from the `stylesheets/` folder
    .src(config.sass.input)
    .pipe(plummer())
    // Run Sass on those files
    .pipe(sass(config.sass.options).on('error', sass.logError))
    .pipe(autoprefixer(config.autoprefixer))
    // Write the resulting CSS in the output folder
    .pipe(gulp.dest(config.sass.output));
});
