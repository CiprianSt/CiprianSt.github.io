(function () {
    'use strict';

    angular
        .module('myApp')
        .directive('portfolio-item', portfolioItemDirective);

    /* @ngInject */
    function portfolioItemDirective() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/shared/portfolio-item/portfolioItemView.html'
        };
        return directive;
    }

})();