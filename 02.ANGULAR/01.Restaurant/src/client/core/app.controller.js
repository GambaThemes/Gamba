(function() {
    'use strict';

    angular
		.module('app')
		.controller('AppController', AppController);

		function AppController($rootScope, Constants) {

			$rootScope.APP_TITLE = Constants.APP_TITLE;

		}

})();