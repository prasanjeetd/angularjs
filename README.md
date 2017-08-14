## Steps to install and run the app
### Run bower install on comand prompt on the root folder to install all client dependencies
### Run npm install on comand prompt on the root folder to install all server dependencies 
### Run the app/index.html file to start the app
### To run tests enter karma start on the command prompt

## Application Overiew
1. App has two views - User List and User Detail
2. User List view shows default user coming fron git user apis in a table format
3. User List view also has a feature to search a git user by entering his login name in the textbox and then clicking search button
4. On clicking the Image of the User it redirects to its detail page
5. On clicking the name of the User it redirects to its github profile page
6. On User Detail view it shows the list of its gists coming from gists api for that user
7. Gists api does not allow to create gists without OAuth
   see https://developer.github.com/v3/gists/#authentication
8. Gists api allows to create a gist only for anonymous user
   see https://developer.github.com/v3/gists/#create-a-gist
9. Gists api accepts description, filename and file content to create a new gist   
10. User Detail view shows an input box and a textarea for gist Description and File Content field
11. By filling up the fields and clicking the add button one can create a gist  
12. The new gist will be stored against the specific user for that session. It could be verified by refreshing the page.
13. I was trying to update the gist by using https://developer.github.com/v3/gists/#edit-a-gist api but it does not allow without      authentication
 see https://stackoverflow.com/questions/15107328/how-do-i-update-a-gist-via-the-github-api
 https://stackoverflow.com/questions/34477537/github-gist-api-patch-doesnt-work
15. So once a gist has been added for a user then the save button becomes disable to avoid creating multiple gists for the same user
14. Test cases has been written for UserService and UserListCtl

