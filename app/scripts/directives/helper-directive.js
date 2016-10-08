(function () { 
  
  'use strict';

  /**
  * @ngdoc function
  * @name bakeryApp.directive:BackgroundImageDirective
  * @description
  * # BackgroundImageDirective
  * BackgroundImageDirective of the bakeryApp
  */
  angular.module('bakeryApp')

  // BACKGROUND IMAGE DIRECTIVE - COVER
  .directive('backImg', function(){
    return function(scope, element, attrs){
        attrs.$observe('backImg', function(value) {
            element.css({
                'background-image': 'url(' + value +')',
                'background-size' : 'cover' 
            });
        });
      };
  })

  // BACKGROUND IMAGE DIRECTIVE - CONTAIN
  .directive('backImgContain', function(){
    return function(scope, element, attrs){
        attrs.$observe('backImgContain', function(value) {
            element.css({
                'background-image': 'url(' + value +')',
                'background-size' : 'contain',
                'background-repeat': 'no-repeat',
                'background-position': 'center center'
            });
        });
    };
  })

  // MAINTAIN ASPECT RATIO
  .directive('maintainAspectRatio', function () {
      return {
          restrict: "A",
          link: function (scope, element) {
              scope.getWidth = function () {
                  return $(element).width();
              };
              scope.$watch(scope.getWidth, function (width) {
                  $(element).height(1 * width);
              });
          }
     };
  })

  // ALL THINGS GRADIENTS
  .directive('gradientAux', function ($rootScope, $timeout) {   
      return {
          restrict: "AE",
          link: function(scope, elem, attr, ctrl) {
            // check when elem is ready
            elem.ready(function(){
                      
              console.log('gradientAux called');

              // Set Gradients on .shared-bg divs
              var multiple = new Multiple({
                selector: '.shared-bg',
                background: 'linear-gradient(#fff9d9, #ffe9ec, #bbf6c1)'
              });

              // similar to document ready 
              $timeout(function(){

                // get height of scrollable area
                var docHeight = $( ".js-scrollable-area" ).outerHeight();
                var calcHeight = "auto " + docHeight + "px";
                // add background-size to elem
                elem.css({'background-size': calcHeight});


                var scr = $(window).scrollTop();
                var viewportHeight = $(window).height();
                var calcHeight = scr + viewportHeight;
                $('.header').css('background-position', '0px -' + scr + 'px');
                $('.footer').css('background-position', '0px -' + calcHeight + 'px');


                // when scrolling happens
                $(document).scroll(function(e){

                    // get height of scrollable area
                    var docHeight = $( ".js-scrollable-area" ).outerHeight();
                    var calcHeight = "auto " + docHeight + "px";
                    // add background-size to elem
                    elem.css({'background-size': calcHeight});


                    var scr = $(window).scrollTop();
                    var viewportHeight = $(window).height();

                    console.log('scrolling');
                    // console.log('viewportHeight is ' + viewportHeight);

                    var calcHeight = scr + viewportHeight;
                    $('.header').css('background-position', '0px -' + scr + 'px');
                    $('.footer').css('background-position', '0px -' + calcHeight + 'px');
                });

                // when resizing of window happens    

                $(window).on('resize', function(){
                    // get height of scrollable area
                    var docHeight = $( ".js-scrollable-area" ).outerHeight();
                    var calcHeight = "auto " + docHeight + "px";
                    // add background-size to elem
                    elem.css({'background-size': calcHeight});
                });
                     
              });

             });  
 
          }
     };
  });

})(); 



