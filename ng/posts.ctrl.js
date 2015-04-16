angular.module('app')
.controller('PostsCtrl', ['$scope', '$http', 'PostsSvc', function ($scope,$http, PostsSvc) {
	$scope.addPost = function(){
		if ($scope.postBody) {
			PostsSvc.create({
				username : 'dickeyxxx',
				body:$scope.postBody
			}).success(function(post){
				$scope.posts.unshift(post)
				$scope.postBody = null
			})
		}
	}

	PostsSvc.fetch()
	.success(function(posts){
		$scope.posts = posts
	})
	.error(function(posts) {
		console.log('error')
		console.log(posts)
	});

}])