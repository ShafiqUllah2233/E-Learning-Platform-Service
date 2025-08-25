# LearnSphere E-Learning Platform

LearnSphere is a microservices-based E-Learning platform that allows students to browse courses, enroll in them, and track their learning progress. Instructors can create and manage their courses. This platform is designed to be scalable, maintainable, and easy to extend.

## Architecture

The LearnSphere platform is composed of three main microservices:

1. **Course Service**: Responsible for managing courses.
   - **APIs**:
     - Add new courses
     - Retrieve course details
     - List all available courses with filtering options
   - **Database**: MongoDB

2. **Student Service**: Handles student-related functionality.
   - **APIs**:
     - Student registration and profile creation
     - Retrieve student details and learning preferences
     - Update student profiles
   - **Database**: MongoDB

3. **Enrollment Service**: Manages course enrollments and payments.
   - **APIs**:
     - Enroll a student in a new course
     - Check the status of an enrollment
     - View a student's enrollment history
   - **Database**: MongoDB

## Communication

- The microservices communicate over HTTP.
- The Enrollment Service interacts with both the Course Service and the Student Service to validate information and process enrollments.

## Security Features

- **Authentication and Authorization**: JWT-based authentication is implemented for secure access.
- **Error Handling**: The system gracefully handles invalid requests and implements a retry mechanism for failed inter-service communication.
- **Input Validation**: All APIs validate incoming data to maintain system integrity.

## Getting Started

To get started with the LearnSphere platform, clone the repository and set up each microservice as follows:

1. Navigate to each service directory (course-service, student-service, enrollment-service).
2. Install the required dependencies using `npm install`.
3. Set up your MongoDB database and update the connection strings in each service's configuration.
4. Start each service using `node src/app.js`.

## API Documentation

Refer to the individual README files in each service directory for detailed API documentation and usage instructions.