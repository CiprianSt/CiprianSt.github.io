(function () {
    'use strict';

    angular
        .module('myApp')
        .directive('portfolio-item', portfolioItemDirective);

    /* @ngInject */
    function portfolioItemDirective() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/shared/portfolio-item/portfolioItemView.html',
            scope: {
                data: "=item-data"
            },
            link: link
        };
        return directive;

        function link(scope, element, attrs) {
            console.log(scope.data);
        }
    }

})();