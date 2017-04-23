(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('appointmentsFactory', appointmentsFactory);

  appointmentsFactory.$inject = ['$http', 'apiUrl'];

  /* @ngInject */
  function appointmentsFactory($http, apiUrl) {
    var service = {
      getAll: getAll,
      getById: getById,
      update: update,
      create: create,
      remove: remove,
      schedule: schedule
    };

    return service;

    function schedule() {
      return $http
        .get(apiUrl + 'detailer/schedule')
        .then(function(response) {
          return response.data;
        });
    }

    function getAll() {
      return $http
        .get(apiUrl + 'appointments/')
        .then(function(response) {
          return response.data;
        });
    }

    function getById(id) {
      return $http
        .get(apiUrl + 'appointments/' + id)
        .then(function(response) {
          return response.data;
        });
    }

    function update(id, appointment) {
      return $http.put(apiUrl + 'appointments/' + id, appointment);
    }

    function create(appointment) {
      return $http
        .post(apiUrl + 'appointments/', appointment)
        .then(function(response) {
          return response.data;
        });
    }

    function remove(id) {
      return $http
        .delete(apiUrl + 'appointments/' + id)
        .then(function(response) {
          return response.data;
        });
    }
  }
})();
