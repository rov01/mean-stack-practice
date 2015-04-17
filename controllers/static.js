/* 
* @Author: roverzon
* @Date:   2015-04-16 10:59:54
* @Last Modified by:   roverzon
* @Last Modified time: 2015-04-16 15:46:52
*/
var express = require('express')
var router = express.Router()

router.get('/',function(req,res){
	res.sendfile('layouts/app.html')
})

router.use(express.static(__dirname + '/../assets'))
router.use(express.static(__dirname + '/../templates'))

module.exports = router