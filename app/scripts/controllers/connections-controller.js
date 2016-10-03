(function () { 

	'use strict';

	/**
	 * @ngdoc function
	 * @name bakeryApp.controller:ConnectionsCtrl
	 * @description
	 * # ConnectionsCtrl
	 * Controller of the bakeryApp
	 */
	angular.module('bakeryApp')
		.controller('ConnectionsCtrl', ['$scope', '$state', function($scope, $state){


			// if state is Connections
			if ($state.is('app.connections')) {
				var tid = setInterval( function () {
				    if ( document.readyState !== 'complete' ) return;
				    clearInterval( tid );       
				    $scope.goWhatWeDo();
				}, 100 );
			}

	    		    	
	  }]);

  })(); 
