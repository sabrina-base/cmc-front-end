(function() {
    'use strict';

    angular
        .module('app', [
            'ui.router',
            'ui.select',
            'app.landing',
            'xmd.directives.xmdWizard'
        ])
        .value('apiUrl', 'http://washmycarapi-dev.azurewebsites.net/api/')
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/landing');
            // Configure each one of our states
            $stateProvider
                .state('landing', {
                    url: '/landing',
                    controller: 'LandingController as landingCtrl',
                    templateUrl: 'app/cmc-marketing/landing/landing.html'
                });
            // .state('registration', {
            //     url: '/registration',
            //     controller: '#',
            //     templateUrl: 'app/account/registration.html'
            // })
            // .state('search.results', {
            //     url: '/results/:id',
            //     controller: '#',
            //     templateUrl: 'app/cmc-marketing/results.html'
            // })
            // .state('details', {
            //     url: '/detailers/:id',
            //     controller: '#',
            //     templateUrl: 'app/cmc-marketing/details.html'
            // })
            // .state('customer.profile', {
            //     url: '/customers/:id',
            //     controller: '#',
            //     templateUrl: 'app/cmc-marketing/profile.html'
            // })
            // .state('login', {
            //     url: '/login',
            //     controller: '#',
            //     templateUrl: 'app/account/login.html'
            // })
            // .state('appointments', {
            //     url: '/appointments',
            //     controller: '#',
            //     templateUrl: 'app/cmc-detailer/appointments.html'
            // })
            // .state('detailer.profile', {
            //     url: '/detailers/:id',
            //     controller: '#',
            //     templateUrl: 'app/cmc-detailer/profile.html'
            // });
        });
})();
