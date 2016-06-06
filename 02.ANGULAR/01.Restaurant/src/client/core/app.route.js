(function() {
    'use strict';

    angular
        .module('app')
        .config(config);

    function config($stateProvider, $urlRouterProvider) {
        $stateProvider.state('master', {
            abstract: true,
            views: {
                'header': {
                    templateUrl: '/views/layout/header.html'
                },
                'header_2': {
                    templateUrl: '/views/layout/header-2.html'
                },
                'header_3': {
                    templateUrl: '/views/layout/header-3.html'
                },
                'navigation@master': {
                    templateUrl: '/views/layout/navigation.html'
                },
                'main': {
                    templateUrl: '/views/layout/master.html'
                },
                'footer': {
                    templateUrl: '/views/layout/footer.html'
                }
            }
        });
        $urlRouterProvider.otherwise('/');
    }

})();
