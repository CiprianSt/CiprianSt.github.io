(function () {
    'use strict';

    angular
        .module('myApp')
        .directive('myAbout', aboutDirective);

    /* @ngInject */
    function aboutDirective() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/shared/about/aboutView.html'
        };
        return directive;
    }

})();