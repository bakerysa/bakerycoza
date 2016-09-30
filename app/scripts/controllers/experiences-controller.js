(function () { 

	'use strict';

	/**
	 * @ngdoc function
	 * @name bakeryApp.controller:ExperiencesCtrl
	 * @description
	 * # ExperiencesCtrl
	 * Controller of the bakeryApp
	 */
	angular.module('bakeryApp')
		.controller('ExperiencesCtrl', ['$scope', '$state', function($scope, $state){


			// if state is Experiences
			if ($state.is('app.experiences')) {
				var tid = setInterval( function () {
				    if ( document.readyState !== 'complete' ) return;
				    clearInterval( tid );       
				    $scope.goWhatWeDo();
				}, 100 );
			}

	    		    	
	  }]);

  })(); 
