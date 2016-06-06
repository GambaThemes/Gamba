(function() {
    'use strict';

    angular
        .module('app.menu-gird')
        .config(config);

    function config($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('menu-gird', {
                url: '/menu-gird',
                views: {
                    '': {
                        templateUrl: '/views/menu-gird/menu-gird.html'
                    },
                    'list_menu_4@menu-gird': {
                        templateUrl: '/views/layout/list-menu/list-menu-4.html'
                    },
                    'list_menu_4_b@menu-gird': {
                        templateUrl: '/views/layout/list-menu/list-menu-4-b.html'
                    },
                    'list_menu_4_c@menu-gird': {
                        templateUrl: '/views/layout/list-menu/list-menu-4-c.html'
                    },
                    'list_menu_4_d@menu-gird': {
                        templateUrl: '/views/layout/list-menu/list-menu-4-d.html'
                    },
                    'subscribe_email@menu-gird': {
                        templateUrl: '/views/layout/subscribe-email.html'
                    }
                },
                controller: 'MenuGirdController',
                controllerAs: 'menugirdCtrl',
                parent: 'master'
            })
            .state('menu-gird-2', {
                url: '/menu-gird-2',
                views: {
                    '': {
                        templateUrl: '/views/menu-gird/menu-gird-2.html'
                    },
                    'list_menu_2@menu-gird-2': {
                        templateUrl: '/views/layout/list-menu/list-menu-2.html'
                    },
                    'list_menu_2_b@menu-gird-2': {
                        templateUrl: '/views/layout/list-menu/list-menu-2-b.html'
                    },
                    'list_menu_2_c@menu-gird-2': {
                        templateUrl: '/views/layout/list-menu/list-menu-2-c.html'
                    },
                    'subscribe_email@menu-gird-2': {
                        templateUrl: '/views/layout/subscribe-email.html'
                    }
                },
                controller: 'MenuGirdController',
                controllerAs: 'menugirdCtrl',
                parent: 'master'
            });
    }

})();
