/**
 * Created by Cipri on 9/14/2016.
 */
(function () {
    'use strict';

    angular
        .module('myApp')
        .directive('scrollTo', scrollDirective);

    // scrollSpyDirective.$inject = ['$timeout'];

    /* @ngInject */
    function scrollDirective() {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            var targetId = attrs.href;

            element.on('click', function() {
                element.removeClass('active');
                console.log(element);
                var target;

                if (targetId) {
                    target = $(targetId);
                } else {
                    target = element;
                }

                $('html, body').stop().animate({
                    scrollTop: (target.offset().top - 50)
                }, 1250, 'easeInOutExpo');
                event.preventDefault();
            });
        }
    }
})();

