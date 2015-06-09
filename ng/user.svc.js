/* 
* @Author: roverzon
* @Date:   2015-04-16 16:11:03
* @Last Modified by:   roverzon
* @Last Modified time: 2015-04-17 15:13:01
*/

/**
* app Module
*
* Description
*/
angular.module('app')
.service('UserSvc', ['$http',function ($http) {
	var svc = this
	svc.getUser = function(){
		return $http.get('/api/users')
	}

	svc.login = function(username,password){
		return $http.post('/api/sessions',{
			username: username , password : password
		}).then(function(val){
			svc.token = val.data
			$http.defaults.headers.common['X-Auth'] = val.data
			return svc.getUser()
		})
	}

	svc.register = function(username,password){
		return $http.post('/api/users',{
			username : username , password : password
		})
	}

}])