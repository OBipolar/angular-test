'use strict'

/**
*  Module
*
* Description

*/
angular.module('testApp')
    .controller('questionCtrl', function($scope, $http) {

            $http.get('data.json').success(function(data) {
                $scope.db = data;
                $scope.db_original = data;
             });

            $scope.next = function (data) {
                $scope.db = data.next;
                $scope.currentContent = data.content;
                $scope.answer = data.answer;
            }

            $scope.reset = function () {
                $scope.db =  $scope.db_original;
            }

            $scope.prev = function () {

            }

    })
