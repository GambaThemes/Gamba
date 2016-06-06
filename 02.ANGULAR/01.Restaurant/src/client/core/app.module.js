(function() {
    'use strict';

    angular
		.module('app', [
			
			// Modules
			'ui.router',
			'ui.bootstrap',
			'ngAnimate',
			'pascalprecht.translate',
			'ngCookies',
			'slick',

			// Views
			'app.home',
			'app.about',
			'app.reservation',
			'app.menu-gird',
			'app.blog',
			'app.404',
			'app.contact'

		]);

})();


