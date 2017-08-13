angular
    .module("fhApp")
    .config(["$routeProvider", function ($routeProvider) {

        $routeProvider.
            when('/', {
                templateUrl: 'views/user-list.html',
                controller: 'userListCtl'
            }).
            when('/detail/:login', {
                templateUrl: 'views/user-detail.html',
                controller: 'userDetailCtl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);