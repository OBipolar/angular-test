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
    'ngGrid',
    'ngPDFViewer',
    'pdf'
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
      .when('/preview1', {
        templateUrl: 'views/preview.html',
        controller: 'previewCtrl'
      })
      .when('/preview2', {
        templateUrl: 'views/preview2.html',
        controller: 'authCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
