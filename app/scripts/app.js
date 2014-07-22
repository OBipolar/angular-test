'use strict';

/**
 * @ngdoc overview
 * @name testApp
 * @description
 * # testApp
 *
 * Main module of the application.
 */
var app = angular.module('testApp', [
              'ngAnimate',
              'ngCookies',
              'ngResource',
              'ngRoute',
              'ngSanitize',
              'ngTouch',
              'angularTreeview',
              'ngGrid',
              'ngPDFViewer',
              'pdf',
              'testApp.directives',
              'nvd3ChartDirectives'
            ]);

app.config(function ($routeProvider) {
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
        controller: ''
      })
      .when('/ngAnimate', {
        templateUrl: 'views/ngAnimate.html',
        controller: 'animateCtrl'
      })
      .when('/d3charts', {
        templateUrl: 'views/d3charts.html',
        controller: 'd3Ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

// app.run(['$rootScope', '$location', function($rootScope, $location){
//     $rootScope.$on('$locationChangeStart', function(locationScope, toUrl, fromUrl) {
//       console.log('locationChangeStart');
//       console.log('from: ' + fromUrl + ', to: ' + toUrl);
//     });

//     $rootScope.$on('$locationChangeSuccess', function(locationScope, toUrl, fromUrl) {
//       console.log('locationChangeSuccess');
//     });

//     $rootScope.$on('$routeChangeStart', function(rootScope, toRoute, fromRoute) {
//       console.log('routeChangeStart');
//       console.log('from: ' + fromRoute + ', to: ' + toRoute);
//     });

//     $rootScope.$on('$routeChangeSuccess', function(rootScope, toRoute, fromRoute) {
//       console.log('routeChangeSuccess');
//     });

//     $rootScope.$on('$viewContentLoaded', function() {
//       console.log('viewContentLoaded');
//     });
//   }]);
