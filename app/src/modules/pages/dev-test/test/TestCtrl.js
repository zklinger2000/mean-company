'use strict';

angular.module('myApp').controller('TestCtrl', ['$scope', '$timeout', 'appHttp', 'UserModel', '$location', '$q', function($scope, $timeout, appHttp, UserModel, $location, $q) {

	$scope.myVar = 'var1';
	$scope.user =UserModel.load();
	
	$scope.swipeIt =function(evt, direction, params) {
		console.log('swipe: '+direction);
	};
	
	$scope.tapIt =function(evt, params) {
		console.log('tap');
	};

	/*
	function sync(var1) {
		console.log('sync');
		return var1;
	}

	function asyncFunc(var1, callback) {
		$timeout(function() {
			console.log('timeout finished');
			callback();
		}, 1000);
		console.log('timeout started');
	}

	asyncFunc(5, function() {
		console.log('async done');
	});
	console.log('next line');
*/

	function asyncFuncPromise(var1) {
		var deferred = $q.defer();
		$timeout(function() {
			console.log('promise timeout finished');
			deferred.resolve();
		}, 1000);
		console.log('promise timeout started');
		return deferred.promise;
	}

	asyncFuncPromise(5)
	.then(function() {
		console.log('promise done');
	});

}]);
