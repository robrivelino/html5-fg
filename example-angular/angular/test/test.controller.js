'use strict';

angular
  .module('example')
  .controller('TestController', TestController);

TestController.$inject = ['$scope'];

function TestController($scope) {
  $scope.name = 'Darlan';
  $scope.sayName = function() {
    alert($scope.name);
  }

  $scope.courses = [
    'HTML5',
    'CSS3',
    'Javascript'
  ];

  $scope.addCourse = function() {
    if ($scope.course) {
      $scope.courses.push($scope.course);
      $scope.course = undefined;
    }
  }
}
