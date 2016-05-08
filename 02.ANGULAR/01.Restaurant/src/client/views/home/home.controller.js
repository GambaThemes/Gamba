(function() {
    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController);

    function HomeController($scope) {
        $scope.topDealItems = [
            { size: { x: 2, y: 2 }, position: [0, 0] },
            { size: { x: 1, y: 1 }, position: [0, 2] },
            { size: { x: 1, y: 1 }, position: [1, 0] },
            { size: { x: 1, y: 1 }, position: [2, 0] },
            { size: { x: 1, y: 1 }, position: [2, 1] },
            { size: { x: 1, y: 1 }, position: [2, 2] },
            { size: { x: 1, y: 1 }, position: [3, 0] },
            { size: { x: 1, y: 1 }, position: [3, 1] }
        ];

        $scope.gridsterOpts = {
            columns: 3, // the width of the grid, in columns
            pushing: true, // whether to push other items out of the way on move or resize
            floating: true, // whether to automatically float items up so they stack (you can temporarily disable if you are adding unsorted items with ng-repeat)
            swapping: false, // whether or not to have items of the same size switch places instead of pushing down if they are the same size
            width: 'auto', // can be an integer or 'auto'. 'auto' scales gridster to be the full width of its containing element
            colWidth: 'auto', // can be an integer or 'auto'.  'auto' uses the pixel width of the element divided by 'columns'
            rowHeight: 220, // can be an integer or 'match'.  Match uses the colWidth, giving you square widgets.
            margins: [10, 10], // the pixel distance between each widget
            outerMargin: false, // whether margins apply to outer edges of the grid
            isMobile: false, // stacks the grid items if true
            mobileBreakPoint: 600, // if the screen is not wider that this, remove the grid layout and stack the items
            mobileModeEnabled: true, // whether or not to toggle mobile mode when screen width is less than mobileBreakPoint
            minColumns: 1, // the minimum columns the grid must have
            minRows: 1, // the minimum height of the grid, in rows
            maxRows: 100,
            defaultSizeX: 1, // the default width of a gridster item, if not specifed
            defaultSizeY: 1, // the default height of a gridster item, if not specified
            minSizeX: 1, // minimum column width of an item
            maxSizeX: null, // maximum column width of an item
            minSizeY: 1, // minumum row height of an item
            maxSizeY: null, // maximum row height of an item
            resizable: {
                enabled: false
            },
            draggable: {
                enabled: false
            }
        };
    }

})();
