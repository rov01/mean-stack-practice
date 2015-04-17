/* 
* @Author: roverzon
* @Date:   2015-04-16 16:20:42
* @Last Modified by:   roverzon
* @Last Modified time: 2015-04-16 17:35:01
*/

var db = require('../db')
var user = db.Schema({
	username:{ type: String, required: true},
	password:{ type: String, required: true, select: false }
})

module.exports = db.model('User',user)