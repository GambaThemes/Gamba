jQuery(function($) {
    "use strict";

    var gamba = window.gamba || {};

    /*=======================================
    =             MAIN FUNCTION             =
    =======================================*/

    gamba.mainFunction = function() {

        // slide for group logo
        $('.list-logo').slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 500,
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 5000,
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        autoplay: false
                    }
                },
                {
                    breakpoint: 320,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: false
                    }
                }
            ]
        });
    };

    /*======================================
    =            INIT FUNCTIONS            =
    ======================================*/

    $(document).ready(function() {
        gamba.mainFunction();
    });

    /*=====  End of INIT FUNCTIONS  ======*/

    $(window).on('load', function() {
    });

});
