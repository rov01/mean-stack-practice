/* 
* @Author: roverzon
* @Date:   2015-04-16 10:59:54
* @Last Modified by:   roverzon
* @Last Modified time: 2015-04-16 12:52:20
*/
var express = require('express')
var router = express.Router()

router.get('/',function(req,res){
	res.sendfile('layouts/posts.html')
})

router.use(express.static(__dirname + '/../assets'))

module.exports = router