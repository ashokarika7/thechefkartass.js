# Title

    Insta Backend API

## Objective

    The main goal of this project is to build a backend API for managing posts and users for a social media application. The API includes functionality for creating, updating, deleting, and retrieving posts and user-related data using Node.js, Express, and SQLite.

## Tech Stack

    Languages: JavaScript (Node.js)
    Framework: Express.js
    Database: SQLite
    Libraries/Tools: sqlite3, SQLite, Path, Express JSON middleware

## Completion Instructions

### Functionality

#### Must Have

    1. Implement CRUD operations for posts:
        -> Fetch all posts.
        -> Create a new post.
        -> Update an existing post.
        -> Delete a post by ID.

    2. Fetch user data:
        -> Fetch all users.
        -> Fetch all posts by a specific user ID.

### Guidelines to develop a project

#### Must Have

    1. Follow RESTful API design principles.
    2. Use Express.js middleware for JSON parsing and request handling.
    3. Create and initialize a SQLite database (insta.db) with appropriate tables (posts, users).
    4. Handle exceptions to ensure the server does not crash due to runtime errors.


### Submission Instructions

#### Must Have

    1. Submit a zip file containing:
     -> Source code.
     ->  SQLite database (insta.db).
     -> README.md file with detailed instructions.
    2. Ensure all necessary dependencies are listed in package.json.


## Resources

### APIs

    Below are the API endpoints provided by this project:

     1. Fetch All Posts

        -> Endpoint: GET /posts/
        -> Description: Fetch all posts from the database.

     2. Create a Post

        -> Endpoint: POST /posts/
        -> Description: Create a new post with details     such as title, description, user ID, and images.

     3. Update a Post

        -> Endpoint: PUT /posts/
        -> Description: Update an existing post's title, description, and images using the user ID.

     4. Delete a Post

        -> Endpoint: DELETE /posts/:id
        -> Description: Delete a specific post by its ID.

     5. Fetch All Users

        -> Endpoint: GET /users/
        -> Description: Retrieve all user data.

     6. Fetch Posts by User

        -> Endpoint: GET /users/:id
        -> Description: Fetch all posts created by a specific user.

### Third-party packages

-> sqlite3: Used for interacting with the SQLite database.
-> express: Framework for building RESTful APIs.
-> path: Built-in Node.js module for handling file paths.
