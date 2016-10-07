(function () { 

	'use strict';

	/**
	 * @ngdoc function
	 * @name bakeryApp.controller:WorkCtrl
	 * @description
	 * # WorkCtrl
	 * Controller of the bakeryApp
	 */
	angular.module('bakeryApp')
        .controller('WorkCtrl', ['$scope', '$state', '$document', 'ProjectService', function($scope, $state,  $document, ProjectService){

            $scope.projects = ProjectService.list();


	  }]);

  })(); 