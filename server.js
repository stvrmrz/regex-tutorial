const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
require('dotenv').config();  // Load environment variables from .env file

// Initialize the Express app
const app = express();

// Define the server port
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Use the API routes
app.use('/api', routes);

// Get the connection string from environment variables
const connectionString = process.env.MONGODB_URI;

// Log the connection string
console.log('MongoDB Connection String:', connectionString);

mongoose.connect(connectionString)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Error connecting to MongoDB Atlas:', err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
