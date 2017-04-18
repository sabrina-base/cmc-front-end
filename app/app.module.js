(function() {
  'use strict';

  angular
    .module('app', [
      'ui.router',
      'ui.select2',
      'app.landing',
      'app.core',
      'mgo-angular-wizard'
    ])
    .value('apiUrl', 'http://washmycarapi.azurewebsites.net/api/')
    // .value('apiUrl', 'http://washmycarapi-dev.azurewebsites.net/api/')
    .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/landing');
      // Configure each one of our states
      $stateProvider
        .state('landing', {
          url: '/landing',
          controller: 'LandingController as landingCtrl',
          templateUrl: 'app/landing/landing.html'
        });

      $stateProvider
        .state('results', {
          url: '/results',
          controller: 'ResultsController as resultsCtrl',
          templateUrl: 'app/results/results.html'
        });
    });
})();
