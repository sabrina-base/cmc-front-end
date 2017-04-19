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
            username: '',
            emailAddress: '',
            password: '',
            confirmPassowrd: ''
        };

        vm.register = register;

        function register() {
            authFactory
                .register(vm.registration)
                .then(function(response) {
                    alert('Successful registration! Now login');
                    authFactory
                        .login(vm.registration.emailAddress, vm.registration.password)
                        .then(function() {
                            $state.go('profile');
                        });
                })
                .catch(function(error) {
                    alert('Bad registration');
                });

        }
    }
})();
