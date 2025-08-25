const Enrollment = require('../models/Enrollment');
const axios = require('axios');

// Enroll a student in a course
exports.createEnrollment = async (req, res) => {
    try {
        const { studentId, courseId } = req.body;

        // Verify course exists
        const courseResponse = await axios.get(`${process.env.COURSE_SERVICE_URL}/api/courses/${courseId}`);
        
        // Create enrollment
        const enrollment = new Enrollment({
            studentId,
            courseId,
            status: 'active',
            enrollmentDate: new Date()
        });

        await enrollment.save();
        res.status(201).json(enrollment);
    } catch (error) {
        res.status(500).json({ message: 'Error creating enrollment', error: error.message });
    }
};

// Get enrollment history for a student
exports.getStudentEnrollments = async (req, res) => {
    try {
        const enrollments = await Enrollment.find({ studentId: req.params.studentId });
        res.json(enrollments);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching enrollments', error: error.message });
    }
};

exports.getEnrollmentById = async (req, res) => {
    try {
        const enrollment = await Enrollment.findById(req.params.id);
        if (!enrollment) {
            return res.status(404).json({ message: 'Enrollment not found' });
        }
        res.json(enrollment);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching enrollment', error: error.message });
    }
};