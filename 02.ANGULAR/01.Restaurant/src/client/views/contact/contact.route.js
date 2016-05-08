(function() {
    'use strict';

    angular
		.module('app.contact')
		.config(config);

		function config($stateProvider, $urlRouterProvider) {
	    
		    $stateProvider.state('contact', {    
		        url: '/contact',  
		        templateUrl: '/views/contact/contact.html',
		        controller: 'ContactController',
		        controllerAs: 'contactCtrl',
		        parent: 'master'
		    });
		}

})();