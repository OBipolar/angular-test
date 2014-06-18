'use strict'

/**
* testApp Module
*
* Description
*/
angular.module('testApp')
    .controller('preview2Ctrl',function($scope) {
        $scope.pdfName = 'testPDF';
        $scope.pdfUrl= 'test.pdf';
        $scope.scroll = 0;
    })
