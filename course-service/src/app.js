require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const courseRoutes = require('./routes/courseRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/courses', courseRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Course Service running on port ${PORT}`);
});