var myApp = angular.module('myApp',[]);

myApp.controller('ResultsController', ['$scope', function($scope) 
{
    $scope.msg = 'These are ur results!';
    $scope.text = "name";
}
]);