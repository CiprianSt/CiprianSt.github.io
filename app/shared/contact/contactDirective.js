(function () {
    'use strict';

    angular
        .module('myApp')
        .directive('myContact', contactDirective);

    /* @ngInject */
    function contactDirective() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/shared/contact/contactView.html'
        };
        return directive;
    }

})();