(function () {
    'use strict';

    angular
        .module('myApp')
        .config(config);

    config.$inject = ['$routeProvider', '$locationProvider'];

    /* @ngInject */
    function config ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/',  {
                templateUrl: 'app/home/homeView.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            });

        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    }

})();

