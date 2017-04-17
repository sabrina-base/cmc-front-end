(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('paymentsFactory', paymentsFactory);

    paymentsFactory.$inject = ['$http', 'apiUrl'];

    /* @ngInject */
    function paymentsFactory($http, apiUrl) {
        var service = {
            getAll: getAll,
            getById: getById,
            update: update,
            create: create
        };

        return service;

        function getAll() {
            return $http
                .get(apiUrl + 'payments/')
                .then(function(response) {
                    return response.data;
                });
        }

        function getById(id) {
            return $http
                .get(apiUrl + 'payments/' + id)
                .then(function(response) {
                    return response.data;
                });
        }

        function update(id, payment) {
            return $http.put(apiUrl + 'payments/' + id, payment);
        }

        function create(payment) {
            return $http
                .post(apiUrl + 'payments/', payment)
                .then(function(response) {
                    return response.data;
                });
        }
    }
})();
