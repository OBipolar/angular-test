'use strict'

/**
*  Module
*
* Description
*/
angular.module('testApp')
    .controller('ngGridCtrl', function($scope) {
        $scope.myData = [
            {name: "Moroni", age: 50},
            {name: "Tiancum", age: 43},
            {name: "Jacob", age: 27},
            {name: "Nephi", age: 29},
            {name: "Enos", age: 34},
            {name: "Steven", age: 19},
            {name: "Hova", age: 42},
            {name: "LeBron", age: 29},
            {name: "Dwayne", age: 31},
            {name: "Holo", age: 15},
            {name: "Booya", age: 20}
        ];

        $scope.gridOptions = {
            data: 'myData',
            columnDefs: [
                {field:'name', displayName:'Name'},
                {field:'age', displayName:'Age'}
            ]
        };
      });
