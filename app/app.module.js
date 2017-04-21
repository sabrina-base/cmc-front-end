(function() {
    'use strict';

    angular
        .module('app', [
            'ui.router',
            'ui.select2',
            'ui.calendar',
            'app.landing',
            'app.core',
            'ngMaterial',
            'mgo-angular-wizard',
            'angularify.semantic',
            'oitozero.ngSweetAlert',
            'LocalStorageModule'
        ])
        .value('apiUrl', 'http://localhost:51049/api/')
        .config(function($stateProvider, $urlRouterProvider, $httpProvider) {
            $httpProvider.interceptors.push('authInterceptorService')
            $urlRouterProvider.otherwise('/landing');

            $stateProvider
                .state('landing', {
                    url: '/landing',
                    controller: 'LandingController as landingCtrl',
                    templateUrl: 'app/landing/landing.html'
                })
                .state('appointments', {
                    url: '/appointments',
                    controller: 'AppointmentsController as appointmentsCtrl',
                    templateUrl: 'app/appointments/appointments.html'
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
                });

            $stateProvider
                .state('results', {
                    url: '/results',
                    controller: 'ResultsController as resultsCtrl',
                    templateUrl: 'app/results/results.html'
                });
        });
})();
