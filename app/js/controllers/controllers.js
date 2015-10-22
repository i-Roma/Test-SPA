'use strict';

app.controller('MainCtrl', function($scope, $http) {

	$http.get('phones/phones.json').success(function(data, status, headers, config) {

		console.log(data);
		$scope.phones = data;

	}).error(function() {

	});

	$scope.increase = function(index) { 
	    $scope.phones[index].quantity += 1; 
	  };
	  
	$scope.decrease = function(index) {
		$scope.phones[index].quantity -= 1;
	};

	$scope.addProduct = function(index) { 
		$scope.phones[index].quantity += 1;
		angular.element(document.getElementById('space-for-products')).append('<div id="exemplar" ng-controller="MainCtrl" ng-repeat="phone in phones"><span>You add: {{phone.name}}</span>');
	};

	$scope.removeProduct = function(index) { 
		$scope.phones[index].quantity -= 1;
		angular.element(document.getElementById('exemplar')).remove();	
	};

	$scope.removeAllProduct = function(index) { 
		angular.element(document.getElementById('space-for-products')).remove();	
	};
	
    // $scope.orderProp = 'createDate';

});
