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
                    'wwdside@app': {
                        templateUrl: 'views/wwd-side-default.html'
                    },
                    'work-view@app': {
                        templateUrl: 'views/work.html'
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
                            templateUrl: 'views/experiences.html',
                            controller: 'ExperiencesCtrl',
                            controllerAs: 'experiences'
                        }
                    },
                })

                 .state('app.spaces', {
                    url: 'spaces',
                    views: {
                        'wwdside@app': {
                            templateUrl: 'views/spaces.html',
                            controller: 'SpacesCtrl',
                            controllerAs: 'spaces'
                        }
                    },
                })

                .state('app.design', {
                    url: 'design',
                    views: {
                        'wwdside@app': {
                            templateUrl: 'views/design.html',
                            controller: 'DesignCtrl',
                            controllerAs: 'design'
                        }
                    },
                })

                 .state('app.connections', {
                    url: 'connections',
                    views: {
                        'wwdside@app': {
                            templateUrl: 'views/connections.html',
                            controller: 'ConnectionsCtrl',
                            controllerAs: 'connections'
                        }
                    },
                })

            .state('app.whatWeDo', {
                url: 'what-we-do'
            })

            .state('app.howWeDoIt', {
                url: 'how-we-do-it'
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
                    },
                    'work-grid@app.work.detail': {
                        templateUrl: 'views/work.html'
                    }
                }
            })


            .state('app.contact', {
                url: 'contact'
            })

            .state('app.team', {
                url: 'our-team',
                views: {
                    'primarycontent@': {
                        templateUrl: 'views/team.html'
                    }
                }
            })

            .state('app.network', {
                url: 'our-network',
                views: {
                    'primarycontent@': {
                        templateUrl: 'views/network.html'
                    }
                }
            })


            .state('app.careers', {
                url: 'careers',
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
