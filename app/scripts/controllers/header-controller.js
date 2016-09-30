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
					$rootScope.secondaryColor = '#e53320';
					
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
					    // backgroundColor : '#f3cbb7',
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

					$scope.goHome = function() {
					   $document.scrollTopAnimated(0, 500); // (top, milliseconds)
					   console.log('goHome() called');
					};


					// WHAT WE DO

					$rootScope.goWhatWeDo = function() {
						var whatWeDo = angular.element(document.getElementById('what-we-do'));
						$document.scrollToElement(whatWeDo, 120, 500);
					   console.log('goWhatWeDo() called');
					};

					// if state is What We Do
					if ($state.is('app.whatWeDo')) {
						var tid = setInterval( function () {
						    if ( document.readyState !== 'complete' ) return;
						    clearInterval( tid );       
						    $rootScope.goWhatWeDo();
						}, 100 );
					}


					// HOW WE DO IT

					$rootScope.goHowWeDoIt = function() {
						var whatWeDo = angular.element(document.getElementById('how-we-do-it'));
						$document.scrollToElement(whatWeDo, 40, 500);
					   console.log('goHowWeDoIt() called');
					};

					// if state is How We Do It
					if ($state.is('app.howWeDoIt')) {
						var tid = setInterval( function () {
						    if ( document.readyState !== 'complete' ) return;
						    clearInterval( tid );       
						    $rootScope.goHowWeDoIt();
						}, 100 );
					}


					// OUR WORK

					$rootScope.goWork = function() {
						var whatWeDo = angular.element(document.getElementById('work'));
						$document.scrollToElement(whatWeDo, 75, 500);
					   console.log('goWork() called');
					};

					// if state is How We Do It
					if ($state.is('app.work')) {
						var tid = setInterval( function () {
						    if ( document.readyState !== 'complete' ) return;
						    clearInterval( tid );       
						    $rootScope.goWork();
						}, 100 );
					}



					// CONTACT

					$rootScope.goContact = function() {
						var whatWeDo = angular.element(document.getElementById('contact'));
						$document.scrollToElement(whatWeDo, 10, 500);
					   console.log('goContact() called');
					};

					// if state is How We Do It
					if ($state.is('app.contact')) {
						var tid = setInterval( function () {
						    if ( document.readyState !== 'complete' ) return;
						    clearInterval( tid );       
						    $rootScope.goContact();
						}, 100 );
					}


					$('.js-logo').featherlight({
					    beforeOpen: function(event){
					        $("#breadVSbakery").css("display", "block");
					    },
					    beforeClose: function(event){
					        $("#breadVSbakery").css("display", "none");
					    }
					});


	  }]);

  })(); 
