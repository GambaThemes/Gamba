jQuery(function($) {
    "use strict";

    var gamba = window.gamba || {};

    gamba.mainFunction = function(){

        // js for calendar
        $('.input-daterange, .archive-datepicker').datepicker({
            format: 'mm/dd/yy',
            maxViewMode: 0
        });

        // show gallery
        $(".fancybox").fancybox();
    };

    /*======================================
    =            INIT FUNCTIONS            =
    ======================================*/

    $(document).ready(function() {
        gamba.mainFunction();
    });
    /*=====  End of INIT FUNCTIONS  ======*/

});
