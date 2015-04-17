/* 
* @Author: roverzon
* @Date:   2015-04-16 14:54:16
* @Last Modified by:   roverzon
* @Last Modified time: 2015-04-16 15:32:37
*/

/**
*  Module
*
* Description
*/
angular.module('app')
.config(['$routeProvider' , function ($routeProvider) {
	$routeProvider
	.when('/', {controller : 'PostsCtrl',templateUrl : 'posts.html'})
	.when('/register', {controller : 'RegisterCtrl',templateUrl : 'register.html'})
	.when('/login', {controller : 'LoginCtrl',templateUrl : 'login.html'})
}])