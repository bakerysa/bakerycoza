(function () {

	'use strict';

	/**
	 * @ngdoc function
	 * @name bakeryApp.controller:JobsDetailCtrl
	 * @description
	 * # JobsDetailCtrl
	 * Controller of the bakeryApp
	 */
	angular.module('bakeryApp')
	  	.controller('JobsDetailCtrl', ['$scope', '$sce', '$stateParams', '$timeout', 'JobService', function($scope, $sce, $stateParams, $timeout, JobService){

	  		   // Define selectedJob
          	$scope.selectedJob = JobService.find($stateParams.id);
            $scope.jobs = JobService.list();

          	$scope.nameHTML = $scope.selectedJob.name;
			      $scope.jobName = $sce.trustAsHtml($scope.nameHTML);

            $scope.descriptionHTML = $scope.selectedJob.description;
          	$scope.jobDescription = $sce.trustAsHtml($scope.descriptionHTML);

        }]);

})();
