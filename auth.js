/* 
* @Author: roverzon
* @Date:   2015-04-17 15:06:29
* @Last Modified by:   roverzon
* @Last Modified time: 2015-04-17 15:08:33
*/

var jwt = require('jwt-simple')
var config = require('./config')

module.exports = function(req,res,next){
	if (req.headers['x-auth']) {
		req.auth = jwt.decode(req.headers['x-auth'],config.secret)
	}

	next()
}