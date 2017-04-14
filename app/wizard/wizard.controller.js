(function() {
    'use strict';

    angular
        .module('app.landing')
        .controller('WizardController', WizardController);

    WizardController.$inject = ['wizardFactory'];

    /* @ngInject */
    function WizardController(wizardFactory) {
        var vm = this;

        activate();

        function activate() {

        }
    }
})();
