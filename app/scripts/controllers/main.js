'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('testApp')
    .controller('MainCtrl', function ($scope) {
        $scope.treedata = [
            {"label": "User", "id": "role1", "children": [
                {"label": "User Gruop 1", "id": "role11", "children": [
                    {"label": "User1_1", "id": "role111", "children": []},
                    {"label": "User1_2", "id": "role112", "children": []}
                ]},
                {"label": "User Group 2", "id": "role12", "children": [
                    {"label": "User2_1", "id": "role121", "children": []},
                    {"label": "User2_2", "id": "role122", "children": []},
                    {"label": "User2_3", "id": "role123", "children": []}
                ]},
                {"label": "User Group 3", "id": "role13", "children": [
                    {"label": "User3_1", "id": "role131", "children": []}
                ]}
            ]},
            {"label": "Admin", "id": "role2", "children": [
                {"label": "Root1", "id": "role21", "children": []},
                {"label": "Root2", "id": "role22", "children": []}
            ]},
            {"label": "Guest", "id": "role3", "children": []}
        ];

    $scope.currentNode = {};

  $scope.delete = function(data) {
        data.nodes = [];
    };
    $scope.add = function(data) {
        var post = data.nodes.length + 1;
        var newQuestion = data.question + '-' + post;
        data.question = $scope.currentNode.question;
        data.tip = $scope.currentNode.tip;
        data.nodes.push({question: '', tip: '', nodes: []});
    };
    $scope.tree = [{question: '', tip: '', nodes: []}];

    });
