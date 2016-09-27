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
            'duScroll'
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
                    'footer': {
                        templateUrl: 'views/footer.html'
                    }
                }
            })

            .state('app.experiences', {
                url: 'experiences',
                views: {
                    'wwdside@app': {
                        templateUrl: 'views/wwd-side-experiences.html'
                    }
                },
            })

            .state('app.whatWeDo', {
                url: 'what-we-do'
            })

            .state('app.howWeDoIt', {
                url: 'how-we-do-it',
                onEnter: function () {
                    console.log('How We Do It entered');
                    var tid = setInterval( function () {
                        if ( document.readyState !== 'complete' ) return;
                        clearInterval( tid );       
                        $('body').animate({
                            scrollTop: $('#how-we-do-it').offset().top
                        }, 800);
                    }, 100 );
                }
            })

            .state('app.work', {
                url: 'work',
                controller: 'WorkCtrl',
                onEnter: function () {
                    console.log('Work entered');
                    var tid = setInterval( function () {
                        if ( document.readyState !== 'complete' ) return;
                        clearInterval( tid );       
                        $('body').animate({
                            scrollTop: $('#work').offset().top
                        }, 800);
                    }, 100 );
                }
            })

            .state('app.home.projects', {
                    url: '/our-work',
                    views: {
                        'default@': {
                            templateUrl: 'views/work.html',
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
