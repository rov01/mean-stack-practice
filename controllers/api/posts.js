/* 
* @Author: roverzon
* @Date:   2015-04-16 10:46:34
* @Last Modified by:   roverzon
* @Last Modified time: 2015-04-16 11:09:56
*/

var Post = require('../../models/post')
var router = require('express').Router() 

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
		username:req.body.username,
		body:req.body.body
	})

	post.save(function(err,post){
		if (err) {return next(err)}
		res.json(201,post)
	})
})

module.exports = router