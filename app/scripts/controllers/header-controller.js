(function () { 

	'use strict';

	/**
	 * @ngdoc function
	 * @name bakeryApp.controller:HeaderCtrl
	 * @description
	 * # HeaderCtrl
	 * Controller of the bakeryApp
	 */
	angular.module('bakeryApp')
		.controller('HeaderCtrl', ['$scope', '$rootScope', '$state', function($scope, $rootScope, $state){
			
					$rootScope.primaryColor = '#ffd5c0';
					$scope.theme1 = function (){
						$rootScope.primaryColor = '#ffd5c0';
					};

					$scope.theme2 = function (){
						$rootScope.primaryColor = '#fff';
					};

	  }]);

  })(); 
