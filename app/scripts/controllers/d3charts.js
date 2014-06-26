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

        $http.get('resources/pieChartData.json').success(function(data) {
          $scope.pieChartData = data ;
        });

        $scope.xFunction = function() {
          return function(d) {
        return d.key;
        };
        }

        $scope.yFunction = function() {
          return function(d) {
        return d.y;
        };
        }

      console.log($scope.pieChartData);

        $scope.xAxisTickFormatFunction = function() {
          return function(d) {
            return d3.time.format('%x')(new Date(d));
          };
        };
      });
