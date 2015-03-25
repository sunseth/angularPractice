angular.module('sportsStore')
	.constant('dataURL', 'http://localhost:5000/sports/items')
	.controller('sportsController', function($scope, $http, dataURL){
		$scope.data = {};
		$http.get(dataURL)
			.success(function(data){
				$scope.data.products = data;
			})
			.error(function(error){
				$scope.data.error = error;
			});
	});