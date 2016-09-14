/**
 * Created by Cipri on 9/14/2016.
 */
(function () {
    'use strict';

    angular
        .module('myApp')
        .directive('myNavigation', directiveName);

    /* @ngInject */
    function directiveName() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/shared/navigation/navigationView.html',
            link: link
    };
        return directive;

        function link(scope, element, attrs) {
            // Highlight the top nav as scrolling occurs
            $('body').scrollspy({
                target: '.navbar-fixed-top',
                offset: 51
            });

            // Offset for Main Navigation
            $('#mainNav').affix({
                offset: {
                    top: 100
                }
            });

            // Closes the Responsive Menu on Menu Item Click
            $('.navbar-collapse ul li a').click(function(){
                $('.navbar-toggle:visible').click();
            });
        }
    }

})();

