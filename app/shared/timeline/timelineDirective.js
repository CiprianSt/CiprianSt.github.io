(function () {
    'use strict';

    angular
        .module('myApp')
        .directive('myTimeline', timelineDirective);

    /* @ngInject */
    function timelineDirective() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/shared/timeline/timelineView.html'
        };
        return directive;
    }

})();