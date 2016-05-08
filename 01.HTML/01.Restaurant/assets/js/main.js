jQuery(function($) {
    "use strict";

    var SLZ = window.SLZ || {};

    /*=======================================
    =             MAIN FUNCTION             =
    =======================================*/

    SLZ.headerFunction = function() {
        //js for menu PC
        if ($(window).width() > 768){
             // Add class fixed for menu when scroll
            var window_height = $(window).height();

            $(window).on('scroll load', function (event) {
                if ($(window).scrollTop() > window_height) {
                    $(".header-main").addClass('header-fixed');
                }
                else {
                    $(".header-main").removeClass('header-fixed');
                    $(".header-main").removeClass('hide-menu');
                }
            });

            // Show menu when scroll up, hide menu when scroll down
            var lastScroll = 50;
            $(window).on('scroll load', function (event) {
                var st = $(this).scrollTop();
                if (st > lastScroll) {
                    $('.header-main').addClass('hide-menu');
                    if ($('.nav-search').hasClass('hide') === false) {
                        $('.nav-search').toggleClass('hide');
                    }
                }
                else if (st < lastScroll) {
                    $('.header-main').removeClass('hide-menu');
                }

                if ($(window).scrollTop() <= 200 ){
                    $('.header-main').removeClass('.header-fixed').removeClass('hide-menu');
                }
                else if ($(window).scrollTop() < window_height && $(window).scrollTop() > 0) {
                    $('.header-main').addClass('hide-menu');
                }
                lastScroll = st;

            });

            
            // Show - hide box search on menu
            $('.button-search').on('click', function () {
                $('.nav-search').toggleClass('hide');
            });

            //hide box seach when click outside
            $('body').on('click', function (event) {
                if ($('.button-search').has(event.target).length === 0 && !$('.button-search').is(event.target) && $('.nav-search').has(event.target).length === 0 && !$('.nav-search').is(event.target)) {
                    if ($('.nav-search').hasClass('hide') === false) {
                        $('.nav-search').toggleClass('hide');
                    }
                }
            });
        }
    };

    SLZ.mainFunction = function() {


        // ----------------------- WOW-JS --------------------------- //
        new WOW().init();
        // slide gallery footer
        $('.gamba-gallery .content-widget').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 500,
            dots: false,
            arow:true
        });


        // css for header transparent
        var header_height = $('header').height();
        $('.homepage-banner').css('top',header_height*(-1));
        $('.homepage-banner').css('margin-bottom',header_height*(-1));
        $('.homepage-default .homepage-banner-content').css('padding-top',header_height);

    };

    /*======================================
    =            INIT FUNCTIONS            =
    ======================================*/

    $(document).ready(function() {
        SLZ.headerFunction();
        SLZ.mainFunction();
    });

    /*=====  End of INIT FUNCTIONS  ======*/

    $(window).on('resize load', function() {
    });

});
