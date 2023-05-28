# MovieRoom Website

MovieRoom is a web application that allows users to search for movies, watch trailers, and add their favorite movies to a watchlist. Users can also remove movies from their watchlist. The application is built using Angular, Node.js with Express.js, and MongoDB for the backend. The project management is done using Trello, and the source code is hosted on GitHub.

## Features

- Movie Search: Users can search for movies using keywords or specific titles. The application fetches data from a movie database to provide accurate search results.

- Movie Details: Upon selecting a movie from the search results, users can view detailed information about the movie, including the title, release date, genre, and a brief description.

- Trailer Playback: Users can watch trailers of movies directly on the website. The trailers are fetched from a reliable source and displayed seamlessly within the application.

- Watchlist: Users can add their favorite movies to a personal watchlist. This feature allows users to easily keep track of the movies they are interested in watching. 

- Watchlist Management: Users can remove movies from their watchlist if they no longer wish to keep them. This provides flexibility and control over the movies added to the watchlist.

## Tech Stacks

- Angular: Angular is a widely used frontend framework for building robust and scalable web applications. It provides a structured approach to development and facilitates the creation of dynamic user interfaces.

- Node.js with Express.js: Node.js is a server-side JavaScript runtime that allows running JavaScript code outside of a web browser. Express.js is a web application framework for Node.js that simplifies the development of server-side applications.

- MongoDB: MongoDB is a NoSQL document-oriented database that provides high performance, scalability, and flexibility. It stores data in JSON-like documents and allows for seamless integration with Node.js.

- Trello: Trello is a web-based project management tool that helps teams organize and track their projects. It provides a visual interface to create and manage tasks, assign responsibilities, and track progress.

- GitHub: GitHub is a web-based hosting platform for version control and collaboration. It allows developers to store, manage, and track changes to their codebase. It also provides features like issue tracking and pull requests for effective collaboration.


## Challenges faced 

- Searchbar 

## Installation and Setup

1. Clone the GitHub repository to your local machine:
https://github.com/RikaPamela/Movie-Room.git

2. Navigate to the project directory:
cd Movie-Room

3. Install the required dependencies for the frontend and backend:
   ```
    cd frontend
    npm install
   ```
   ```
    cd ../backend
    npm install
   ```

4. Set up the MongoDB database:

- Install MongoDB and ensure it is running on your machine.
- Create a new database named "movieroom" in MongoDB.

5. Configure the backend:

- In the `backend` directory, create a `.env` file.
- Add the following environment variables to the `.env` file:

  ```
  PORT=3000
  MONGODB_URI=mongodb://localhost:27017/movieroom
  ```

6. Start the application:

- In the `frontend` directory, run the following command:

  ```
  ng serve
  ```

- In the `backend` directory, run the following command:

  ```
  npm start
  ```

7. Open your web browser and visit `http://localhost:4200` to access the MovieRoom website.

## Contributing

If you'd like to contribute to the MovieRoom project, please follow these steps:

1. Fork the repository on GitHub.

2. Create a new branch with a descriptive name for your feature or bug fix.

3. Make the necessary changes and commit them to your branch.

4. Push your branch to your forked repository on GitHub.

5. Open a new pull request from your branch to the main repository's `master` branch.

6. Provide a clear and concise description of your changes in the pull request, including any relevant information or context.

7. Wait for the project maintainers to review your pull request. They may provide feedback or request further changes.

8. Make the necessary updates or address any feedback provided.

9. Once your pull request is approved, it will be merged into the main repository.

Thank you for your contribution to the MovieRoom project! We appreciate your time and effort in making the application better.
.
