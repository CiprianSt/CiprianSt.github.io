(function () {
    'use strict';

    angular
        .module('myApp')
        .config(config)

    config.$inject = ['$routeProvider'];

    /* @ngInject */
    function config ($routeProvider) {
        $routeProvider
            .when('/',  {
                templateUrl: 'app/home/homeView.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            });
    }

})();

