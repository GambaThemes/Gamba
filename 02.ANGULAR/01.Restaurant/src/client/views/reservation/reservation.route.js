(function() {
    'use strict';

    angular
		.module('app.reservation')
		.config(config);

		function config($stateProvider, $urlRouterProvider) {
	    
		    $stateProvider.state('reservation', {    
		        url: '/reservation',  
		        views: {
	                '': { 
	                	templateUrl: '/views/reservation/reservation.html' 
	                },
	                'book_table@reservation': { 
	                    templateUrl: '/views/layout/book-table.html' 
	                },
	                'coming_soon_2@reservation': { 
	                    templateUrl: '/views/layout/coming-soon-2.html' 
	                },
	                'subscribe_email@reservation': { 
	                    templateUrl: '/views/layout/subscribe-email.html' 
	                }
            	},
		        controller: 'ReservationController',
		        controllerAs: 'reservationCtrl',
		        parent: 'master'
		    });
		}

})();