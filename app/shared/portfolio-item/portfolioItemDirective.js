(function () {
    'use strict';

    angular
        .module('myApp')
        .directive('portfolioItem', portfolioItemDirective);

    /* @ngInject */
    function portfolioItemDirective() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/shared/portfolio-item/portfolioItemView.html',
            scope: {
                itemData: "=",
                itemIndex: "="
            },
            link: link
        };
        return directive;

        function link(scope, element, attrs) {
            var id = '#portfolioModal' + scope.itemIndex;

            // Hack to properly display modals
            $('.modal-dialog').parent().on('show.bs.modal', function(e) {
                $(id).appendTo("body");
            })
        }
    }

})();