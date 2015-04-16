/* 
* @Author: roverzon
* @Date:   2015-04-16 13:46:33
* @Last Modified by:   roverzon
* @Last Modified time: 2015-04-16 14:09:05
*/

var gulp   = require('gulp')
var stylus = require('gulp-stylus')

gulp.task('css', function(){
	gulp.src('css/**/*.styl')
	.pipe(stylus())
	.pipe(gulp.dest('assets'))
})

gulp.task('watch:css',['css'],function(){
	gulp.watch('css/**/*.styl',['css'])
})