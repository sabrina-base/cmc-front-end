(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('servicesFactory', servicesFactory);

    servicesFactory.$inject = ['$http', 'apiUrl'];

    /* @ngInject */
    function servicesFactory($http, apiUrl) {
        var service = {
            getAll: getAll,
            getById: getById
        };

        function getAll() {
            return $http
                .get(apiUrl + 'services')
                .then(function(response) {
                    console.log(response);
                    return response.data;
                })
                .catch(function(error) {
                    console.error(error);
                });
        }

        function getById(id) {
            return $http
                .get(apiUrl + 'services/' + id)
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
