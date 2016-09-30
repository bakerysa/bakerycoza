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
            'angularGrid',
            'duScroll',
            'slick'
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
                    'primarycontent': {
                        templateUrl: 'views/primarycontent.html',
                        controller: 'PrimaryContentCtrl',
                        controllerAs: 'primarycontent'
                    },
                    'work-view@app': {
                        templateUrl: 'views/work.html'
                    },
                    'wwdside@app': {
                        templateUrl: 'views/wwd-side-default.html'
                    },
                    'footer': {
                        templateUrl: 'views/footer.html'
                    }
                }
            })

            .state('app.experiences', {
                url: 'experiences',
                views: {
                    'wwdside@app': {
                        templateUrl: 'views/wwd-side-experiences.html',
                        controller: 'ExperiencesCtrl',
                        controllerAs: 'experiences'
                    }
                },
            })

            .state('app.whatWeDo', {
                url: 'what-we-do'
            })

            .state('app.howWeDoIt', {
                url: 'how-we-do-it'
            })

              .state('app.contact', {
                url: 'contact',
            })


            .state('app.work', {
                url: 'work',
                views: {
                    'work-view': {
                        templateUrl: 'views/work.html',
                        controller: 'WorkCtrl'
                    }
                }
            })

            .state('app.work.detail', {
                url: '/:id',
                views: {
                    'primarycontent@': {
                        templateUrl: 'views/project-details.html',
                        controller: 'ProjectsDetailCtrl'
                    }
                }
            })

            .state('app.team', {
                url: 'team',
                views: {
                    'primarycontent@': {
                        templateUrl: 'views/team.html'
                    }
                }
            })

            .state('app.network', {
                url: 'network',
                views: {
                    'primarycontent@': {
                        templateUrl: 'views/network.html'
                    }
                }
            })

            .state('app.jobs', {
                url: 'jobs',
                views: {
                    'primarycontent@': {
                        templateUrl: 'views/jobs.html'
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
