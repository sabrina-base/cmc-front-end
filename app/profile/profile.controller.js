(function() {
    'use strict';

    angular
        .module('app.core')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = [''];

    /* @ngInject */
    function ProfileController() {
        var vm = this;

        activate();

        function activate() {

        }
    }
})();