(function () { 

	'use strict';

	/**
	 * @ngdoc function
	 * @name bakeryApp.controller:ProjectsDetailCtrl
	 * @description
	 * # ProjectsDetailCtrl
	 * Controller of the bakeryApp
	 */
	angular.module('bakeryApp')
	  	.controller('ProjectsDetailCtrl', ['$scope', '$sce', '$stateParams', '$timeout', 'ProjectService', function($scope, $sce, $stateParams, $timeout, ProjectService){
          

	  		   // Define selectedProject
          	$scope.selectedProject = ProjectService.find($stateParams.id);      
          	var projects = ProjectService.list();

            // Previous and Next Projects
          	$scope.projectTotal = projects.length;
          	if ($scope.selectedProject.id === 1) {
          		$scope.prevProject = $scope.projectTotal;
          		$scope.nextProject = $scope.selectedProject.id + 1;
          	}
          	else if ($scope.selectedProject.id === $scope.projectTotal) {
          		$scope.nextProject = 1;
          		$scope.prevProject = $scope.selectedProject.id - 1;
          	} else {
          		$scope.nextProject = $scope.selectedProject.id + 1;
          		$scope.prevProject = $scope.selectedProject.id - 1;
          	}


          	$scope.descriptionHTML = $scope.selectedProject.description;
          	$scope.projectDescription = $sce.trustAsHtml($scope.descriptionHTML);

          	$scope.agencyHTML = $scope.selectedProject.agency;
          	$scope.projectAgency = $sce.trustAsHtml($scope.agencyHTML);

          	$scope.collaboratorsHTML = $scope.selectedProject.collaborators;
          	$scope.projectCollaborators = $sce.trustAsHtml($scope.collaboratorsHTML);




        }]);

})(); 

