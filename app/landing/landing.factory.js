(function() {
    'use strict';

    angular
        .module('app.landing')
        .factory('landingFactory', landingFactory);

    landingFactory.$inject = ['$http', 'apiUrl'];

    /* @ngInject */
    function landingFactory($http, apiUrl) {
        var service = {
          getAllVehicleTypes: getAllVehicleTypes,
          getAllServices: getAllServices
        };
        return service;
    }
})();
