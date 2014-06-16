'use strict'

/**
*  Module
*
* Description

*/
angular.module('testApp')
    .controller('questionCtrl', function($scope, $http) {
            $scope.NOW = {};
            $http.get('data.json').success(function(data) {
                $scope.db = data;
                $scope.db_original = data;
             });

            $scope.next = function (data) {
                $scope.db = eval("(" + data + ")").next;
                $scope.NOW.currentContent = eval("(" + data + ")").content;
                $scope.answer = eval("(" + data + ")").answer;
            }

            $scope.reset = function () {
                $scope.db =  $scope.db_original;
            }

            $scope.prev = function () {

            }

    })
