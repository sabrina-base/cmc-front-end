(function() {
    'use strict';

    angular
        .module('app.core')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['authFactory', '$stateParams', '$state'];

    /* @ngInject */
    function RegisterController(authFactory, $stateParams, $state) {
        var vm = this;

        vm.title = 'RegisterController';

        vm.registration = {
            firstName: '',
            lastName: '',
            cellphone: '',
            address: '',
            username: '',
            emailAddress: '',
            password: '',
            confirmPassowrd: ''
        };

        vm.registerDets = registerDets;
        vm.registerCust = registerCust;

        function registerDets() {
          vm.registration.address = vm.registration.address.formatted_address;
            authFactory
                .registerDetailer(vm.registration)
                .then(function(response) {
                    alert('Successful registration! Now login');
                    authFactory
                        .login(vm.registration.username, vm.registration.password)
                        .then(function() {
                            $state.go('login');
                        });
                })
                .catch(function(error) {
                    alert('Bad registration');
                });

        }
        function registerCust() {
          vm.registration.address = vm.registration.address.formatted_address;
          authFactory
              .registerCustomer(vm.registration)
              .then(function(response) {
                  alert('Successful registration! Now login');
                  authFactory
                      .login(vm.registration.username, vm.registration.password)
                      .then(function() {
                          $state.go('login');
                      });
              })
              .catch(function(error) {
                  alert('Bad registration');
              });
        }
    }
})();
