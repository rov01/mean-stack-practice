/* 
* @Author: roverzon
* @Date:   2015-04-17 14:42:54
* @Last Modified by:   roverzon
* @Last Modified time: 2015-04-17 14:44:11
*/

/**
* app Module
*
* Description
*/
angular.module('app')
.controller('ApplicationCtrl', ['$scope', function ($scope) {

	$scope.$on('login',function(_,user){
		$scope.currentUser = user
	})
}])