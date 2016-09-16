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
                title: 'Demo title',
                subTitle: 'Demo subtitle',
                captionImage: 'dreams-preview.png',
                description: 'Lorem ipsum doloret asndfhadbsd a sdbahsda',
                image: 'dreams.png'
            },
            {
                title: 'Demo title',
                subTitle: 'Demo subtitle',
                captionImage: 'dreams-preview.png',
                description: 'Lorem ipsum doloret asndfhadbsd a sdbahsda',
                image: 'dreams.png'
            },
            {
                title: 'Demo title',
                subTitle: 'Demo subtitle',
                captionImage: 'dreams-preview.png',
                description: 'Lorem ipsum doloret asndfhadbsd a sdbahsda',
                image: 'dreams.png'
            },
        ];

        activate();

        ////////////////

        function activate() {
            //
        }
    }

})();

