/* 
* @Author: roverzon
* @Date:   2015-04-16 14:09:43
* @Last Modified by:   roverzon
* @Last Modified time: 2015-04-16 15:04:32
*/

var gulp = require('gulp')
var concat = require('gulp-concat')
var sourcemaps = require('gulp-sourcemaps')
var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate') 

gulp.task('js', function(){
	gulp.src(['ng/module.js','ng/**/*.js'])
		.pipe(sourcemaps.init())
		.pipe(concat('app.js'))
		.pipe(ngAnnotate())
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('assets'))
})


gulp.task('watch:js',['js'],function(){
	gulp.watch('ng/**/*.js',['js'])
})
