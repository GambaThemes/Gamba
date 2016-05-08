(function() {
    'use strict';

    angular
		.module('app.home')
		.config(config);

		function config($stateProvider, $urlRouterProvider) {
	    
		    $stateProvider.state('home', {    
		        url: '/',
                templateUrl: '/views/home/home.html',
                controller: 'HomeController',
		        controllerAs: 'homeCtrl',
                parent: 'master'
		    });
		}

})();