(function() {
    'use strict';

    angular
        .module('app.blog')
        .config(config);

    function config($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('blog', {
                url: '/blog',
                views: {
                    '': {
                        templateUrl: '/views/blog/blog.html'
                    },
                    'subscribe_email@blog': {
                        templateUrl: '/views/layout/subscribe-email.html'
                    }
                },
                controller: 'BlogController',
                controllerAs: 'blogCtrl',
                parent: 'master'
            })
            .state('blog-detail', {
                url: '/blog-detail',
                views: {
                    '': {
                        templateUrl: '/views/blog/blog-detail.html'
                    },
                    'subscribe_email@blog-detail': {
                        templateUrl: '/views/layout/subscribe-email.html'
                    }
                },
                controller: 'BlogController',
                controllerAs: 'blogCtrl',
                parent: 'master'
            });
    }

})();
