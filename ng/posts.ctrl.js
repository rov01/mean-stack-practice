angular.module('app')
.controller('PostsCtrl', ['$scope', '$http', 'PostsSvc', function ($scope,$http, PostsSvc) {
	$scope.addPost = function(){
		if ($scope.postBody) {
			PostsSvc.create({
				body:$scope.postBody
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

	$scope.$on('ws:new_post',function(_,post){
		$scope.$apply(function(){
			$scope.posts.unshift(post)
		})
	})
}])