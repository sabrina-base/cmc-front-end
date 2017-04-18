(function() {
  'use strict';

  angular
    .module('app.core')
    .controller('ResultsController', ResultsController);

  ResultsController.$inject = ['$stateParams', 'NgMap', '$scope', '$timeout'];

  /* @ngInject */
  function ResultsController($stateParams, NgMap, $scope, $timeout) {
    var vm = this;

    vm.filterVisibility = "none";
    vm.priceDivVisibility = false;
    vm.ratingDivVisibility = false;
    vm.availabilityDivVisibility = false;
    vm.lat = 32.17;
    vm.long = 55.192;


    activate();

    function activate() {
      loadMap();
      vm.options = [{
          name: 'Arlin',
          rating: 4,
          reviews: 13,
          multiplier: 0.07
        },
        {
          name: 'Sabrina',
          rating: 4.5,
          reviews: 8,
          multiplier: 0.09
        },
        {
          name: 'Erin',
          rating: 4.3,
          reviews: 16,
          multiplier: 0.15
        },
        {
          name: 'Eric',
          rating: 4.2,
          reviews: 11,
          multiplier: 0.11
        }
      ];
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

    vm.showPriceDiv = function showPriceDiv() {
      vm.priceDivVisibility = true;
      vm.ratingDivVisibility = false;
      vm.availabilityDivVisibility = false;
    }

    vm.showRatingDiv = function showRatingDiv() {
      vm.priceDivVisibility = false;
      vm.ratingDivVisibility = true;
      vm.availabilityDivVisibility = false;
    }

    vm.showAvailabilityDiv = function showAvailabilityDiv() {
      vm.priceDivVisibility = false;
      vm.ratingDivVisibility = false;
      vm.availabilityDivVisibility = true;
    }
  }
})();
