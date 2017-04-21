(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('resultsFactory', resultsFactory);

  resultsFactory.$inject = ['$http', 'apiUrl'];

  /* @ngInject */
  function resultsFactory($http, apiUrl) {
    var service = {
      test: test,
      getAvailableDetailers: getAvailableDetailers
    };

    function test() {
      var id = 1;
      return $http
        .get(apiUrl + 'results/test/')
        .then(function(response) {
          return response.data;
        })
        .catch(function(error) {
          console.error(error);
        });
    }

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
