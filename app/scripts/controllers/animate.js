'use strict'
/**
*  Module
*
* Description
*/

angular.module('testApp')
    .controller('animateCtrl', ['$scope', function($scope){
          $scope.animations = ['toggle',
                        'spin-toggle',
                        'scale-fade',
                        'scale-fade-in',
                        'bouncy-scale-in',
                        'flip-in',
                        'slide-left',
                        'slide-right',
                        'slide-top',
                        'slide-down',
                        'bouncy-slide-left',
                        'bouncy-slide-right',
                        'bouncy-slide-top',
                        'bouncy-slide-down',
                        'rotate-in'];

          $scope.friends = [
            {name:'John', age:25, gender:'boy'},
            {name:'Jessie', age:30, gender:'girl'},
            {name:'Johanna', age:28, gender:'girl'},
            {name:'Joy', age:15, gender:'girl'},
            {name:'Mary', age:28, gender:'girl'},
            {name:'Peter', age:95, gender:'boy'},
            {name:'Sebastian', age:50, gender:'boy'},
            {name:'Erika', age:27, gender:'girl'},
            {name:'Patrick', age:40, gender:'boy'},
            {name:'Samantha', age:60, gender:'girl'}
          ];
        }]);
