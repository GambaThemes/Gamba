jQuery(function($) {
    "use strict";

    var gamba = window.gamba || {};

    gamba.mainFunction = function(){
        // slide testimonial
        var slider_rtl_1 = $('.content-menu');
        slider_rtl_1.attr('dir', 'rtl');
        slider_rtl_1.slick({
            rtl: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            fade: true,
            asNavFor: '.tab-main-menu'
        });

        var slider_rtl_2 = $('.tab-main-menu');
        slider_rtl_2.attr('dir', 'rtl');
        slider_rtl_2.slick({
            rtl: true,
            infinite: false,
            slidesToShow: 6,
            slidesToScroll: 1,
            speed: 300,
            asNavFor: '.content-menu',
            dots: false,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 5
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 415,
                    settings: {
                        slidesToShow: 1
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

});
