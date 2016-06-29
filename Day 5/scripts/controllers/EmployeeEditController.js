hrApp.controller('EmployeeEditController', ['$scope', '$http', '$routeParams', '$location', 'CommonResourcesFactoryBackup', 'EmployeeService' , ' DepartamentService' , 'JobsService',
    function ($scope, $http, $routeParams, $location,CommonResourcesFactoryBackup,EmployeeService,DepartamentService,JobsService) {
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR5

        EmployeeService.findAll()
            .then(function (res) {
                $scope.managers = res.data;
            }, function (err) {
                console.log("Error at employees/findAll: " + err);
            });
        DepartamentService.findAllDep()
            .then(function (res) {
                $scope.departments = res.data;
            }, function (err) {
                console.log("Error at employees/findAllDep: " + err);
            });

        JobsService.findAllJobs()
            .then(function (res) {
                $scope.jobs = res.data;
            }, function (err) {
                console.log("Error at employees/findAllJobs: " + err);
            });

        EmployeeService.findById($routeParams.employeeId)
            .then(function (res) {
                $scope.employee = res.data;
            }, function (err) {
                console.log("Error at employees/findOne: " + err);
            });
        /**
         * Reset form
         */
        $scope.reset = function () {
            $scope.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: CommonResourcesFactoryBackup.editEmployeeUrl, method: 'PUT', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                })};
            $scope.delete = function (deleteEmployee) {
                $http({url: CommonResourcesFactoryBackup.deleteEmployeeUrl, method: 'DELETE', data: deleteEmployee})
                    .success(function (data) {
                       
                    });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern =  /^[0]\.\d{1}(\d)?$/;

    }]);