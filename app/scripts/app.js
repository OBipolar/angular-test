'use strict';

/**
 * @ngdoc overview
 * @name testApp
 * @description
 * # testApp
 *
 * Main module of the application.
 */
angular
  .module('testApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularTreeview',
    'ngGrid'
    ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/ng-grid', {
        templateUrl: 'views/ng-grid.html',
        controller: 'ngGridCtrl'
      })
      .when('/questionaire', {
        templateUrl: 'views/questionaire.html',
        controller: 'questionCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
