'use strict'

/**
* testApp Module
*
* Description
*/
angular.module('testApp')
    .controller('loadCtrl', function($rootScope, $http, $timeout, promiseTracker) {
        $rootScope.loadingTracker = promiseTracker([{activationDelay: 500}, {minDuration: 750}]);
    });
