(function() {
    'use strict';

    angular
        .module('app.landing')
        .controller('LandingController', LandingController);

    LandingController.$inject = ['vehicleTypeFactory', '$stateParams'];

    /* @ngInject */
    function LandingController(vehicleTypeFactory, $stateParams) {
        var vm = this;
        vm.test = "landing test";
        console.log("Controller Landing");

        activate();

        function activate() {
            vehicleTypeFactory
                .getAll()
                .then(function(data) {
                  console.log(data);
                    vm.vehicleTypes = data;
                })
                .catch(function(error) {
                  console.error(error);
                });
        }
    }
})();
