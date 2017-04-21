(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('customersFactory', customersFactory);

    customersFactory.$inject = ['$http', 'apiUrl'];

    /* @ngInject */
    function customersFactory($http, apiUrl) {
        var service = {
            getAll: getAll,
            getById: getById,
            update: update,
            create: create,
            remove: remove,
            getCurrent: getCurrent
        };

        return service;

        function getCurrent() {
            return $http
                .get(apiUrl + 'customerProfile/')
                .then(function(response) {
                    return response.data;
                });
        }

        function getAll() {
            return $http
                .get(apiUrl + 'customers/')
                .then(function(response) {
                    return response.data;
                });
        }

        function getById(id) {
            return $http
                .get(apiUrl + 'customers/' + id)
                .then(function(response) {
                    return response.data;
                });
        }

        function update(id, customer) {
            return $http.put(apiUrl + 'customers/' + id, customer);
        }

        function create(customer) {
            return $http
                .post(apiUrl + 'customers/', customer)
                .then(function(response) {
                    return response.data;
                });
        }

        function remove(id) {
            return $http
                .delete(apiUrl + 'customers/' + id)
                .then(function(response) {
                    return response.data;
                });
        }

    }
})();
