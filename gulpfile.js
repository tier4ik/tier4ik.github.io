var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync').create();

gulp.task('browser-sync', ['sass'], function() {
	browserSync.init({
		proxy: "bookshop.ru"
	});
	gulp.watch('app/sass/*.sass', ['sass']);
	gulp.watch('index.html').on('change', browserSync.reload);
	gulp.watch('app/js/*.js').on('change', browserSync.reload);
});

gulp.task('sass', function() {
	return gulp.src('app/sass/main.sass')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.stream())
});

gulp.task('default', ['browser-sync']);


