var app = angular.module("fhApp");

app.controller("userDetailCtl", ['$scope', "$routeParams", "gistService",
    function ($scope, $routeParams, gistService) {

        $scope.userId = $routeParams.login;

        // console.log("User Detail", $scope.userId);

        init($scope.userId);

        function init(userId) {

            gistService.getUserGists(userId, success, failure);

            var gistId = sessionStorage.getItem(userId);

            $scope.isGistPresent = false;

            if (gistId) {
                showUserGist(gistId);
            }
        }

        function showUserGist(gistId) {

            $scope.isGistPresent = true;

            gistService.getGist(gistId, function (response) {

                var data = response.data;
                $scope.description = data.description;
                var files = data.files;
                var url = files[Object.keys(files)[0]].raw_url;

                gistService.getContent(url, function (res) {
                    $scope.content = res.data;
                }, failure);


            }, failure);
        }

        function success(response) {
            // console.log("success:", response);

            if (response && response.data && response.data.length > 0) {

                $scope.userGists = response.data;

                var data = $scope.userGists[0].files;
                console.log("data:", data, data[Object.keys(data)[0]].filename);
            }
        }

        function failure(response) {
            console.log("failure:", response);
        }

        $scope.getFileName = function (data) {

            var isEmpty = angular.equals(data, {}); // true

            if (!isEmpty) {
                return data[Object.keys(data)[0]].filename;
            }
            else {
                return "";
            }

        }

        $scope.getFileUrl = function (data) {

            var isEmpty = angular.equals(data, {}); // true

            if (!isEmpty) {
                return data[Object.keys(data)[0]].raw_url;
            }
            else {
                return "";
            }
        }

        function prepareSaveData() {

            var data = {
                description: $scope.description,
                public: true,
                files: {
                    "filname.txt": {
                        content: $scope.content
                    }
                }
            };

            return data;
        }

        $scope.save = function () {

            var gistId = sessionStorage.getItem($scope.userId);

            var data = prepareSaveData();

            gistService.saveGist(gistId, data, function (response) {
                // console.log("response:", response);

                if (response.statusText == "Created") {
                    $scope.isGistPresent = true;
                    sessionStorage.setItem($scope.userId, response.data.id);
                }

            }, failure);


        }
    }]);