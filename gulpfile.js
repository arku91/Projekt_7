const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');

gulp.task('reload', function(){
    browserSync.reload();
});

gulp.task('serve', function(){
    browserSync({
        server:'src'
    });

    gulp.watch('src/index.html', ['reload']);
    gulp.watch('src/css/style.css', ['reload']);
});

gulp.task('default', ['serve']);
