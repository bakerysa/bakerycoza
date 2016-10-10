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
               
	  		console.log('project details called')

	  		   // Define selectedProject
          	$scope.selectedProject = ProjectService.find($stateParams.id);      
            $scope.projects = ProjectService.list();

            // This will create a single gallery from all elements that have class "gallery-item"
            $('.project-images').each(function() { // the containers for all your galleries
			    $(this).magnificPopup({
			        delegate: 'a', // the selector for gallery item
			        type: 'image',
			        gallery: {
			          enabled:true
			        }
			    });
			});


          	$scope.nameHTML = $scope.selectedProject.name;
			$scope.projectName = $sce.trustAsHtml($scope.nameHTML);

            $scope.descriptionHTML = $scope.selectedProject.description;
          	$scope.projectDescription = $sce.trustAsHtml($scope.descriptionHTML);

          	$scope.agencyHTML = $scope.selectedProject.agency;
          	$scope.projectAgency = $sce.trustAsHtml($scope.agencyHTML);

          	$scope.collaboratorsHTML = $scope.selectedProject.collaborators;
          	$scope.projectCollaborators = $sce.trustAsHtml($scope.collaboratorsHTML);




        }]);

})(); 

