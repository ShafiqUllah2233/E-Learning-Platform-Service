# LearnSphere - Student Service

## Overview
The Student Service is a microservice responsible for managing student-related functionalities in the LearnSphere E-Learning Platform. It handles student registration, profile management, and retrieval of student details.

## Features
- **Student Registration**: Allows new students to register and create their profiles.
- **Profile Management**: Enables students to update their profiles, including preferences and personal information.
- **Retrieving Student Details**: Provides endpoints to fetch student information and learning preferences.

## API Endpoints
### Registration
- **POST** `/api/students/register`
  - Request Body:
    ```json
    {
      "name": "Alice Smith",
      "email": "alice@example.com",
      "password": "password123",
      "preferences": ["Programming"]
    }
    ```

### Get Student Details
- **GET** `/api/students/:studentId`
  - Retrieves details of a specific student by their ID.

### Update Student Profile
- **PUT** `/api/students/:studentId`
  - Request Body:
    ```json
    {
      "name": "Alice Smith",
      "preferences": ["Programming", "Web Development"]
    }
    ```

## Setup Instructions
1. **Clone the Repository**: 
   ```bash
   git clone <repository-url>
   cd student-service
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Environment Variables**: 
   Set up your environment variables for MongoDB connection and JWT secret.

4. **Run the Service**:
   ```bash
   npm start
   ```

## Technologies Used
- **Node.js**: JavaScript runtime for building the service.
- **Express**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing student data.
- **Mongoose**: ODM for MongoDB to define schemas and interact with the database.

## License
This project is licensed under the MIT License.