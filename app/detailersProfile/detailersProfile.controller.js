(function() {
  'use strict';

  angular
    .module('app.core')
    .controller('DetailersProfileController', DetailersProfileController);

  DetailersProfileController.$inject = ['$stateParams', 'detailersFactory', 'servicesFactory'];

  /* @ngInject */
  function DetailersProfileController($stateParams, detailersFactory, servicesFactory) {
    var vm = this;
    vm.save = save;
    activate();

    function activate() {

      detailersFactory
        .getById(4)
        .then(function(response) {
          vm.detailer = response;

          vm.servicesOffered = vm.detailer.services.map(s => s.serviceType);

          console.log(vm.detailer.services);
        });
      servicesFactory
        .getAll()
        .then(function(response) {
          vm.services = response;
        });
    }

    function save() {
      detailersFactory
        .update(vm.detailer.detailerId, vm.detailer)
        .then(function() {
          alert('You saved dey info!!')
        })
        .catch(function(error) {
          console.error(error)
        });
    }

  }
})();
