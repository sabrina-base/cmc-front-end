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
                .then(function() {
                    $state.go('customerProfile');
                  })
                .catch(function() {
                    alert('Incorrect username or password');
                });
        }
    }
})();
