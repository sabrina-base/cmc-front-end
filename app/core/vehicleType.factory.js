(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('vehicleTypeFactory', vehicleTypeFactory);

    vehicleTypeFactory.$inject = ['$http', 'apiUrl'];

    /* @ngInject */
    function vehicleTypeFactory($http, apiUrl) {
        var service = {
            getAll: getAll,
            getById: getById
        };

        function getAll() {
            return $http
                .get(apiUrl + 'vehicleTypes')
                .then(function(response) {
                    return response.data;
                })
                .catch(function(error) {
                    console.error(error);
                });
        }

        function getById(id) {
            return $http
                .get(apiUrl + 'vehicleTypes/' + id)
                .then(function(response) {
                    return response.data;
                })
                .catch(function(error) {
                    console.error(error);
                });
        }

        return service;
    }
})();
