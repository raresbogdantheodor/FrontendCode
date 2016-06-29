/**
 * Created by user on 6/29/2016.
 */
hrApp.controller('jobViewController', ['$scope', '$http', '$routeParams', '$location', 'JobsService',
    function ($scope, $http, $routeParams, $location, JobsService) {

        /*
         $scope.employee = {
         "id": 100,
         "firstName": "Steven",
         "lastName": "King",
         "email": "SKING",
         "phoneNumber": "515.123.4567",
         "hireDate": "1987-06-17",
         "jobId": 1,
         "salary": 24000.00,
         "commissionPct": null,
         "managerId": null,
         "departmentId": 90
         };
         */

        // Handle a promise
        JobsService.findAllJobs($routeParams.jobId)
            .then(function (res) {
                $scope.job = res.data;
            }, function (err) {
                console.log("Error at employees/findOne: " + err);
            });



        $scope.back = function () {
            $location.url('/employeeList');
        }
    }]);