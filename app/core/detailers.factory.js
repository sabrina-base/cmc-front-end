(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('detailersFactory', detailersFactory);

    detailersFactory.$inject = ['$http', 'apiUrl'];

    /* @ngInject */
    function detailersFactory($http, apiUrl) {
        var service = {
            getAll: getAll,
            getById: getById,
            update: update,
            create: create,
            remove: remove
        };

        return service;

        function getAll() {
            return $http
                .get(apiUrl + 'detailers/')
                .then(function(response) {
                    return response.data;
                });
        }

        function getById(id) {
            return $http
                .get(apiUrl + 'detailers/' + id)
                .then(function(response) {
                    return response.data;
                });
        }

        function update(id, detailer) {
            return $http.put(apiUrl + 'detailers/' + id, detailer);
        }

        function create(detailer) {
            return $http
                .post(apiUrl + 'detailers/', detailer)
                .then(function(response) {
                    return response.data;
                });
        }

        function remove(id) {
            return $http
                .delete(apiUrl + 'detailers/' + id)
                .then(function(response) {
                    return response.data;
                });
        }
    }
})();
