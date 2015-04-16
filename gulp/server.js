/* 
* @Author: roverzon
* @Date:   2015-04-16 13:57:18
* @Last Modified by:   roverzon
* @Last Modified time: 2015-04-16 14:09:27
*/


var gulp = require('gulp')
var nodemon = require('gulp-nodemon')

gulp.task('dev:server',function(){
	nodemon({
		script: 'server.js',
		ext: 'js',
		ignore: ['ng*','gulp*','assets*']
	})
})