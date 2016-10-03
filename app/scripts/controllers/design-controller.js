(function () { 

	'use strict';

	/**
	 * @ngdoc function
	 * @name bakeryApp.controller:DesignCtrl
	 * @description
	 * # DesignCtrl
	 * Controller of the bakeryApp
	 */
	angular.module('bakeryApp')
		.controller('DesignCtrl', ['$scope', '$state', function($scope, $state){


			// if state is Design
			if ($state.is('app.design')) {
				var tid = setInterval( function () {
				    if ( document.readyState !== 'complete' ) return;
				    clearInterval( tid );       
				    $scope.goWhatWeDo();
				}, 100 );
			}

	    		    	
	  }]);

  })(); 
