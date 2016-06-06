(function() {
    'use strict';

    angular
		.module('app.404')
		.config(config);

		function config($stateProvider, $urlRouterProvider) {
	    
		    $stateProvider.state('404', {    
		        url: '/404',  
		        views: {
	                '': { 
	                	templateUrl: '/views/404/404.html' 
	                }
            	},
		        controller: 'ErrorPageController',
		        controllerAs: 'ErrorPageCtrl',
		        parent: 'master'
		    });
		}

})();