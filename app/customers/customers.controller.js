(function() {
    'use strict';

    angular
        .module('app.core')
        .controller('CustomersController', CustomersController);

    CustomersController.$inject = ['customersFactory','$stateParams'];

    /* @ngInject */
    function CustomersController(customersFactory, $stateParams) {
        var vm = this;
        var customerId = $stateParams.id;
        activate();
        

        function activate() {
          customersFactory.getById(customerId)
          .then(function(customer){
            vm.customer = customer;
          });
        }

      vm.save = function(){
        console.log(vm.customer);
          customersFactory
          .update(vm.customer.customerId, vm.customer)
          .then(function(){
            alert('Updated!')
          })
          .catch(function(error){
            console.error(error)
          });
        }

    }
})();
