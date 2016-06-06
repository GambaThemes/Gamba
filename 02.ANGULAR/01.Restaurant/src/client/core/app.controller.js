(function() {
    'use strict';

    angular
        .module('app')
        .controller('AppController', AppController);

    function AppController($rootScope, $scope, $timeout, $window, $translate, $location, $state, Constants) {

        $rootScope.APP_TITLE = Constants.APP_TITLE;
        $rootScope.state = $state;


        // Handle translate language
        $rootScope.lang = 'en';

        $rootScope.default_float = 'left';
        $rootScope.opposite_float = 'right';

        $rootScope.default_direction = 'ltr';
        $rootScope.opposite_direction = 'rtl';

        $scope.changeLanguage = function(langKey) {
            $translate.use(langKey);
        };

        $rootScope.$on('$translateChangeSuccess', function(event, data) {
            var language = data.language;

            $rootScope.lang = language;

            $rootScope.default_direction = language === 'ar' ? 'rtl' : 'ltr';
            $rootScope.opposite_direction = language === 'ar' ? 'ltr' : 'rtl';

            $rootScope.default_float = language === 'ar' ? 'right' : 'left';
            $rootScope.opposite_float = language === 'ar' ? 'left' : 'right';
        });


        // Set active menu
        $scope.isActive = function (viewLocation) {
             var active = (viewLocation === $location.path());
             return active;
        };


        if ($window.innerWidth > 768) {
            // Add class fixed for menu when scroll
            $scope.window_height = $window.innerHeight;

            angular.element($window).bind("scroll load", function(e) {
                if (angular.element($window).scrollTop() > $scope.window_height) {
                    angular.element(".header-main").addClass('header-fixed');

                } else {
                    angular.element(".header-main").removeClass('header-fixed');
                    angular.element(".header-main").removeClass('hide-menu');

                }

            });

            // Show menu when scroll up, hide menu when scroll down
            $scope.lastScroll = 50;
            angular.element($window).bind('scroll load', function(e) {
                $scope.st = angular.element($window).scrollTop();
                if ($scope.st > $scope.lastScroll) {
                    angular.element('.header-main').addClass('hide-menu');
                    if (angular.element('.nav-search').hasClass('hide') === false) {
                        angular.element('.nav-search').toggleClass('hide');
                    }
                } else if ($scope.st < $scope.lastScroll) {
                    angular.element('.header-main').removeClass('hide-menu');
                }

                if (angular.element($window).scrollTop() <= 200) {
                    angular.element('.header-main').removeClass('.header-fixed').removeClass('hide-menu');
                } else if (angular.element($window).scrollTop() < $scope.window_height && angular.element($window).scrollTop() > 0) {
                    angular.element('.header-main').addClass('hide-menu');
                }
                $scope.lastScroll = $scope.st;

            });

            // Show - hide box search on menu
            $scope.openSearchForm = function(argument) {
                angular.element('.nav-search').toggleClass('hide');
            };

        }

        // $timeout(function() {
        //     $scope.header_height = angular.element('header').css("height");
        //     angular.element('.homepage-banner').css('top', '-' + $scope.header_height);
        //     angular.element('.homepage-banner').css('margin-bottom', '-' + $scope.header_height);
        //     angular.element('.homepage-default .homepage-banner-content').css('padding-top', $scope.header_height);
        // }, 1000);

        // JS for section Videos bg
        
        //if (angular.element('.video-thumbnail').length) {
            $scope.gurl = angular.element(".video-embed img").attr("src");
            console.log($scope.gurl);
            $scope.openVideo = function() {
                angular.element(".video-embed").addClass('show-video');
                angular.element(".video-button-close").addClass('show-video');
                angular.element(".video-embed img").src += "&autoplay=1";
            };
            // $(".video-button-play ").on('click', function(event) {
               
            //     event.preventDefault();
            // });

            $scope.closeVideo = function() {
                angular.element(".video-embed img").src = $scope.gurl;
                angular.element(".video-embed").removeClass('show-video');
                angular.element(".video-button-close").removeClass('show-video');
            };

            // $(".video-button-close").on('click', function(event) {
                
            // });
        //};


        // Footer JS
        if ($window.innerWidth > 767) {
            $timeout(function() {
                angular.element('.body-wrapper').css('padding-bottom', angular.element('.footer').height());
            }, 1000);
        }


    }

})();
