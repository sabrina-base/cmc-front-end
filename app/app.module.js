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
        .config(function($stateProvider, $urlRouterProvider, $httpProvider) {
            $httpProvider.interceptors.push('authInterceptorService')
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
                .state('profile', {
                    url: '/profile',
                    controller: 'ProfileController as profileCtrl',
                    templateUrl: 'app/profile/profile.html'
                })
        });
})();
