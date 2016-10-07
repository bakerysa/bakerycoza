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
		.controller('HeaderCtrl', ['$scope', '$rootScope', '$state', '$document', '$location', '$timeout', function($scope, $rootScope, $state, $document, $location, $timeout){

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
							'padding-top': '1.45em',
							'padding-bottom': '1.1em',
						}
					}, "=-0.3")

					.to(".js-logo", 0.3, {
					    height: 60,
					    ease: Circ.easeInOut
					}, "=-0.3");


					$document.scroll(function() {
					  if ($document.scrollTop() >= 50) {
					  	tl.play();
					  } else {
					  	tl.reverse();
					  }
					});

					$rootScope.goHome = function() {
					   $document.scrollTopAnimated(0, 500); // (top, milliseconds)
					   console.log('goHome() called');
					};


					// WHAT WE DO

					$rootScope.goWhatWeDo = function() {
						$timeout(function() {
							var whatWeDo = angular.element(document.getElementById('what-we-do'));
							$document.scrollToElement(whatWeDo, 120, 500);
					   		console.log('goWhatWeDo() called');
					   	}, 50);
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
						$timeout(function() {
				       		var howWeDoIt = angular.element(document.getElementById('how-we-do-it'));
				       		$document.scrollToElement(howWeDoIt, 90, 500);
				       	   	console.log('goHowWeDoIt() called');
					   	}, 50);
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
						$timeout(function() {
					       	var work = angular.element(document.getElementById('work'));
					       	$document.scrollToElement(work, 75, 500);
					          console.log('goWork() called');
					   }, 50);
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
						$timeout(function() {
				       		var contact = angular.element(document.getElementById('contact'));
							$document.scrollToElement(contact, 35, 500);
					  		console.log('goContact() called');
					   	}, 50);
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


					$rootScope.goTop = function() {
					   $document.scrollTopAnimated(0, 500); // (top, milliseconds)
					   console.log('goTop() called');
					};



					// WAYPOINTS

					$rootScope.waypoints = function() {
						$timeout(function() {


							$('#js-work-section').waypoint(function() {
								$('.js-menu-work').addClass('active').siblings().removeClass('active');
							});

							$('#js-contact').waypoint(function() {
								$('.js-menu-contact').addClass('active').siblings().removeClass('active');
							});

							$('#js-how-section').waypoint(function() {
								$('.js-menu-how').addClass('active').siblings().removeClass('active');
							});

							$('#js-what-section').waypoint(function() {
								$('.js-menu-what').addClass('active').siblings().removeClass('active');
							});


					   	}, 100);
					};

					$rootScope.waypoints();




	  }]);

  })();
