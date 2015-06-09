/**
* app Module
*
* Description
*/
angular.module('app')
.run([ '$rootScope', function ($rootScope) {
	
	(function connect(){

		var url = 'ws://localhost:3000';
		var connection = new WebSocket(url);

		connection.onclose = function(e){
			console.log('Websocket closed. Reconnecting')
			$timeout(connect,10*1000)
		}

		connection.onmessage = function(e){
			console.log(e)
			var payload = JSON.parse(e.data)
			$rootScope.$broadcast('ws:' + payload.topic, payload.data)
		}
	})()
}])