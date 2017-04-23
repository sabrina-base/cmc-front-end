(function() {
    'use strict';

    angular
        .module('app.core')
        .controller('LandingController', LandingController);

    LandingController.$inject = ['servicesFactory', 'vehicleTypeFactory', '$stateParams'];

    /* @ngInject */
    function LandingController(servicesFactory, vehicleTypeFactory, $stateParams) {
        var vm = this;
        vm.showFirstStep = true;
        vm.showSecondStep = false;
        vm.showThirdStep = false;
        vm.showFourthStep = false;
        vm.address;
        vm.serviceType= null;


        vm.estimate = function(){
          vm.price = (vm.selectedService * vm.selectedVehicle).toFixed(2);
        }

        activate();

        function activate() {
            vehicleTypeFactory
                .getAll()
                .then(function(data) {
                    vm.vehicleTypes = data.map(addVehicleTypePicture);
                })
                .catch(function(error) {
                    console.error(error);
                });

            servicesFactory
                .getAll()
                .then(function(data) {
                    vm.services = data.map(addServicePicture);
                })
                .catch(function(error) {
                    console.error(error);
                });
        }

        function addVehicleTypePicture(item) {
          item.picture = "../../Images/VehicleType/" + item.vehicleSize + ".png";
          return item;
        }
        function addServicePicture(item) {
          item.picture = "../../Images/Service/" + item.serviceType + ".PNG";
          return item;
        }

        vm.goToFirstStep = function goToFirstStep() {
          vm.showFirstStep = true;
          vm.showSecondStep = false;
          vm.showThirdStep = false;
          vm.showFourthStep = false;
        }
        vm.goToSecondStep = function goToSecondStep() {
          vm.showFirstStep = false;
          vm.showSecondStep = true;
          vm.showThirdStep = false;
          vm.showFourthStep = false;
        }
        vm.goToThirdStep = function goToThirdStep() {
          vm.showFirstStep = false;
          vm.showSecondStep = false;
          vm.showThirdStep = true;
          vm.showFourthStep = false;
        }
        vm.goToFourthStep = function goToFourthStep() {
          vm.showFirstStep = false;
          vm.showSecondStep = false;
          vm.showThirdStep = false;
          vm.showFourthStep = true;
        }

    }
})();
