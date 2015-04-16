/* 
* @Author: roverzon
* @Date:   2015-04-16 11:48:00
* @Last Modified by:   roverzon
* @Last Modified time: 2015-04-16 14:13:15
*/

var gulp = require('gulp')
var fs = require('fs')

fs.readdirSync(__dirname + '/gulp').forEach(function(task){
	require('./gulp/' + task)
})

gulp.task('build',['js','css'])
gulp.task('watch',['watch:js','watch:css'])
gulp.task('dev',['watch','dev:server'])
