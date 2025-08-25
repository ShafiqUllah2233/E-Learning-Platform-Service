const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const auth = require('../middleware/auth');

// Public routes
router.post('/register', studentController.register);
router.post('/login', studentController.login);

// Protected routes
router.get('/profile', auth, studentController.getProfile);
router.put('/profile', auth, studentController.updateProfile);

module.exports = router;