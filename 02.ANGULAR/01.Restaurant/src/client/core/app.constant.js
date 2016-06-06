(function() {
    'use strict';

    angular
		.module('app')
		.factory('Constants', Constants);

		function Constants() {
			return{

				APP_TITLE: "Gamba - Food & Restaurant Template"

			};
		}

})();