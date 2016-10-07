(function () { 

	'use strict';

	/**
	 * @ngdoc function
	 * @name bakeryApp.controller:PrimaryContentCtrl
	 * @description
	 * # PrimaryContentCtrl
	 * Controller of the bakeryApp
	 */
	angular.module('bakeryApp')
		.controller('PrimaryContentCtrl', ['$scope', '$state', '$document', 'ProjectService', function($scope, $state, $document, ProjectService){

			$scope.projects = ProjectService.list();


			// var work = angular.element(document.getElementById('work'));
			//     $scope.toWork = function() {
			//     $document.scrollTo(work, 30, 1000);
			// };




			// GOOGLE MAPS

			var multiple = new Multiple({
			  selector: '.shared-bg',
			  background: 'linear-gradient(#fff9d9, #ffe9ec, #bbf6c1)'
			});

			$(document).ready(function(){

			    $(window).scroll(function(e){
			        var scr = $(window).scrollTop();
			        $('.header').css('background-position', '0px -'+ scr+'px');
			    });    
			});
			
			function loadGoogleMap() {
			    var mapOptions = {
			        zoom: 16,
			        scrollwheel: false,
			        disableDefaultUI: true,
			        center: new google.maps.LatLng(-26.194211,28.0347852),
			        styles: [{"featureType":"all","elementType":"geometry","stylers":[{"visibility":"simplified"},{"hue":"#000000"}]},{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"color":"#1d1d1d"}]},{"featureType":"administrative.province","elementType":"labels.text.fill","stylers":[{"color":"#f3cbb7"},{"visibility":"on"}]},{"featureType":"administrative.province","elementType":"labels.text.stroke","stylers":[{"color":"#000000"},{"weight":"5.00"},{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#000000"},{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"labels.text.stroke","stylers":[{"color":"#f3cbb7"},{"visibility":"on"},{"weight":"5.00"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#000000"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.stroke","stylers":[{"color":"#f3cbb7"},{"visibility":"on"},{"weight":"5.00"}]},{"featureType":"administrative.land_parcel","elementType":"geometry.fill","stylers":[{"saturation":"64"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#ffd5c0"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#2c2c2c"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#000000"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"on"},{"color":"#ff0000"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#000000"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#f3cbb7"},{"weight":"5.00"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#000000"}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"color":"#f3cbb7"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#f3cbb7"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"visibility":"on"}]},
			        {"featureType":"transit.station","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
			        {"featureType":"transit.line","stylers":[{"color":"#000000"},{"visibility":"on"}]},
			        {"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"visibility":"simplified"},{"lightness":"4"},{"saturation":"-100"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"visibility":"on"}]}]
			    };
			    var mapElement = document.getElementById('map');
			    var map = new google.maps.Map(mapElement, mapOptions);

			    var marker = new google.maps.Marker({
			        position: new google.maps.LatLng(-26.194211,28.0347852),
			        map: map,
			        title: 'The Bread'
			    });			   
			    console.log('Google Map 1 loaded');
			}

			loadGoogleMap();

			// END GOOGLE MAPS		

	  }]);

  })(); 
