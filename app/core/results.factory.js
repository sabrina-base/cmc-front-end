(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('resultsFactory', resultsFactory);

    resultsFactory.$inject = ['$http', 'apiUrl'];

    /* @ngInject */
    function resultsFactory($http, apiUrl) {
        var service = {
            getAvailableDetailers: getAvailableDetailers
        };

        function getAvailableDetailers() {
          return $http
            .get(apiUrl + 'results/')
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
