(function() {
    'use strict';

    angular
		.module('app.about')
		.config(config);

		function config($stateProvider, $urlRouterProvider) {
	    
		    $stateProvider.state('about', {    
		        url: '/about',  
		        views: {
	                '': { 
	                	templateUrl: '/views/about/about.html' 
	                },
	                'banner_infomation_slide@about': { 
	                	templateUrl: '/views/layout/banner-infomation-slide.html' 
	                },
	                'our_chefs_list@about': { 
	                    templateUrl: '/views/layout/our-chefs-list.html' 
	                },
	                'testimonial_list@about': { 
	                    templateUrl: '/views/layout/testimonial-list.html' 
	                },
	                'coming_soon_2@about': { 
	                    templateUrl: '/views/layout/coming-soon-2.html' 
	                },
	                'subscribe_email@about': { 
	                    templateUrl: '/views/layout/subscribe-email.html' 
	                }
            	},
		        controller: 'AboutController',
		        controllerAs: 'aboutCtrl',
		        parent: 'master'
		    });
		}

})();