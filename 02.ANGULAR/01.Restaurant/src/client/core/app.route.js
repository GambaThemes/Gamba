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
                'slider': {
                    templateUrl: '/views/layout/slider.html'
                },
                'leftSidebar': {
                    templateUrl: '/views/layout/left-sidebar.html'
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
