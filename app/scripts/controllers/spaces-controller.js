(function () { 

	'use strict';

	/**
	 * @ngdoc function
	 * @name bakeryApp.controller:SpacesCtrl
	 * @description
	 * # SpacesCtrl
	 * Controller of the bakeryApp
	 */
	angular.module('bakeryApp')
		.controller('SpacesCtrl', ['$scope', '$state', function($scope, $state){


			// if state is Spaces
			if ($state.is('app.spaces')) {
				var tid = setInterval( function () {
				    if ( document.readyState !== 'complete' ) return;
				    clearInterval( tid );       
				    $scope.goWhatWeDo();
				}, 100 );
			}

	    		    	
	  }]);

  })(); 
