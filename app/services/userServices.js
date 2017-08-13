angular
    .module("fhApp")
    .factory("userService", ["$http", function ($http) {

        function getUsers(success, failure) {

            var req = {
                method: 'GET',
                url: 'https://api.github.com/users',
                headers: {
                    'Content-Type': "JSON"
                },
            }

            $http(req)
                .then(function (e) {
                    success(e);
                }, function (e) {
                    failure(e);
                });

        }

        function findUser(name, success, failure) {

            var req = {
                method: 'GET',
                url: 'https://api.github.com/users/' + name,
                headers: {
                    'Content-Type': "JSON"
                },
            }

            $http(req)
                .then(function (e) {
                    success(e);
                }, function (e) {
                    failure(e);
                });
        }

        return {
            getUsers: getUsers,
            findUser: findUser
        }

    }]);