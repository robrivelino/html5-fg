angular
  .module('test', []);


angular
  .module('test')
  .controller('TestController', TestController);

TestController.$inject = ['$scope'];

function TestController($scope) {
  $scope.addNewUser = function() {
    var newUser = $scope.newUser;
    $scope.newUser = '';
    if (newUser) {
      $scope.users.push(newUser);
    }
  };

  $scope.users = [];
}
