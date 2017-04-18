(function() {
  'use strict';

  angular
    .module('app.core')
    .controller('ResultsController', ResultsController);

  ResultsController.$inject = ['$stateParams', 'NgMap', '$scope', '$timeout'];

  /* @ngInject */
  function ResultsController($stateParams, NgMap, $scope, $timeout) {
    var vm = this;
    vm.resultsTest = "It is working!";
    vm.lat = 32.17;
    vm.long = 55.192;

    activate();

    function activate() {
      loadMap();
      // vm.options = {
      //   {name: 'Arlin', rating: 4},
      //   {name: 'Sabrina', rating: 4.5},
      //   {name: 'Erin', rating: 4.3},
      //   {name: 'Eric', rating: 4.2}
      // };
    }

    function loadMap() {
      NgMap.getMap().then(function(map) {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            vm.pos = pos;
            vm.lat = pos.lat;
            vm.long = pos.lng;

            map.setCenter(pos);

            $scope.$apply();
          });
        }
      });
    }
  }
})();
