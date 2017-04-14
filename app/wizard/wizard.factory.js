(function() {
    'use strict';

    angular
        .module('app.wizard')
        .factory('wizardFactory', wizardFactory);

    wizardFactory.$inject = [];

    /* @ngInject */
    function wizardFactory() {
        var service = {};
        return service;
    }
})();
