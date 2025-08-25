# Enrollment Service for LearnSphere

## Overview

The Enrollment Service is a microservice responsible for managing course enrollments and payments within the LearnSphere E-Learning Platform. It handles the enrollment of students in courses, checks enrollment status, and maintains enrollment history.

## Features

- Enroll students in courses
- Check enrollment status (active, completed, pending payment)
- View student's enrollment history
- Integrates with Course Service to verify course availability
- Integrates with Student Service to validate student information
- Dummy payment gateway integration for simulating payment processing

## API Endpoints

### Enroll a Student in a Course

- **POST** `/api/enrollments`
- **Request Body**:
  ```json
  {
    "studentId": "STUDENT_ID",
    "courseId": "COURSE_ID"
  }
  ```

### Check Enrollment Status

- **GET** `/api/enrollments/:enrollmentId`

### View Enrollment History

- **GET** `/api/enrollments/student/:studentId`

## Setup Instructions

1. Clone the repository.
2. Navigate to the `enrollment-service` directory.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the service:
   ```bash
   npm start
   ```

## Dependencies

- Express
- Mongoose
- JSON Web Token (JWT)
- Axios (for inter-service communication)

## Security

This service implements JWT-based authentication to secure access to its endpoints. Ensure that you have the necessary tokens when making requests.

## Error Handling

The service gracefully handles invalid requests and implements a retry mechanism for failed inter-service communication.