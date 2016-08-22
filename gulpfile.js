'use strict';

// Using gulp to compile tag files to js files
var gulp = require('gulp');
var requireDir = require('require-dir');
var runSequence = require('run-sequence');
var tasks = requireDir('./gulp-tasks');


gulp.task('default', ['run-riot','concat','compress'], function () {
    console.log('Done!');
});
