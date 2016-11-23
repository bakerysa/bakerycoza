(function () {

    'use strict';

    /**
     * @ngdoc function
     * @name bakeryApp.AppController
     * @description
     * # AppController
     * Controller of the bakeryApp
     */
    angular.module('bakeryApp')
        .controller(
            "AppController",
            function( $rootScope, $scope, $state, $location, preloader ) {

                // I keep track of the state of the loading images.
                $scope.isLoading = true;
                $scope.isSuccessful = false;
                $scope.percentLoaded = 0;
                // I am the image SRC values to preload and display./
                // --
                // NOTE: "cache" attribute is to prevent images from caching in the
                // browser (for the sake of the demo).

                $scope.imageLocations = [
                    ( "../../images/what-we-do/pic1.svg" ),
                    ( "../../images/what-we-do/pic2.svg" ),
                    ( "../../images/what-we-do/pic3.svg" ),
                    ( "../../images/what-we-do/pic4.svg" ),
                    ( "../../images/what-we-do/pic5.svg" ),
                    ( "../../images/what-we-do/pic6.svg" ),
                    ( "../../images/what-we-do/pic7.svg" ),
                    ( "../../images/what-we-do/pic8.svg" ),
                    ( "../../images/what-we-do/pic9.svg" ),
                    ( "../../images/autonomy.png" ),
                    ( "../../images/kinetic.png" ),
                    ( "../../images/glo.png" ),
                    // ( "../../images/clients/glo.png" ),
                    // ( "../../images/clients/anglo.png" ),
                    // ( "../../images/clients/autonomy.png" ),
                    // ( "../../images/clients/bonitas.png" ),
                    // ( "../../images/clients/kinetic.png" ),
                    // ( "../../images/clients/praekelt.png" )
                ];
                // Preload the images; then, update display when returned.
                preloader.preloadImages( $scope.imageLocations ).then(
                    function handleResolve( imageLocations ) {
                        // Loading was successful.
                        $scope.isLoading = false;
                        $scope.isSuccessful = true;
                        imageLocations = imageLocations;
                    },
                    function handleReject( imageLocation ) {
                        // Loading failed on at least one image.
                        $scope.isLoading = false;
                        $scope.isSuccessful = false;
                        console.error( "Image Failed", imageLocation );
                        console.info( "Preload Failure" );
                    },
                    function handleNotify( event ) {
                        $scope.percentLoaded = event.percent;
                    }
                );

            }
        );


})();
