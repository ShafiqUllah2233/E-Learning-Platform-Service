const Student = require('../models/Student');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
    try {
        const { name, email, password, preferences } = req.body;
        
        if (!name || !email || !password) {
            return res.status(400).json({ 
                message: 'Missing required fields',
                details: {
                    name: name ? undefined : 'Name is required',
                    email: email ? undefined : 'Email is required',
                    password: password ? undefined : 'Password is required'
                }
            });
        }

        // Check if student already exists
        let student = await Student.findOne({ email });
        if (student) {
            return res.status(400).json({ message: 'Student already exists with this email' });
        }

        // Create new student
        student = new Student({
            name,
            email,
            password,
            preferences: preferences || []
        });

        await student.save();

        // Generate token
        const token = jwt.sign({ id: student._id }, process.env.JWT_SECRET);
        
        res.status(201).json({ 
            message: 'Student registered successfully',
            token,
            student: {
                id: student._id,
                name: student.name,
                email: student.email
            }
        });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ 
            message: 'Error registering student', 
            error: error.message 
        });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const student = await Student.findOne({ email });
        if (!student) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, student.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: student._id }, process.env.JWT_SECRET);
        res.json({ token, student: { id: student._id, name: student.name, email } });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error: error.message });
    }
};

exports.getProfile = async (req, res) => {
    try {
        const student = await Student.findById(req.user.id).select('-password');
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.json(student);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching profile', error: error.message });
    }
};

exports.updateProfile = async (req, res) => {
    try {
        const updates = req.body;
        delete updates.password; // Prevent password update through this route
        
        const student = await Student.findByIdAndUpdate(
            req.user.id,
            updates,
            { new: true }
        ).select('-password');
        
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.json(student);
    } catch (error) {
        res.status(500).json({ message: 'Error updating profile', error: error.message });
    }
};