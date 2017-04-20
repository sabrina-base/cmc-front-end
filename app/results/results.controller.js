(function() {
  'use strict';

  angular
    .module('app.core')
    .controller('ResultsController', ResultsController);

  ResultsController.$inject = ['resultsFactory', '$stateParams', 'NgMap', '$scope', '$timeout'];

  /* @ngInject */
  function ResultsController(resultsFactory, $stateParams, NgMap, $scope, $timeout) {
    var vm = this;

    vm.priceDivVisibility = false;
    vm.ratingDivVisibility = false;
    vm.availabilityDivVisibility = false;
    vm.lat = 32.17;
    vm.long = 55.192;
    vm.allDetailers;

    activate();

    function activate() {
      loadMap();
      // getDetailers();
      vm.allDetailers = [{
          name: 'Arlin',
          rating: 4,
          reviews: 13,
          multiplier: 0.13
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
        },
        {
          name: 'Mike',
          rating: 2.2,
          reviews: 7,
          multiplier: 0.05
        },
        {
          name: 'Alex',
          rating: 3.8,
          reviews: 10,
          multiplier: 0.10
        },
        {
          name: 'Rachel',
          rating: 1.9,
          reviews: 5,
          multiplier: 0.05
        }
      ];
      vm.detailerOptions = vm.allDetailers;
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

    function getDetailers(){
      resultsFactory
      .getAvailableDetailers()
      .then(function(data) {
        vm.detailers = data;
      })
      .catch(function(error) {
        console.error(error);
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

    vm.filterByPrice = function filterByPrice(price) {
      if (price === "any")
      {
        vm.detailerOptions = vm.allDetailers.reverse();
      }
      else if (price === "cheap")
      {

      }
      else if (price === "medium")
      {

      }
      else if (price === "expensive")
      {

      }
    }
    vm.filterByRating = function filterByRating(rating) {
      vm.detailerOptions = [];
      if (rating === 0){
        vm.detailerOptions = vm.allDetailers;
      }
      else if (rating === 2){
        for (var i = 0; i < vm.allDetailers.length; i++) {
          if (vm.allDetailers[i].rating >= 0 && vm.allDetailers[i].rating < 3){
            vm.detailerOptions.push(vm.allDetailers[i]);
          }
        }
      }
      else if (rating === 3){
        for (var i = 0; i < vm.allDetailers.length; i++) {
          if (vm.allDetailers[i].rating >= 3 && vm.allDetailers[i].rating < 4){
            vm.detailerOptions.push(vm.allDetailers[i]);
          }
        }
      }
      else if (rating === 4){
        for (var i = 0; i < vm.allDetailers.length; i++) {
          if (vm.allDetailers[i].rating >= 4 && vm.allDetailers[i].rating <= 5){
            vm.detailerOptions.push(vm.allDetailers[i]);
          }
        }
      }
    }
  }
})();
