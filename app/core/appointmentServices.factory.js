(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('appointmentServicesFactory', appointmentServicesFactory);

    appointmentServicesFactory.$inject = ['$http', 'apiUrl'];

    /* @ngInject */
    function appointmentServicesFactory($http, apiUrl) {
        var service = {
            update: update,
            create: create,
            remove: remove
        };

        return service;

        function update(appointmentId, serviceId, appointmentService) {
            return $http.put(apiUrl + 'appointmentServices/' + appointmentId + '/' + serviceId, appointmentService);
        }

        function create(appointmentService) {
            return $http
                .post(apiUrl + 'appointmentServices/', appointmentService)
                .then(function(response) {
                    return response.data;
                });
        }

        function remove(id) {
            return $http
                .delete(apiUrl + 'appointmentServices/' + id)
                .then(function(response) {
                    return response.data;
                });
        }
    }
})();
