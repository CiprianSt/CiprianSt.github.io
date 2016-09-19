(function () {
    'use strict';

    angular
        .module('myApp', [
            'ngRoute',
            'duScroll'
        ])
        .value('duScrollOffset', 50)

})();