myAngular.controller("HomeController", ["$scope", "$state", "$stateParams",
function($scope, $state, $stateParams){
  $scope.girls = [
    {
      id: 1,
      name: "Dzung",
      age: 21,
      facebook: "Dzung",
      password: "bananhtung"
    }, {
      id: 2,
      name: "Ha",
      age: 22,
      facebook: "Ha San",
      password: "khongphaibananhtung"
    }
  ];

  if ($stateParams.girl) {
    $scope.girls.push($stateParams.girl);
  }

  $scope.delete = function(index) {
    $scope.girls.splice(index, 1);
  }

  $scope.add = function() {
    $state.go("add-girl");
  }
  
  $scope.update = function(id){
    $state.go("update-girl", {id : id});
  }
}]);
