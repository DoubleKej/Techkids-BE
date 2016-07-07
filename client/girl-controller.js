myAngular.controller("LXController", ["$scope", "$state", "$stateParams", function($scope, $state, $stateParams){
  $scope.girl = {};
  console.log($stateParams.id);

  $scope.add = function() {
    $state.go("home", { girl: $scope.girl });
  }

  $scope.cancel = function() {
    $state.go("home");
  }

  $scope.update = function(id) {
    $scope.girl.id = id;
    $state.go("home", {
      girl: $scope.girl });
  }
}]);
