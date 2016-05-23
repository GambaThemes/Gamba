jQuery(function($) {
    "use strict";

    var SLZ = window.SLZ || {};

    // js for calendar
    SLZ.datepick = function() {
        $('.input-daterange, .archive-datepicker').datepicker({
            format: 'mm/dd/yy',
            maxViewMode: 0
        });
    };

    /*======================================
    =            INIT FUNCTIONS            =
    ======================================*/

    $(document).ready(function() {
        SLZ.datepick();
    });
    /*=====  End of INIT FUNCTIONS  ======*/

});
