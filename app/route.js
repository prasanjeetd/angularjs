angular
    .module("fhApp")
    .config(["$routeProvider", function ($routeProvider) {

        $routeProvider.
            when('/', {
                templateUrl: 'views/user-list.html',
                controller: 'fhController'
            }).
            when('/detail/:login', {
                templateUrl: 'views/user-detail.html',
                controller: 'userDetail'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);