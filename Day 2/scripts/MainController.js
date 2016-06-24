/**
 * Created by user on 6/24/2016.
 */
hrApp.controller('MainController',['name']);
angular.module('hrApp').controller('MainController',['$rootScope','$scope',function($rootScope,$scope){
    $scope.name="";
    console.log($scope.name);
}]);