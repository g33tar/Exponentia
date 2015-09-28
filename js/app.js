var app = angular.module("pracApi", ['ngRoute', 'angular-jqcloud', 'firebase']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'HttpController'
    })
    .otherwise ({
      templateUrl: 'partials/home.html',
      controller: 'HttpController'
    })
});
