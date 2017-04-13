(function() {
    'use strict';

    angular
        .module('app.landing')
        .factory('landingFactory', landingFactory);

    landingFactory.$inject = [];

    /* @ngInject */
    function landingFactory() {
        var service = {};
        return service;
    }
})();
