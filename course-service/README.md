# LearnSphere E-Learning Platform - Course Service

## Overview
The Course Service is a microservice responsible for managing courses in the LearnSphere E-Learning Platform. It provides RESTful APIs for adding, retrieving, and listing courses, allowing instructors and admins to manage course offerings effectively.

## Features
- **Add New Courses**: Instructors and admins can create new courses with details such as title, description, instructor, category, and price.
- **Retrieve Course Details**: Users can fetch detailed information about specific courses.
- **List Available Courses**: The service supports listing all available courses with filtering options based on category or difficulty level.

## Technologies Used
- **Node.js**: JavaScript runtime for building the server.
- **Express**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing course data.
- **Mongoose**: ODM for MongoDB to define schemas and interact with the database.

## API Endpoints
- **POST /api/courses**: Create a new course.
- **GET /api/courses/:id**: Retrieve details of a specific course.
- **GET /api/courses**: List all available courses with optional filtering.

## Setup Instructions
1. Clone the repository.
2. Navigate to the `course-service` directory.
3. Install dependencies:
   ```
   npm install
   ```
4. Set up your MongoDB database and update the connection string in `src/app.js`.
5. Start the server:
   ```
   npm start
   ```

## Authentication
This service implements JWT-based authentication to secure access to certain routes. Ensure that you have the necessary tokens when making requests to protected endpoints.

## Error Handling
The service includes error handling for invalid requests and gracefully manages errors during inter-service communication.

## Contribution
For contributions, please fork the repository and submit a pull request with your changes. Ensure that your code adheres to the project's coding standards and includes appropriate tests.

## License
This project is licensed under the MIT License.