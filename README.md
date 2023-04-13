# issuetracker web Application

Develop a Node.js + EJS issue tracker application that enables user authentication, project creation, and issue creation functionalities.

## Features:-

1. Build a neat UI
2. Home Page
- Show a list of projects.
- Give a button to create a new Project (On creating a new project it should appear in the list)
3. Create Project Page
- Name
- Description
- Author
4. Project Detail Page
- When the user clicks on a project (in home page) redirect the user to this page which will show bugs related to this project
- User should be able to perform following actions on this page
- Filter by multiple labels i.e. I should be able to filter by 2 or more labels at the same time
- Filter by author
- Search by title and description
- A button to create an issue

5. Create issue page
- User should be able to create an issue for a project
- Title
- Description
- Labels (multiple labels can be added to a project, IF a project has a label already show it (in dropdown) as the user types the label in)
- Author

## How to setup on local machine:-

1. Setup packages:-  npm init
2. Install dependencies:- npm install --save
3. Install Express:- npm install express
4. Install nodemon:- npm install nodemon
5. Run the application: nodemon index.js

## Structure Screenshots
![image](https://user-images.githubusercontent.com/78945252/231746912-cf3b1ef7-acc3-4681-9602-66d0ce4f67bf.png)
![image](https://user-images.githubusercontent.com/78945252/231747032-32d3ce34-909b-4326-85fa-ecc1787bcde2.png)
![image](https://user-images.githubusercontent.com/78945252/231747112-f85d7400-4f20-4164-99d8-4c256544afab.png)
![image](https://user-images.githubusercontent.com/78945252/231747163-1187442c-d27b-4e4c-8aff-47b8dc54767c.png)
![image](https://user-images.githubusercontent.com/78945252/231747455-b063d0d4-adee-4311-9f91-4b913c0f1088.png)
![image](https://user-images.githubusercontent.com/78945252/231747553-d27abefd-3c0f-48e6-b7a5-f38438ac92c0.png)
![image](https://user-images.githubusercontent.com/78945252/231747699-f3bc3b66-f5de-489a-80b6-f6660f1f8587.png)
