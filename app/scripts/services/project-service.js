(function () { 

	'use strict';

	/**
	 * @ngdoc function
	 * @name bakeryApp.controller:ProjectService
	 * @description
	 * # ProjectService
	 * Service of the projects for bakeryApp
	 */
	angular.module('bakeryApp')
	  .service('ProjectService', function(){
         /* jshint ignore:start */
          var projects = [{
              id: 1,
              name: 'Blah Blah Blah',
              description: '<p>We were tasked with designing a new The Scene store in East Rand Mall, Johannesburg. We had to work with their graphic branding while developing a new style of interior. We focused heavily on reducing visual clutter, and bringing the colour palette of the store into a neutral range, allowing the massive variety of product to shine. </p><p>Because of the size and shape of the space we split the shop in two: The front space for clothing and accessories, and a "sneaker lounge" in the back. The spaces are divided by powder-coated mesh walls, and the dropped ceiling feature in the sneaker lounge draws intrigue from passersby. </p>',
              thumb: '../../images/project-thumb.jpg',
              agency: "<a href='http://www.thebread.co.za/'>The Bread</a>",
              collaborators: "<a href='http://www.carl.co.za/'>Carl Ashcroft</a> (Spatial Designer)",
              images: [
                '../../images/project-img.jpg',
              ]
          },
          {
              id: 2,
              name: 'The Scene East Rand Mall',
              description: '<p>We were tasked with designing a new The Scene store in East Rand Mall, Johannesburg. We had to work with their graphic branding while developing a new style of interior. We focused heavily on reducing visual clutter, and bringing the colour palette of the store into a neutral range, allowing the massive variety of product to shine. </p><p>Because of the size and shape of the space we split the shop in two: The front space for clothing and accessories, and a "sneaker lounge" in the back. The spaces are divided by powder-coated mesh walls, and the dropped ceiling feature in the sneaker lounge draws intrigue from passersby. </p>',
              thumb: '../../images/project-thumb.jpg',
              agency: "<a href='http://www.thebread.co.za/'>The Bread</a>",
              collaborators: "<a href='http://www.carl.co.za/'>Carl Ashcroft</a> (Spatial Designer)",
              images: [
                '../../images/project-img.jpg'
              ]
                    }];
          return {
              list: function(){
                  return projects;
              },
              find: function(id){
                  return _.find(projects, function(project){
                    return project.id == id;
                  });
              }
          };
          /* jshint ignore:end */
        });

  })(); 
