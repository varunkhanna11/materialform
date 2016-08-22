var concat = require('gulp-concat');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('concat', function() {
  return gulp.src('./scripts/riot/*.js')
    .pipe(concat('riot-tags.js'))
    .pipe(gulp.dest('./scripts/'));
});



gulp.task('compress', function (cb) {
  pump([
        gulp.src('scripts/*.js'),
        uglify(),
        gulp.dest('dist')
    ],
    cb
  );
});
