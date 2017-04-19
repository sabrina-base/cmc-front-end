(function() {
    'use strict';

    angular
        .module('app.core')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['authFactory', '$state', '$stateParams'];

    /* @ngInject */
    function LoginController(authFactory, $state, $stateParams) {
        var vm = this;
        vm.title = 'LoginController';

        vm.login = login;

        function login() {
            authFactory
                .login(vm.username, vm.password)
                .then(function(data) {
                    if (data.roles.includes('detailer')) {
                        $state.go('profileDetailer');
                    }
                    if (data.roles.includes('customer')) {
                        $state.go('profileCustomer');
                    }
                })
                .catch(function() {
                    alert('Incorrect username or password');
                });
        }
    }
})();
