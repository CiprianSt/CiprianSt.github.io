/**
 * Created by Cipri on 9/14/2016.
 */
(function () {
    'use strict';

    angular
        .module('myApp')
        .directive('myHeader', headerDirective);

    /* @ngInject */
    function headerDirective() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/shared/header/headerView.html'
        };
        return directive;
    }

})();

