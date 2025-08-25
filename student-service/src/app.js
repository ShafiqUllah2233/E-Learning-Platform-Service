require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/students', studentRoutes);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Student Service running on port ${PORT}`);
});