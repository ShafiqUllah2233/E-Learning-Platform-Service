require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const enrollmentRoutes = require('./routes/enrollmentRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/enrollments', enrollmentRoutes);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
    console.log(`Enrollment Service running on port ${PORT}`);
});