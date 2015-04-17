/* 
* @Author: roverzon
* @Date:   2015-04-17 14:14:03
* @Last Modified by:   roverzon
* @Last Modified time: 2015-04-17 14:33:39
*/

/**
* app Module
*
* Description
*/
angular.module('app')
.controller('RegisterCtrl', ['$scope','UserSvc', function ($scope , UserSvc) {

	$scope.register = function(username,password){
		UserSvc.register(username,password)
		.then(function(user){
			console.log(user)
		})
	}
	
}])