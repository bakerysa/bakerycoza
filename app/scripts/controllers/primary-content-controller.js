(function () { 

	'use strict';

	/**
	 * @ngdoc function
	 * @name bakeryApp.controller:PrimaryContentCtrl
	 * @description
	 * # PrimaryContentCtrl
	 * Controller of the bakeryApp
	 */
	angular.module('bakeryApp')
		.controller('PrimaryContentCtrl', ['$scope', '$state', '$document', 'ProjectService', function($scope, $state, $document, ProjectService){

			$scope.projects = ProjectService.list();

			var work = angular.element(document.getElementById('work'));
			    $scope.toWork = function() {
			    $document.scrollTo(work, 30, 1000);
			};

	  }]);

  })(); 
