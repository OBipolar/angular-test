'use strict'

/**
* testApp Module
*
* Description
*/
angular.module('testApp')
    .controller('loadCtrl', function($scope, $http, $timeout, promiseTracker) {
        $scope.loadingTracker = promiseTracker();
    });
