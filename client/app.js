var myAngular = angular.module("myAngular", ["ui.router"]);

myAngular.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/home");

  $stateProvider.state('home', {
    url: "/home",
    templateUrl: "templates/home.html",
    controller: "HomeController",
    params: {girl: null}
  });

  $stateProvider.state('add-girl', {
    url: "/add-girl",
    templateUrl: "templates/add-girl.html",
    controller: "LXController"
  });

  $stateProvider.state('about-us', {
    url: "/about-us",
    templateUrl: "templates/about-us.html"
  });

  $stateProvider.state('update-girl',{
    url: "/update-girl",
    templateUrl: "templates/update-girl.html",
    controller: "LXController"
  });
});

myAngular.directive("lx", [function(){
  return {
    restrict: "A",
    templateUrl: "templates/lx.html",
  }
}])
