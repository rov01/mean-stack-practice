/* 
* @Author: roverzon
* @Date:   2015-04-16 16:07:11
* @Last Modified by:   roverzon
* @Last Modified time: 2015-04-17 14:56:46
*/

/**
* app Module
*
* Description
*/
angular.module('app')
.controller('LoginCtrl', ['$scope', 'UserSvc' ,  function ($scope, UserSvc) {

	$scope.login = function(username,password){
		UserSvc.login(username,password)
		.then(function(res){
			$scope.$emit('login',res.data)
		})
	}
}])