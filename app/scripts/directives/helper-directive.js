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

  .directive('ngSize', ['$rootScope', '$state', '$document', '$timeout', function($root, $state, $document, $timeout) {
    return {
      scope: {
          size: '=?ngSize'
      },
      link: function($scope, element, attrs) {

        $timeout(function(){
          // Apply gradient to element 
          var multiple = new Multiple({
             selector: '.shared-bg',
            background: 'linear-gradient(#fff9d9, #ffe9ec, #c5f4c7)'
           });
        });

          $root.ngSizeDimensions  = (angular.isArray($root.ngSizeDimensions)) ? $root.ngSizeDimensions : [];
          $root.ngSizeWatch       = (angular.isArray($root.ngSizeWatch)) ? $root.ngSizeWatch : [];

          var handler = function() {
              angular.forEach($root.ngSizeWatch, function(el, i) {
                  // Dimensions Not Equal?
                  if ($root.ngSizeDimensions[i][0] != el.offsetWidth || $root.ngSizeDimensions[i][1] != el.offsetHeight) {
                      // Update Them
                      $root.ngSizeDimensions[i] = [el.offsetWidth, el.offsetHeight];
                      // Update Scope?
                      $root.$broadcast('size::changed', i);
                  }
              });
          };

          // Add Element to Chain?
          var exists = false;
          angular.forEach($root.ngSizeWatch, function(el, i) { if (el === element[0]) exists = i });

          // Ok.
          if (exists === false) {
              $root.ngSizeWatch.push(element[0]);
              $root.ngSizeDimensions.push([element[0].offsetWidth, element[0].offsetHeight]);
              exists = $root.ngSizeWatch.length-1;
          }

          // Update Scope?
          $scope.$on('size::changed', function(event, i) {
              // Relevant to the element attached to *this* directive
              if (i === exists) {
                  $scope.size = {
                      width: $root.ngSizeDimensions[i][0],
                      height: $root.ngSizeDimensions[i][1]
                  };

                  console.log('window size is being determined');


                  


                  $scope.gradientAux = function(){


                    // checks how far scrollbar is from top of window
                    $scope.scr = $(window).scrollTop();
                    // calcuates the viewport area
                    $scope.viewportHeight = $(window).height();

                    $scope.calcHeight = $scope.scr + $scope.viewportHeight;


                    $scope.backgroundScrollAux = "auto " + $scope.size.height + "px";
                    $scope.backgroundPositionAuxHeader = '0px -' + $scope.scr + 'px';
                    $scope.backgroundPositionAuxFooter = '0px -' + $scope.calcHeight + 'px';

                      

                      $scope.$apply(function () {
                          
                          $('.header').css({'background-size': $scope.backgroundScrollAux, 'background-position': $scope.backgroundPositionAuxHeader});
                          $('.footer').css({'background-size': $scope.backgroundScrollAux, 'background-position': $scope.backgroundPositionAuxFooter});

                      });
                  };

                  $scope.gradientAux();

                  $document.bind('scroll', function () {
                      $scope.gradientAux();
                  });
                
              }
          });

          // Refresh: 100ms
          if (!window.ngSizeHandler) window.ngSizeHandler = setInterval(handler, 100);

          // Window Resize?
          // angular.element(window).on('resize', handler);

      }
    };
  }])

  .directive('scrollTo', function ($rootScope, $timeout, $state) { 
      return {
          restrict: "AE",
          link: function(scope, elem, attr, ctrl) {


              $timeout(function(){

                  if ($state.is('app.contact')) {
                        $rootScope.goContact();
                  } else if ($state.is('app.work')) {
                        $rootScope.goWork();
                  } else if ($state.is('app.howWeDoIt')) {
                        $rootScope.goHowWeDoIt();
                  } else if ($state.is('app.whatWeDo')) {
                        $rootScope.goWhatWeDo();
                  } else if ($state.is('app.design')) {
                        $rootScope.alignWhatWeDo();
                  } else if ($state.is('app.experiences')) {
                        $rootScope.alignWhatWeDo();
                  } else if ($state.is('app.connections')) {
                        $rootScope.alignWhatWeDo();
                  } else if ($state.is('app.spaces')) {
                        $rootScope.alignWhatWeDo();
                  }
                
                   
              });
 
          }
     };
  })

  .directive('duoTone', function ($timeout, $state) { 
      return {
          restrict: "AE",
          link: function(scope, elem, attr, ctrl) {


              $timeout(function(){

                  if ($state.is('app.network')) {
                          $('img').duotone({
                             gradientMap: '#271f37 15%, #fff9d9'
                          });
                  } else if ($state.is('app.team')) {
                          $('img').duotone({
                             gradientMap: '#000000, #c6f4c8'
                          });
                  }

                   
              });
  
          }
     };
  });

})(); 



