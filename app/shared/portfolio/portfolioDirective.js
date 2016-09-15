(function () {
    'use strict';

    angular
        .module('myApp')
        .directive('myPortfolio', portfolioDirective);

    /* @ngInject */
    function portfolioDirective() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/shared/portfolio/portfolioView.html'
        };
        return directive;
    }

})();