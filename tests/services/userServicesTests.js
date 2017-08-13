"use strict";

describe('userService', function () {

    beforeEach(angular.mock.module('fhApp'));

    var userService, httpBackend;
    beforeEach(inject(function (_userService_, $httpBackend) {
        userService = _userService_;
        httpBackend = $httpBackend;
    }));

    // A simple test to verify the Users factory exists
    it('should exist', function () {
        expect(userService).toBeDefined();
    });

    it("should return result from getUsers()", function () {

        httpBackend.whenGET("https://api.github.com/users").respond([
            {
                "login": "mojombo",
                "id": 1,
                "avatar_url": "https://avatars0.githubusercontent.com/u/1?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/mojombo",
                "html_url": "https://github.com/mojombo",
                "followers_url": "https://api.github.com/users/mojombo/followers",
                "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
                "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
                "organizations_url": "https://api.github.com/users/mojombo/orgs",
                "repos_url": "https://api.github.com/users/mojombo/repos",
                "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
                "received_events_url": "https://api.github.com/users/mojombo/received_events",
                "type": "User",
                "site_admin": false
            }]);

        userService.getUsers(function (result) {
            expect(result).toBeDefined();
            expect(result.data.length).toEqual(1);
        });

        httpBackend.flush();
    });

    it("should return result from findUser()", function () {

        httpBackend.whenGET("https://api.github.com/users/prasanjeetd").respond({
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
        });

        userService.findUser("prasanjeetd",function (result) {
           
            expect(result.data.login).toEqual("prasanjeetd");
        });

        httpBackend.flush();
    });


});