(function() {
    'use strict';

    angular
        .module('app', [
            'ui.router',
            'ui.select2',
            'app.core',
            'mgo-angular-wizard',
            'LocalStorageModule'
        ])
        .value('apiUrl', 'http://washmycarapi-dev.azurewebsites.net/api/')
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/landing');
            // Configure each one of our states
            $stateProvider
                .state('landing', {
                    url: '/landing',
                    controller: 'LandingController as landingCtrl',
                    templateUrl: 'app/landing/landing.html'
                })
             .state('login', {
                 url: '/login',
                 controller: 'LoginController as loginCtrl',
                 templateUrl: 'app/login/login.html'
             })
            .state('detailer.profile', {
                url: '/detailers/:id',
                controller: 'DetailersProfileController as detailersProfileCtrl',
                templateUrl: 'app/profile/detailersprofiles.html'
            })
            .state('customer.profile', {
                url: '/customers/:id',
                controller: 'CustomersController as customersCtrl',
                templateUrl: 'app/profile/customersprofile.html'
            })
        });
})();
