const express = require('express');
const router = express.Router();
const enrollmentController = require('../controllers/enrollmentController');
const auth = require('../middleware/auth');

// Protected routes
router.post('/', auth, enrollmentController.createEnrollment);
router.get('/student/:studentId', auth, enrollmentController.getStudentEnrollments);
router.get('/:id', auth, enrollmentController.getEnrollmentById);

module.exports = router;