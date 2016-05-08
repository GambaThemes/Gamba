jQuery(function($) {
    "use strict";

    var SLZ = window.SLZ || {};

    /*=======================================
    =             MAIN FUNCTION             =
    =======================================*/

    SLZ.mainFunction = function() {
        
        // slide special menu
        $('.special-menu .list-dish').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 500,
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 7000,
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 420,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        
                    }
                }
            ]
        });

        // slide new of the day
        $('.new-of-day .list-news').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            dots: true,
            arrows: false
        });
    };

    /*======================================
    =            INIT FUNCTIONS            =
    ======================================*/

    $(document).ready(function() {
        SLZ.mainFunction();
    });

    /*=====  End of INIT FUNCTIONS  ======*/

    $(window).on('load', function() {
        $('.homepage-banner').css('height',$(window).height());
    });

});
