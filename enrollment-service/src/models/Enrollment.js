const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    status: {
        type: String,
        enum: ['active', 'completed', 'cancelled'],
        default: 'active'
    },
    enrollmentDate: {
        type: Date,
        default: Date.now
    },
    completionDate: Date
});

module.exports = mongoose.model('Enrollment', enrollmentSchema);