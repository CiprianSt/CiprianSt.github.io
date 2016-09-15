(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('HomeController', HomeController);

    // HomeController.$inject = ['dependency'];

    /* @ngInject */
    function HomeController() {
        var vm = this;
        vm.title = 'HomeController';
        vm.message = "Hello World!";

        vm.items = [
            {

            },
        ];

        activate();

        ////////////////

        function activate() {
            //
        }
    }

})();

