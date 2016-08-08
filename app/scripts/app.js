(function () { 

'use strict';

/**
 * @ngdoc overview
 * @name bakeryApp
 * @description
 * # bakeryApp
 *
 * Main module of the application.
 */
angular
  .module('bakeryApp', [
    'ngAnimate',
    'ngResource',
    'ui.router',
    'angularGrid'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
      $stateProvider


        .state('app', {
          url:'/',
          views: {
            'header@app': {
              templateUrl:'views/header.html',
              controller: 'HeaderCtrl',
              controllerAs: 'header'
            },
            'primarycontent': {
              templateUrl: 'views/primarycontent.html',
              controller: 'PrimaryContentCtrl',
              controllerAs: 'primarycontent'
            },
            'wwdside@app': {
              templateUrl:'views/wwd-side-default.html'
            },
            'footer@app': {
              templateUrl:'views/footer.html'
            },
          }
        })

        .state('app.experiences', {
            url:'experiences',
            views: {
              'wwdside@app': {
                templateUrl:'views/wwd-side-experiences.html'
              }
            },
        })

        .state('app.projects', {
            url:'our-work',
            views: {
              'projects@app': {
                templateUrl:'views/projects.html',
                controller: 'ProjectsCtrl'
              }
            },
        })
                .state('app.projects.detail', {
                  url: '/:id',
                  views: {
                    'detail@app.projects':{
                      templateUrl:'views/project-details.html',
                      controller: 'ProjectsDetailCtrl'
                    }
                  },
                  resolve: {
                    delay: function($q, $timeout) {
                      var delay = $q.defer();
                      $timeout(delay.resolve, 1200);
                      return delay.promise;
                    }
                  }
                });

      }])


    .run(function($rootScope, $location, AnalyticsService) {
        $rootScope.$on('$stateChangeSuccess', function() {
          AnalyticsService.recordPageview($location.url());
       });
    });



})(); 
