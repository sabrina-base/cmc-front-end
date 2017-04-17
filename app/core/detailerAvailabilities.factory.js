(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('detailerAvailabilitiesFactory', detailerAvailabilitiesFactory);

    detailerAvailabilitiesFactory.$inject = ['$http', 'apiUrl'];

    /* @ngInject */
    function detailerAvailabilitiesFactory($http, apiUrl) {
        var service = {
            update: update,
            create: create,
            remove: remove
        };

        return service;

        function update(detailerId, serviceId, detailerAvailability) {
            return $http.put(apiUrl + 'detailerAvailabilities/' + detailerId + '/' + serviceId, detailerAvailability);
        }

        function create(detailerAvailability) {
            return $http
                .post(apiUrl + 'detailerAvailabilities/', detailerAvailability)
                .then(function(response) {
                    return response.data;
                });
        }

        function remove(id) {
            return $http
                .delete(apiUrl + 'detailerAvailabilities/' + id)
                .then(function(response) {
                    return response.data;
                });
        }
    }
})();
