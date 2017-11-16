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
            'slick',
            'anim-in-out',
            'videosharing-embed'
        ])
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

            // $locationProvider.html5Mode(true);
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
                    'wwd-left@app': {
                        templateUrl: 'views/wwd-left-default.html'
                    },
                    'wwd-right@app': {
                        templateUrl: 'views/wwd-right-default.html'
                    },
                    'work-view@app': {
                        templateUrl: 'views/work.html',
                        controller: 'WorkCtrl',
                        controllerAs: 'work'
                    },
                    'network-view@app': {
                      templateUrl: 'views/network.html'
                    },
                    'footer': {
                        templateUrl: 'views/footer.html'
                    }
                }
            })

            .state('app.experiences', {
                url: 'experiences',
                views: {
                    'wwd-right@app': {
                        templateUrl: 'views/wwd-right-experiences.html'
                    },
                    'wwd-left@app': {
                        templateUrl: 'views/wwd-left-experiences.html'
                    }
                },
            })

             .state('app.spaces', {
                url: 'spaces',
                views: {
                    'wwd-right@app': {
                        templateUrl: 'views/wwd-right-spaces.html'
                    },
                    'wwd-left@app': {
                        templateUrl: 'views/wwd-left-spaces.html'
                    }
                },
            })

            .state('app.design', {
                url: 'design-and-content',
                views: {
                    'wwd-right@app': {
                        templateUrl: 'views/wwd-right-design.html'
                    },
                    'wwd-left@app': {
                        templateUrl: 'views/wwd-left-design.html'
                    }
                },
            })

             .state('app.connections', {
                url: 'connections',
                views: {
                    'wwd-right@app': {
                        templateUrl: 'views/wwd-right-connections.html'
                    },
                    'wwd-left@app': {
                        templateUrl: 'views/wwd-left-connections.html'
                    }
                },
            })

            .state('app.strategy', {
               url: 'strategy',
               views: {
                   'wwd-right@app': {
                       templateUrl: 'views/wwd-right-strategy.html'
                   },
                   'wwd-left@app': {
                       templateUrl: 'views/wwd-left-strategy.html'
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
            url: 'work'
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
                'header@': {
                    templateUrl: 'views/header-team.html',
                    controller: 'HeaderCtrl',
                    controllerAs: 'header'
                },
                'primarycontent@': {
                    templateUrl: 'views/team.html'
                },
                'footer@': {
                    templateUrl: 'views/footer-team.html'
                }
            }
        })

        .state('app.network', {
            url: 'our-network',
            views: {
                'header@': {
                    templateUrl: 'views/header-network.html',
                    controller: 'HeaderCtrl',
                    controllerAs: 'header'
                },
                'primarycontent@': {
                    templateUrl: 'views/network.html'
                },
                'footer@': {
                    templateUrl: 'views/footer-network.html'
                }
            }
        })

        .state('app.careers', {
            url: 'careers',
            views: {
                'header@': {
                    templateUrl: 'views/header-jobs.html',
                    controller: 'HeaderCtrl',
                    controllerAs: 'header'
                },
                'primarycontent@': {
                    templateUrl: 'views/jobs.html',
                    controller: 'JobsCtrl'
                },
                'footer@': {
                    templateUrl: 'views/footer-jobs.html'
                }
            }
        })

        .state('app.careers.detail', {
            url: '/:id',
            views: {
                'primarycontent@': {
                    templateUrl: 'views/job-details.html',
                    controller: 'JobsDetailCtrl'
                }
            }
        })

        .state('app.invest', {
            url: 'ux-invest',
            views: {
                'header@': {
                    templateUrl: 'views/header-jobs.html',
                    controller: 'HeaderCtrl',
                    controllerAs: 'header'
                },
                'primarycontent@': {
                    templateUrl: 'views/ux-invest.html'
                },
                'footer@': {
                    templateUrl: 'views/footer-jobs.html'
                }
            }
        })

        .state('app.whatis-ux', {
            url: 'whatis-ux',
            views: {
                'header@': {
                    templateUrl: 'views/header-jobs.html',
                    controller: 'HeaderCtrl',
                    controllerAs: 'header'
                },
                'primarycontent@': {
                    templateUrl: 'views/what-is-ux.html'
                },
                'footer@': {
                    templateUrl: 'views/footer-jobs.html'
                }
            }
        });


    }])

    .run(function($rootScope, $location, AnalyticsService, $timeout) {
        $rootScope.$on('$stateChangeSuccess', function() {
            AnalyticsService.recordPageview($location.url());
        });
    });


})();
