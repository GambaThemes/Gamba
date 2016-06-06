(function() {
    'use strict';

    angular
        .module('app.home')
        .config(config);

    function config($stateProvider, $urlRouterProvider) {

        $stateProvider
        .state('home', {
            url: '/',
            views: {
                '': { 
                	templateUrl: '/views/home/home.html' 
                },
                'about_us_1@home': { 
                	templateUrl: '/views/layout/about-us-1.html' 
                },
                'special_menu_1@home': { 
                	templateUrl: '/views/layout/special-menu-1.html' 
                },
                'list_dish@home': { 
                    templateUrl: '/views/layout/list-dish.html' 
                },
                'subscribe_email@home': { 
                    templateUrl: '/views/layout/subscribe-email.html' 
                },
                'coming_soon_1@home': { 
                    templateUrl: '/views/layout/coming-soon-1.html' 
                },
                'book_table_1@home': { 
                    templateUrl: '/views/layout/book-table-1.html' 
                },
                'new_of_day@home': { 
                    templateUrl: '/views/layout/new-of-day.html' 
                },
                'menu_of_day_1@home': { 
                    templateUrl: '/views/layout/menu-of-day-1.html' 
                },
                'banner_prallax@home': { 
                    templateUrl: '/views/layout/banner-prallax.html' 
                },
                'list_menu_1@home': { 
                    templateUrl: '/views/layout/list-menu/list-menu-1.html' 
                },
                'list_menu_1_b@home': { 
                    templateUrl: '/views/layout/list-menu/list-menu-1-b.html' 
                },
                'list_menu_1_c@home': { 
                    templateUrl: '/views/layout/list-menu/list-menu-1-c.html' 
                },
                'list_menu_1_d@home': { 
                    templateUrl: '/views/layout/list-menu/list-menu-1-d.html' 
                }
            },
            controller: 'HomeController',
            controllerAs: 'homeCtrl',
            parent: 'master'

        })
        .state('home-02', {
            url: '/home-02',
            views: {
                '': { 
                    templateUrl: '/views/home/home-02.html' 
                },
                'about_us_2@home-02': { 
                    templateUrl: '/views/layout/about-us-2.html' 
                },
                'special_menu_2@home-02': { 
                    templateUrl: '/views/layout/special-menu-2.html' 
                },
                'list_dish@home-02': { 
                    templateUrl: '/views/layout/list-dish.html' 
                },
                'menu_of_day_2@home-02': { 
                    templateUrl: '/views/layout/menu-of-day-2.html' 
                },
                'list_menu_2@home-02': { 
                    templateUrl: '/views/layout/list-menu/list-menu-2.html' 
                },
                'list_menu_2_b@home-02': { 
                    templateUrl: '/views/layout/list-menu/list-menu-2-b.html' 
                },
                'list_menu_2_c@home-02': { 
                    templateUrl: '/views/layout/list-menu/list-menu-2-c.html' 
                },
                'list_menu_2_d@home-02': { 
                    templateUrl: '/views/layout/list-menu/list-menu-2-d.html' 
                },
                'banner_2@home-02': { 
                    templateUrl: '/views/layout/banner-2.html' 
                },
                'book_table_2@home-02': { 
                    templateUrl: '/views/layout/book-table-2.html' 
                },
                'coming_soon_1@home-02': { 
                    templateUrl: '/views/layout/coming-soon-1.html' 
                },
                'subscribe_email@home-02': { 
                    templateUrl: '/views/layout/subscribe-email.html' 
                },
                'testimonial_list@home-02': { 
                    templateUrl: '/views/layout/testimonial-list.html' 
                }
            },
            controller: 'HomeController',
            controllerAs: 'homeCtrl',
            parent: 'master'

        })
        .state('home-03', {
            url: '/home-03',
            views: {
                '': { 
                    templateUrl: '/views/home/home-03.html' 
                },
                'about_us_3@home-03': { 
                    templateUrl: '/views/layout/about-us-3.html' 
                },
                'menu_of_day_3@home-03': { 
                    templateUrl: '/views/layout/menu-of-day-3.html' 
                },
                'special_menu_3@home-03': { 
                    templateUrl: '/views/layout/special-menu-3.html' 
                },
                'list_menu_3@home-03': { 
                    templateUrl: '/views/layout/list-menu/list-menu-3.html' 
                },
                'list_menu_3_b@home-03': { 
                    templateUrl: '/views/layout/list-menu/list-menu-3-b.html' 
                },
                'list_menu_3_c@home-03': { 
                    templateUrl: '/views/layout/list-menu/list-menu-3-c.html' 
                },
                'list_menu_3_d@home-03': { 
                    templateUrl: '/views/layout/list-menu/list-menu-3-d.html' 
                },
                'list_dish@home-03': { 
                    templateUrl: '/views/layout/list-dish.html' 
                },
                'book_table_3@home-03': { 
                    templateUrl: '/views/layout/book-table-3.html' 
                },
                'our_chefs_1@home-03': { 
                    templateUrl: '/views/layout/our-chefs-1.html' 
                },
                'our_chefs_list@home-03': { 
                    templateUrl: '/views/layout/our-chefs-list.html' 
                },
                'testimonial_list@home-03': { 
                    templateUrl: '/views/layout/testimonial-list.html' 
                },
                'coming_soon_1@home-03': { 
                    templateUrl: '/views/layout/coming-soon-1.html' 
                },
                'subscribe_email@home-03': { 
                    templateUrl: '/views/layout/subscribe-email.html' 
                }
            },
            controller: 'HomeController',
            controllerAs: 'homeCtrl',
            parent: 'master'

        });
    }

})();
