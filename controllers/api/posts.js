/* 
* @Author: roverzon
* @Date:   2015-04-16 10:46:34
* @Last Modified by:   roverzon
* @Last Modified time: 2015-04-17 15:10:15
*/

var Post = require('../../models/post')
var router = require('express').Router()
var websockets = require('../../websockets') 

router.get('/',function(req,res,next){
	Post.find()
	.sort('-date')
	.exec(function(err,posts){
		if (err) {return next(err)}
		res.json(posts)
	})
})

router.post('/',function(req,res,next){

	var post = new Post({
		body:req.body.body
	})
	post.username = req.auth.username
	post.save(function(err,post){
		if (err) {return next(err)}
		websockets.broadcast('new_post',post)
		res.json(201,post)
	})
})

module.exports = router