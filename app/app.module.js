(function() {
    'use strict';

    angular
        .module('app', [
            'ui.router',
            'ui.select2',
            'app.core',
            'LocalStorageModule'
        ])
        .value('apiUrl', 'http://localhost:51049/api/')
        .config(function($stateProvider, $urlRouterProvider, $httpProvider) {
            $httpProvider.interceptors.push('authInterceptorService')
            $urlRouterProvider.otherwise('/landing');
            // Configure each one of our states
            $stateProvider
                .state('landing', {
                    url: '/landing',
                    controller: 'LandingController as landingCtrl',
                    templateUrl: 'app/landing/landing.html'
                });
            $stateProvider
                .state('detailersProfile', {
                    url: '/detailersProfile',
                    controller: 'DetailersProfileController as detailersProfileCtrl',
                    templateUrl: 'app/detailersProfile/detailersProfile.html'
                })
                .state('login', {
                    url: '/login',
                    controller: 'LoginController as loginCtrl',
                    templateUrl: 'app/login/login.html'
                })
                .state('registerDetailers', {
                  url: '/users/registerDetailer',
                  controller: 'RegisterController as registerCtrl',
                  templateUrl: 'app/register/registerDetailer.html'
                })
                .state('registerCustomers', {
                  url: '/users/registerCustomer',
                  controller: 'RegisterController as registerCtrl',
                  templateUrl: 'app/register/registerCustomer.html'
                })
                .state('customerProfile', {
                  url: '/customerProfile',
                  controller: 'CustomersController as customersCtrl',
                  templateUrl: 'app/profile/profileCustomer.html'
                })
        });
})();
