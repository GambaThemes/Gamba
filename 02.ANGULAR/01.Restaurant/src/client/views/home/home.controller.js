(function() {
    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController);

    function HomeController($scope) {
		console.log('áca');
    	$scope.OnAfterChange = function() {
    		console.log('sau');
    		angular.element('.slick-active  .logo-images').addClass('animated fadeInDown');
            angular.element('.slick-active  .group-btn-2').addClass('animated fadeInUp');
            angular.element('.slick-active  .group-title').addClass('animated fadeInUp');
            angular.element('.slick-active  .group-title-2').addClass('animated fadeInRight');
            angular.element('.slick-active  .group-open-hours').addClass('animated fadeInRight');
            angular.element('.slick-active  .btn-left').addClass('animated fadeInLeft');
            angular.element('.slick-active  .btn-right').addClass('animated fadeInRight');
            angular.element('.slick-active  .btn-center').addClass('animated zoomIn');
            angular.element('.slick-active  .logo-images').removeClass('hidden');
            angular.element('.slick-active  .group-btn-2').removeClass('hidden');
            angular.element('.slick-active  .group-title').removeClass('hidden');
            angular.element('.slick-active  .group-title-2').removeClass('hidden');
            angular.element('.slick-active  .group-open-hours').removeClass('hidden');
            angular.element('.slick-active  .btn-left').removeClass('hidden');
            angular.element('.slick-active  .btn-right').removeClass('hidden');
            angular.element('.slick-active  .btn-center').removeClass('hidden');
            angular.element(".video-embed").addClass('show-video');
            angular.element(".video-button-close").addClass('show-video');
            angular.element(".video-embed img").src += "&autoplay=1";
        };

    	$scope.OnBeforeChange = function() {
    		console.log('truoc');
    		angular.element('.slick-active  .logo-images').removeClass('animated fadeInDown');
            angular.element('.slick-active  .group-btn-2').removeClass('animated fadeInUp');
            angular.element('.slick-active  .group-title').removeClass('animated fadeInUp');
            angular.element('.slick-active  .group-title-2').removeClass('animated fadeInRight');
            angular.element('.slick-active  .group-open-hours').removeClass('animated fadeInRight');
            angular.element('.slick-active  .btn-left').removeClass('animated fadeInLeft');
            angular.element('.slick-active  .btn-right').removeClass('animated fadeInRight');
            angular.element('.slick-active  .btn-center').removeClass('animated zoomIn');
            angular.element('.slick-active  .logo-images').addClass('hidden');
            angular.element('.slick-active  .group-btn-2').addClass('hidden');
            angular.element('.slick-active  .group-title').addClass('hidden');
            angular.element('.slick-active  .group-title-2').addClass('hidden');
            angular.element('.slick-active  .group-open-hours').addClass('hidden');
            angular.element('.slick-active  .btn-left').addClass('hidden');
            angular.element('.slick-active  .btn-right').addClass('hidden');
            angular.element('.slick-active  .btn-center').addClass('hidden');
        };

        // $('.background-slide').on('afterChange', function(event, slick, currentSlide){
        //     $('.slick-active  .logo-images').addClass('animated fadeInDown');
        //     $('.slick-active  .group-btn-2').addClass('animated fadeInUp');
        //     $('.slick-active  .group-title').addClass('animated fadeInUp');
        //     $('.slick-active  .group-title-2').addClass('animated fadeInRight');
        //     $('.slick-active  .group-open-hours').addClass('animated fadeInRight');
        //     $('.slick-active  .btn-left').addClass('animated fadeInLeft');
        //     $('.slick-active  .btn-right').addClass('animated fadeInRight');
        //     $('.slick-active  .btn-center').addClass('animated zoomIn');
        //     $('.slick-active  .logo-images').removeClass('hidden');
        //     $('.slick-active  .group-btn-2').removeClass('hidden');
        //     $('.slick-active  .group-title').removeClass('hidden');
        //     $('.slick-active  .group-title-2').removeClass('hidden');
        //     $('.slick-active  .group-open-hours').removeClass('hidden');
        //     $('.slick-active  .btn-left').removeClass('hidden');
        //     $('.slick-active  .btn-right').removeClass('hidden');
        //     $('.slick-active  .btn-center').removeClass('hidden');
        // });

        // $('.background-slide').on('beforeChange', function(event, slick, currentSlide){
        //     $('.slick-active  .logo-images').removeClass('animated fadeInDown');
        //     $('.slick-active  .group-btn-2').removeClass('animated fadeInUp');
        //     $('.slick-active  .group-title').removeClass('animated fadeInUp');
        //     $('.slick-active  .group-title-2').removeClass('animated fadeInRight');
        //     $('.slick-active  .group-open-hours').removeClass('animated fadeInRight');
        //     $('.slick-active  .btn-left').removeClass('animated fadeInLeft');
        //     $('.slick-active  .btn-right').removeClass('animated fadeInRight');
        //     $('.slick-active  .btn-center').removeClass('animated zoomIn');
        //     $('.slick-active  .logo-images').addClass('hidden');
        //     $('.slick-active  .group-btn-2').addClass('hidden');
        //     $('.slick-active  .group-title').addClass('hidden');
        //     $('.slick-active  .group-title-2').addClass('hidden');
        //     $('.slick-active  .group-open-hours').addClass('hidden');
        //     $('.slick-active  .btn-left').addClass('hidden');
        //     $('.slick-active  .btn-right').addClass('hidden');
        //     $('.slick-active  .btn-center').addClass('hidden');
        // });
        
    }

})();
