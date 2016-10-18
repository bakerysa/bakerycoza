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



            	$('.js-eff-work-img').duotone({
            	   gradientMap: '#000000, #ecede0'
            	});

            	$('.js-eff-wwd-img').duotone({
            	   gradientMap: '#000000, #fff5de'
            	});


            	$('#creative-partners img').duotone({
            	   gradientMap: '#000000, #fde9eb'
            	});



	  }]);

  })(); 