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

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
