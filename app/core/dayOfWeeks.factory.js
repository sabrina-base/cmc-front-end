(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('dayOfWeeksFactory', dayOfWeeksFactory);

    dayOfWeeksFactory.$inject = ['$http', 'apiUrl'];

    /* @ngInject */
    function dayOfWeeksFactory($http, apiUrl) {
        var service = {
            getAll: getAll,
            getById: getById,
        };

        return service;

        function getAll() {
            return $http
                .get(apiUrl + 'dayOfWeeks/')
                .then(function(response) {
                    return response.data;
                });
        }

        function getById(id) {
            return $http
                .get(apiUrl + 'dayOfWeeks/' + id)
                .then(function(response) {
                    return response.data;
                });
        }
    }
})();
