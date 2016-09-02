(function() {

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
                url: '/',
                views: {
                    'header': {
                        templateUrl: 'views/header.html',
                        controller: 'HeaderCtrl',
                        controllerAs: 'header'
                    },
                    'default': {
                        templateUrl: 'views/landing.html'
                    },
                    'footer': {
                        templateUrl: 'views/footer.html'
                    }
                }
            })

            .state('app.home', {
                url: 'home',
                views: {
                   
                    'default@': {
                        templateUrl: 'views/primarycontent.html',
                        controller: 'PrimaryContentCtrl',
                        controllerAs: 'primarycontent'
                    },
                    'wwdside@app.home': {
                        templateUrl: 'views/wwd-side-default.html'
                    },
                    'partners@app.home': {
                        templateUrl: 'views/partners.html'
                    },
                    'work@app.home': {
                        url: '/work',
                        templateUrl: 'views/work.html',
                        controller: 'WorkCtrl',
                        controllerAs: 'work',
                        onEnter: function () {            
                                alert('Go to work')
                                   // $('html, body').animate({
                                   //     scrollTop: $("#work").offset().top
                                   // }, 2000);
                               }
                    },
                }
            })

            .state('app.home.experiences', {
                url: '/experiences',
                views: {
                    'wwdside@app.home': {
                        templateUrl: 'views/wwd-side-experiences.html'
                    }
                },
            })

            .state('app.home.spaces', {
                url: '/spaces',
                views: {
                    'wwdside@app.home': {
                        templateUrl: 'views/wwd-side-spaces.html'
                    }
                },
            })

            .state('app.home.connections', {
                url: '/connections',
                views: {
                    'wwdside@app.home': {
                        templateUrl: 'views/wwd-side-connections.html'
                    }
                },
            })

            .state('app.home.design', {
                url: '/design',
                views: {
                    'wwdside@app.home': {
                        templateUrl: 'views/wwd-side-design.html'
                    }
                },
            })


            .state('app.home.projects', {
                    url: 'our-work',

                    views: {
                        'default@': {
                            templateUrl: 'views/projects.html',
                            controller: 'ProjectsCtrl'
                        }
                    },
                })
                .state('app.projects.detail', {
                    url: '/:id',
                    views: {
                        'detail@app.projects': {
                            templateUrl: 'views/project-details.html',
                            controller: 'ProjectsDetailCtrl'
                        }
                    },
                    resolve: {
                        delay: function($q, $timeout) {
                            var delay = $q.defer();
                            $timeout(delay.resolve, 700);
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
