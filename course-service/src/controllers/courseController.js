const Course = require('../models/Course');

// Add a new course
exports.addCourse = async (req, res) => {
    try {
        const { title, description, instructor, category, price } = req.body;
        const newCourse = new Course({ title, description, instructor, category, price });
        await newCourse.save();
        res.status(201).json(newCourse);
    } catch (error) {
        res.status(500).json({ message: 'Error adding course', error });
    }
};

// Get course details by ID
exports.getCourseById = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) return res.status(404).json({ message: 'Course not found' });
        res.json(course);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching course details', error });
    }
};

// List all courses with optional filtering
exports.listCourses = async (req, res) => {
    try {
        const { category, difficulty } = req.query;
        const query = {};
        if (category) query.category = category;
        if (difficulty) query.difficulty = difficulty; // Assuming difficulty is a field in the Course model

        const courses = await Course.find(query);
        res.json(courses);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching courses', error });
    }
};