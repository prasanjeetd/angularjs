var app = angular.module("fhApp");

app.controller("userListCtl", ["$scope", "userService",
    function ($scope, userService) {

        $scope.name = "Git User List";

        $scope.searchText = "";
        $scope.users = [];

        $scope.isNoUserFound = false;

        init();

        function init() {

            userService.getUsers(success, failure);
        }

        function success(e) {
            console.log("success:", e);

            $scope.users = e.data;

            $scope.isNoUserFound = false;

        };

        function failure(e) {
            console.log("failure:", e);
            $scope.users = [];
            $scope.isNoUserFound = true;
        }

        $scope.findUser = function () {

            if ($scope.searchText == "")
                return userService.getUsers(success, failure);

            userService.findUser($scope.searchText, function (e) {
                // console.log("success:", e);

                $scope.isNoUserFound = false;
                $scope.users = [e.data];
            }, failure);
        }

    }]);