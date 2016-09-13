(function () { 

	'use strict';

	/**
	 * @ngdoc function
	 * @name bakeryApp.controller:HeaderCtrl
	 * @description
	 * # HeaderCtrl
	 * Controller of the bakeryApp
	 */
	angular.module('bakeryApp')
		.controller('HeaderCtrl', ['$scope', '$rootScope', '$state', '$document', '$location', function($scope, $rootScope, $state, $document, $location){
			
					$rootScope.primaryColor = '#ffd5c0';
					$scope.theme1 = function (){
						$rootScope.primaryColor = '#ffd5c0';
					};

					$scope.theme2 = function (){
						$rootScope.primaryColor = '#fff';
					};

					var tl = new TimelineMax({
					    paused: true
					});

					tl.to(".header", 0.3, {
					    top: 0,
					    css: {
					    	'padding-top': '10px', 
					    	'padding-bottom': '10px',
					    },
					    ease: Circ.easeInOut
					})
					.to(".header", 0.3, {
					    backgroundColor : '#f3cbb7',
					    ease: Circ.easeInOut
					}, "=-0.3")

					.to(".js-menu-item", 0.3, {
						css: {
							'padding-top': '1.8em',
							'padding-bottom': '1.1em',
						}
					}, "=-0.3")

					.to(".js-logo", 0.3, {
					    height: 70,
					    ease: Circ.easeInOut
					}, "=-0.3");


					$document.scroll(function() {
					  if ($document.scrollTop() >= 50) {
					  	tl.play();
					  } else {
					  	tl.reverse();
					  }
					});


	  }]);

  })(); 
