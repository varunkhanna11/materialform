'use strict';
var gulp = require('gulp');
var riot = require('gulp-riot');
var paths = {};
paths.riotTag = "tags/*.tag";
paths.riotJs = "scripts/riot/";


// Gulp task for compiling roit tag files to js
gulp.task('run-riot', () => {
    gulp.src(paths.riotTag)
        .pipe(riot({
            compact: true // <- this
        }))
        .pipe(gulp.dest(paths.riotJs));
});

// Watch configured to keep on compiling roit tag files to js files
// so that chenages keep on getting reflected
// just run gulp on cmd in the project directory and wtach will start
gulp.task('watch:riot', function () {
    gulp.watch(paths.riotTag, ['run-riot']);
    console.log('riot: watching ' + paths.scss);
});
