"use strict";

describe("userListCtl", function () {

    beforeEach(angular.mock.module('fhApp'));

    describe("findUser", function () {

        var $controller;
        var userService = {
            findUser: function () { },
            getUsers: function () { }
        };

        beforeEach(inject(function (_$controller_) {

            $controller = _$controller_;

            spyOn(userService, 'findUser').and.callFake(function (username, success, failure) {
                var data = {
                    "login": "prasanjeetd",
                    "id": 8407088,
                    "avatar_url": "https://avatars1.githubusercontent.com/u/8407088?v=4",
                    "gravatar_id": "",
                    "url": "https://api.github.com/users/prasanjeetd",
                    "html_url": "https://github.com/prasanjeetd",
                    "followers_url": "https://api.github.com/users/prasanjeetd/followers",
                    "following_url": "https://api.github.com/users/prasanjeetd/following{/other_user}",
                    "gists_url": "https://api.github.com/users/prasanjeetd/gists{/gist_id}",
                    "starred_url": "https://api.github.com/users/prasanjeetd/starred{/owner}{/repo}",
                    "subscriptions_url": "https://api.github.com/users/prasanjeetd/subscriptions",
                    "organizations_url": "https://api.github.com/users/prasanjeetd/orgs",
                    "repos_url": "https://api.github.com/users/prasanjeetd/repos",
                    "events_url": "https://api.github.com/users/prasanjeetd/events{/privacy}",
                    "received_events_url": "https://api.github.com/users/prasanjeetd/received_events",
                    "type": "User",
                    "site_admin": false,
                    "name": "Prasnajeet Debnath",
                    "company": null,
                    "blog": "https://www.linkedin.com/in/prasanjeet-debnath",
                    "location": "Pune, India",
                    "email": null,
                    "hireable": true,
                    "bio": "I am having 6 years of experience in Web Technologies like Javascript, .Net and Database\r\n\r\n",
                    "public_repos": 16,
                    "public_gists": 1,
                    "followers": 0,
                    "following": 0,
                    "created_at": "2014-08-10T07:53:57Z",
                    "updated_at": "2017-07-28T15:01:34Z"
                };
                success(data);
            });

        }))

        it('should exist', function () {
            expect($controller).toBeDefined();
        });

        it('should find user name', function () {

            var $scope = {};
            var userListCtl = $controller('userListCtl', { $scope: $scope, userService: userService });
            $scope.searchText = 'prasanjeetd';

            $scope.findUser();
            expect($scope.users).toBeDefined();
            expect($scope.users.length).toEqual(1);
        });

    });

});