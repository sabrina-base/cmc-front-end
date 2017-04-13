(function() {
    'use strict';

    angular
        .module('app.landing')
        .controller('LandingController', LandingController);

    LandingController.$inject = ['landingFactory'];

    /* @ngInject */
    function LandingController(landingFactory) {
        var vm = this;

        activate();

        function activate() {

        }
    }
})();
