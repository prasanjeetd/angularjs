angular
    .module("fhApp")
    .factory("gistService", ["$http", function ($http) {

        function getUserGists(userId, success, failure) {
            var req = {
                method: 'GET',
                url: 'https://api.github.com/users/' + userId + '/gists',
                headers: {
                    'Content-Type': "JSON"
                }
            }

            $http(req)
                .then(function (e) {
                    success(e);
                }, function (e) {
                    failure(e);
                });
        }

        function saveGist(gistId,data, success, failure) {
            var req = {
                method: 'POST',
                url: 'https://api.github.com/gists',
                headers: {
                    'Content-Type': "JSON"
                },
                data: data
            }

            if(gistId){
                req.method="PATCH";
                req.url =req.url + "/" + gistId;
            }

            $http(req)
                .then(function (e) {
                    success(e);
                }, function (e) {
                    failure(e);
                });
        }

        function getGist(id, success, failure) {
            var req = {
                method: 'GET',
                url: 'https://api.github.com/gists/' +id,
                headers: {
                    'Content-Type': "JSON"
                }
            }

            $http(req)
                .then(function (e) {
                    success(e);
                }, function (e) {
                    failure(e);
                });
        }

        function getContent(url,success,failure){

            $http.get(url).then(success, failure);

        }

        return {
            getUserGists: getUserGists,
            saveGist: saveGist,
            getGist:getGist,
            getContent:getContent
        }



    }]);

