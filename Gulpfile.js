var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('sync', function() {
    browserSync.init({
        server: {
            baseDir: "./www/",
            index:"index.html"
        }
    });
});
