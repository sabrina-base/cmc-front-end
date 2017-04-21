(function() {
    'use strict';

    angular
        .module('app.core')
        .controller('CustomersController', CustomersController);

    CustomersController.$inject = ['customersFactory','$stateParams'];

    /* @ngInject */
    function CustomersController(customersFactory, $stateParams) {
        var vm = this;

        activate();


        function activate() {
          customersFactory.getCurrent()
          .then(function(customer){
            vm.customer = customer;
          });
        }

      vm.save = function(){
          customersFactory
          .update(vm.customer.customerId, vm.customer)
          .then(function(){
            alert('Updated!')
          })
          .catch(function(error){
          });
        }

    }
})();
