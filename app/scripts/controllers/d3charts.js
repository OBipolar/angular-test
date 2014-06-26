'use strict';

/**
*  Module
*
* Description
*/
angular.module('testApp')
    .controller('d3Ctrl', function($scope, $http) {

        $http.get('resources/lineChartData.json').success(function(data) {
          $scope.lineChartData = data ;
        });

        $http.get('resources/stackChartData.json').success(function(data) {
          $scope.stackChartData = data ;
        });

        $http.get('resources/scatterChartData.json').success(function(data) {
          $scope.scatterChartData = data ;
        });
      });
