angular.module('app')
.service('PostsSvc', ['$http', function ($http) {
	console.log("error")
	this.fetch = function(){
		return $http.get('/api/posts')
	}

	this.create = function(post){
		return $http.post('/api/posts',post)
	}
}])
