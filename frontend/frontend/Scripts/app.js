var app = angular.module('myApp', ['ngRoute']);
app.controller('customersCtrl', function ($scope, $http) {
    $http.get("http://www.w3schools.com/angular/customers.php")
    .success(function (response) { $scope.names = response.records; });
});

app.config(function ($routeProvider) {
    $routeProvider
    .when('/', 
    {
        controller: 'customersCtrl',
        templateUrl: '/partials/main.html'
    })
    .when('/view2',
        {
            controller: 'customersCtrl',
            templateUrl: '/partials/main2.html'
        })
});