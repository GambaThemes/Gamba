jQuery(function($) {
    "use strict";

    var SLZ = window.SLZ || {};

    SLZ.mainFunction = function(){

        // js for calendar
        $('.input-daterange, .archive-datepicker').datepicker({
            format: 'mm/dd/yy',
            maxViewMode: 0
        });
    };

    /*======================================
    =            INIT FUNCTIONS            =
    ======================================*/

    $(document).ready(function() {
        SLZ.mainFunction();
    });
    /*=====  End of INIT FUNCTIONS  ======*/

});
