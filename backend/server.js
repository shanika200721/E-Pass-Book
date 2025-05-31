require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// Create Express app
const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// Database connection
connectDB();

// Simple test route
app.get('/', (req, res) => {
  res.send('E-Passbook Backend is running');
});

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/accounts', require('./routes/accounts'));

// Set port
const PORT = process.env.PORT || 5000;   // http://localhost:5000/api/auth/register
// Start server
app.listen(PORT, () => 
  console.log(`Server running on port ${PORT}`)
);